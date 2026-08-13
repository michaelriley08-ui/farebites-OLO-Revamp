# Fix Double Scrollbar Issue

---


**Date:** 2026-05-25  
**Conversation ID:** `08975937-9007-44b0-a614-da53691cb6fc`


---

## Implementation Plan

The application currently displays two scrollbars in many views: one for the workspace viewport and one for the internal app content. I will centralize scrolling to improve the user experience.

## Proposed Changes

### [CSS] shared.css

#### [MODIFY] [shared.css](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/shared.css)
- Update `.view-desktop` and `.view-desktop .app-content` to grow with their content, letting `.canvas-area` handle the scrolling.
- Use `overflow-y: visible` for `.app-content` when in desktop mode.
- (Optional but helpful) Hide the internal scrollbar on the mobile device frame to keep the UI clean, while maintaining scrollability.

### [JS] app.js

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js)
- Update `renderPage` to scroll the `.canvas-area` to the top instead of just the `.app-viewport` (or both).
- This ensures that when the page content changes, the whole workspace reset to the top in all modes.

## Header Unification (New Objective)

I will standardize the headers across all restaurant-related views to match the `order-type` style: constant centered title, chevron-left back button, and consistent padding/styling.

### [Component Name] app.js

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js)
- **`menu` route**: Update header to use centered "I-TEA MENU" in violet-600, with a functional chevron-left back button.
- **`customize` route**: Update header to use centered "CUSTOMIZE" in violet-600, with chevron-left back button.
- **`cart` route**: Update header to centered "MY CART", chevron-left.
- **`checkout` route**: Update header to centered "CHECKOUT", chevron-left.
- **`order-confirm` route**: Update header to centered "ORDER CONFIRMED", chevron-left.
- **`order-status` route**: Update header to centered "ORDER STATUS", chevron-left.

### Cart Page UI Refinements
- **[DONE]** Remove "For: Mike" text.
- **[DONE]** Add "Review order" header above location card.
- **[DONE]** Make location name and address dynamic.
- **[DONE]** Modernizing Order Details (multi-section layout).
- **Compact Layout Refinement:**
    - Consolidate "Store", "Pickup method", and "Pickup time" into a **single card**.
    - Change main header title from "My Cart" to "**Review order**".
    - Remove the secondary `h2` "Review order" label below the header.
    - **Fix missing icons**: Map `Curbside` to `fa-car` and `Delivery` to `fa-truck` (or similar) in the cart's pickup method section.
    - **Rename Labels**: Update consolidated card labels to "**Pickup method**" and "**Pickup time**" for clarity.
    - Reduce padding and element sizes for a more compact, premium feel.

### Global Rebranding
- **[DONE]** Replace placeholder branding for "Bob's Boba" with the official "I-TEA" name.

### Checkout Payment & Tipping Refactor
Refactor the payment flow to use modals for sensitive details and add a tipping section.
- **[MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js)**:
    - Update `mockupState` to handle `tipPercentage` and `customTipAmount`.
    - **Payment Modals**:
        - Convert "Credit or Debit Card" details to a popup modal.
        - Convert "Gift Card" redeem section to a popup modal.
        - Convert "Loyalty Rewards" punch card to a popup modal.
    - **Tipping Section**:
        - Add a "Add a Tip" section with pill-style buttons (10%, 15%, 20%, Other).
        - Update pricing logic to include the selected tip in the final total.
    - **"Other" Tip Modal**:
        - Trigger a modal when "Other" is selected.
        - Include the generated friendly barista image in the modal.
        - Provide an input field for a custom tip amount.

## Cart Page Refinements (New Objective)

I will clean up the Cart page UI to focus on the order review.

### [Component Name] app.js

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js)
- **`cart` route**:
    - Add `<h2 class="text-[11px] font-black text-gray-400 uppercase tracking-widest mb-2 px-1">Review order</h2>` above the location card.
    - Replace the hardcoded "Bob's Boba Tea" with a dynamic `mockupState.selectedLocation` (handling defaults/cleaning zip codes).
    - Remove the `<h2>For: Mike</h2>` element.

## Verification Plan

