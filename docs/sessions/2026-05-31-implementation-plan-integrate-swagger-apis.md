# Implementation Plan: Integrate Swagger APIs

---


**Date:** 2026-05-31  
**Conversation ID:** `891f3569-480c-491a-9eed-e522be5c37de`


---

## Implementation Plan

This plan outlines the changes needed to integrate the OpenAPI endpoints from `https://olowebapidev2.azurewebsites.net/swagger/index.html` into the FareBites front-end. We will replace the hardcoded mockup data for locations and menu items with dynamic `fetch` calls to the live API.

## User Review Required

> [!IMPORTANT]
> - We will introduce asynchronous network requests (`fetch`) into [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js). Since the app is built as a client-side single-page app served from static files (e.g., via [test-server.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/test-server.js)), all APIs must support CORS (Cross-Origin Resource Sharing). The `azurewebsites.net` backend generally supports CORS, but we will add error resilience and falls-back to mock data in case of network or origin errors.
> - We will map the active location choice to a real `locationId` (e.g. Tempe) so that when a user picks a location, we fetch the corresponding menu items for that specific location.

## Proposed Changes

### Configuration and API Integration

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
We will add configuration settings and fetch helpers to retrieve data from the Swagger API endpoints:
1. **API Settings:**
   Add `API_BASE_URL = 'https://olowebapidev2.azurewebsites.net'` to the top of the script.
2. **Dynamic State:**
   Enhance `DEFAULT_STATE` to hold:
   - `locations`: Array of locations fetched from `/api/Locations`.
   - `categories`: Array of categories fetched from `/api/RestaurantMenu/location/{locationId}/menu`.
   - `menuItems`: Array of all items fetched across categories.
3. **Data Fetching Logic:**
   - Implement `fetchLocations()` to query `GET /api/Locations` and populate state.
   - Implement `fetchMenuAndItems(locationId)` to:
     - Query `GET /api/RestaurantMenu/location/{locationId}/menu` to get categories.
     - Loop through the categories and query `GET /api/RestaurantMenu/location/{locationId}/category/{categoryId}/items` to gather items.
     - Fall back to the original hardcoded arrays if any API call fails.
4. **UI Binding:**
   - Update `routes['location-pick']` to render the dynamic locations fetched from `/api/Locations` (or fall back to the mockup `LOCATIONS` array).
   - Update the menu rendering functions to use the dynamically fetched `menuItems` (falling back to `MENU_ITEMS` mock array).

## Verification Plan

### Automated / Browser Tests
1. **API Responses verification:**
   Use the browser console or mock a response to ensure `fetch` correctly parses location lists and menu objects.
2. **CORS validation:**
   Test loading the application in the browser and picking a location to ensure the network request returns status `200 OK` without origin blocks.

### Manual Verification
1. Launch the app locally (using `npm run dev` or [test-server.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/test-server.js)).
2. Navigate to "Pick a Location" and verify that locations load.
3. Pick a location, and verify that the items in the menu load dynamically from the Swagger server.

---

## Task Checklist

- `[x]` Define `API_BASE_URL` and add new dynamic state fields to `DEFAULT_STATE` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- `[x]` Implement `fetchLocations()` and `fetchMenuAndItems(locationId)` API calls in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- `[x]` Update location picking logic to load locations dynamically from the `/api/Locations` endpoint
- `[x]` Update menu and category rendering logic to render items fetched dynamically from the API
- `[x]` Add error handling, fallback support for offline/mock data, and verify the changes
- `[x]` Implement relative asset path resolution for categories and items from `https://olodev.azurewebsites.net/`
- `[x]` Match static locations to correct database location IDs (7, 9, 10) to load authentic i-Tea menus and fallbacks

---

## Walkthrough

We have successfully integrated the Swagger APIs from `https://olowebapidev2.azurewebsites.net/swagger/index.html` and resolved dynamic item and category images using `https://olodev.azurewebsites.net/`, focusing exclusively on the **i-Tea** brand.

## Key Changes Made

### 1. API Configuration & Helpers
- Defined `API_BASE_URL` pointing to the live API dev server.
- Added dynamic state keys (`apiLocations`, `apiCategories`, `apiMenuItems`, `selectedLocationId`, `isLoading`) to `DEFAULT_STATE` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js).
- Added `fetchLocations()` helper to request locations, **filtering the list exclusively** to entries containing "i-Tea" or "itea" so that non-boba brands (like Long Wong's or Yupha's) are never loaded into the application state from the API.
- Added `fetchMenuAndItems(locationId)` to dynamically query the live menu categories and items in each category.
- Created `getActiveCategories()` and `getActiveMenuItems()` selector wrappers to seamlessly switch between local mock fallbacks and fetched live API data.

### 2. Image Resolution & Fallbacks
- Added `resolveImageUrl(url, defaultUrl)` to automatically prepend the old site domain (`https://olodev.azurewebsites.net/`) to relative category (`/imagescategories/`) and menu item (`/imagesmenu/`) paths.
- Setup fallback category and item images specifically for i-Tea menu items (using standard boba images as fallback assets) when specific product images are omitted in the API response.

### 3. UI & Location Mapping
- Corrected the location IDs in the static `LOCATIONS` array in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) to map **exclusively to active i-Tea stores** on the API server:
  - `i-Tea - Castro Valley` -> `7`
  - `i-Tea - Oakland` -> `9`
  - `i-Tea - San Leandro` -> `10`
- Mapped all other static `i-Tea` locations in the array to one of the active live i-Tea location IDs (`7`, `9`, or `10`) so that selecting any store in the chooser will fetch and render a real, live boba menu from the API server.
- Completely removed `Long Wong's` and `Yupha's Thai Kitchen` entries from the static `LOCATIONS` array and code templates.
- Added a full-screen loading spinner overlay to `renderPage` when fetching data.

## Verification
- Verified image rendering: confirmed that paths returned by the API (like `/imagesmenu/A1-Premium-Black-Tea.jpg`) load correctly as `https://olodev.azurewebsites.net/imagesmenu/A1-Premium-Black-Tea.jpg` (200 OK).
- Tested brand exclusion: verified that absolutely no references to non-i-Tea menus exist, and selecting any location loads an authentic boba tea menu.
