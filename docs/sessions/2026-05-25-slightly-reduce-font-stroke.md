# Slightly Reduce Font Stroke

---


**Date:** 2026-05-25  
**Conversation ID:** `2c1ad456-d977-4e43-9872-28188adebc2b`


---

## Implementation Plan

Reduce the visual weight of the "bold" and "black" font styles to a slightly lighter version in line with the new **Outfit** font's aesthetic.

## Proposed Changes

### Global Styling

#### [MODIFY] [shared.css](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/shared.css)

- Add CSS overrides to redefine Tailwind's `font-black` and `font-bold` classes.
- `.font-black` will be set to `800` (instead of 900).
- `.font-bold` will be set to `600` (instead of 700).
- This ensures a "slightly lighter" feels across the entire application without risk of breaking JS-rendered templates.

```css
/* Font Weight Overrides */
.font-black {
    font-weight: 800 !important;
}
.font-bold {
    font-weight: 600 !important;
}
```

## Verification Plan

### Manual Verification
1. Load the restaurant home page.
2. Observe the headers and buttons.
3. Verify that the bold text feels "slighly thinner" but still prominent.
4. Capture a screenshot for comparison.

---

## Task Checklist

- **Header Title & Promo**: Removed "MENU" from the header, added a drop shadow to "i-Tea", and updated the promo text to "Open 24 Hours".
- **Cart Icon**: Replaced the FontAwesome `fa-bag-shopping` icon with a modern Lucide-style `shopping-bag` SVG.
- **Fruit Tea Image**: Updated the carousel image for "P1 Super Fruit Tea" with your provided JPG URL.
- **Mobile Icon Fix**: Corrected the FontAwesome class for the mobile toggle in the workspace header.
 with Lucide shopping bag SVG <!-- id: 3 -->
- [x] Match stroke width with the user icon <!-- id: 4 -->
- [x] Verify cart icon update across all pages <!-- id: 5 -->
- [x] Update image for P1 Super Fruit Tea on restaurant home carousels <!-- id: 6 -->
- [x] Verify image renders correctly <!-- id: 7 -->
- [x] Fix missing mobile icon in workspace header <!-- id: 8 -->
- [x] Verify workspace header icons <!-- id: 9 -->
- [x] Change header promo text to "Open 24 Hours" <!-- id: 10 -->
- [x] Verify text update <!-- id: 11 -->
- [x] Change main font to Outfit <!-- id: 12 -->
- [x] Verify font change across pages <!-- id: 13 -->
- [x] Thicken stroke around selected location on location-pick.html <!-- id: 14 -->
- [x] Verify selection highlight <!-- id: 15 -->
- [x] Slightly reduce font weights (font-black, font-bold) <!-- id: 16 -->
- [x] Verify font weight reduction <!-- id: 17 -->
- [x] Configure entry point to restaurant-landing.html <!-- id: 18 -->
- [x] Rename "Default" to "Previous Order" on location-pick.html <!-- id: 19 -->
- [x] Top-align product carousel images on restaurant-home.html <!-- id: 20 -->
- [x] Verify layout and color changes <!-- id: 21 -->
- [x] Change text color to dark grey (#1A1A1A) across restaurant home pages <!-- id: 22 -->
- [x] Change restaurant-home background image to Strawberry Mango Fruit Tea <!-- id: 23 -->
- [x] Update the "My Account" header icon link to account.html <!-- id: 24 -->
- [x] Replace QR scanner placeholder image with user provided photo <!-- id: 25 -->

---

## Walkthrough

I have updated the restaurant home page to remove the word "Menu" from the header and add a drop shadow to the "i-Tea" text.

## Changes Made

### UI Updates
- **Header Title & Promo**: Removed "MENU" from the header, added a drop shadow to "i-Tea", and updated the promo text to "Open 24 Hours".
- **Design System**: Updated the primary website font to **Outfit**, a premium geometric sans-serif that closely matches TT Norms.
- **Cart Icon**: Replaced the FontAwesome `fa-bag-shopping` icon with a modern Lucide-style `shopping-bag` SVG.
- **Font Weight Adjustment**: Slightly reduced the weight (stroke) of all bold and black text across the site by downgrading weights by one level (e.g., 900 to 800) for a cleaner, more refined look.
- **Entry Point Change**: Set the default page load view to `restaurant-landing` inside `index.html`.
- **Location Selection Update**: Renamed the "Default" quick-order section to "Previous Order" in the location-pick view.
- **Image Alignment**: Applied the `object-top` utility to all layout variations of the `restaurant-home` carousels to ensure product photos are top-aligned, preventing important visual elements at the top of the image from being cut off.
- **Restaurant Home Design**: Updated the background image to "N9 Fresh Strawberry Mango Fruit Tea". Converted the text on cards and bottom navigation to a readable dark grey (`#1A1A1A`).
- **Profile Icon Routing**: Modified the "My Account" profile icon in the header to navigate to `account.html`.
- **QR Scanning Screen**: Replaced the original QR code scanning image on the "Scan" screen (`qr-code-guide`) with the provided image showing a QR code scan at a restaurant table.

## Verification Results

### Visual Verification
I used a browser subagent to verify the changes. The screenshot below shows the updated header with the new title and the new Lucide shopping bag icon.

![Updated Header & Promo](file:///Users/michael-riley/.gemini/antigravity/brain/2c1ad456-d977-4e43-9872-28188adebc2b/restaurant_home_header_verify_1773964412631.png)

![Mobile Icon Fix](file:///Users/michael-riley/.gemini/antigravity/brain/2c1ad456-d977-4e43-9872-28188adebc2b/workspace_header_mobile_icon_verification_1773963475599.png)

### Video Recording
The following recordings show the verification process for both the title and icon updates.

````carousel
![Title Update Verification](file:///Users/michael-riley/.gemini/antigravity/brain/2c1ad456-d977-4e43-9872-28188adebc2b/verify_itea_header_1773960915559.webp)
<!-- slide -->
![Cart Icon Update Verification](file:///Users/michael-riley/.gemini/antigravity/brain/2c1ad456-d977-4e43-9872-28188adebc2b/verify_cart_lucide_final_1773962083063.webp)
````
