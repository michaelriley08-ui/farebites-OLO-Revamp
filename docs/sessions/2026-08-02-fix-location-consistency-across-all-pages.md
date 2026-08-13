# Fix Location Consistency Across All Pages

---


**Date:** 2026-08-02  
**Conversation ID:** `162c128e-54bd-48f4-b62f-5f7cc8e27745`


---

## Implementation Plan

## Problem Statement

After placing an order, the location shown on different pages is inconsistent. The "Previous Order" card on the locations page, the order-confirm page, the order-details/menu page, and the reorder history may all display different locations because:

1. **`recordPlacedOrder` does not stamp `locationId` or `locationName`** on the order object. The API response only returns `orderId`, `total`, `subTotal`, etc. — no location info. So `mockupState.lastOrder` has no `locationId`.
2. **`getPreviousOrderLocation()` falls through** when `lastOrder.locationId` is missing, landing on the "Tom Yum - Surprise" name-based fallback or Tempe defaults.
3. **The "Previous Order" card shows even when logged out** — it should only render if the user is authenticated.
4. **`viewPastOrder` uses strict `===` comparison** on `locationId` (type mismatch: string vs number) and doesn't map database names back to mockup names.
5. **After checkout, the order-confirm page** uses `mockupState.selectedLocation` which is correct at that moment, but if the user navigates to locations and the `apiOrders` list refreshes from the server, the "Previous Order" card reads the server-provided name ("Tom Yum - Surprise") with no `locationId`.

## Proposed Changes

### 1. Stamp location info on the order object at checkout time

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) — `_handlePlaceOrder` (~line 10937)

When building `newOrderObj` after a successful purchase, stamp the current location state onto it:

```diff
 const newOrderObj = {
   ...(typeof response === "object" ? response : {}),
   orderId: ...,
+  locationId: mockupState.selectedLocationId || 7,
+  locationName: mockupState.selectedLocation || "i-Tea - Tempe",
+  locationAddress: mockupState.selectedAddress || "825 W UNIVERSITY, TEMPE, AZ",
   orderItems: cart.map((i) => ({ ...i })),
   ...
 };
```

Do the same for the retry path (`retryOrderObj`, ~line 10981).

---

### 2. Stamp location info in `recordPlacedOrder`

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) — `recordPlacedOrder` (~line 11958)

As a safety net, ensure every recorded order carries location info:

```diff
 function recordPlacedOrder(orderObj) {
+  // Ensure location info is always stamped
+  if (!orderObj.locationId) {
+    orderObj.locationId = mockupState.selectedLocationId || 7;
+  }
+  if (!orderObj.locationName) {
+    const loc = LOCATIONS.find(l => Number(l.locationId) === Number(orderObj.locationId));
+    orderObj.locationName = loc ? loc.name : (mockupState.selectedLocation || "i-Tea - Tempe");
+  }
+  if (!orderObj.locationAddress) {
+    const loc = LOCATIONS.find(l => Number(l.locationId) === Number(orderObj.locationId));
+    orderObj.locationAddress = loc ? loc.address : (mockupState.selectedAddress || "825 W UNIVERSITY, TEMPE, AZ");
+  }
   mockupState.lastOrder = orderObj;
   ...
 }
```

---

### 3. Only show "Previous Order" card when logged in

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) — Desktop locations layout (~line 3420) and mobile locations layout (~line 3540)

Wrap the previous order card in a login check:

```diff
-${(() => {
-  const prevLoc = getPreviousOrderLocation();
-  return `<div class="...">...Order Here...</div>`;
-})()}
+${(mockupState.isLoggedIn && (mockupState.lastOrder || (mockupState.apiOrders && mockupState.apiOrders.length > 0))) ? (() => {
+  const prevLoc = getPreviousOrderLocation();
+  return `<div class="...">...Order Here...</div>`;
+})() : ""}
```

---

### 4. Fix `viewPastOrder` to use Number() for locationId comparison

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) — `viewPastOrder` (~line 11870)

```diff
 if (order.locationId) {
-  mockupState.selectedLocationId = order.locationId;
-  const foundLoc = LOCATIONS.find((l) => l.locationId === order.locationId);
+  mockupState.selectedLocationId = Number(order.locationId);
+  const foundLoc = LOCATIONS.find((l) => Number(l.locationId) === Number(order.locationId));
   if (foundLoc) {
     mockupState.selectedLocation = foundLoc.name;
+    mockupState.selectedAddress = foundLoc.address;
+    mockupState.selectedRestaurantId = foundLoc.locationId;
   }
 }
```

---

### 5. Fix order-confirm renderer to use Number() for locationId lookup

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) — `order-confirm` renderer (~line 7077)

```diff
 const selectedLoc =
   (mockupState.apiLocations || []).find(
-    (loc) => loc.locationId === mockupState.selectedLocationId,
+    (loc) => Number(loc.locationId) === Number(mockupState.selectedLocationId),
   ) ||
   LOCATIONS.find(
-    (loc) => loc.locationId === mockupState.selectedLocationId,
+    (loc) => Number(loc.locationId) === Number(mockupState.selectedLocationId),
   ) ||
   LOCATIONS.find((loc) => loc.name === locationName) ||
   {};
```

---

### 6. Fix menu/order-details renderers to use Number() for locationId lookup

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) — `renderMenuPage` (~line 1720) and order-details (~line 4653)

Same pattern: wrap `loc.locationId === mockupState.selectedLocationId` comparisons with `Number()`.

