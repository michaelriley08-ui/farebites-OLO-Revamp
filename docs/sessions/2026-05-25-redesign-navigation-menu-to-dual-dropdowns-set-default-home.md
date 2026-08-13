# Redesign Navigation Menu to Dual Dropdowns & Set Default Home

---


**Date:** 2026-05-25  
**Conversation ID:** `4a186060-29f6-4617-b25d-cbf236bf5979`


---

## Implementation Plan

I will split the current single navigation dropdown into two separate ones: **FareBites** and **Restaurant**, and set the default landing page to the restaurant's landing page.

## Proposed Changes

### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js)
- **Default Page**:
    - Change the default value of `currentPage` to `restaurant-landing`.
- **Multi-Dropdown Logic**:
    - Refactor `toggleMenu(e)` to accept an ID so it can toggle specific menus.
    - Update `renderDropdownMenu()` to populate two containers: `dropdown-menu-fb` and `dropdown-menu-rb`.
    - Group pages into these two categories:
        - **FareBites**: `landing`, `home`, `sign-in`.
        - **Restaurant**: `restaurant-landing`, `restaurant-sign-in`, `restaurant-home`.
- **Label Updates**:
    - Update `renderPage()` to find and set labels for both dropdowns (`current-fb-label` and `current-rb-label`).

### HTML Files
- **Header Structure**:
    - Update the header in all HTML files to replace the single dropdown block with two separate blocks.
    - Each block will have its own button and menu container.

## Verification Plan
1.  Open any page.
2.  Test the **FareBites** dropdown: ensure it opens and navigates to the core pages correctly.
3.  Test the **Restaurant** dropdown: ensure it opens and navigates to the restaurant flow correctly.
4.  Verify that both dropdowns close when clicking outside.
5.  Check that the labels correctly reflect the current active page in each dropdown.

---

## Task Checklist

- [/] Plan the dual dropdown structure and styling
- [ ] Set `restaurant-landing` as the default homepage in `app.js`
- [ ] Update header HTML in all pages to include two dropdown buttons
- [ ] Refactor `toggleMenu` and `renderDropdownMenu` in `app.js` to support multiple dropdowns
- [ ] Update labels and active states for both dropdowns in `renderPage`
- [ ] Verify functionality across all pages

---

## Walkthrough

I have refined the time selection modal on the **Order Type** page to provide a more compact and user-friendly experience.

## Improvements

### Compact Design
- **Flexible Height**: Removed the fixed full-screen height constraint. The modal now automatically shrinks to fit the content, making it feel less overwhelming on both mobile and desktop.
- **Button Placement**: Moved the "Confirm Time" button up so it sits directly below the time slots, eliminating the large empty gap that was previously there.
- **Visual Clarity**: Added a slight margin between the time slots container and the action button to maintain a clean, premium look.

## How to Verify
1.  Navigate to the **Order Type** page.
2.  Select "Later" to open the **Choose Time** modal.
3.  Verify that the modal is now compact and fits the content without extra empty space.
4.  Verify the "Confirm Time" button is positioned comfortably below the time selection area.
