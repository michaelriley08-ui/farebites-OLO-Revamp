# Implement MenuSubItemModifyPrices (Ingredient Removal & Substitution System)

---


**Date:** 2026-07-31  
**Conversation ID:** `8e1bee02-1864-4c5c-bb18-c52e7a77830a`


---

## Implementation Plan

Refactor the product customization modifier rendering and calculation logic in `app.js` to match the official backend specification for **MenuSubItemModifyPrices** (the ingredient Removal & Substitution system), replacing the current basic 4-button selector row.

## Overview & Architecture

`MenuSubItemModifyPrices` is a bridge table between `MenuItem` and `MenuSubItem` designed for ingredient removal and 1-to-1 substitutions (e.g., *"No lettuce, substitute pickles"*), distinct from additive `MenuSubItemGroups` (toppings/extras).

### Key Architectural Concepts & Specification Rules
1. **Tile Summary & Choose Button (Step 1)**:
   - Displayed when `detail.menuSubItemModifyPrices.length > 0`.
   - Displays a row labeled **"Modify Options"**.
   - Left side: Comma-separated list of default ingredients (computed from items with `isDefaultItem === true`).
   - Right side: **"Choose"** button opening the Modify modal / slide-over drawer.
2. **Modify Modal / Drawer (Step 2)**:
   - **Section 1: Remove (Always Visible)**:
     - Contains items where `isDefaultItem === true`.
     - Rendered as checkboxes labeled `No {ItemName}`.
     - `data-modify="No"`, `data-price = m.noPrice`, `data-maxselect="1"`.
   - **Section 2: Substitute (Hidden by default)**:
     - Element `#modifySubDiv` (initially `style="display:none"`, `data-maxselect="0"`).
     - Contains ALL `menuSubItemModifyPrices` ordered alphabetically by name.
     - Rendered as checkboxes labeled `Sub {ItemName}`.
     - `data-modify="Sub"`, `data-price = m.addPrice`.
   - **Interactive State Logic**:
     - Checking a `"No"` item reveals Section 2 (`#modifySubDiv`) and sets its `data-maxselect="1"`.
     - Unchecking the `"No"` item hides Section 2, resets `data-maxselect="0"`, and clears substitute selection.
3. **Slot & Price Calculations (Step 3 & Hidden Fields)**:
   - Tracks `IncludedSubItemsBeforeCharges` (`hdfNoChrge`), remaining free slots (`hdfRemNoChrge`), and paid modification counts (`hdfChrgeCount`).
   - Updates item total price based on `addPrice` / `noPrice` deltas and free allowance slots.
   - Preserves selections when serializing to cart and restores them when editing cart items.

---

## User Review Required

> [!IMPORTANT]
> **Modal / Slide-Over UX Alignment**
> The backend spec references a Bootstrap modal popup (`modifyModal0`). In our modern single-page web app layout (built with Tailwind CSS and responsive drawers), we will render a sleek modal/drawer component triggered by the "Choose" button on the "Modify Options" tile. Please let us know if you prefer a modal overlay or an inline expandable section.

---

## Open Questions

> [!NOTE]
> 1. **Default Option Display**: If a menu item has `IncludedSubItemsBeforeCharges` set to `0` (or `null`), all substitutions immediately incur their designated `addPrice`. If set to `1` or more, the first substitution up to that count is free (unless `addPrice` > 0 override applies). We will implement this standard slot decrement logic.
> 2. **Multi-ingredient Substitutions**: The specification notes `maxSelect = 1` for the substitute section when one `"No"` item is selected. If multiple default items exist, selecting a `"No"` item unlocks 1 substitute slot for that removed default ingredient.

---

## Proposed Changes

### Core JavaScript Application & Customization Views

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

1. **State & Helper Methods**:
   - Add default ingredient text generator `_getDefaultItemList(modifyPrices)` to return comma-separated names of `isDefaultItem === true` items.
   - Refactor `mockupState._customizeModifyTypes` to store active removal (`"No"`) and substitution (`"Sub"`) selections, along with price delta calculations.
   - Implement free slot tracking variables: `hdfNoChrge`, `hdfRemNoChrge`, and `hdfChrgeCount`.

2. **UI Renderer Redesign**:
   - **`renderModifyTileAndModal()`**: Replace existing 4-button `_renderModifyTypeSection()` with:
     - The **Modify Options Tile**: Displays `_getDefaultItemList()` and a "Choose" button.
     - The **Modify Modal / Drawer**:
       - **Section 1 (Remove)**: Renders checkboxes labeled `"No {Name}"` for items with `isDefaultItem === true`.
       - **Section 2 (Substitute)**: Container `#modifySubDiv` (hidden by default). Renders checkboxes labeled `"Sub {Name}"` for all available items alphabetically.
   - **Event Handlers**:
     - `window._toggleModifyRemove(menuSubItemId)`: Handles toggling a `"No"` selection, revealing/hiding `#modifySubDiv`, and adjusting `data-maxselect`.
     - `window._toggleModifySub(menuSubItemId)`: Handles selecting a `"Sub"` ingredient, respecting `maxSelect = 1`.
     - `window._closeModifyModal()` / `window._applyModifyOptions()`: Updates tile display text (e.g., *"Lettuce, Tomato (No Lettuce, Sub Pickles)"*) and updates total price.

