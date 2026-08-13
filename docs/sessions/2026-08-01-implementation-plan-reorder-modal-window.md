# Implementation Plan - Reorder Modal Window

---


**Date:** 2026-08-01  
**Conversation ID:** `38a801ab-f5e1-46ce-88c1-c8497161f03e`


---

## Implementation Plan

Create a dedicated, modern **Reorder Modal** popup that displays a user's recent order history (last 5 orders) after sign-in or location selection. The modal features concise order previews, expandable item customizations, and a single-click "Add to Bag" reorder action.

## User Review Required

> [!NOTE]
> **Design Inspiration**: Based on the provided reference screenshot and audio notes, the modal will feature a clean, brand-consistent palette (dark violet/burgundy accents, rounded pill buttons, subtle borders) rather than a exact 1:1 copy of third-party apps.

> [!IMPORTANT]
> **Trigger Behavior**: 
> 1. After a user signs in or completes location selection (`selectLocation`), if they are logged in and have past orders, the **Reorder Modal** will pop up automatically.
> 2. Users can also manually launch the Reorder Modal at any time via a **REORDER** action in the header/navigation bar.

---

## Proposed Changes

### Core Application (`app.js`)

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

1. **Reorder Modal Markup & Render Handler (`renderReorderModal`)**:
   - Integrate `mockupState.modalOpen === 'reorder'` into the main modal rendering pipeline.
   - Build a scrollable modal container (`max-h-[85vh] overflow-y-auto` with rounded corners `rounded-3xl` and shadow) suitable for mobile and desktop viewports.
   - Header: Large bold **REORDER** title, brief subtitle ("Repeat your recent favorites in seconds"), and a top-right close (`X`) button.
   - Order Cards (up to 5 recent orders):
     - **Header**: Order date (e.g. `06/19/26`), Order # or store location.
     - **Items Summary**: Show the first 3 items with quantities. If an order contains >3 items, display an inline badge (`+ X more items`).
     - **Collapsible Customizations**: Toggle link (`VIEW DETAILS v` / `HIDE DETAILS ^`) to show full ingredient breakdowns, toppings, sugar/ice levels, and options.
     - **Primary Action**: Brand-styled **ADD TO BAG** pill button that adds items to `mockupState.cart`, updates cart count, triggers persistence, and notifies the user with feedback.
   - Empty State: Friendly notice and "Browse Menu" button if the user has no past order history yet.

2. **Trigger Integration in Location & Sign-In Flows**:
   - In `selectLocation()`: Check if `mockupState.isLoggedIn` and past orders exist (`mockupState.apiOrders` or `mockupState.lastOrder`). If so, set `mockupState.modalOpen = 'reorder'`.
   - In `handleLogin()`: Trigger the modal if a location is already selected.
   - In Navigation Header (`renderHeader`): Ensure the "Reorder" quick link or button opens `mockupState.modalOpen = 'reorder'`.

3. **State Helpers**:
   - Add state tracking `mockupState.expandedReorderOrders = {}` for toggling details on individual past orders inside the modal.

---

## Verification Plan

### Manual Verification
1. **Modal Trigger Testing**:
   - Log in with test user credentials / mockup logged-in state.
   - Select a location on `locations.html` and verify the **REORDER** modal pops up automatically with recent past orders.
   - Click the "Reorder" header button to verify manual modal launch.
2. **Modal UI & Expandable Details**:
   - Verify top large header **REORDER** and close button work.
   - Verify first 3 items are summarized per order card.
   - Click `VIEW DETAILS` to expand customization details (toppings, options) and `HIDE DETAILS` to collapse.
   - Verify scrollbar behavior when multiple orders exist.
3. **Cart & Reorder Action**:
   - Click **ADD TO BAG** on a past order card.
   - Verify items are added to cart and the cart count badge updates immediately.

---

## Walkthrough

## Bug Fix Implemented

**Bug Summary**: When clicking **"ADD TO BAG"** inside the Reorder Modal, items were added to the cart and the app navigated to `cart.html`. However, `mockupState.modalOpen` remained `"reorder"`, causing the Reorder Modal to re-appear on top of the cart page.

**Fix Applied**:
- Updated `reorderAndCloseModal()` in `app.js` to set `mockupState.modalOpen = null` before navigating to `cart.html`.
- Updated `selectLocation()` to auto-prompt the Reorder Modal **only** when a logged-in user has an empty cart (`mockupState.cart.length === 0`).

---

## Industry Standard UX Analysis: Reorder Modal Triggers

In major online ordering platforms (DoorDash, Uber Eats, Starbucks, Domino's, Chipotle, Sweetgreen), reorder popups are managed as follows:

| Trigger Scenario | Recommended UX Behavior | Implemented in FareBites |
| :--- | :--- | :--- |
| **Explicit Navigation Click** | User clicks **REORDER** in header nav bar, profile menu, or mobile drawer. Always opens immediately. | **YES** — Opens immediately whenever requested |
| **Post-Location Selection Prompt** | Prompt returning logged-in users after selecting a store location, **only if cart is currently empty**. | **YES** — Only prompts if logged in & cart is empty |
| **Add to Bag / Dismissal** | Clicking "ADD TO BAG" or "Close (X)" clears modal state (`modalOpen = null`) and never re-pops on cart page. | **YES** — Clears state & navigates cleanly to cart |

---

## Verification
- **Syntax Verification**: `node -c app.js` — **Passed (0 errors)**.
- **Navigation & Add to Bag Verification**: Clicking "ADD TO BAG" in Reorder modal populates cart, clears modal state, and navigates cleanly to `cart.html` without re-opening the modal.
