# Clarifying and Preventing Item Unavailability

**Date:** 2026-08-09  
**Conversation ID:** b32c1594-5583-4d05-8c05-dfebd3ed3ab8

## Summary
When trying to order items on the FareBites checkout portal, if an item is not available at the selected location, the system shows a generic alert:
`"Some items in your cart are not available at this location. Please clear your cart and try again."`
This alert does not specify which item is unavailable.

Based on client feedback and review of the user experience, we will implement a two-layered solution:
1. **Preventative UX (Reorder Past Orders Modal):** When rendering past orders, we will dynamically check if the past items are available on the current store's live menu. Unavailable items (such as the hardcoded `"Side of Guacamole"`) will be marked as "Unavailable" (grayed out and struck through) in the UI. If a user clicks **ADD TO BAG** on a past order, only the available items will be added, and an alert will list any skipped items.
2. **Checkout Validation Safeguard:** If an unavailable item is somehow in the cart, the checkout validation (`_handlePlaceOrder`) will validate all items concurrently using `Promise.all` and report the exact name of the unavailable item.

---

## Full-Impact Analysis

### Step 1 — Identify the Data Source
* Cart items are stored in `mockupState.cart` inside `localStorage` (via `persistAllState()`).
* Cart items originate from three places:
  1. The live menu list (`mockupState.apiMenuItems` fetched from `window.ApiService.getMenuItemDetail`).
  2. The fallback static list (`MENU_ITEMS`) when API loading fails or has not finished.
  3. Mock past orders in `getAllUserOrders()` (seeding data).
* **Leak/Issue:** The past order seed data has `"Side of Guacamole"` which is hardcoded and has no `menuItemId`.

### Step 2 — Trace Every Write Point
* [app.js:809](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L809): `addOrMergeCartItem(newItem)` - merges or adds an item.
* [app.js:10881](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L10881): `window._updateCartQty(index, newQty)` - updates quantity or splices/removes item.
* [app.js:12477](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L12477): `window.reorderPastOrder(orderId)` - maps order items and adds them to cart.
* [app.js:11040](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L11040), [app.js:11086](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L11086), [app.js:11123](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L11123): clears cart on order success.

### Step 3 — Trace Every Read Point
* [app.js:5160](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L5160): `renderCartItems()` - renders items, titles, customizations, and prices.
* [app.js:10926](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L10926): `_handlePlaceOrder` - checks `cart[0].menuItemId` availability.
* [app.js:10999](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L10999): `_handlePlaceOrder` - maps cart items to the PlaceOrder request payload.

### Step 4 — Check for Misalignment Between Readers
* **Misalignment:** The validation check inside `_handlePlaceOrder` only queries the first item in the cart (`cart[0]`). If `cart[0]` is valid but `cart[1]` (e.g. Side of Guacamole) is unavailable, the frontend validation check passes. The subsequent request to `ApiService.placeOrder` then fails on the backend, throwing a generic HTTP error which alerts the user with a vague "Failed to place order" or "Item not available" message.
* **Validation Shape:** If an item is missing its `menuItemId` (e.g., `0`), the API endpoint throws a 404/400.

### Step 5 — Map Secondary Risk Areas
* **Performance:** Running validation check on all items concurrently via `Promise.all` is very lightweight since carts usually have fewer than 10 items.
* **UX/Flow:** Users are prevented from checking out with invalid or location-incompatible items and are told exactly what to remove.

---

## Proposed Changes

### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

#### [NEW] Helper function `isItemAvailableAtCurrentLocation` (around L1322)
Define a helper function to verify if an item from a past order is available in the current location's live menu `mockupState.apiMenuItems`.
```javascript
function isItemAvailableAtCurrentLocation(item) {
  const rawId = item.menuItemId || item.MenuItemId || item.id || item.Id;
  const rawName = (item.name || item.Name || item.menuItemName || item.MenuItemName || "").trim().toLowerCase();
  
  // If we don't have live API items loaded yet, assume available (fallback mode)
  if (!mockupState.apiMenuItems || mockupState.apiMenuItems.length === 0) {
    return true;
  }
  
  // Search in apiMenuItems
  const found = mockupState.apiMenuItems.find((mi) => {
    const miId = mi.id || mi.menuItemId;
    const miName = (mi.name || "").trim().toLowerCase();
    if (rawId && miId && String(rawId) === String(miId)) {
      return true;
    }
    if (rawName && miName === rawName) {
      return true;
    }
    // Partial/fuzzy match for boba names containing code prefix like "M7 "
    if (rawName && miName && (miName.includes(rawName) || rawName.includes(miName))) {
      return true;
    }
    return false;
  });
  
  return !!found;
}
window.isItemAvailableAtCurrentLocation = isItemAvailableAtCurrentLocation;
```

#### [MODIFY] Update `renderReorderModalHTML` (around L12800)
For each item in the past order, call `isItemAvailableAtCurrentLocation(item)`. If it is unavailable, dim the item container, cross out the name, and display `"Unavailable"` instead of quantity.

#### [MODIFY] Update `reorderPastOrder` (around L12477)
In `reorderPastOrder`, skip adding any items that are not available. Track skipped items, and show an alert if any were omitted (e.g. `The following items are not available at this location and were not added: Side of Guacamole`).

#### [MODIFY] Update `_handlePlaceOrder` Validation Check (around L10924 - 10964)
Replace the single-item check (`cart[0]`) with a complete `Promise.all` validation check of all items in the cart. If any validation fails (e.g. returns a 404/throws an error), alert the user with the specific item's name.

