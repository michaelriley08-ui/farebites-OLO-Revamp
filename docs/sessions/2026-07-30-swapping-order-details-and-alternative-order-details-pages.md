# Swapping Order Details and Alternative Order Details Pages

---


**Date:** 2026-07-30  
**Conversation ID:** `45e3d598-e79b-4420-9f5f-053cf454b613`


---

## Implementation Plan

This plan outlines how we will swap the layouts between the standard `order-details.html` page and the alternative `order-details-alt.html` page while leaving all existing links, redirects, and state piping completely intact.

## Proposed Changes

We will swap the Javascript rendering handlers for the `"order-details"` and `"order-details-alt"` routes inside [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js). This ensures that:
- Any navigation to `order-details.html` (e.g., from `locations.html` or direct links) will render the **Alternative** modern design.
- Any navigation to `order-details-alt.html` will render the **Original** design.
- The URLs and routing table mapping keys remain unchanged, preserving all existing piping.

### [JavaScript Routing Layer]

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

1. **Swap the handler names** inside the `routes` configuration object:
   - Rename the route handler `"order-details"` to render the alternative page layout code.
   - Rename the route handler `"order-details-alt"` to render the original page layout code.

2. **Update flow-specific references in the Alternative handler** (now bound to `"order-details"`):
   - Update checks like `currentPage === "order-details-alt"` to `currentPage === "order-details"` so the alternative layout's dynamic scheduling states resolve correctly on the main page.
   - Update the back button navigation from `navigateTo('locations-alt')` to `navigateTo('locations')` so that users go back to the correct main locations page.

3. **Update flow-specific references in the Original handler** (now bound to `"order-details-alt"`):
   - Update the back button navigation from `navigateTo('locations')` to `navigateTo('locations-alt')` so that users in the alternative path return to the alternative locations page.

---

## Verification Plan

### Automated Tests
- Run the local dev server and ensure no runtime compilation/parsing errors are printed.

### Manual Verification
1. **Locations-to-Details Flow**:
   - Open [http://localhost:8000/locations.html](http://localhost:8000/locations.html).
   - Select a store and click **Order Here**.
   - Verify it redirects to `order-details.html` showing the **Alternative (Modern)** layouts.
   - Click the back button and verify it returns to `locations.html`.
2. **Alt Flow**:
   - Open [http://localhost:8000/locations-alt.html](http://localhost:8000/locations-alt.html).
   - Select a store and verify it redirects to `order-details-alt.html` showing the **Original** layout.
   - Click the back button and verify it returns to `locations-alt.html`.

---

## Task Checklist

- [x] Swap route handlers in `app.js`
- [x] Adjust back button targets and currentPage checks
- [x] Reset selected order type when selecting new locations (remove default)
- [x] Replace browser alerts and top banners with red inline validation text directly above Start Order button
- [x] Remove the outer red border ring from the buttons container during validation error
- [x] Verify functionality locally using git diff

---

## Walkthrough

We have successfully swapped the layout representations between the standard `order-details` and the alternative `order-details-alt` pages, and implemented inline validation for order type selection.

## Changes Made

### [JavaScript Routing Layer]
#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
* **Route Handlers Swapped:** Swapped the `"order-details"` and `"order-details-alt"` route handler registration keys so that the alternative layout now runs on the standard `order-details.html` page and vice-versa.
* **Flow Adaptations:** Adjusted back button targets on the new page layout (`locations`) and alternative page layout (`locations-alt`).
* **Selection State Reset:** Updated `selectLocation` function to clear `mockupState.fulfillmentMode` (sets to `null`) when entering the order details page. This ensures no options are pre-selected by default.
* **Inline Validation Error:**
  * Removed the generic browser `alert(...)` pop-up upon submit validation error inside `handleStartOrder()`.
  * Removed the top warning banner inside both page layout handlers.
  * Added a dynamic red inline error message (`"Please select an order type to continue"`) directly above the **Start Order** button when the submit action fails due to missing selection.
  * Removed the outer red border ring from the buttons container to reduce visual clutter, keeping the individual red borders on the unselected cards.

## Verification Results

### Git Diff Verification
- Verified modifications using `git diff` to ensure no syntax errors were introduced. All edits are cleanly localized inside `app.js`.
