# Implement Persistent Cart Memory

---


**Date:** 2026-06-02  
**Conversation ID:** `5ba679bd-b31b-43c0-b21c-564e529a3aac`


---

## Implementation Plan

This plan outlines the industry standard for "cart memory" in online ordering systems and the proposed solution for FareBites.

## Industry Standards & Best Practices
1. **Persistent Carts**: Users expect their cart to remain intact until they explicitly empty it or check out. If you add 5 items on Monday, log out, and log back in on Friday, those items should still be there. This is the industry standard.
2. **Account Syncing**: The cart is securely tied to the user's account. This allows a user to start an order on their phone and finish it on their computer.
3. **Logout Behavior**: When a user logs out (or times out), the local cart on the screen is **cleared** for privacy. When they log back in, their saved cart is restored perfectly.

*(Note: Since FareBites requires users to be logged in to build a cart, we do not need to worry about "guest carts" or merging carts!)*

## Current State in FareBites
Currently, the cart is stored in `sessionStorage` alongside the rest of the UI state. This means:
- If a user closes the browser tab, the cart is completely lost.
- If a user explicitly clicks "Sign Out", the cart actually *remains* on the screen.

## Proposed Solution for FareBites

We will upgrade the cart system to use **Persistent Storage** (`localStorage`) tied to the user's email address to simulate a backend cart database.

### 1. Separate Cart Storage
- #### [MODIFY] `app.js`
  - Instead of relying on `sessionStorage` for the cart, we will save the cart to `localStorage` under a unique key based on the logged-in user's email: `farebites_cart_[user_email]`.

### 2. Update Login/Logout Flow
- #### [MODIFY] `app.js` -> `handleLogin()`
  - Upon successful login, check if there is a saved cart for this specific user in `localStorage`. 
  - Load this cart into the active `mockupState.cart` so their previous items appear immediately.
- #### [MODIFY] `app.js` -> `signOutUser()`
  - When the user logs out, clear the active cart from the screen (ensure it is saved first).
  - This guarantees that if someone else uses the device, they start with a fresh, empty screen. 

### 3. Update Cart Modifiers
- #### [MODIFY] `app.js` -> Cart Functions (`addToCart`, `updateCartQty`, etc.)
  - Every time the cart changes, automatically save the updated cart to `localStorage` under the user's profile key.

## Verification Plan
1. Log in and add items to the cart. 
2. Refresh the page and close the tab to verify the items remain.
3. Log out. Verify the cart empties from the screen.
4. Log back in. Verify the items are restored exactly as you left them.

---

## Task Checklist

- `[/]` Modify `app.js` to manage persistent carts.
  - Implement `syncCartToStorage()` to save `mockupState.cart` to `localStorage` keyed by `mockupState.userProfile.email`.
  - Implement `loadCartFromStorage()` to retrieve the cart when the user logs in.
  - Update `persistAllState()` to call `syncCartToStorage()` when the user is logged in.
- `[x]` Update `handleLogin()` to load the cart from storage after fetching the user profile.
- `[x]` Update `signOutUser()` to ensure the saved cart isn't overwritten when clearing the active cart.
- `[x]` Update app initialization (`DOMContentLoaded`) to restore the cart if the user is already logged in.

---

## Walkthrough

Here is a summary of the new features added to the application to handle session security and cart persistence.

## Automatic Session Logout
A robust, industry-standard inactivity timeout has been added to protect user sessions.
- **Inactivity Timer**: The application silently monitors mouse movements, clicks, scrolling, and keypresses.
- **Warning Modal**: If a user is inactive for exactly **13 minutes**, a modal will appear saying "Are you still there?".
- **Auto-Logout**: If the user does not respond within the final **2 minutes**, they are automatically logged out, their screen is cleared, and they are redirected back to the login screen for their security.

## "Remember Me" Login Option
Users now have complete control over how their login is stored.
- **Checked (Persistent)**: The authentication token is stored persistently. If the user closes their browser and returns days later, they remain securely logged in.
- **Unchecked (Temporary)**: The token is strictly stored in `sessionStorage`. Closing the browser will completely wipe the session.
- **Auto-Fill Email**: If a user clicks "Remember Me", their email is securely stored. Even if they explicitly click "Sign Out", their email will be pre-filled waiting for them the next time they open the sign-in modal. 

## Persistent Cart Memory
The shopping cart has been upgraded to behave like a true e-commerce backend cart.
- **Saved to Profile**: Whenever an item is added, removed, or updated, the cart is saved to the browser's persistent storage, securely tied to the user's email address.
- **Logout Behavior**: When a user clicks "Sign Out", the cart is cleared from the screen (so nobody else can see it), but safely preserved in storage.
- **Restoration**: The moment the user logs back in (either manually or automatically via "Remember Me"), their exact cart is perfectly restored, allowing them to pick up right where they left off.
