# 2-Column Mobile Menu Layout & Single-Column Backup

---


**Date:** 2026-07-31  
**Conversation ID:** `347d1b6a-b442-4aba-b1a7-dcfd810f8c48`


---

## Implementation Plan

Create a backup page `menu-single.html` to preserve the current single-column mobile menu layout, and update `menu.html` (via `app.js`) to display a 2-column card layout on mobile view.

## Proposed Changes

### Configuration and Routing
Modify the routing structure in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) to support the new backup page `menu-single.html` mapping to a `menu-single` route ID.

#### [NEW] [menu-single.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu-single.html)
- A copy of [menu.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu.html), but with `<body data-page="menu-single">`.

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- Add `"menu-single": "menu-single.html"` to `PAGE_FILE_MAP`.
- Add `"menu-single": "Menu Single"` to `PAGE_LABELS`.
- Register the `"menu-single"` route mapping to `() => renderMenuPage()`.
- Update URL parameters initialization, store fallback redirection, and `navigateTo()` functions to handle `"menu-single"` identically to `"menu"`.

### Layout grid customization
Update [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)'s `renderMenuPage()` to dynamically toggle columns and image heights in mobile view based on the current page route.

- **Categories Grid**:
  - Switch from: `class="${isDesktop ? "grid grid-cols-4 gap-x-3 gap-y-5" : "grid grid-cols-1 md:grid-cols-2 gap-[10px]"}"`
  - Switch to: `class="${isDesktop ? "grid grid-cols-4 gap-x-3 gap-y-5" : (currentPage === "menu-single" ? "grid grid-cols-1 md:grid-cols-2 gap-[10px]" : "grid grid-cols-2 gap-[10px]")}"`
- **Search Results Grid**:
  - Switch from: `class="${isDesktop ? "grid grid-cols-4 gap-x-3 gap-y-5" : "grid grid-cols-1 gap-[10px]"}"`
  - Switch to: `class="${isDesktop ? "grid grid-cols-4 gap-x-3 gap-y-5" : (currentPage === "menu-single" ? "grid grid-cols-1 gap-[10px]" : "grid grid-cols-2 gap-[10px]")}"`
- **Favorites Grid**:
  - Switch from: `class="${isDesktop ? "grid grid-cols-4 gap-5" : "grid grid-cols-1 md:grid-cols-2 gap-[10px]"}"`
  - Switch to: `class="${isDesktop ? "grid grid-cols-4 gap-5" : (currentPage === "menu-single" ? "grid grid-cols-1 md:grid-cols-2 gap-[10px]" : "grid grid-cols-2 gap-[10px]")}"`
- **Image Heights**:
  - Change card image height on mobile from static `h-64` to `h-56` in the 2-column view to keep it proportional and look premium, while leaving it `h-64` in the single-column backup view.

## Verification Plan

### Manual Verification
- Launch the dev environment.
- Access `http://localhost:8000/menu.html?store=7` in mobile viewport size and verify cards are rendered in 2 columns.
- Access `http://localhost:8000/menu-single.html?store=7` in mobile viewport size and verify cards are rendered in a single column as before.

---

## Task Checklist

- [x] Create `menu-single.html` backup page
- [x] Update `PAGE_FILE_MAP`, `PAGE_LABELS`, and routes in `app.js`
- [x] Implement conditional 2-column layouts and card heights in `app.js`'s `renderMenuPage`
- [x] Update initialization and redirection logic in `app.js` to support `menu-single`
- [x] Verify the implementation via visual check

---

## Walkthrough

We have updated the mobile menu page layout to display cards in a 2-column layout, added an automatic scroll animation for the featured items carousel, and created a backup file `menu-single.html` to preserve the original 1-column layout.

## Changes Made

### 1. Created Backup Page
- Created [menu-single.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu-single.html) as a copy of the original [menu.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu.html), configured with `data-page="menu-single"`.

### 2. Configured Routing & Initialization in app.js
- Registered `"menu-single"` in `PAGE_FILE_MAP`, `PAGE_LABELS`, and the `routes` directory mapping in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js).
- Updated validation logic in `navigateTo()` and `DOMContentLoaded` event listeners to treat `"menu-single"` identically to `"menu"`.
- Handled autofocussing search logic when reloading the page.

### 3. Implemented 2-Column Responsive Layouts
- Updated `renderMenuPage()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) to dynamically toggle card layouts for mobile views:
  - **Menu Category Grid**: Toggles between `grid-cols-1 md:grid-cols-2` (single-column mobile, 2-column tablet) on `menu-single` and `grid-cols-2` (2-column mobile) on the standard `menu` page.
  - **Search Grid**: Toggles between `grid-cols-1` on `menu-single` and `grid-cols-2` on `menu` page.
  - **Favorites Grid**: Toggles between `grid-cols-1 md:grid-cols-2` on `menu-single` and `grid-cols-2` on `menu` page.
- **Card Image Heights**: Adjusted mobile image heights to `h-56` in the 2-column view to keep it proportional, while keeping the original `h-64` in the single-column backup view.

### 4. Added Featured Items Autoplay Animation
- Assigned the container element ID `menu-featured-carousel` to the featured items scroll section in `renderMenuPage()`.
- Implemented an automatic scroll timer in `app.js`'s page lifecycle that scrolls the carousel every 4 seconds. 
- Integrated automatic timer resetting on manual swipe/drag interactions (`touchstart` and `mousedown` events) so that manual browsing stays responsive.
- Configured correct layout spacing offsets (14px on desktop, 12px on mobile/tablet) so that scrolling positions align precisely.

---

## Verification & Screenshots

We validated the layout changes and autoplay functionality using the browser subagent.

### 1. Two-Column Layout on `menu.html`
The main menu page renders product cards side-by-side in 2 columns.

![2-Column Layout on menu.html](/Users/michael-riley/.gemini/antigravity-ide/brain/347d1b6a-b442-4aba-b1a7-dcfd810f8c48/menu_500px_scrolled_1785464646746.png)

---

### 2. Single-Column Layout on `menu-single.html`
The backup menu page preserves the original stacked 1-column layout.

![1-Column Layout on menu-single.html](/Users/michael-riley/.gemini/antigravity-ide/brain/347d1b6a-b442-4aba-b1a7-dcfd810f8c48/menu_single_500px_scrolled_1785464654020.png)

---

### 3. Autoplay Carousel Verification
The featured carousel scroll animation was verified by letting the page wait. The carousel automatically slides after 4 seconds.

| Carousel State (0 seconds) | Carousel State (5 seconds) |
|---|---|
| ![Initial State](/Users/michael-riley/.gemini/antigravity-ide/brain/347d1b6a-b442-4aba-b1a7-dcfd810f8c48/carousel_initial_1785465528760.png) | ![After 5s Autoplay](/Users/michael-riley/.gemini/antigravity-ide/brain/347d1b6a-b442-4aba-b1a7-dcfd810f8c48/carousel_after_5s_1785465536875.png) |
