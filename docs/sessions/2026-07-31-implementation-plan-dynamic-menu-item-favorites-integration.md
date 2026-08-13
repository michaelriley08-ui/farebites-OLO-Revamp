# Implementation Plan — Dynamic Menu Item Favorites Integration

---


**Date:** 2026-07-31  
**Conversation ID:** `2b0b8f41-2014-40bf-915a-b0c1693c84ce`


---

## Implementation Plan

Add dynamic menu item favorites functionality across the menu views (`menu.html`, `menu-single.html`, `menu-favorites.html`). This integration will communicate with the live backend `/api/Account/favorites` endpoints, support `localStorage` fallback for offline/guest users, and mirror the aesthetic design (purple heart animation) used on location favorites.

## User Review Required

> [!IMPORTANT]
> **API & Local Storage Hybrid Strategy**:
> If the user is logged in, favorites will automatically sync with the backend API (`GET`, `POST`, `DELETE` `/api/Account/favorites`). If the user is not logged in or offline, favorites will gracefully persist in `localStorage` (`farebites_menu_favorites`).

> [!NOTE]
> **Visual Styling**:
> Heart buttons will be overlaid in the top-right corner of menu item image cards. Unfavorited items display an outlined heart (`fa-regular fa-heart text-gray-400`); favorited items display a solid violet heart (`fa-solid fa-heart text-violet-600`) with a burst micro-animation on toggle.

---

## Proposed Changes

### 1. API Service Layer
#### [MODIFY] [api.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/api.js)
- Add `getFavorites()` -> `GET /api/Account/favorites`
- Add `addFavorite(menuItemId, locationId, restaurantId, userRating)` -> `POST /api/Account/favorites`
- Add `deleteFavorite(userFavoriteId)` -> `DELETE /api/Account/favorites/{userFavoriteId}`

---

### 2. State & UI Logic
#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- **State Initialization & Persistence:**
  - Load saved menu favorites from `localStorage` (`farebites_menu_favorites`) into `mockupState.favorites`.
  - Fetch favorites from `/api/Account/favorites` when logged in and merge/sync with local state.
- **Global Toggle Function:**
  - Implement `window.toggleMenuFavorite(item, event)` to handle favoriting/unfavoriting.
  - Apply `animate-heart-burst` micro-animation on toggle.
  - Persist updates to `localStorage` and trigger API call if authorized.
- **Product Card Overlay (Menu Feed, Search, Featured):**
  - Inject the heart toggle button in the top-right corner of card images in `renderMenuPage()` for both Desktop and Mobile layout renders.
- **Favorites Tab & Page View:**
  - Update `mockupState.menuTab === "favorites"` rendering to dynamically pull from `mockupState.favorites`.
  - Fix broken `toggleFavorite` reference on line 2199 to point to `window.toggleMenuFavorite`.
  - Ensure empty state displays properly when no favorites exist.

---

## Verification Plan

### Automated / Syntax Check
- Verify JS syntax after edits.

### Manual Verification
1. **Menu Card Favorites Interaction:**
   - Open `http://localhost:8000/menu.html?store=7`.
   - Click the heart icon on any menu item card.
   - Confirm the heart turns solid violet with burst animation without opening the customization page.
   - Reload page and verify favorited items persist.
2. **Favorites Tab:**
   - Click the "Favorites" tab on the menu page.
   - Verify the favorited item appears in the list.
   - Click the heart button on the favorited item card to remove it and verify it updates immediately.
3. **Menu Favorites Page:**
   - Navigate to `menu-favorites.html` and verify saved favorites load dynamically.

---

## Walkthrough

We have implemented dynamic menu item favorites across the FareBites online ordering platform. Favorites now sync with the live backend API (`/api/Account/favorites`) when users are logged in, while seamlessly persisting in `localStorage` (`farebites_menu_favorites`) for offline or guest users.

---

## Key Changes Made

### 1. API Integration Service
- Updated [api.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/api.js) to add client methods for backend favorites:
  - `getFavorites()`: `GET /api/Account/favorites`
  - `addFavorite(menuItemId, locationId, restaurantId, userRating)`: `POST /api/Account/favorites`
  - `deleteFavorite(userFavoriteId)`: `DELETE /api/Account/favorites/{userFavoriteId}`
  - `updateFavoriteRating(userFavoriteId, userRating)`: `PUT /api/Account/favorites/{userFavoriteId}`

### 2. State & Helper Logic
- Updated [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js):
  - **State Restoration:** Restored menu favorites from `localStorage` (`farebites_menu_favorites`) during app initialization in `loadMockupState()`.
  - **Dynamic Helper Functions:** Defined `window.isMenuItemFavorite(item)` and `window.toggleMenuFavorite(item, event)` to manage toggling menu favorites.
  - **Burst Animation:** Applied the `animate-heart-burst` class to heart button overlays when clicked.
  - **`removeFavorite(id)` Alias:** Updated `removeFavorite(id)` to delegate to `toggleMenuFavorite` for clean removal from the Favorites tab.

### 3. Product Card UI & Overlay Buttons
- Added circular top-right heart overlay buttons to product cards in:
  - Menu Category Feed
  - Menu Search Grid
  - Featured Specials Grid
  - Favorites Tab & Standalone `menu-favorites.html` View

---

## Visual Verification

![Menu Item Favorites Overlay](/Users/michael-riley/.gemini/antigravity-ide/brain/2b0b8f41-2014-40bf-915a-b0c1693c84ce/.system_generated/click_feedback/click_feedback_1785469691396.png)

- **Favorited Item (Left):** Solid violet heart inside a top-right circular badge (`fa-solid fa-heart text-violet-600`).
- **Unfavorited Item (Right):** Outlined heart inside a top-right circular badge (`fa-regular fa-heart text-gray-400 hover:text-violet-600`).

---

## How to Test
1. Open [http://localhost:8000/menu.html?store=7](http://localhost:8000/menu.html?store=7).
2. Click the heart icon on any product card in the category listing or search view to favorite/unfavorite it.
3. Switch to the **Favorites** tab to see your favorited items listed dynamically.
4. Reload the page to confirm that your selected favorites persist in browser storage.
