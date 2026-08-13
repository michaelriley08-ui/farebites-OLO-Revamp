# Implementation Plan: Restoring Menu Scroll Position on Back Navigation

---


**Date:** 2026-08-09  
**Conversation ID:** `05de32a4-2a53-41f5-868f-f33fbccb3d6c`


---

## Implementation Plan

This plan addresses the customer feedback regarding the back button behavior on the customize item page. Currently, clicking "Back" from an item's customization view scrolls the user back to the very top of the menu (or occasionally redirects them to select location/time if the session resets).

We will modify the navigation flow to store the user's scroll position when they click a menu item and restore it when they navigate back to the menu.

## Current Behavior & Rationale

1. **Top of Menu Scroll Reset**: The app is built with separate pages (`menu.html` and `order-customize.html`). When a user selects an item, a fresh document load occurs. Navigating "Back" loads the menu page anew, causing the scroll position to reset to the top.
2. **Redirection to Choose Location/Pickup**: If a user navigates directly to `order-customize.html` without an active store session (`selectedLocationId` is empty/null), the routing handler (`navigateTo`) redirects them to `locations-alt.html` to establish the store/fulfillment context. Additionally, clicking on the pickup method header below the "Customize" title on the customization page intentionally redirects the user to change their location/time.

---

## Proposed Changes

To preserve the scroll position on the menu (and favorites) pages:

### 1. Assign unique identifier to menu scroll containers
In [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js), we will add `id="menu-scroller"` to the main scroll containers returned by:
- `renderMenuPage()` (lines 1788)
- `menu-favorites` route renderer (line 8058)

### 2. Save scroll position on item select
In `selectItemAndNavigate(index)` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js), we will capture the current scroll position of `#menu-scroller` before transition:
```javascript
  const scroller = document.getElementById("menu-scroller");
  if (scroller) {
    mockupState.menuScrollPosition = scroller.scrollTop;
  }
```

### 3. Restore scroll position post-render
At the end of `renderPage()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js), if the target page is `menu`, `menu-single`, or `menu-favorites`, we will check for a saved scroll position and apply it with a slight delay to ensure rendering completion:
```javascript
  if (currentPage === "menu" || currentPage === "menu-single" || currentPage === "menu-favorites") {
    if (typeof mockupState.menuScrollPosition === "number" && mockupState.menuScrollPosition > 0) {
      setTimeout(() => {
        const scroller = document.getElementById("menu-scroller");
        if (scroller) {
          scroller.scrollTop = mockupState.menuScrollPosition;
          mockupState.menuScrollPosition = 0;
          persistAllState();
        }
      }, 50);
    }
  }
```

---

## Verification Plan

### Manual Verification
1. Open the dev server and navigate to Castro Valley menu.
2. Scroll down to a category lower in the list (e.g. Milk Tea or Snack category).
3. Click on a menu item to open its customization page.
4. Verify you see the item detail correctly.
5. Click the "Back" button at the top-left of the customize header.
6. Verify you are returned to the menu page and the list is scrolled exactly to the item you clicked.
7. Repeat the same behavior using the browser's native back button.

---

## Task Checklist

- [x] Add `id="menu-scroller"` to `renderMenuPage` scroll container in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- [x] Add `id="menu-scroller"` to `menu-favorites` layout scroll container in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- [x] Save the current scroll position of `#menu-scroller` inside `selectItemAndNavigate` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- [x] Implement scroll position restoration at the end of `renderPage()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- [x] Verify the scroll restoration manually by testing navigation between menu list and item customization view

---

## Walkthrough

This walkthrough summarizes the improvements made to prevent losing the user's scroll position when navigating back from the item customization screen (`order-customize.html`) to the menu list (`menu.html` or `menu-favorites.html`).

## Changes Made

### 1. Unique Scroller ID in HTML Layouts
In [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js), we assigned `id="menu-scroller"` to the main viewport scrollable containers in both:
- `renderMenuPage()` (default menu and menu-single page routes)
- `menu-favorites` route renderer

### 2. Auto-Recording Scroll Position (Window + Element)
- Inside `selectItemAndNavigate(index)` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js), before fetching detail or calling any render routines, we capture the scroll position. We look up both `#menu-scroller`'s `scrollTop` (for element-level scrolling) and `window.scrollY` (for browser window-level scrolling).
- Inside the global `navigateTo(pageId, options)` function in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js), we perform the same dual-check, ensuring we capture whichever scroll container is currently active, guarding against overwriting any previously saved positive scroll position with `0`.

### 3. Preventing Background Reset (Page Change Tracking)
- At the start of `renderPage()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js), we check if the function is re-rendering the same page that was already active (`window._lastRenderedPage === currentPage`). If so, we capture its current scroll position before the layout is replaced.
- We modified the default `window.scrollTo(0, 0)` command in `renderPage()` to only execute when a true page transition occurs (`pageChanged` is `true`).
- At the end of `renderPage()`, if we re-rendered the same page and a scroll offset was captured (`currentScrollPos > 0`), we instantly restore it to prevent visual jumps during background API completions.

### 4. Dynamic Post-Render Restoration (Window + Element)
At the end of `renderPage()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js), if the active page matches one of the menu pages and a saved `menuScrollPosition` value exists (e.g., returning from item customization):
- We wait 50ms for the browser to draw the new page layout.
- We restore the scroll position on the inner element (`scroller.scrollTop = scrollPos`).
- We also restore the browser window-level scroll position (`window.scrollTo(0, scrollPos)`).
- We clear the stored position back to `0` and persist the state.

---

## What Was Tested & Validation Results

### Test Flow Validation
1. Navigated to local web server Castro Valley menu.
2. Scrolled down the category tabs and menu list.
3. Selected a drink item.
4. Clicked the "< Back" button in the customization view.
   - **Result**: Successfully returned to the menu page, and scroll position was restored exactly to where the user clicked the item.
5. Repeated navigation to customize a snack item.
6. Clicked the browser's native back button.
   - **Result**: Successfully loaded the menu page and restored the user's correct vertical scroll position.
7. Simulated background API load triggers.
   - **Result**: Scroll positions remained completely static, avoiding visual jumps when data loaded.
