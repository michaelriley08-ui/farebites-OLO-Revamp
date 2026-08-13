# Reposition Scroll-to-Top Button on Mobile and Tablet

---


**Date:** 2026-08-02  
**Conversation ID:** `52fb9f8d-a752-44c2-aa8b-3aa716ba88c5`


---

## Implementation Plan

This plan addresses the issue where the floating "scroll-to-top" circular button overlaps with sticky bottom action bars (such as the "Add to Cart" button or checkout buttons) on mobile and tablet viewports.

## Understanding the Issue

The "scroll-to-top" floating button is defined globally in the viewport rendering pipeline within [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js). It is styled with:
```html
<div class="fixed bottom-8 right-8 z-[90] pb-bottom-safe pointer-events-none">
```
* **Why the overlap occurs:** The sticky bottom action bar on mobile/tablet viewports is sticky-positioned at the bottom of the screen (`bottom-0`). With padding, text, and the action button itself, the height of this bar ranges from **100px to 140px**. Because the scroll-to-top button is fixed at `bottom-8` (32px from the bottom), it lands directly on top of the right-hand side of the sticky actions container.

---

## Industry Best Practices & Approaches

When handling overlapping floating action elements (like Scroll-to-Top buttons or FABs) and sticky bottom content, modern web applications utilize a few primary strategies:

1. **Responsive / Raised Fixed Positioning (Recommended)**
   * **Concept:** Keep the floating button globally, but raise its bottom offset specifically on mobile and tablet breakpoints where a sticky bar is expected.
   * **Tailwind implementation:** Use classes like `bottom-32 md:bottom-8` (128px on mobile/tablet, 32px on desktop).
   * **Pros:** Highly robust, simple, pure CSS, requires no JS layout monitoring.
   * **Cons:** The button floats higher on all mobile screens, even those without a sticky bar (though this is typically acceptable and keeps it well out of the way of thumb zones).

2. **Conditional Class Injection based on Page Context**
   * **Concept:** Modify the positioning class of the scroll-to-top button dynamically depending on the active page/route.
   * **Implementation:** Add a class (e.g. `has-bottom-bar`) to the scroll-to-top container if `currentPage` is `customize`, `checkout`, `cart`, etc. This class changes `bottom` from `bottom-8` to `bottom-32`.
   * **Pros:** Keeps the button in its standard clean position (`bottom-8`) on pages without any bottom bar, and only raises it when needed.
   * **Cons:** Slightly more complex JS logic to maintain as new pages are added.

3. **Page-Specific Disabling**
   * **Concept:** Hide the scroll-to-top button entirely on configuration, customize, and checkout screens.
   * **Pros:** Cleans up the viewport. Users rarely need to scroll back to the top of a form or item customization modal on mobile, as these screens are meant for completing specific actions.
   * **Cons:** Scroll-to-top is unavailable if the user scrolls deep into long option lists.

---

## Proposed Solution: Responsive Positioning with Context Awareness

We will combine **Responsive Positioning (Approach 1)** and **Conditional Offsets (Approach 2)** for a highly polished user experience.

1. **Default Viewports (Desktop / Large Screens):** Keep the button at `bottom-8 right-8` where it fits cleanly into the desktop layout grid.
2. **Mobile & Tablet Viewports:**
   * Move the button slightly closer to the right edge (`right-4` instead of `right-8` on mobile) to avoid blocking main content.
   * Shift the button vertically (`bottom-32`) only on pages that contain a sticky bottom action bar (such as `customize`, `customize-alt`, `cart`, `checkout`, `order-details`, etc.) to clear the action bar.
   * On standard pages without a sticky bottom bar, keep it at a slightly lower position (`bottom-20` on mobile) to maintain clean spacing while staying accessible.

---

## Proposed Changes

### Core Logic

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

Update the scroll-to-top button wrapper markup around line 9385. We will detect whether the current page features a sticky bottom bar and apply the raised offset classes.