### Automated Tests
- Use the browser subagent to visit multiple pages and check the number of scrollbars.
- Verify that scrolling works consistently in Desktop, Mobile, and Tablet views.
- Visit each of the updated pages and verify the header structure and back button functionality.
- Ensure the title is always centered regardless of content.
- Visit the Cart page and verify:
    1. "Review order" is present above the location card.
    2. "For: Mike" is gone.
    3. The location name matches the user selection (or is a valid default).

### Manual Verification
- None required.

---

## Task Checklist

- [x] Assess current state <!-- id: 0 -->
    - [x] Check `app.js` for navigation injection logic <!-- id: 1 -->
    - [x] Check HTML files for existing or missing menu code <!-- id: 2 -->
- [x] Restore functionality <!-- id: 3 -->
    - [x] Create `renderWorkspaceHeader` in `app.js` <!-- id: 4 -->
    - [x] Update all HTML files to use header placeholder <!-- id: 5 -->
- [x] Fix double scrollbar issue <!-- id: 9 -->
    - [x] Identify source of extra scrollbar <!-- id: 10 -->
    - [x] Update CSS to ensure single scrollbar behavior <!-- id: 11 -->
    - [x] Verify fix in all viewports <!-- id: 12 -->
- [x] Verify refactoring <!-- id: 6 -->
    - [x] Test menu on various pages using browser subagent <!-- id: 7 -->
    - [x] Ensure navigation links work <!-- id: 8 -->
- [x] Unify app headers <!-- id: 13 -->
    - [x] Update `menu` route header <!-- id: 14 -->
    - [x] Update `customize` route header <!-- id: 15 -->
    - [x] Update `cart` route header <!-- id: 16 -->
    - [x] Update `checkout` route header <!-- id: 17 -->
    - [x] Update `order-confirm` route header <!-- id: 18 -->
    - [x] Update `order-status` route header <!-- id: 19 -->
    - [x] Verify consistency across pages <!-- id: 20 -->
- [ ] Refine Cart Page Order Details Layout
    - [x] Analyze reference image and audio feedback
    - [x] Add distance data to `LOCATIONS` in `app.js`
    - [x] Update labels to "Pickup method" and "Pickup time"
    - [x] Restructure order details card into "Store", "Pickup method", and "Pickup time" sections
    - [x] Replace location address with distance label
    - [x] Verify layout on mobile and desktop
- [x] Compact Cart Layout Refinement
    - [x] Consolidate Store, Method, and Time into one compact card
    - [x] Change header title "My Cart" -> "Review order"
    - [x] Remove secondary "Review order" header
    - [x] Add missing Curbside icon to Pickup method section
    - [x] Rename "Method" -> "Pickup method" and "Time" -> "Pickup time"
    - [x] Verify compact layout functionality
    - [x] Checkout Payment & Tipping Refactor
    - [x] Analyze current checkout route
    - [x] Generate barista image for tip modal
    - [x] Add `tipPercentage` and `customTip` to `mockupState`
    - [x] Implement Modals for Credit Card, Gift Card, and Loyalty
    - [x] Add Tipping Selection (pills) to checkout flow
    - [x] Implement "Other" tip modal with custom image
    - [x] Update pricing summary with dynamic tipping
    - [x] Verify checkout flow in browser
- [x] Fix Incorrect Menu Item Image
    - [x] Investigate M7 image source in `app.js`
    - [x] Update `assets.boba1` with official URL
    - [x] Verify fix in browser
- [x] Global Rebranding: Bob's Boba to I-TEA
    - [x] Search codebase for "Bob's Boba" and "Bob's Boba Tea"
    - [x] Replace all instances in `app.js` with "I-TEA"
    - [x] Verify rebranding across all pages
- [x] Update Menu Item Image
    - [x] Identify "Brown Sugar Boba Latte" in `app.js`
    - [x] Update `assets.boba2` with new URL
    - [x] Verify change in browser

---

## Walkthrough

I have restored the navigation menu functionality which was partially broken during a previous refactoring session. To prevent similar issues in the future, I centralized the workspace header generation within `app.js`.

## Changes Made

### Centralization of Header Logic
- Added `renderWorkspaceHeader` to [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js). This function dynamically injects the header HTML into any page with a `#workspace-header` placeholder.
- Updated `DOMContentLoaded` listener to ensure the header is rendered before any other dependent components (like dropdown menus).

