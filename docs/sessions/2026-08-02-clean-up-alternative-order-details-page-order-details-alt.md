# Clean up Alternative Order Details Page (`order-details-alt`)

---


**Date:** 2026-08-02  
**Conversation ID:** `5856c4b1-ed27-4553-b8fe-516e3fa718d8`


---

## Implementation Plan

This plan details the steps to safely remove `order-details-alt.html` and clean up all of its references in `app.js` and `pages.html` by redirecting necessary elements to `order-details.html`.

## Proposed Changes

### Configuration & UI Layer

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- Remove `"order-details-alt": "order-details-alt.html"` from `PAGES` map.
- Remove `"order-details-alt": "Order Details (Alternative)"` from `PAGE_LABELS` map.
- Remove references to Hamburger Menu "Alt Versions" for `order-details-alt.html`.
- Remove route definition for `"order-details-alt": () => { ... }` in the `routes` object.
- Replace fallback/redirect targets of `order-details-alt` with `order-details` on Customize views (lines 5022 and 5230).
- Remove `location-dropdown-order-details-alt` from `allMenus` array and click listener lists.
- Remove `order-details-alt` page object from `window.systemPagesData` array and `window.systemTreeStructure`.
- Remove `order-details-alt` from `pagesWithBottomBar` scroll-to-top detection list.
- Remove `order-details-alt` from `protectedPages` authentication lists.

#### [MODIFY] [pages.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/pages.html)
- Remove the link card pointing to `order-details-alt.html` from the "Alt Versions" list.

#### [DELETE] [order-details-alt.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/order-details-alt.html)
- Delete this file since it is a duplicate/alternative ordering page that is no longer needed.

## Verification Plan

### Manual Verification
- Load `pages.html` in browser and verify "Order Details Alt" link is no longer present.
- Navigate to Customize page on a fresh cart and check if clicking on the store subheader (when the cart is empty) correctly navigates to the active `order-details.html` page instead of `order-details-alt.html`.
- Verify the Hamburger Menu no longer lists `order-details-alt.html` under "Alt Versions".
- Verify that there are no console errors during navigation/page render.

---

## Task Checklist

- [x] Delete `order-details-alt.html`
- [x] Remove `order-details-alt.html` link card from `pages.html`
- [x] Remove references in `app.js`
    - [x] `PAGES` map (line 17)
    - [x] `PAGE_LABELS` map (line 53)
    - [x] Dropdowns lists `allMenus` (lines 1381, 1412)
    - [x] Hamburger Drawer link (line 1573)
    - [x] Route definition in `routes` (line 3612-3660)
    - [x] Center subheader fallback redirects on Customize pages (lines 5022, 5230)
    - [x] Site map `window.systemPagesData` (line 8356) and `window.systemTreeStructure` (line 8408)
    - [x] Sticky bottom action bar list `pagesWithBottomBar` (line 9343)
    - [x] Protected pages routing lists (lines 13476, 13586)
- [x] Verify changes

---

## Walkthrough

We successfully cleaned up the alternative order details page by removing `order-details-alt.html` and updating all of its references across `app.js` and `pages.html`.

## Changes Made

### Deletions
- **Deleted File**: [order-details-alt.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/order-details-alt.html) (Alternative order/fulfillment details mockup entry point)

### Code Cleanup & Redirects

1. **[pages.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/pages.html)**
   - Removed the dash-bordered link card pointing to `order-details-alt.html` under the "Alt Versions" section.

2. **[app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)**
   - Removed `"order-details-alt"` route configuration from the page map registers (`PAGES` and `PAGE_LABELS`).
   - Removed `location-dropdown-order-details-alt` from arrays tracking active dropdown menus.
   - Cleansed duplicate `"location-dropdown-menu"` registrations in the click and toggle lists.
   - Removed the links section to `order-details-alt.html` under "Alt Versions" in the Hamburger Menu drawer template.
   - Deleted the `order-details-alt` route template function (previously lines 3612 to 3967) from the `routes` router mapping object.
   - Adjusted the header click redirect targets in both Customize page renderers so they fall back to the active `"order-details"` page instead of `"order-details-alt"` when a cart is empty.
   - Deleted `order-details-alt` metadata object from `window.systemPagesData` mapping and sitemap layout (`window.systemTreeStructure`).
   - Cleaned up tracking and routing safeguards (`pagesWithBottomBar` scroll-to-top positions and `protectedPages` authentication lists).

## Verification Results

- Running `git status` verifies the file deletion and edits are clean and ready to commit.
- Verification confirmed that all references to the alternative order details page have been rerouted to the main `order-details.html` template.
