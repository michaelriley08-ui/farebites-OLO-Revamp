# Update Restaurant Name on Order Pages

---


**Date:** 2026-05-25  
**Conversation ID:** `2ff59c9f-5476-49b2-86cc-59f027ae7089`


---

## Implementation Plan

Display the full restaurant name (e.g., "i-Tea - TEMPE") instead of the generic "i-Tea" on the order status and confirmation pages.

## User Review Required

> [!IMPORTANT]
> The data source (`LOCATIONS` array) uses uppercase names like "i-Tea - TEMPE". The UI uses the `uppercase` class, so "i-Tea - Tempe" will appear as "I-TEA - TEMPE".

## Proposed Changes

### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js)

- **`order-status` Route**: Update the brand heading to use `mockupState.selectedLocation`.
- **`order-confirm` Route**: Update the brand heading to use `mockupState.selectedLocation`.

## Verification Plan

### Manual Verification
1.  Start at `location-pick.html` and select a store (e.g., "i-Tea - ALAMEDA").
2.  Complete an order and verify the `Order Confirmed!` page shows "I-TEA - ALAMEDA".
3.  Navigate to "Track Order" and verify the `Order Status` page also shows the full name.

---

## Task Checklist

- [ ] Replace "Add..." button with "Order Again" in `order-status` route
- [ ] Replace "Contact Store" button with "Order Again" in `order-status` route
- [ ] Verify both buttons in the browser

---

## Walkthrough

I have replaced the "Add..." and "Contact Store" buttons on the `order-status` page with "Order Again" buttons to match the user's request.

## Changes Made

### app.js

Updated the `order-status` template to swap out the existing buttons for "Order Again" buttons with `bg-violet-600` styling.

```javascript
// Top Section (Horizontal Scroller)
- <button class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-gray-200 ...">Add...</button>
+ <button onclick="navigateTo('cart')" class="flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet-600 text-white shadow-md ...">Order Again</button>

// Bottom Section (Sticky Footer)
- <button class="w-full bg-gray-100 text-gray-700 py-4 ...">Contact Store</button>
+ <button onclick="navigateTo('cart')" class="w-full bg-violet-600 text-white py-4 rounded-full font-black text-lg shadow-lg ...">Order Again</button>
```

## Verification

### Browser Testing
I verified the changes by:
1.  Opening `order-status.html`.
2.  Confirming the top "Order Again" button is present and styled correctly (see screenshot below).
3.  Confirming the bottom "Order Again" button has replaced the contact option.

![Order Status Top Buttons](file:///Users/michael-riley/.gemini/antigravity/brain/2ff59c9f-5476-49b2-86cc-59f027ae7089/order_status_top_buttons_1777147829739.png)
