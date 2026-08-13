# Tabbed Menu Page Structure (Menu / Featured / Favorites / History)

---


**Date:** 2026-05-25  
**Conversation ID:** `b53b26a1-4710-44d7-b9d9-a2ecc5599b3e`


---

## Implementation Plan

The objective is to refine the navigation and layout of the menu page. Following mobile layouts from popular brands like Starbucks and Chipotle, we will replace the scrolling category pill bar with a 4-tab bar: **Menu**, **Featured**, **Favorites**, and **History** (Order History). 

This cleans up the page layout by dividing content logically into tabs and displaying the main menu categories in a single scrollable feed.

## User Review Required

> [!IMPORTANT]
> - We will add `menuTab` (defaulting to `'menu'`) to the global `mockupState` in `app.js` to manage the active view.
> - The category selector pill navigation bar will be replaced by a clean tab navigation bar containing: **Menu**, **Featured**, **Favorites**, and **History**.
> - **Menu View**: Displays all category sections ("TEASPRESSO SERIES", "MILK TEA SPECIALTY", "I-TEA FRUIT TEA", "DESSERT DRINKS") as a single scrolling list on the screen.
> - **Featured View**: Displays featured products using large cards (like the Brown Sugar Boba Latte card).
> - **Favorites View**: Displays the saved favorite items grid (moved from its previous location).
> - **History View**: Displays order history / reorders list (moved from the previous sidebar).

## Proposed Changes

### Web Application Frontend

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

- **State Management**:
  - Add `menuTab: 'menu'` to `DEFAULT_STATE` so the active menu tab is persisted.
- **Tab Navigation Bar**:
  - Replace the sliding category pills with a tab bar showing **Menu**, **Featured**, **Favorites**, and **History** tabs for both mobile and desktop.
  - Implement active styling on the tabs (e.g. matching the violet theme, with underlines or bold styling).
- **Tab Content Rendering**:
  - **Menu Tab**: Render the categorised lists of drinks (TEASPRESSO SERIES, MILK TEA SPECIALTY, I-TEA FRUIT TEA, DESSERT DRINKS) in a single scrolling feed.
  - **Featured Tab**: Render big cards representing featured items (like *P4 Brown Sugar Boba Latte* and *M7 Crème Brûlée Boba Milk Tea*).
  - **Favorites Tab**: Render the items inside `mockupState.favorites`.
  - **History Tab**: Render the list of recently ordered items / reorder section.
- **Clean Up Sidebar/Sections**:
  - Remove the favorites/reorder card from the desktop sidebar and mobile home section, consolidating them into their dedicated tabs.

## Verification Plan

### Automated Tests
- Run `node -c app.js` to verify syntax.

### Manual Verification
- Open the mockup in the browser (`test-server.js` on port 3000).
- Click on **Featured**, **Favorites**, and **History** tabs, verifying that the appropriate content loads.
- Confirm the main **Menu** view displays the drink category sections in a single scrollable container.

---

## Task Checklist

- `[x]` Create backup `menu-old.html` referencing `app-old.js`.
- `[x]` Copy current `app.js` to `app-old.js` to serve as a rollback point.
- `[x]` Add `menuTab: 'menu'` to global `DEFAULT_STATE` in `app.js`.
- `[x]` Replace category navigation pills with the tab selector bar (**Menu**, **Featured**, **Favorites**, **History**) for mobile and desktop layout views.
- `[x]` Implement dynamic rendering of subviews in the `menu` template depending on the active `mockupState.menuTab`:
  - **Menu view**: All category sections in a single scrolling feed.
  - **Featured view**: Hero card followed by a grid of large featured cards.
  - **Favorites view**: Clean grid of user favorited items (moved from sidebar/mobile bottom).
  - **History view**: Reorders list of items sorted by orders count (moved from sidebar/mobile bottom).
- `[x]` Perform syntax validation on `app.js` with `node -c app.js`.

---

## Walkthrough

We have successfully adopted a tabbed menu page structure inspired by the mobile web layouts of Starbucks and Chipotle. 

## Summary of Changes

### Backups
- Created [menu-old.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu-old.html) as a template clone pointing to `app-old.js`.
- Copied the prior state of the application logic into `app-old.js` to ensure the old version remains fully functional for comparison.

### Layout & Navigation Updates in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- **Persisted Tab State**: Added `menuTab` field to `DEFAULT_STATE` (defaults to `'menu'`).
- **Tab Bar**: Removed the category-specific pills bar. Replaced it with a tab selection bar for mobile (full-width evenly spaced buttons) and desktop layout (aligned top-left links) supporting:
  - **Menu**
  - **Featured**
  - **Favorites**
  - **History**
- Removed the old duplicate Category Navigation block at the top of the file to resolve redundant interface rendering (search, greeting, rewards showing twice).
- **Dynamic Content Subviews**:
  - **Menu View**: Displays drink category sections ("TEASPRESSO SERIES", "MILK TEA SPECIALTY", "I-TEA FRUIT TEA", "DESSERT DRINKS") in a single scrolling feed. Category headings font size increased by 20% (`text-3xl` on desktop, `text-2xl` on mobile) to emphasize visual separation.
  - **Featured View**: Features the prominent hero card (*Brown Sugar Boba Latte*) followed by a grid of large cards showing featured menu specials.
  - **Favorites View**: Shows the user's saved items in a grid layout (transferred from sidebar / main feed).
  - **History View**: Shows past order logs & reorder suggestions based on how many times they have been ordered (transferred from sidebar).

## Verification

### Syntax Validation
- Code checked and validated:
  ```bash
  node -c app.js
  ```
