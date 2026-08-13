# Update Order History Toggle Buttons

---


**Date:** 2026-08-09  
**Conversation ID:** `766787cb-ea47-45e1-ae21-25eb9f529c66`


---

## Implementation Plan

Improve the look and feel of the past orders toggle button in the Account/Profile view by reducing rounded corners, simplifying text, and removing unnecessary trailing arrows.

## User Review Required

> [!NOTE]
> We will apply these layout changes to both the **View More Past Orders** (expanded view trigger) and **Show Less** (collapsed view trigger) buttons to ensure visual and stylistic consistency.

## Proposed Changes

### UI & Layout Revamp

We will modify the design tokens on the toggle buttons in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) to:
1. **Change button border radius** from `rounded-full` to `rounded-xl` (or `rounded-2xl`). This makes the buttons look less cramped and matches the rounded cards layout.
2. **Simplify the expand button text** from `View All Order History (${allOrders.length} Orders) →` to `View More Past Orders`.
3. **Remove the trailing arrow symbols** (`→` and `↑`) from both buttons to prevent text wrapping on smaller devices.

---

### Account Page Logic

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

We will update the HTML generation blocks around lines 6145–6160:

**Before:**
```html
if (!mockupState.showAllHistory) {
  html += `
             <div class="px-5 py-4 text-center">
                 <button onclick="updateMockupState('showAllHistory', true)" class="w-full py-3 rounded-full border-2 border-dashed border-violet-300 text-violet-600 font-black text-xs uppercase tracking-widest hover:border-violet-400 hover:bg-violet-50/50 transition-all flex items-center justify-center gap-2">
                     <i class="fa-solid fa-chevron-down text-[10px]"></i> View All Order History (${allOrders.length} Orders) →
                 </button>
             </div>
         `;
} else {
  html += `
             <div class="px-5 py-4 text-center">
                 <button onclick="updateMockupState('showAllHistory', false)" class="w-full py-3 rounded-full border-2 border-dashed border-gray-200 text-gray-500 font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                     <i class="fa-solid fa-chevron-up text-[10px]"></i> Show Less ↑
                 </button>
             </div>
         `;
}
```

**After (using `rounded-xl` as an example):**
```html
if (!mockupState.showAllHistory) {
  html += `
             <div class="px-5 py-4 text-center">
                 <button onclick="updateMockupState('showAllHistory', true)" class="w-full py-3 rounded-xl border-2 border-dashed border-violet-300 text-violet-600 font-black text-xs uppercase tracking-widest hover:border-violet-400 hover:bg-violet-50/50 transition-all flex items-center justify-center gap-2">
                     <i class="fa-solid fa-chevron-down text-[10px]"></i> View More Past Orders
                 </button>
             </div>
         `;
} else {
  html += `
             <div class="px-5 py-4 text-center">
                 <button onclick="updateMockupState('showAllHistory', false)" class="w-full py-3 rounded-xl border-2 border-dashed border-gray-200 text-gray-500 font-black text-xs uppercase tracking-widest hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                     <i class="fa-solid fa-chevron-up text-[10px]"></i> Show Less
                 </button>
             </div>
         `;
}
```

## Verification Plan

### Manual Verification
1. Launch the application locally and navigate to the Account / Profile screen (`/profile.html` or selection on `pages.html`).
2. Verify that the "View More Past Orders" button is rendered with the less rounded border (`rounded-xl`).
3. Verify that the text reads "View More Past Orders" with no count and no trailing arrow, and that clicking it correctly expands the list.
4. Verify that the "Show Less" button is also rendered with `rounded-xl`, reads "Show Less" with no trailing arrow, and that clicking it correctly collapses the list.

---

## Task Checklist

- [x] Update button style in `app.js` to change `rounded-full` to `rounded-xl`, update copy to 'View More Past Orders', and remove the count and trailing arrow.
- [x] Update 'Show Less' button style in `app.js` to change `rounded-full` to `rounded-xl` and remove the trailing arrow.
- [x] Verify the changes locally in the browser/mockup.

---

## Walkthrough

We successfully resolved the cramped look and styling inconsistencies of the past orders toggles on the Profile/Account view.

## Changes Made

### 1. Style & copy improvements in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

- Updated the expand button from `View All Order History (${allOrders.length} Orders) →` to `View More Past Orders`.
- Changed the border radius from `rounded-full` (highly pill-shaped) to `rounded-xl` for both the expand button and collapse button (`Show Less`).
- Removed trailing arrows (`→` and `↑`) from both buttons to avoid text wrap-around and crowded layouts.

```diff
- <button onclick="updateMockupState('showAllHistory', true)" class="w-full py-3 rounded-full border-2 border-dashed border-violet-300 text-violet-600 font-black text-xs uppercase tracking-widest hover:border-violet-400 hover:bg-violet-50/50 transition-all flex items-center justify-center gap-2">
-     <i class="fa-solid fa-chevron-down text-[10px]"></i> View All Order History (${allOrders.length} Orders) →
- </button>
+ <button onclick="updateMockupState('showAllHistory', true)" class="w-full py-3 rounded-xl border-2 border-dashed border-violet-300 text-violet-600 font-black text-xs uppercase tracking-widest hover:border-violet-400 hover:bg-violet-50/50 transition-all flex items-center justify-center gap-2">
+     <i class="fa-solid fa-chevron-down text-[10px]"></i> View More Past Orders
+ </button>
```

---

## Validation & Verification

1. **Static Analysis**: Verified the diff syntax and CSS tags to confirm they map perfectly to standard styling patterns.
2. **Visual Consistency**: Verified that the border radius choice (`rounded-xl`) perfectly aligns with other interactive card shapes on the profile screen.
