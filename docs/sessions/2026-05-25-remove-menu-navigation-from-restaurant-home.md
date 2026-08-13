# Remove Menu Navigation from Restaurant Home

---


**Date:** 2026-05-25  
**Conversation ID:** `65959dfa-c3e2-40d1-be10-25ad47f62e37`


---

## Implementation Plan

The user wants to remove the "MENU" navigation item from the restaurant home page views.

## Proposed Changes

### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js)

#### [MODIFY] Remove MENU button from Bottom Navigation
- In the `restaurant-home` route:
    - Locate the bottom navigation section.
    - Remove the `<button>` element with text "MENU".
- In the `restaurant-home-logo` route:
    - Locate the bottom navigation section.
    - Remove the `<button>` element with text "MENU".

## Verification Plan

### Manual Verification
- Navigate to the restaurant home page and confirm the "MENU" button is no longer present in the bottom navigation.
- Verify that the layout of the remaining navigation items (HOME, REORDER, REWARDS, SCAN) looks balanced.

---

## Task Checklist

- [x] Implement Order Details summary toggle on `order-confirm` and `order-status` routes
    - [x] Design breakdown section based on reference image
    - [x] Add items, fees, taxes, and payment info
    - [x] Implement toggle/collapsible logic (expanded by default on confirm)
- [x] Standardize button rounded corners and drop shadows
    - [x] Identify target style in `cart`
    - [x] Apply style to all primary buttons
    - [x] Apply style to all secondary/menu buttons
    - [x] Apply style to `order-details` and social buttons
- [x] Identify and remove italic styles from `shared.css`
- [x] Replace asterisk with dynamic "Required" badge in bag selection card
- [x] Remove "Add items" button from Order Details UI
- [x] Synchronize card border-radius to `rounded-2xl`/`rounded-3xl` (Home page synced with Menu page)
    - [x] Revert Menu page cards to `rounded-2xl`/`rounded-3xl`
    - [x] Update Home page cards to match
- [x] Contain Category Modal within mobile/tablet viewport (change fixed to absolute)
- [ ] Remove MENU button from Bottom Navigation on Restaurant Home
- [ ] Update walkthrough

---

## Walkthrough

I've added a premium, horizontal scrollable category navigation bar to the menu page. This allows users to quickly jump to specific sections of the menu (currently all categories jump to "New Items" as per the initial request).

## Changes Made

### Menu Page
- Added a sticky category navigation bar below the main header.
- Added **Filter** and **Search** icons to the left of the category pills.
- Implemented a **Bottom Sheet Modal** (Category Menu) that slides up from the bottom.
- Added a search field and a full list of categories with premium images to the modal.
- Each category tile in the modal scrolls the menu to the appropriate section (currently "New Items").
- Implemented 14 category pills with premium styling (hover states, transitions).
- Added smooth-scroll functionality to each pill.
- Added a **New Items Carousel** above the main menu grid with a clean, app-like horizontal scroll.
- Simplified the carousel UI by removing progress indicators and adding **"Add to Order"** buttons to match the standard menu cards.
- Renamed the existing "New Items" grid section to **Explore Our Menu**.
- Added `id="new-items-section"` to the new carousel section to serve as the default scroll target for category pills.
- **Removed all italic styling site-wide**: Stripped the `italic` Tailwind class and font-styles from all pages (headers, buttons, labels) for a cleaner brand aesthetic.
- **Polished Bag Selection UI**: Replaced the simple asterisk with a dynamic "Required • Select 1" badge that changes from purple to green once a selection is made. Added "10¢ per bag" pricing to the alert modal for better transparency.
- **Button Standardization**: Standardized all primary action and standalone secondary buttons across the app to use a premium `rounded-full` (pill-shaped) radius and specialized deep shadows. Note: Grid-based selection buttons (like Fulfillment Modes and ASAP/Later) retain their `rounded-xl` radius to maintain layout structural integrity.
- **Detailed Order Summary**: Added an "Order details" toggle to both the Order Confirmation and Order Status pages. This allows users to see a full breakdown of their order (items, fees, taxes, and payment method) directly after purchase. I also **removed the "Add items" button** from this view to keep the summary focused on the completed order.
- **Synced Premium Card Styling**: Synchronized all product card border radii across the home and menu pages. Carousel cards now use `rounded-3xl` and grid cards use `rounded-2xl`, creating a consistent, premium aesthetic site-wide.
- **Category Modal Boundary Fix**: Corrected the positioning of the category list bottom sheet to stay within the mobile/tablet mockup frame. It now uses absolute positioning relative to the viewport instead of filling the entire browser window.

## Verification

I've verified the functionality in the browser:

![Order Details Toggle Verification](/Users/michael-riley/.gemini/antigravity/brain/65959dfa-c3e2-40d1-be10-25ad47f62e37/verify_order_confirm_ui_1773545293287.webp)
*Recording showing the "Order details" toggle and expanded breakdown on the confirmation page.*

## Visual Changes

![Category Modal](/Users/michael-riley/.gemini/antigravity/brain/65959dfa-c3e2-40d1-be10-25ad47f62e37/itea_most_ordered_category_1773531644000_1773538894319.png)
*Example of the premium category imagery used in the bottom sheet.*

### Desktop View
The category bar appears below the header and remains visible when scrolling. Clicking any pill smoothly scrolls the page to the "New Items" section.

### Mobile View
The category bar is horizontally scrollable, allowing users to access all 14 categories with a simple swipe. The scrollbar is hidden for a clean, app-like feel.
