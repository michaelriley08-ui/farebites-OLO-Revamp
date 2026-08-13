# Implementation Plan: Add Category Navigation Pills on a New Menu Page (menu-alt.html)

---


**Date:** 2026-06-02  
**Conversation ID:** `03a701be-af42-4dc2-a462-1ebd8cdda3e3`


---

## Implementation Plan

This plan details the steps to create a new page, `menu-alt.html`, which will be a clone of `menu.html` but features a horizontal category selection pill bar (responsive for desktop and mobile) above the main category listings to allow smooth-scrolling to any menu section.

## User Review Required

> [!IMPORTANT]
> The link to `menu-alt.html` will be added to the centered pages dropdown directly below `menu.html` for testing and access, but will not be linked elsewhere in the primary user flow, as requested.

## Proposed Changes

### Core Pages & Navigation
---

#### [NEW] [menu-alt.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu-alt.html)
- A copy of `menu.html`, but with the body's `data-page` set to `"menu-alt"`.

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
1. Add `"menu-alt": "menu-alt.html"` to `PAGE_FILE_MAP`.
2. Add `"menu-alt": "Menu (Alternative)"` to `PAGE_LABELS`.
3. Map `menu-alt` in redirect checks on load and navigation to force store selection:
   ```javascript
   if ((basePageId === 'menu' || basePageId === 'menu-alt' || basePageId === 'customize') && !mockupState.selectedLocationId)
   ```
4. Handle search input autofocus for `menu-alt`:
   ```javascript
   if ((currentPage === 'menu' || currentPage === 'menu-alt') && mockupState.menuSearchOpen)
   ```
5. Clone the `'menu'` route into `'menu-alt'` within the `routes` object.
6. In `routes['menu-alt']`, when `mockupState.menuTab === 'menu'`, render a premium category navigation pill bar directly above the categories listing (below the featured promo carousel if active).
7. In the pages dropdown template:
   - Add `<a href="menu-alt.html" class="dropdown-item lowercase">menu-alt.html</a>` directly below `menu.html`.

### UI Design for Navigation Pills (Desktop & Mobile)
- **Mobile View**: Horizontal scroll bar with hidden scrollbar styling (`flex overflow-x-auto gap-2.5 py-2 px-1 scrollbar-hide snap-x whitespace-nowrap`).
- **Desktop View**: Wrapping grid/flex layout displaying all pills cleanly on multiple rows if needed (`lg:flex lg:flex-wrap lg:gap-2.5 lg:py-2 lg:whitespace-normal`).
- **Pill Styles**:
  - Outlined with light border (`border border-gray-200 hover:border-violet-300`).
  - Background hover transition (`bg-white hover:bg-violet-50`).
  - Bold, uppercase text style (`text-gray-700 hover:text-violet-700 text-[11px] font-black tracking-wider`).
  - Active transition click feedback (`active:scale-95`).
- **Interaction**: Clicking a pill will trigger smooth scrolling to the corresponding target section (`category-section-${cat.categoryId}`) utilizing `scrollIntoView({ behavior: 'smooth', block: 'start' })`.

## Verification Plan

### Automated/Manual Verification
- Open [menu-alt.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu-alt.html) using the Pages dropdown from any page.
- Verify that selecting a store takes the user to the alternative menu.
- Verify that the category pills are visible above the categories (and below the promo carousel if present).
- Verify that clicking any category pill smoothly scrolls the window to the correct category section (e.g., *Teaspresso Series*, *Milk Tea Specialty*, etc.).
- Verify that the layout wraps nicely on desktop and scrolls horizontally on mobile screen widths.

---

## Task Checklist

- [x] Create `menu-alt.html` as a copy of `menu.html` with `data-page="menu-alt"`
- [x] Add `menu-alt` mappings to `PAGE_FILE_MAP` and `PAGE_LABELS` in `app.js`
- [x] Update redirect and autofocus checks for `menu-alt` in `app.js`
- [x] Clone the `'menu'` route into `'menu-alt'` within the `routes` object in `app.js`
- [x] Add category navigation pills rendering in `routes['menu-alt']` tab view
- [x] Add `menu-alt.html` link under `menu.html` in the Core Pages navigation dropdown
- [x] Verify functionality (scrolling, layout, pages dropdown link)
- [x] Remove rewards icon from top navigation on `menu-alt.html` page (leaving it in `menu.html`)

---

## Walkthrough

Here is a summary of the changes implemented for the category navigation pills on the new alternative menu page (`menu-alt.html`).

## Changes Made

### Core Templates & Mappings
1. **[NEW] [menu-alt.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu-alt.html)**:
   Created a cloned version of `menu.html` referencing the core `api.js` and `app.js` files, configured with `data-page="menu-alt"` on the body.
2. **[app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)**:
   - Added `"menu-alt": "menu-alt.html"` to `PAGE_FILE_MAP`.
   - Added `"menu-alt": "Menu (Alternative)"` to `PAGE_LABELS`.
   - Added `menu-alt.html` link below `menu.html` inside the Pages navigation dropdown.

### Routing & Redirection
1. **Redirection & Caching**:
   - Mapped `menu-alt` in redirection checks so that landing on the alternative menu page without a selected location redirects the user to the store picker (`locations.html`).
   - Cached `currentPage` as `mockupState.lastMenuPage` inside `selectItemAndNavigate`, ensuring the "Back to Menu" buttons on customization pages correctly return the user to `menu-alt.html` instead of resetting to `menu.html`.
2. **Refactored Routing**:
   - Refactored `routes['menu']` into a shared, reusable function `renderMenuPage(isAlternative)`.
   - Mapped route `'menu'` to `renderMenuPage(false)` and `'menu-alt'` to `renderMenuPage(true)`.
   - Conditionally hidden the rewards icon (`fa-award` medal button) in the sticky top header of the navigation bar when `isAlternative` is `true` (i.e. on `menu-alt.html`), keeping it fully visible and functional on the standard `menu.html`.

### Category Navigation Pills Layout
In `renderMenuPage` (when `isAlternative = true` and tab is `menu`):
- Injected a horizontal category navigation pill bar directly above the categories list.
- **Pills Styling**: Formatted as medium grey pills (`bg-gray-400 text-white hover:bg-gray-500`) to match the color of the inactive tab headers ("Featured", "Favorites", and "History"), without any surrounding border line.
- **Spacing Optimization**: Kept the vertical padding of the pills themselves at their original height (`py-2.5 px-4`) for comfortable internal hit targets, but reduced the spacing above and below the container by 60-70% across all viewports using important Tailwind utility overrides (`!mt-3 !-mb-8`) to pull the surrounding sections closer together.
- **Mobile Styling**: Horizontally scrollable row with hidden scrollbars for swipe navigation.
- **Desktop Styling**: Wrapping grid/flex layout displaying all categories across multiple rows.
- **Click Behavior**: Smoothly scrolls the viewport to the corresponding section header element (e.g. `#category-section-7` / `#new-items-section`) with sticky header height compensation.

## Validation Results

- **Syntax & Build Check**: Verified that the modified `app.js` is syntactically correct:
  ```bash
  node -c app.js
  ```
- **Navigation Flow**: Verified that clicking "Back to Menu" from customization preserves the alternative menu selection if the flow originated from `menu-alt.html`.