3. **Cart Integration & Price Calculation**:
   - Update `_addToCart` to calculate price modifications based on removal credit (`noPrice`) and substitution cost (`addPrice`), factoring in `IncludedSubItemsBeforeCharges`.
   - Format `selectedSubItems` for cart item payload and cart line-item description.
   - Update `editCartItemAndNavigate` to restore removal/substitution state when editing a customized cart item.

---

## Verification Plan

### Automated Tests
- Syntax check `app.js` using node syntax check:
  ```bash
  node -c app.js
  ```

### Manual Verification
1. **Open Item Customization Page**:
   - Verify that menu items with `menuSubItemModifyPrices` (e.g. sample menu items in mock data / API response) render the "Modify Options" tile displaying default ingredients.
2. **Open Modify Modal / Drawer**:
   - Click "Choose" button. Verify Section 1 lists default ingredients as "No {Name}". Verify Section 2 ("Substitute") is initially hidden.
3. **Select Ingredient Removal**:
   - Check a "No {Name}" checkbox (e.g., "No Lettuce"). Verify Section 2 (#modifySubDiv) becomes visible.
4. **Select Substitution**:
   - Check a "Sub {Name}" checkbox (e.g., "Sub Pickles"). Verify maxSelect limit of 1 substitution per removed item is enforced.
5. **Dismiss & Apply**:
   - Click "Done". Verify tile display text reflects modifications and item pricing updates accurately.
6. **Cart & Re-editing**:
   - Add item to cart. Check cart summary text and price. Click Edit to reopen customization and verify selections are restored correctly.

---

## Walkthrough

Implemented the official backend specification for **MenuSubItemModifyPrices** (the ingredient Removal & Substitution system) and resolved the page freeze / scroll locking issue during substitution selection.

## Bug Root Cause & Resolution

### Root Cause
When selecting a substitute ingredient (e.g. *"Sub Agar Boba"*), `_updateModifyModalDOM()` invoked `updateMockupState("_lastUpdated", Date.now())`. This triggered a full page re-render (`renderPage()`), which re-created `#modifyOptionsModal` with the default `hidden` class in its template. The modal disappeared mid-selection, but `document.body.style.overflow = "hidden"` remained set on `<body>`, freezing the page and preventing the customer from scrolling down to complete their order.

### Resolution
1. **Modal State Preservation**:
   - Added `mockupState._isModifyModalOpen` state tracking.
   - Updated `_renderModifyTypeSection` to conditionally apply `hidden` based on `_isModifyModalOpen`.
2. **In-Modal Direct DOM Updates**:
   - Removed `updateMockupState()` from `_updateModifyModalDOM()`. Toggling removal or substitute checkboxes now updates modal elements, checkboxes, slot inputs, and `#modifyTileSummary` live in the DOM without triggering a full page re-render.
3. **Clean Modal Dismissal & Overflow Release**:
   - `window._closeModifyModal()` resets `mockupState._isModifyModalOpen = false`, removes `style.overflow = "hidden"` from `<body>`, and calls `updateMockupState()` to refresh item totals and prices on the main layout.
   - Added backdrop click handler to dismiss the modal cleanly.

---

## Technical Summary of Implementation

1. **Step 1 — The Modify Options Tile (`_renderModifyTypeSection`)**:
   - Computes default ingredient list (`_getDefaultItemList`) from `isDefaultItem === true` items (e.g., *"Boba, Pudding"*).
   - Displays a row labeled **Modify Options** with default ingredients or active modifications summary on the left, and a **Choose** button on the right.

2. **Step 2 — Interactive Popup Modal (`#modifyOptionsModal`)**:
   - **Section 1 (Remove - Always Visible)**: Renders checkboxes labeled `"No {ItemName}"` for default items (`maxSelect = 1`).
   - **Section 2 (Substitute - Hidden by Default)**: Container `#modifySubDiv` (initially `style="display:none"`). Toggling `"No"` reveals Section 2 (`data-maxselect = 1`).
   - **Handlers**: `_toggleModifyRemove`, `_toggleModifySub`, `_updateModifyModalDOM`.

3. **Slot Tracking & Pricing Calculations**:
   - `_calculateModifyPricesTotal(detail, modSels)` factors in `IncludedSubItemsBeforeCharges` (`hdfNoChrge`), remaining free slots (`hdfRemNoChrge`), and paid substitution charges (`hdfChrgeCount`).

4. **Cart Serialization & Restoration**:
   - `_addToCart` records removal (`modifyType: 'no'`) and substitution (`modifyType: 'add'`) entries with clean line-item descriptions (e.g. *"No Boba, Sub Agar Boba"*).
   - `editCartItemAndNavigate` restores `_customizeModifyTypes` state when editing a customized item from the cart.

---

## Verification Results

### Automated Tests
- Syntax verification executed with zero errors:
  ```bash
  node -c app.js
  # Output: Command completed successfully with exit code 0.
  ```

### Manual Verification
- Verified opening the Modify Options modal, checking `"No Boba"`, and checking `"Sub Agar Boba"`.
- Verified the modal remains open and responsive without freezing the page.
- Verified clicking **DONE** closes the modal, unlocks body scrolling, and updates the item total price and options summary cleanly.
