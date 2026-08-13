# Security & Cache Protection Plan

---


**Date:** 2026-06-10  
**Conversation ID:** `df2dd6e4-f9b6-4ce1-8518-b63e5fb2fc7c`


---

## Implementation Plan

You bring up a very valid point regarding shared computers. Even though the route guard prevents the *UI* from rendering, sensitive user data could theoretically still live in the browser's memory, local storage, or HTTP cache unless we explicitly wipe it out during the logout process.

Here is the plan to ensure all personal data is fully destroyed upon logout:

## Proposed Changes

### Secure API Fetching (api.js)

When the app fetches user profiles or order histories, the browser can sometimes cache those JSON responses. If someone opens the browser developer tools, they might find that cached data.
- **Change**: Add `cache: 'no-store'` to the `fetch` configuration in `api.js`. This strictly tells the browser *never* to cache any API requests, guaranteeing that data is only retrieved from the server and never saved to the local disk cache.

### Comprehensive Logout Wiping (app.js)

Currently, the `signOutUser` function clears the user's name, email, and shopping cart. However, it leaves some data behind. We will update it to completely purge all traces of the session:
- **Change**: explicitly clear `mockupState.apiOrders` (Order History) and `mockupState.lastOrder`.
- **Change**: Scan the browser's `localStorage` and forcefully delete any saved profile addresses (e.g., `farebites_profile_address_...`).
- **Change**: Overwrite the session storage with this completely sanitized state so that absolutely no PII (Personally Identifiable Information) remains.

## User Review Required

> [!IMPORTANT]
> Because we are wiping the user's specific address data from local storage on logout, if they log back in later, they will need to re-enter their address unless the actual backend API provides it. (Right now, the frontend supplements the API by saving the address locally). Is this acceptable for the sake of security?

---

## Task Checklist

- `[x]` Update `api.js` `request()` method to include `cache: 'no-store'` in the `fetch` config.
- `[x]` Update `app.js` `signOutUser()` to explicitly clear `mockupState.apiOrders`, `mockupState.lastOrder`, and `mockupState.selectedItemDetail`.
- `[x]` Update `app.js` `signOutUser()` to clear all `farebites_profile_address_*` entries from `localStorage`.
- `[x]` Verify changes using browser subagent or syntax check.

---

## Walkthrough

As requested, I've hardened the logout workflow to ensure absolutely no sensitive user data remains on the computer once a user signs out. This applies to both browser memory and HTTP caching mechanisms.

## What Was Changed

1. **Disabled API Response Caching (`api.js`)**
   I've configured the internal API request handler to strictly append `cache: 'no-store'` to all `fetch` calls going through the main `ApiService`. This forcefully instructs the browser not to cache any sensitive JSON payloads (like profile data, order history, or addresses) on the disk. *Note: Since the menu endpoints are public and use a separate fetch loop, they are completely unaffected and will continue to load instantly from cache!*

2. **Aggressive State Clearing (`app.js`)**
   I've updated the `signOutUser()` function to go far beyond just clearing the username and email. When a user logs out, the system now forcefully empties:
   - `mockupState.apiOrders` (Order History)
   - `mockupState.lastOrder` (Recent order details)
   - `mockupState.selectedItemDetail` 

3. **Purged LocalStorage Address Data (`app.js`)**
   The application historically saves user delivery addresses in the browser's `localStorage` to prepopulate checkout flows. The logout function now dynamically searches for any local storage keys matching the `farebites_profile_address_*` pattern and completely permanently deletes them.

## Verification

- ✅ Confirmed `api.js` now uses `cache: 'no-store'` for authenticated API data requests.
- ✅ Verified `signOutUser()` clears out all sensitive order memory fields.
- ✅ Verified `signOutUser()` systematically scans and destroys all `localStorage` saved profile addresses before persisting the empty state back to `sessionStorage`.
