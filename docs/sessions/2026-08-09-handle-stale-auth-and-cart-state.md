# Handle Stale Authentication and Cart State on Startup

**Date:** 2026-08-09  
**Conversation ID:** `6a7b3bd8-77a4-436d-8a5c-bbe8403cce5f`

## Summary

When landing on a page (like home or menu) via a bookmark or returning session where the authentication token has expired or is missing:
1. The UI incorrectly displays the previous user's name (e.g. "Hi Steven Cisco!") in the header and menus because the state loader (`loadMockupState()`) parses the cached state from `localStorage` where `isLoggedIn` is still `true`.
2. The UI incorrectly displays cart items from the previous session.
3. However, if the user attempts to navigate to a protected page (like Account or Profile), the navigation guard redirects them to the Sign-In page because the API token is missing.

This session fixes the initialization logic on page load to automatically clear the logged-in mockup state and load the guest cart if the token is missing or expired, ensuring guest and logged-out users receive a clean experience.

## Implementation Plan

### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

1. **Fix `loadCartFromStorage()` (approx. lines 868–891):**
   Update the function so that if `saved` is falsy (i.e. no cart exists in `localStorage` for the current user/guest key), it clears the `mockupState.cart` to `[]` and resets cart totals, instead of leaving the stale items in `mockupState.cart`.

2. **Add Logout Fallback in Startup Auth Validation (approx. lines 13549–13651):**
   In the `DOMContentLoaded` event listener, if `token` is falsy:
   - Reset `mockupState.isLoggedIn` to `false`.
   - Reset `mockupState.userName` to `"Guest"`.
   - Reset `mockupState.userEmail` to `""`.
   - Reset `mockupState.userProfile` to `{}`.
   - Clear orders and other sensitive state.
   - Call `loadCartFromStorage()` to load the guest cart.
   - Call `persistAllState()`.

## Verification Plan

### Manual Verification
1. Log in to the app to populate a user session and add items to the cart.
2. Manually clear the authentication token (`farebites_access_token`) from `sessionStorage`/`localStorage` or use a new session where the token is absent.
3. Refresh the page to simulate loading from a bookmark.
4. Verify that:
   - The header displays "Hi User!" or guest icons instead of "Hi Steven Cisco!".
   - The cart count and items are either empty or reflect the guest cart.
   - The user is prompted to sign in if they attempt to navigate to their account.

---

## Task Checklist

- [x] Modify `loadCartFromStorage()` to reset the cart if no saved cart exists
- [x] Add the `else` block to startup token validation to clear stale auth state
- [x] Verify functionality on startup with and without a token

---

## Walkthrough

### Changes Made

**[app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)** — Modified the following sections:

1. **In `loadCartFromStorage()`:**
   Updated fallback logic so when no cart data matches the key, the cart is explicitly cleared:
   ```diff
   -  } else if (mockupState.cart.length === 0) {
   +  } else {
   +    mockupState.cart = [];
   +    mockupState.cartItemCount = 0;
        mockupState.bagQuantity = 0;
        mockupState.noBagsSelected = false;
      }
   ```

2. **In `DOMContentLoaded` listener:**
   Added an `else` block for missing token states to reset stale identity and cart caches back to anonymized defaults:
   ```javascript
     } else {
       // If the token is missing/expired, ensure the mockup state reflects that the user is not logged in.
       // This prevents showing previous user's name ("Hi Steven Cisco") or their cart items when the session is invalid/guest.
       if (mockupState.isLoggedIn || mockupState.userName !== "Guest") {
         mockupState.isLoggedIn = false;
         mockupState.userName = "Guest";
         mockupState.userEmail = "";
         mockupState.userProfile = {};
         mockupState.apiOrders = [];
         mockupState.userOrders = [];
         mockupState.lastOrder = null;
         mockupState.cart = [];
         mockupState.cartItemCount = 0;
         mockupState.bagQuantity = 0;
         mockupState.noBagsSelected = false;

         loadCartFromStorage(); // This will load "farebites_guest_cart" or reset to empty since isLoggedIn is false
         persistAllState();
       } else {
         // Even if already not logged in, make sure guest cart is loaded
         loadCartFromStorage();
       }
     }
   ```

### Verification Results

Verified on `http://localhost:8000/menu.html` via the browser subagent:
- Header welcome elements show the guest action `"SIGN IN / JOIN"`.
- Cart badges are cleared and local storage initialized `"farebites_guest_cart"` correctly.

![Header Guest State](/Users/michael-riley/.gemini/antigravity-ide/brain/6a7b3bd8-77a4-436d-8a5c-bbe8403cce5f/header_guest_state_1786320606970.png)
