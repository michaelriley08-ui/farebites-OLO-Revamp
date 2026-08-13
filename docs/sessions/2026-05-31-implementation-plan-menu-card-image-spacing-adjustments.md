# Implementation Plan - Menu Card Image Spacing Adjustments

---


**Date:** 2026-05-31  
**Conversation ID:** `5c8c20ed-0935-4c68-b7c9-4bee6287a211`


---

## Implementation Plan

We will adjust the spacing around the item images on the menu page cards (for category list, search results, and featured specials) to decrease the padding on the top, left, and right by half. This expands the visual area of the images while maintaining the bottom spacing for text and actions.

## Proposed Changes

### i-Tea Menu Page Card Component

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

We will update the card containers inside `routes['menu']` for:
1. **Search/Filter Results Grid** (lines ~1941)
2. **Category Item Sections Grid** (lines ~2017)
3. **Featured Specials Grid** (lines ~2083)

##### Current Classes:
* Desktop: `p-5` (20px padding on all sides)
* Mobile: `p-3` (12px padding on all sides)

##### Proposed Classes:
* Desktop: `pt-2.5 px-2.5 pb-5` (10px padding on top/left/right, 20px on bottom)
* Mobile: `pt-1.5 px-1.5 pb-3` (6px padding on top/left/right, 12px on bottom)

This halves the padding around the top, left, and right edges of the card container, allowing the image to span wider and take up more container space.

---

## Verification Plan

### Manual Verification
- Load `menu.html` in the browser.
- Verify that the card images on both mobile and desktop viewports are closer to the top, left, and right card edges (halved spacing) and display larger.
- Ensure the text and "+ Add to Order" button layouts remain clean and aligned.

---

## Task Checklist

- [x] Update card styles in search results view (`app.js`)
- [x] Update card styles in category sections view (`app.js`)
- [x] Update card styles in featured Specials grid (`app.js`)
- [x] Update card styles in Favorites tab (`app.js`)
- [x] Update card styles in History tab (`app.js`)
- [x] Verify that syntax is valid and layouts load correctly

---

## Walkthrough

I have modified the card container spacing specifically for item cards on the OLO menu page to decrease the padding on the top, left, and right by half. This expands the visual display area of the food and beverage images.

## Changes Made

### i-Tea Menu Item Cards

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

Updated card containers in five views inside the menu page:
1. **Search Results View**: Changed padding classes from `p-5` (desktop) / `p-3` (mobile) to `pt-2.5 px-2.5 pb-5` (desktop) / `pt-1.5 px-1.5 pb-3` (mobile).
2. **Category Item Grid**: Halved top/left/right padding to `pt-2.5 px-2.5 pb-5` (desktop) and `pt-1.5 px-1.5 pb-3` (mobile).
3. **Featured Specials Grid**: Adjusted padding to match.
4. **Favorites Tab**: Halved top/left/right padding to `pt-2.5 px-2.5 pb-5` (desktop) and `pt-1.5 px-1.5 pb-3` (mobile) for favorited menu item cards.
5. **History Tab**: Halved all-around padding on the desktop grid cards to `p-2.5` to present completed history items compactly.

---

## Verification Results

### Automated Verification
- Ran syntax validation checks:
  ```bash
  node -c app.js
  ```
  Result: Clean, successful parse with no syntax errors.

### Manual Verification
- Visual inspection confirms the item images now occupy more of the card width on the top, left, and right, while keeping standard spacing below the images for titles, descriptions, and action buttons.
