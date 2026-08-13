# Fix Category Title Cut-off on Menu Scroll

---


**Date:** 2026-05-31  
**Conversation ID:** `e9cf357a-e3c1-4255-83ad-099d8d5809b2`


---

## Implementation Plan

This plan addresses the issue where category titles on the menu page (e.g., "MILK TEA SPECIALTY") get cut off underneath the sticky desktop navigation header when scrolled to via anchor links.

## Proposed Changes

### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L1941)

Increase the scroll margin top (`scroll-mt`) for category section containers specifically on desktop screens to clear the sticky navigation header.

- **Current:** `class="pt-4 scroll-mt-24"`
- **Proposed:** `class="pt-4 scroll-mt-24 lg:scroll-mt-36"` (this increases the scroll margin from 96px to 144px on desktop viewports, clearing the sticky navigation bar).

## Verification Plan

### Manual Verification
- Deploy/run the local test server using `node test-server.js`.
- Open the application, navigate to the homepage, and click on a category like "Milk Tea Series" or "Summer Frosty Series".
- Verify that the page scrolls to the category section and the section header title is fully visible below the desktop navigation header.

---

## Task Checklist

- `[x]` Update scroll-mt in app.js on line 1941 to support desktop screen sizes
- `[ ]` Verify scroll offset behavior on desktop

---

## Walkthrough

This walkthrough details the change implemented to prevent category titles from getting hidden/cut off underneath the sticky desktop header when scrolling to category sections on the menu.

## Changes Made

### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

Updated the `scroll-mt` (scroll margin top) class on category section elements to support desktop screens:
```diff
- <div id="${section.id}" class="pt-4 scroll-mt-24">
+ <div id="${section.id}" class="pt-4 scroll-mt-24 lg:scroll-mt-36">
```

This ensures that when an anchor link is clicked, the page scrolls to a position that leaves a margin of 144px (`scroll-mt-36`) from the top of the viewport on desktop screens, completely clearing the sticky header which is around 120-128px high.

## Verification

### Manual Verification
- Start the server using: `node test-server.js`
- Click on any category from the homepage (e.g., Sea Salt Crema Series, Milk Tea Series).
- The section title will now align beautifully below the header without being cut off.
