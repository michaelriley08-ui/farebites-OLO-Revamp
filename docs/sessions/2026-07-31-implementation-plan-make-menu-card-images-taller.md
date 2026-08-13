# Implementation Plan - Make Menu Card Images Taller

---


**Date:** 2026-07-31  
**Conversation ID:** `0e505376-248a-4910-99fb-d4444f5cc8ba`


---

## Implementation Plan

## Goal Description
Modify the menu page (`menu.html`) card views in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) to increase the image container heights. Currently, the images are cropped using landscape ratios (`h-44`/`h-48`/`h-40`), cutting off the bottom of the drinks where boba and other toppings reside. Since the source drink images are square (1024x1024), increasing the container heights to a taller/more square aspect ratio will fully display the drinks.

## Proposed Changes

### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

We will modify the image wrapper div height classes for the following views on the menu page:

1. **Search Results View**:
   - Change `h-44` (desktop) to `h-60` and `h-48` (mobile) to `h-64`.

2. **Category Feed / Main Menu View**:
   - Change `h-44` (desktop) to `h-60` and `h-48` (mobile) to `h-64`.

3. **Featured Specials View**:
   - Desktop Specials Grid: Change `h-44` to `h-60`.
   - Mobile Horizontal Specials Row: Change `h-40` to `h-56`.

4. **Favorites View**:
   - Change `h-44` (desktop) to `h-60` and `h-48` (mobile) to `h-64`.

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
Update the HTML template strings in the routing and rendering functions:

- In `app.js` (around line 1992, 2063, 2195):
```diff
-<div class="w-full ${isDesktop ? "h-44" : "h-48"} overflow-hidden relative cursor-pointer shrink-0" onclick='selectItemAndNavigate(${actualIndex})'>
+<div class="w-full ${isDesktop ? "h-60" : "h-64"} overflow-hidden relative cursor-pointer shrink-0" onclick='selectItemAndNavigate(${actualIndex})'>
```

- In `app.js` (around line 2115):
```diff
-<div class="w-full h-44 overflow-hidden relative cursor-pointer shrink-0" onclick='selectItemAndNavigate(${actualIndex})'>
+<div class="w-full h-60 overflow-hidden relative cursor-pointer shrink-0" onclick='selectItemAndNavigate(${actualIndex})'>
```

- In `app.js` (around line 2149):
```diff
-<div class="w-full h-40 overflow-hidden relative cursor-pointer shrink-0" onclick='selectItemAndNavigate(${actualIndex})'>
+<div class="w-full h-56 overflow-hidden relative cursor-pointer shrink-0" onclick='selectItemAndNavigate(${actualIndex})'>
```

## Verification Plan

### Manual Verification
1. Open the dev server on port 8000.
2. Navigate to the menu page (`menu.html?store=7`).
3. Check the category feed (Menu tab), Featured tab, Favorites tab, and Search results.
4. Verify that the image card heights are taller and show the bottom of the cups (boba, jelly, etc.) clearly.
5. Resize the browser to test both desktop and mobile viewports.

---

## Task Checklist

- [x] Modify menu card image wrapper classes in `app.js`
    - [x] Search view layout (around line 1992)
    - [x] Category feed menu view layout (around line 2063)
    - [x] Featured Specials grid layout on desktop (around line 2115)
    - [x] Featured Specials row layout on mobile (around line 2149)
    - [x] Favorites grid layout (around line 2195)
- [x] Verify image container height rendering in browser

---

## Walkthrough

We have modified the menu item card image wrapper heights in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) to prevent the bottom of drink cups (containing boba, jelly, etc.) from being cut off.

## Changes Made

### Menu Card Image Height Increases
We updated the height classes in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) across all different views on the menu page to make them taller:
- **Search Results View**: Updated the height container class from `${isDesktop ? "h-44" : "h-48"}` to `${isDesktop ? "h-60" : "h-64"}` (around line 1992).
- **Category Feed Menu View**: Updated the height class from `${isDesktop ? "h-44" : "h-48"}` to `${isDesktop ? "h-60" : "h-64"}` (around line 2063).
- **Featured Specials View (Desktop)**: Updated the height class from `h-44` to `h-60` (around line 2115).
- **Featured Specials View (Mobile horizontal row)**: Updated the height class from `h-40` to `h-56` (around line 2149).
- **Saved Favorites View**: Updated the height class from `${isDesktop ? "h-44" : "h-48"}` to `${isDesktop ? "h-60" : "h-64"}` (around line 2195).

## Verification & Visual Results

We ran the local dev server on port `8000` and loaded `http://localhost:8000/menu.html?store=7`. Using the browser agent, we verified that:
1. The image wrapper has increased in height across both desktop and mobile viewports.
2. The bottom of the drink cups is now completely visible, showcasing boba, jellies, and ingredients.

Here is the screenshot of the menu cards in the **New Items** category showing the full drinks (including boba):

![New Items Category Menu Cards](/Users/michael-riley/.gemini/antigravity-ide/brain/0e505376-248a-4910-99fb-d4444f5cc8ba/new_items_section_1785462735390.png)

### Browser verification recording:
![Browser Verification Recording](/Users/michael-riley/.gemini/antigravity-ide/brain/0e505376-248a-4910-99fb-d4444f5cc8ba/verify_menu_card_images_1785462672333.webp)