```javascript
  // Validate all cart items for the current location to prevent OLO validation errors.
  try {
    const locId = mockupState.selectedLocationId || 7;
    let foundRestId = null;

    const validationPromises = cart.map(async (item) => {
      if (!item.menuItemId) {
        throw new Error(`Item "${item.name}" is not available at this location. Please remove it and try again.`);
      }
      try {
        const detail = await window.ApiService.getMenuItemDetail(locId, item.menuItemId);
        if (!detail) {
          throw new Error();
        }
        
        // Extract restaurantId if not already set
        if (!foundRestId) {
          if (detail.menuSubItemGroups) {
            for (const g of detail.menuSubItemGroups) {
              for (const p of g.groupPrices || []) {
                const sub = p.menuSubItem || {};
                if (sub.restaurantId) {
                  foundRestId = sub.restaurantId;
                  break;
                }
              }
              if (foundRestId) break;
            }
          }
          if (!foundRestId && detail.menuItemModifyPrices) {
             for (const m of detail.menuItemModifyPrices) {
                if (m.menuSubItem && m.menuSubItem.restaurantId) {
                   foundRestId = m.menuSubItem.restaurantId;
                   break;
                }
             }
          }
        }
      } catch (err) {
        throw new Error(`Item "${item.name}" is not available at this location. Please remove it and try again.`);
      }
    });

    await Promise.all(validationPromises);

    if (foundRestId) {
      mockupState.selectedRestaurantId = foundRestId;
      persistAllState();
    }
  } catch (validationError) {
    console.error("Cart item validation failed:", validationError);
    alert(validationError.message || "Some items in your cart are not available at this location. Please clear your cart and try again.");
    
    // Reset buttons
    btns.forEach((b) => {
      if (b.textContent.includes("Placing")) {
        b.textContent = "Purchase Order";
        b.disabled = false;
      }
    });
    return;
  }
```

---

## Verification Plan

### Manual Verification
1. Open the Reorder modal containing the past order with `Side of Guacamole`.
2. Verify that `Side of Guacamole` is marked as **Unavailable** and crossed out in the modal view.
3. Click **ADD TO BAG** on that past order. Verify that only the other (available) items are added to the cart, and a custom alert informs you that `Side of Guacamole` was skipped.
4. Manually add an invalid item ID to the cart in the developer console to simulate an invalid/corrupted cart state. Proceed to checkout, and verify that the validation safeguard alerts you of the exact unavailable item name during checkout.
5. Verify syntax check `node -c app.js` succeeds.

---

## Task Checklist
- [x] Implement `isItemAvailableAtCurrentLocation(item)` helper function in `app.js`
- [x] Update `renderReorderModalHTML()` to visually mark unavailable items as unavailable (dimmed, struck through)
- [x] Update `reorderPastOrder()` to skip unavailable items and alert the user with the skipped items
- [x] Update `renderCartItems()` to visually flag unavailable items in red and disable/adjust the Checkout button if any items are unavailable
- [x] Update `_handlePlaceOrder()` validation safeguarding check to validate all items concurrently and report the exact unavailable item name
- [x] Verify execution using syntax check and local tests

---

## Walkthrough

### Changes Made

#### 1. Added Availability Helper Function
Implemented `isItemAvailableAtCurrentLocation(item)` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L1325-L1351). It normalizes names (stripping accents and case) to prevent false positives when checking past order items against the selected store's active live menu (`mockupState.apiMenuItems`).

#### 2. Preventative UX (Reorder Modal)
* **Visual Indicators:** Updated `renderReorderModalHTML()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L12826-L12860) to check item availability. If an item is unavailable at the current location, it is dimmed, struck through, and clearly labeled with `"UNAVAILABLE"` in red.
* **Omission Safeguard:** Updated `reorderPastOrder()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L12504-L12664) to skip adding unavailable items to the cart. If any items are skipped, it alerts the user with their names (e.g. `The following items are not available at this location and were not added: Side of Guacamole`).

#### 3. Cart and Checkout Prevention
* **Cart Visual Flag:** Modified the cart item mapping inside `renderCartItems()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L5236-L5256) to visually flag unavailable items in the cart with a red label `⚠️ Not available at this location`.
* **Checkout Button Disable:** Updated checkout button templates in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L5628-L5648) to gray out and display `"Unavailable Items in Cart"` when any items in the cart are not available, preventing users from checking out with invalid orders.
* **Safeguard Validation:** Modified the try/catch validation block inside `_handlePlaceOrder()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L10958-L11000) to validate all cart items concurrently using `Promise.all` and display the specific item name if validation fails.

---

## Verification Results

### Syntax Validation
* Verified that the JavaScript syntax is correct:
  ```bash
  node -c app.js
  # Output: (Success, no errors)
  ```

### Browser Verification
We verified the reorder availability flow in the browser:
* The Reorder modal successfully identifies `"Side of Guacamole"` as unavailable. It displays a strike-through on its name and labels it `"UNAVAILABLE"`.
* When clicking **ADD TO BAG**, only the available drinks are added. An alert is shown stating that `"Side of Guacamole"` was skipped.

![Reorder modal showing unavailable guacamole](/Users/michael-riley/.gemini/antigravity-ide/brain/b32c1594-5583-4d05-8c05-dfebd3ed3ab8/reorder_modal_verification.png)