```javascript
  // Detect if the current page has a sticky bottom action bar
  const pagesWithBottomBar = [
    "customize",
    "customize-alt",
    "cart",
    "checkout",
    "order-details",
    "order-details-alt",
    "menu" // Menu has the bottom sticky cart summary bar on mobile
  ];
  const hasBottomBar = pagesWithBottomBar.includes(currentPage);
  
  // Apply classes dynamically:
  // - On desktop (md:): bottom-8 right-8
  // - On mobile/tablet with bottom bar: bottom-32 right-4
  // - On mobile/tablet without bottom bar: bottom-20 right-4
  const positionClasses = hasBottomBar 
    ? "bottom-32 md:bottom-8 right-4 md:right-8" 
    : "bottom-20 md:bottom-8 right-4 md:right-8";

  const scrollToTopBtnHtml = `
      <!-- Global Scroll to Top Button -->
      <div class="fixed ${positionClasses} z-[90] pb-bottom-safe pointer-events-none">
          <button id="scroll-to-top-btn" 
                  onclick="window.scrollTo({top: 0, behavior: 'smooth'})" 
                  class="w-14 h-14 bg-[#da2377] text-white rounded-full shadow-xl flex items-center justify-center hover:opacity-90 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 opacity-0 pointer-events-none">
              <i class="fa-solid fa-arrow-up text-xl pointer-events-none"></i>
          </button>
      </div>
  `;
```

---

## Verification Plan

### Manual Verification
1. Open the local application on a mobile/tablet viewport layout (using Chrome/Safari Developer Tools responsive simulator).
2. Navigate to the item customization screen (e.g. customized ramen item).
3. Scroll down to trigger the scroll-to-top button.
4. Verify that the button is positioned above the "Add to Cart" sticky bottom container and does not overlap it.
5. Navigate to a standard content page (like `privacy` or `profile`) and verify the scroll-to-top button's position.
6. Verify that on desktop viewports, the button displays in its original `bottom-8 right-8` position.

---

## Task Checklist

- [x] Reposition Scroll-to-Top Button in app.js
  - [x] Implement conditional positioning logic based on active pages
  - [x] Update the scroll-to-top HTML markup in app.js
- [x] Verify positioning on mobile, tablet, and desktop viewports
- [x] Create walkthrough documentation

---

## Walkthrough

We have successfully repositioned the global "scroll-to-top" floating button to prevent it from overlapping with sticky bottom action bars on mobile and tablet screens.

## Changes Made

### Core Logic

#### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
We updated the scroll-to-top button container to check the current page context and dynamically assign responsive positioning classes:
1. **Pages with bottom action bars** (e.g. `customize`, `customize-alt`, `cart`, `checkout`, `checkout-rewards`, `order-details`, `order-details-alt`, `order-status`, `menu`, `menu-single`, `dashboard`):
   * Assigned `bottom-32 right-4 md:bottom-8 md:right-8`.
   * On mobile/tablet, this moves the button up to **128px (`bottom-32`)** and closer to the right margin (**16px / `right-4`**) to clear the 100-140px sticky bottom bars.
   * On desktop (`md:` breakpoint), it reverts to **32px (`bottom-8`)** and **32px (`right-8`)** where no sticky bars overlap.
2. **Other pages** (without bottom bars):
   * Assigned `bottom-20 right-4 md:bottom-8 md:right-8`.
   * On mobile/tablet, it is placed at **80px (`bottom-20`)** and **16px (`right-4`)** which avoids blocking standard page text or entering the lower screen thumb zone, while maintaining optimal aesthetics.

---

## Verification & Layout Metrics

We verified the positioning on both mobile and desktop viewports on the item customization page (`http://localhost:8000/order-customize.html`) using a browser subagent to query exact element dimensions and coordinates:

### 1. Mobile Layout (width ~390px - 500px, height ~681px - 844px)
* **Sticky bottom "Add to Cart" bar**:
  * Vertical layout: Spans from `543.75px` to `680.75px` (height of `137px` at the bottom of the screen).
* **Scroll-to-Top Button**:
  * Vertical layout: Spans from `473px` to `529px` (height of `56px`).
* **Overlap Check**: The bottom of the scroll-to-top button (`529px`) is **`14.75px` above** the top of the sticky bottom bar (`543.75px`). **There is zero overlap between the button itself and the sticky bottom bar.**

### 2. Desktop Layout (width 1280px, height 679px)
* **"Add to Cart" block**: Rendered inline as a standard block element rather than a sticky bottom container.
* **Scroll-to-Top Button**:
  * Positioned at the bottom-right via `md:bottom-8` and `md:right-8`.
  * Vertical layout: Spans from `567px` to `623px` (`56px` from the bottom of the viewport).
* **Overlap Check**: Since there is no sticky bar on desktop, the button sits cleanly in the bottom-right corner.

---

## Visual Verification Recording

The steps taken by the subagent to perform window resizing, scrolling, and layout metrics computation were recorded in a browser session. You can view the visual walkthrough here:

![Mobile Verification Recording](/Users/michael-riley/.gemini/antigravity-ide/brain/52fb9f8d-a752-44c2-aa8b-3aa716ba88c5/scroll_to_top_check_1785646575588.webp)
