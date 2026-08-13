# Rename Restaurant Home to Index and Index to Restaurant Login

---


**Date:** 2026-05-29  
**Conversation ID:** `e058c8ae-2898-494b-ad29-2e19568f2e0f`


---

## Implementation Plan

We will rename the files to make `restaurant-home.html` the main `index.html` entry point of the site, and rename the old `index.html` (which was the landing/login portal) to `restaurant-login.html`.

## User Review Required

> [!WARNING]
> Renaming the default entry point of the site (`index.html`) from showing the landing page to showing the logged-in restaurant home page will change what page displays first when loading the site root (`/`).

## Open Questions

> [!IMPORTANT]
> **1. Handling of `restaurant-landing.html` vs. `restaurant-login.html`:**
> Currently, `restaurant-landing.html` exists in your project and is identical to the old `index.html` (both have `data-page="restaurant-landing"`). 
> When we rename the old `index.html` to `restaurant-login.html`:
> - Should we delete the redundant `restaurant-landing.html`?
> - Or should we update the `"restaurant-landing"` route in `PAGE_FILE_MAP` to point to the newly renamed `restaurant-login.html` file?

## Proposed Changes

### File Renames

#### [NEW] [index.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/index.html)
The current `restaurant-home.html` will be renamed to `index.html`.

#### [NEW] [restaurant-login.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/restaurant-login.html)
The current `index.html` will be renamed to `restaurant-login.html`.

#### [DELETE] [restaurant-home.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/restaurant-home.html)
This file is renamed to `index.html`.

### Route Mapping Updates

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
Update route mapping inside `PAGE_FILE_MAP`:
- `"restaurant-home": "index.html"`
- `"home": "index.html"`
- `"restaurant-landing": "restaurant-login.html"`

#### [MODIFY] [old-retired/app-old.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/old-retired/app-old.js)
Align the route mappings in the retired copy.

## Verification Plan

### Manual Verification
- Verify navigation to the home page redirects/resolves to `index.html`.
- Verify navigation to the restaurant landing page resolves to `restaurant-login.html`.

---

## Task Checklist

- [x] Rename index.html -> restaurant-login.html
- [x] Rename restaurant-home.html -> index.html
- [x] Delete redundant restaurant-landing.html
- [x] Update PAGE_FILE_MAP routes in app.js
- [x] Update PAGE_FILE_MAP routes in old-retired/app-old.js
- [x] Verify that all navigation works correctly

---

## Walkthrough

We completed the restructures for the favorites page, the restaurant home page, and the landing page:

## Changes Made

### 1. Renames and Deletions
- Renamed `manage-favorites.html` to [menu-favorites.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu-favorites.html).
- Renamed `restaurant-home.html` to [index.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/index.html) (serving as the default home page).
- Renamed the old landing page `index.html` to [restaurant-login.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/restaurant-login.html).
- Deleted the redundant `restaurant-landing.html` page to prevent duplicate files.

### 2. Desktop Order Confirmation Layout Cleanup
- Cleaned up the desktop view for [order-confirm.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/order-confirm.html) to stack vertically and center neatly with `max-w-2xl` width, resolving the issue where the footer was pushed to the right side of the screen.
- Closed an unclosed outer `div` tag in the `'order-confirm'` render templates inside both JS files, which was causing the global footer to render inside a side-by-side flexbox context.

### 3. Code Updates
- Updated [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) and [old-retired/app-old.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/old-retired/app-old.js) mappings:
  - `"menu-favorites": "menu-favorites.html"`
  - `"home": "index.html"`
  - `"restaurant-home": "index.html"`
  - `"restaurant-landing": "restaurant-login.html"`
- Structured `'order-confirm'` route template vertically on desktop to center stack: Order Confirmed header $\rightarrow$ Pick Up Time & Location grid $\rightarrow$ Order Details $\rightarrow$ Action buttons.

## Verification Results
- All navigation clicks, route lookups, and redirects resolve correctly to the renamed pages without any broken routes.
- The Order Confirmation page now renders perfectly centered on desktop, and the global footer aligns correctly at the bottom of the screen.
