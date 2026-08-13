# Implementation Plan: Rename locations page and integrate interactive map

---


**Date:** 2026-05-31  
**Conversation ID:** `0fac9c1e-bd54-45ec-a316-057ad1a3bf7a`


---

## Implementation Plan

This plan details renaming `location-pick.html` to `locations.html` and replacing the static Google Maps iframe with a fully interactive Leaflet.js map featuring pinned locations and premium custom styling.

## User Review Required

> [!IMPORTANT]
> The static iframe mapping will be replaced by Leaflet.js, which renders interactive tiles and pins without requiring paid API keys. We will use CartoDB Positron light tiles to provide a modern, sleek design matching the branding.

## Proposed Changes

### Configuration and Assets

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- Update `PAGE_FILE_MAP` and `PAGE_LABELS` to use `locations` instead of `location-pick`.
- Update the routes registration from `'location-pick'` to `'locations'`.
- Add latitude and longitude coordinates to all items in the `LOCATIONS` array.
- Replace the static `<iframe>` inside the `'locations'` (formerly `'location-pick'`) desktop and mobile layout with a `<div id="locations-map">` container.
- Implement an `initLocationsMap()` function called from the end of `renderPage()` when `currentPage === 'locations'`.
- Implement `focusLocation(name, lat, lng)` to smoothly pan the map and trigger popups.
- Update `navigateTo` references and DOM event handlers that reference `'location-pick'` to `'locations'`.

#### [NEW] [locations.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/locations.html)
- Create `locations.html` containing the same layout as `location-pick.html` but:
  - Changing the `data-page` attribute on `<body>` to `locations`.
  - Including the Leaflet.js CSS and Javascript CDN links in the `<head>`.

#### [DELETE] [location-pick.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/location-pick.html)
- Delete the old file to clean up the workspace.

## Verification Plan

### Manual Verification
- Access the `locations.html` page directly.
- Verify that navigation works correctly from the home screen ("Order Now", "Locations" in navbar, etc.) and redirects to `locations.html`.
- Interact with the Leaflet map: check that all 16 locations are pinned with custom styled markers.
- Test clicking on a location card on the left panel: verify that the map smoothly pans to the selected location and opens a popup.
- Click the "Order Here" button to verify it sets the store and redirects to the menu page.

---

## Task Checklist

- [x] Create `locations.html` with Leaflet CSS/JS imports and rename/remove `location-pick.html`
- [x] Update `app.js` to rename `location-pick` key to `locations`
- [x] Add coordinates (latitude and longitude) to the `LOCATIONS` data array in `app.js`
- [x] Replace the iframe in the `locations` page route with an interactive Leaflet map container `<div id="locations-map">`
- [x] Implement `initLocationsMap()` and `focusLocation()` in `app.js`
- [x] Update card elements to focus on the map rather than immediately redirecting, with an "Order Here" button
- [x] Verify everything works perfectly

---

## Walkthrough

I have renamed the locations page to `locations.html` and integrated an interactive, premium map experience with custom pins.

## Changes Made

### 1. Refactored HTML Shell File
- Deleted the old [location-pick.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/location-pick.html).
- Created [locations.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/locations.html) with:
  - Updated `data-page="locations"` on the body.
  - Included CDN stylesheets and scripts for Leaflet.js in the head.

### 2. Refactored Route Configurations and Links in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- Renamed the internal routing key `'location-pick'` to `'locations'`.
- Updated `PAGE_FILE_MAP` to point `'locations'` to `'locations.html'`.
- Updated all occurrences of `navigateTo('location-pick')` to `navigateTo('locations')` globally.
- Updated all explicit link redirections.

### 3. Integrated Premium Interactive Mapping (Leaflet.js)
- **Data Enrichment**: Added precise `lat` (latitude) and `lng` (longitude) coordinates for all 16 i-Tea locations in the `LOCATIONS` array.
- **Dynamic Render**: Replaced the static Google Maps `<iframe>` with `<div id="locations-map">` for both desktop and mobile viewports.
- **Custom Branded Pins**: Configured Leaflet to render custom HTML markers representing purple round buttons with a tea/coffee cup icon (`fa-solid fa-mug-hot`) and an "i-Tea" badge, matching the premium reference image style.
- **Two-way Interaction**:
  - **Pin to Sidebar**: Clicking any pin on the map opens a tooltip popup displaying store details and an **"Order Here"** button, and focuses the map on that pin.
  - **Sidebar to Pin**: Clicking any location card in the sidebar highlights the selected store, pans the map smoothly to the location, and opens the corresponding marker popup.
  - **Selection**: Clicking the **"Order Here"** button inside any card or map popup sets the selected store and takes the user to the store's menu page.
