# Implementation Plan - Tiled Background for Featured Items Section

---


**Date:** 2026-06-01  
**Conversation ID:** `773adf88-c158-475f-9c70-87cffbdab68e`


---

## Implementation Plan

Add a tiled, Chipotle-inspired repeating pattern background (`images/home-bg-featured.png`) to the Featured Items section of the home page (`restaurant-home` and `restaurant-home-logo` views) on the desktop view.

## User Review Required

> [!NOTE]
> The background image will be styled to repeat/tile (`background-repeat: repeat;`) to seamlessly fill the section space across different desktop screen widths, matching the visual style in the Chipotle reference.

## Proposed Changes

### Stylesheets

#### [MODIFY] [shared.css](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/shared.css)
Add a CSS class `.featured-bg-tile` to handle the repeating background style:
```css
.featured-bg-tile {
    background-image: url('images/home-bg-featured.png');
    background-repeat: repeat;
    background-size: auto; /* Tiles the image at its original resolution */
    background-color: #faf6f0; /* Soft warm off-white/beige to blend with the pattern */
}
```

### Application Logic

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
Update both `restaurant-home` and `restaurant-home-logo` views:
- Close the category section `max-w-[1080px]` container before the divider.
- Create a new full-width container `div` with `.featured-bg-tile` class, adding a subtle top/bottom border if needed, and padding.
- Re-open a `max-w-[1080px] mx-auto text-center` container inside it to hold the "Featured Items" heading, subheading, and cards grid.

## Verification Plan

### Manual Verification
- Load the homepage on desktop view.
- Verify the Featured Items section has a repeating, tiled off-white pattern background spanning full width.
- Ensure layout, typography, and card alignments remain intact.

---

## Task Checklist

- [x] Adjust margins from `mx-6 mt-6` to `mx-1.5 mt-1.5` in `restaurant-home` view
- [x] Adjust margins from `mx-6 mt-6` to `mx-1.5 mt-1.5` in `restaurant-home-logo` view
- [x] Verify visual alignments with 75% reduced spacing

---

## Walkthrough

We have reduced the margins surrounding the desktop hero banner by 75% as requested.

## Changes Made

### Application Logic
- Modified `restaurant-home` and `restaurant-home-logo` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js):
  - Changed `mx-6 mt-6` (24px) to `mx-1.5 mt-1.5` (6px) to reduce spacing.
  - Kept the `rounded-2xl` corners matching the category menu images.