### Scrollbar & Layout Optimization
- Modified [shared.css](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/shared.css) to centralize scrolling in the `.canvas-area`.
- Eliminated the double scrollbar issue by ensuring the inner `.app-content` only scrolls when explicitly contained (Mobile/Tablet frames) and allowing it to grow in Desktop view.
- Updated `renderPage` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js) to programmatically reset scroll position to the top upon navigation.

### Header Unification & Standardisation
- Standardised all restaurant-related headers in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js) to match the `order-type` style.
- Implemented centered titles in `violet-600` for `menu`, `customize`, `cart`, `checkout`, `order-confirm`, and `order-status`.
- Replaced various arrow-left buttons with a consistent `chevron-left` back button bracket.
- Ensured functional back navigation across the entire ordering flow.
- **M7 Image Fix**: Restored the official image for "M7 Crème Brûlée Boba Milk Tea" after the placeholder Unsplash asset was unexpectedly replaced with a different image.
- **Checkout Payment & Tipping Refactor**: Moved payment details into pop-up modals and added a new tipping section with a custom "Other" modal featuring a barista visual.
- **Global Rebranding**: Replaced all placeholder "Bob's Boba" branding with "I-TEA" across the entire site.
- **Menu Image Updates**: Replaced the placeholder image for "Brown Sugar Boba Latte" with the official product asset.
- **Cart Page Refinements**: Modernized the order details section with a compact, multi-section layout and distance-based location info.

### Cart Page UI Refinements
- Added a "Review order" section header above the order details card.
- Removed the hardcoded "For: Mike" label.
- Made the location name and address fully dynamic based on user selection in the `location-pick` screen.
- Implemented automatic zip code removal from both location names and addresses using regex.

### HTML Template Updates
- Updated all 23 HTML files to use the new placeholder system.
- Replaced hardcoded header blocks with:
  ```html
  <header class="workspace-header" id="workspace-header"></header>
  ```

## Verification Results

### Navigation Consistency
Confirmed that the header renders correctly and dropdowns are functional on:
- `index.html`
- `menu.html`
- `order-type.html`

### Scrollbar Behavior
- **Desktop Mode**: Confirmed only a single browser-level scrollbar is active.
- **Mobile/Tablet Mode**: Confirmed a single scrollbar track, with no overlapping tracks from nested containers.
- **Scroll Reset**: Verified that navigating between pages (e.g., Landing to Menu) successfully scrolls the viewport back to the top.

### Header Unification
- **Menu Page**: Confirmed centered "I-TEA MENU" and functional chevron back button.
- **Ordering Flow**: Verified consistent headers on Cart, Checkout, Order Confirmation (SUCCESS), and Order Status pages.
- **Desktop & Mobile**: Confirmed that centering and styling persist across viewport modes.

### Cart Refinements
- **Review order**: Verified the new header is correctly positioned.
- **Dynamic Location**: Confirmed that switching locations (e.g., Tempe to Alameda) correctly updates both name and address.
- **Zip Code Removal**: Verified that labels like "85044" are stripped from the display for a cleaner UI.

### M7 Image Fix
The "New Item" card for **M7 Crème Brûlée Boba Milk Tea** was restored with its official asset:
- **Issue**: The placeholder Unsplash image for `boba1` was being replaced by an image of a Coca-Cola can.
- **Fix**: Updated `assets.boba1` in `app.js` to point directly to the official product image: `https://olodev.azurewebsites.net/imagesmenu/M7-Cr%C3%A8me-Br%C3%BBl%C3%A9e-Boba-Milk-Tea.jpg`

![Corrected M7 Crème Brûlée Card](/Users/michael-riley/.gemini/antigravity/brain/08975937-9007-44b0-a614-da53691cb6fc/new_item_m7_card_1773374425593.png)

### Checkout Payment & Tipping Refactor
The checkout flow was modernized for a cleaner, more interactive experience:
- **Payment Modals**: Selecting Card, Gift Card, or Rewards now opens a dedicated popup modal instead of expanding inline.
- **Tipping Pills**: Added a new "Add a Tip" section with tiered percentages (10%, 15%, 20%) and an "Other" option.
- **Custom Tip Modal**: Choosing "Other" triggers a warm, premium modal with a friendly barista visual and custom amount input.