---

### 7. Simplify `getPreviousOrderLocation` now that orders always have locationId

With the above changes, `lastOrder` and `userOrders[0]` will always carry `locationId`, `locationName`, and `locationAddress`. The function can be simplified and the "Tom Yum" name-mapping hack becomes a fallback-only path for stale server data.

---

## Verification Plan

### Manual Verification
1. Log out → visit locations page → confirm "Previous Order" card is **not shown**.
2. Log in → visit locations page → confirm "Previous Order" card shows the correct last-ordered location.
3. Select Alameda → add items → checkout → confirm order-confirm shows "i-Tea - ALAMEDA" and correct address.
4. Navigate back to locations → confirm "Previous Order" card now shows Alameda.
5. Navigate to menu page → confirm header shows Alameda name and address.
6. Open reorder history → confirm the most recent order shows Alameda.
7. View past order details → confirm it shows Alameda name and address.
8. Select Castro Valley → place a new order → repeat steps 3-7 and confirm everything shows Castro Valley.

---

## Task Checklist

- [x] 1. Stamp locationId/locationName/locationAddress on newOrderObj in _handlePlaceOrder (primary + retry)
- [x] 2. Stamp location info in recordPlacedOrder as safety net
- [x] 3. Only show "Previous Order" card when logged in (desktop + mobile)
- [x] 4. Fix viewPastOrder to use Number() and set selectedAddress/selectedRestaurantId
- [x] 5. Fix order-confirm renderer to use Number() for locationId lookup
- [x] 6. Fix menu/order-details renderers to use Number() for locationId lookup (all 8 instances)
- [x] 7. getPreviousOrderLocation already handles Tom Yum name mapping (done earlier)
- [ ] 8. Verify end-to-end

---

## Walkthrough

## Problem
After placing an order at a non-default location (e.g. Alameda), different pages displayed different locations. The "Previous Order" card showed Tempe or "Tom Yum - Surprise", the order confirmation showed the correct location, and the menu/order-details pages sometimes showed a stale selection.

## Root Causes Identified
1. **Order objects had no location info**: `_handlePlaceOrder` built `newOrderObj` from the API response, which only returns `orderId`, `total`, etc. — no `locationId`, `locationName`, or `locationAddress`.
2. **`recordPlacedOrder` didn't backfill**: Even as a safety net, it never checked or added location data.
3. **"Previous Order" card showed for all users**: Including logged-out users with no order history.
4. **String vs Number type mismatches**: The API sometimes returns `locationId` as a string (`"5"`), while the mockup `LOCATIONS` array uses numbers (`5`). Strict `===` comparison failed silently.
5. **`viewPastOrder` didn't sync full state**: It set `selectedLocationId` and `selectedLocation` but missed `selectedAddress` and `selectedRestaurantId`.

## Changes Made in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

### Fix 1 — Stamp location on order at checkout (~lines 10935-10951, 10978-10998)
Added `locationId`, `locationName`, and `locationAddress` from `mockupState` to both `newOrderObj` and `retryOrderObj` so every placed order carries the correct location from the moment it's created.

### Fix 2 — Safety net in `recordPlacedOrder` (~line 11961)
Added backfill logic: if `locationId`, `locationName`, or `locationAddress` are missing from the order object, populate them from `mockupState` and `LOCATIONS`.

### Fix 3 — Gate "Previous Order" card on login (~lines 3474, 3597)
Wrapped both desktop and mobile "Previous Order" card templates with:
```js
mockupState.isLoggedIn && (mockupState.lastOrder || (mockupState.apiOrders && mockupState.apiOrders.length > 0))
```
The card now only renders when the user is logged in AND has at least one order.

### Fix 4 — `viewPastOrder` full state sync (~line 11876)
- Wrapped `locationId` comparisons with `Number()`.
- Now also sets `mockupState.selectedAddress` and `mockupState.selectedRestaurantId` when navigating to a past order.

### Fix 5 — Order-confirm renderer Number() comparisons (~line 7075)
The `order-confirm` page's location lookup now uses `Number()` to match `locationId` values.

### Fix 6 — Menu/order-details/cart Number() comparisons (8 instances across lines 1722-5058)
All `selectedLoc` lookups in `renderMenuPage`, `customize-alt`, `cart`, and `checkout` renderers now use `Number()` for safe comparison.

### Fix 7 — `getPreviousOrderLocation` name mapping (done earlier, ~line 618)
Maps backend database names (like "Tom Yum - Surprise") to mockup location IDs when `locationId` is missing from the API order history payload.

## Expected Behavior After Fixes
| Page | What Shows | Source |
|---|---|---|
| **Locations** (Previous Order card) | Last ordered location name & address | `getPreviousOrderLocation()` → `lastOrder.locationId` → `LOCATIONS` lookup |
| **Menu** | Selected location name & address | `mockupState.selectedLocation` + `selectedLoc` lookup |
| **Order Details** | Selected location address | `mockupState.selectedAddress` + `selectedLoc` lookup |
| **Cart** | Selected location address | Same lookup pattern |
| **Checkout** | Selected location in order payload | `mockupState.selectedLocationId` |
| **Order Confirm** | Location name & address of just-placed order | `mockupState.selectedLocation` + `selectedLoc` lookup |
| **Reorder History** | Location per order | `order.locationName` (now stamped at checkout) |

All pages now read from the same `mockupState` source of truth, and all comparisons use `Number()` to prevent type mismatches.
