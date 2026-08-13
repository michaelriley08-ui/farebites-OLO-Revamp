# Inject Fallback Customization Options for Menu Items

---


**Date:** 2026-06-02  
**Conversation ID:** `0e475439-d8e6-4f0d-b9dd-10778953cf1f`


---

## Implementation Plan

We will implement default customization options (Sweetness Level, Ice Level, and Add Toppings) on the order customization page ([order-customize.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/order-customize.html)). Since the backend database currently returns `0` modifier groups for the items, we will dynamically inject standard boba customization options as a fallback.

## Proposed Changes

### Core JavaScript

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

1. **Define `getDefaultCustomizeGroups()`**:
   Create a helper function returning the standard custom groups structure:
   - **Sweetness Level**: `Regular Sweet (100%)` (default), `Less Sweet (70%)`, `Half Sweet (50%)`, `Light Sweet (30%)`, `Unsweetened (0%)`.
   - **Ice Level**: `Regular Ice` (default), `Less Ice`, `No Ice`.
   - **Add Toppings**: `Boba` (+$0.75), `Pudding` (+$0.75), `Grass Jelly` (+$0.75), `Red Bean` (+$0.75), `Aloe Vera` (+$0.75).
2. **Update `selectItemAndNavigate(index)`**:
   - Extract the default sub-item pre-selection loop into a reusable helper `applyDefaultSelections(detail)`.
   - Check if the API-returned `detail.menuSubItemGroups` is missing or empty. If so, populate it with our default groups.
   - Add a fallback inside the `.catch()` block to load default groups in case of API request failures.
   - Add a fallback in the `else` block to load default groups for static local items.

## Verification Plan

### Manual Verification
1. Open the Menu page ([menu-alt.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu-alt.html)).
2. Click any drink item (e.g. "M7 Crème Brûlée Boba Milk Tea" or "B1 Signature Boba Milk Tea").
3. Verify that the customization page correctly loads showing Sweetness Level, Ice Level, and Add Toppings options (instead of the "No customization options available" message).
4. Verify that sweetness and ice defaults are pre-selected, and modifying options (adding Boba, choosing half sweet, etc.) updates the final item price correctly.
5. Click "+ Add to Order" and check that the customized item is added to the cart with the correct customizations listed under the item name.

---

## Task Checklist

- `[x]` Hide original header search icon, search input, and tab row for alternative view in `app.js`
- `[x]` Add the tab selector and expandable search row to the alternative header in `app.js`
- `[x]` Hide the original desktop tab selector when `isAlternative` is true in `app.js`
- `[x]` Create and complete the walkthrough.md

---

## Walkthrough

We have successfully added the premium fulfillment details header to [menu-alt.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu-alt.html) that displays the active order method, fulfillment time, and selected location address.

## Changes Made

### Frontend Code

#### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

1. Modified the `renderMenuPage` function:
   - Added logic to parse the active fulfillment method (`In-Store`, `Drive-Thru`, `Curbside`, `Dine-In`, `Delivery`).
   - Added logic to construct the fulfillment time text (e.g. `at 12:30 PM` or `ASAP`).
   - Added logic to lookup the location name and address from `mockupState.apiLocations` / `LOCATIONS` with full fallbacks.
   - Inserted a centered, beautifully styled sub-header outside of the `<header>` element (directly below it) for `menu-alt` (`isAlternative === true`). This ensures it does not get stripped by the desktop navigation rendering logic in `app.js`, making it fully visible on both desktop and mobile layouts.
   - Positioned the Tab selector row (All, Featured, Favorites, History) below the address inside this sub-header on `menu-alt.html`.
   - Renamed the "Menu" tab to "All" to avoid redundancy.
   - Hidden the search icon from the top compact header when `isAlternative` is true.
   - Added a magnifying glass icon next to the tab selector which replaces the tabs with a full-width search input and a "Cancel" button when active.
   - Hidden the original desktop tab selector and duplicate search inputs in the alternative view to avoid page clutter.
   - Fixed a template literal syntax error where the rewards button's conditional wrapper was missing its closing `` ` : ''} `` tags, ensuring `app.js` compiles and parses correctly.
   - Implemented `getDefaultCustomizeGroups()` to provide standard boba customization options (Sweetness, Ice Level, Add Toppings) as fallback groups when the backend database API returns `0` modifier groups for items.
   - Updated `selectItemAndNavigate` to intercept empty database modifier arrays and load the standard boba fallbacks automatically under all API success/failure paths, enabling fully functional testing.
   - Made the fulfillment block clickable, which redirects to the alternative order details page (`order-details-alt.html`) so users can change their choices dynamically.

## Verification & Testing

1. Verified fallback address and time resolutions correctly default to `"825 W UNIVERSITY, Tempe, AZ"` and `"ASAP"` on first load.
2. Verified that navigating to `menu-alt.html` renders the new layout with the centered heavy "Menu" title, the uppercase fulfillment mode, time, and address.
3. Verified the tab row sits directly below the address details on both desktop and mobile layouts.
4. Verified that clicking the search icon next to the tabs dynamically toggles the full-width search input.
5. Verified that typing in the search input correctly filters menu items and clicking "Cancel" returns to the tab selector.
6. Verified that clicking on the header section correctly redirects the user to the alternative order details page.
7. Verified that clicking any menu item (e.g. A1 Premium Black Tea or B1 Signature Boba) correctly displays sweetness, ice level, and topping options, and selecting them correctly recalculates the item total.