![Friendly Barista for Tip Modal](/Users/michael-riley/.gemini/antigravity/brain/08975937-9007-44b0-a614-da53691cb6fc/friendly_barista_smiling_1773372724072.png)

### Menu Image Updates
Updated the "Popular" card for **Brown Sugar Boba Latte** to use the official product image:
- **URL**: `https://olodev.azurewebsites.net/imagesmenu/P4-Brown-Sugar-Boba-Latte.jpg`
- **Impact**: Both the horizontal "Popular" card and the large Hero card on the Menu page (below "What's on the menu today?") now show the high-quality official asset.

### Global Rebranding
The project was successfully rebranded from "Bob's Boba" to **I-TEA**:
- **Consolidated Naming**: Updated all headers, footers, legal text, and fallback labels.
- **Visual Consistency**: Ensures the "I-TEA" brand is prominent and professional across all user flows.

### Compact Cart Layout Refinement
The Cart page was further streamlined for a more premium experience:
- **Consolidated Order Card**: Merged Store, Pickup Method, and Pickup Time into a single, compact white card.
- **Header Update**: Changed the main header title to "Review order" and removed the redundant label below it.
- **Streamlined Design**: Reduced padding and icon sizes to ensure more items fit on the screen without scrolling.

![Compact Cart Layout](/Users/michael-riley/.gemini/antigravity/brain/08975937-9007-44b0-a614-da53691cb6fc/compact_cart_layout_1773370316416.png)

### Cart Page Refinements
The order details section was modernized to match the reference image:
- **Restructured Layout**: Divided the single card into three clear sections: "Store", "Pickup method", and "Pickup time".
- **Distance-Based Display**: Removed the full address from the location card and replaced it with a dynamic distance label (e.g., "1.2 mi").
- **Improved Labels**: Updated labeling to follow the requested naming convention.
- **Dynamic Data**: Updated the `LOCATIONS` array to include real-time distance data.

![Cart Page Refined Layout](/Users/michael-riley/.gemini/antigravity/brain/08975937-9007-44b0-a614-da53691cb6fc/cart_layout_verification_1773370046921.png)

### Customize Page Expansion
The `customize.html` route was rewritten to include a comprehensive set of options:
- **Sugar & Ice Levels**: Full range of selectable radio buttons.
- **Toppings**: Stepper buttons with dynamic pricing for premium toppings (+22 free toppings checklist).
- **Live Pricing**: Cart total updates in real-time as customizations are added.

![Customize Page Expansion](/Users/michael-riley/.gemini/antigravity/brain/08975937-9007-44b0-a614-da53691cb6fc/customize_page_full_1773369379800.png)

### Browser Subagent Testing
The browser subagent verified that:
1. All headers correctly display global or restaurant-specific navigation items.
2. Viewport toggles (Desktop, Mobile, Tablet) remain functional and correctly styled.
3. Navigation consistently resets scroll position.
4. Back buttons correctly navigate to previous logical screens.
5. Cart page correctly reflects the chosen location and hides user-specific dummy labels.

![Standardised Menu Header](/Users/michael-riley/.gemini/antigravity/brain/08975937-9007-44b0-a614-da53691cb6fc/.system_generated/click_feedback/click_feedback_1773367421083.png)
*Figure 1: Standardised menu header with centered title and chevron back button.*

````carousel
![Dynamic Cart Location - Tempe](/Users/michael-riley/.gemini/antigravity/brain/08975937-9007-44b0-a614-da53691cb6fc/.system_generated/click_feedback/click_feedback_1773368686211.png)
<!-- slide -->
![Dynamic Cart Location - Alameda](/Users/michael-riley/.gemini/antigravity/brain/08975937-9007-44b0-a614-da53691cb6fc/.system_generated/click_feedback/click_feedback_1773368729681.png)
<!-- slide -->
![Review Order Header](/Users/michael-riley/.gemini/antigravity/brain/08975937-9007-44b0-a614-da53691cb6fc/.system_generated/click_feedback/click_feedback_1773368452528.png)
````
