# Implementation Plan - Live Location Search & Instant Filtering on locations.html

---


**Date:** 2026-08-01  
**Conversation ID:** `c9e0a7d3-b00d-4b11-9324-a645d4b82e0c`


---

## Implementation Plan

This document details the root cause analysis for why location search on `locations.html` is currently non-functional, along with a step-by-step plan to implement real-time instant filtering as users type.

## Root Cause Analysis: Why Location Search Currently Fails

1. **Unbound DOM `<input>` Elements**:
   - In [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L3322), the search `<input>` fields in both desktop and mobile view templates lack an `id`, `value` binding, and event listeners (`oninput`, `onkeyup`, `onchange`).
2. **Missing Search State**:
   - The global `mockupState` (defined in `app.js`) tracks `locationFilter` ("Near Me", "My Locations", "All"), but does not track `locationSearchQuery`.
3. **Data Filtering Function Ignores Query**:
   - The `getSet()` helper function within `pages.locations()` and `pages["locations-alt"]()` only filters locations by active tab category, completely ignoring any text entered into the search input.
4. **Map Markers Out of Sync**:
   - Map pins rendered via Leaflet in `initLocationsMap()` remain static and do not update or hide when search results are narrowed.

---

## Proposed Technical Changes

### State Management (`app.js`)
- Add `locationSearchQuery: ""` to `DEFAULT_STATE` and `mockupState`.
- Create a helper function `handleLocationSearch(query)` to:
  - Update `mockupState.locationSearchQuery`.
  - Filter location cards dynamically or trigger re-render while preserving input focus and cursor position.
  - Show/hide map markers dynamically based on matching search results.

---

### UI & Component Layout (`pages.locations` & `pages["locations-alt"]` in `app.js`)

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
1. **Bind Search Input**:
   - Add `value="${mockupState.locationSearchQuery || ''}"`.
   - Add `oninput="handleLocationSearch(this.value)"` for instant live filtering as the user types (e.g. typing "Tempe" or "F").
   - Add a quick clear `(X)` button next to the magnifying glass icon when `locationSearchQuery` is non-empty.
2. **Instant Filtering Logic in `getSet()`**:
   - Update `getSet()` to filter the return list by checking if `locationSearchQuery` matches (case-insensitive) any of the following location attributes:
     - Location Name (e.g. "i-Tea - Tempe", "Fremont")
     - Street Address (e.g. "825 W UNIVERSITY")
     - City, State, or Zip Code
3. **Focus Preservation**:
   - Ensure seamless live typing by updating the location list container DOM directly or maintaining input cursor focus across renders.
4. **Empty Search State**:
   - Render a friendly "No locations match '[query]'" empty state with a "Clear Search" button when zero locations match.
5. **Map Synchronization**:
   - Update Leaflet map markers when search filtering changes so only matching pins are visible on the map.

---

## User Review Required

> [!NOTE]
> Search will activate instantaneously on every character entered (e.g., typing "T" -> "Te" -> "Tempe" immediately filters results). Clicking the magnifying glass or pressing Enter will also be supported.

---

## Verification Plan

### Manual Verification
1. **Live Filtering Verification**:
   - Navigate to `locations.html` in browser.
   - Type `"Tempe"` into the search box character-by-character; confirm location list immediately filters down to "i-Tea - Tempe".
   - Clear search and type `"F"`; confirm list immediately filters down to locations containing "F" (e.g. Fremont).
2. **Clear Search Button**:
   - Verify the `(X)` clear button appears when text is typed and resets the view when clicked.
3. **Map Marker Sync**:
   - Verify map pins hide/show in sync with search results.
4. **Focus & Typing Responsiveness**:
   - Verify focus is not lost while typing rapidly in the search input.

---

## Walkthrough

We have consolidated all location routing across the application to point solely to the refined [locations.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/locations.html) page and removed the duplicate `locations-alt` view renderer.

## Actions Taken

1. **Unified Navigation & Routing**:
   - Updated all `navigateTo('locations-alt')` calls in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) (such as "Change Location" buttons on menu and cart pages) to point directly to `navigateTo('locations')`.
   - Updated `PAGE_FILE_MAP["locations-alt"]` to map to `"locations.html"`.
2. **Removed Duplicate Renderer**:
   - Replaced the ~230-line `pages["locations-alt"]` renderer function in `app.js` with an alias delegating directly to `pages.locations()`.
3. **Instant HTML Redirect**:
   - Updated [locations-alt.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/locations-alt.html) with an instant client-side redirect script (`window.location.replace("locations.html")`) so any direct browser bookmarks or legacy URLs land seamlessly on `locations.html`.

---

## Verification Results

- **Browser Test**: Navigated to `http://localhost:8090/locations-alt.html`.
- **Result**: Immediately redirected to `locations.html`, rendering the single, refined location selector page.

![Automatic redirect from locations-alt to refined locations.html](/Users/michael-riley/.gemini/antigravity-ide/brain/c9e0a7d3-b00d-4b11-9324-a645d4b82e0c/locations_redirect_new_page_1785614818105.png)
