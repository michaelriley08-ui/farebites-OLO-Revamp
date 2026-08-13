# Long-Term Strategy: Location Selection & Ordering Flow

---


**Date:** 2026-06-06  
**Conversation ID:** `462c9f90-caef-4155-86b8-b597fcf9e1ff`


---

## Implementation Plan

Based on your need to handle location-specific menus while optimizing the user experience, here is a proposal for the long-term architectural flow.

## The Challenge
1. **Menu Dependency:** The menu is location-dependent, so users *must* select a location before they can see the menu.
2. **Account Requirement:** Users must have an account to actually place an order (Guest checkout is disabled for this restaurant).
3. **Friction:** Forcing users to log in *before* they can even browse the menu introduces high friction and can hurt conversion rates, as new users often want to see what's available before committing to creating an account.

## Proposed Long-Term Solution

### 1. Allow Anonymous Menu Browsing (Deferred Login)
Instead of forcing login on the home page when clicking "Order", we should allow users to navigate to the **Locations** page anonymously. 
- They select a location.
- They view the location-specific menu.
- They can add items to their cart.

### 2. Login Wall at Checkout
The login requirement should be moved to the **Checkout** phase.
- When an anonymous user clicks "Checkout" from their cart, they are redirected to the `sign-in` (or `registration`) page.
- After successfully logging in or registering, they are routed back to the Checkout page to complete their payment.
- **Cart Syncing:** Any items added to the cart while anonymous must be preserved and merged with their account cart upon login.

### 3. Personalized Locations (Favorites)
Once a user is logged in, the **Locations** page should be enhanced to prioritize convenience:
- **Favorite/Saved Locations:** Allow users to "heart" or save locations. These should appear at the top of the Locations list under a "My Favorites" tab or section.
- **Recent Locations:** Automatically display the last 1-2 locations the user ordered from at the very top.
- **Auto-Routing (Optional):** If a user has only one favorite location, clicking "Order" from the homepage could bypass the locations screen entirely and take them straight to that location's menu.

## User Review Required

> [!IMPORTANT]
> **Feedback Needed**
> 1. Do you agree with deferring the login wall to the Checkout phase so users can browse the menu anonymously?
> 2. For the Favorite Locations feature, does the backend API currently support saving favorite locations, or will that need to be added?

## Open Questions

- If a user changes their location mid-order (after adding items to the cart), how should we handle it? Standard practice is to clear the cart or prompt the user: *"Changing locations will clear your cart. Proceed?"*
- Should we implement a "Favorite Locations" toggle on the location cards themselves, or just track it automatically based on their order history?
