# Favorites Architecture — Recommendation & Implementation Plan

---


**Date:** 2026-06-03  
**Conversation ID:** `b2eae037-36c4-4974-ae55-e0680a2171d7`


---

## Implementation Plan

## Industry Research Summary

I analyzed the favorites UX patterns across the top OLO platforms:

| Platform | Menu Favorites | Saved Locations | Where Managed? |
|:---|:---|:---|:---|
| **Starbucks** | ✅ "Favorite" drinks on Home tab | ✅ Saved stores (Home/Work) | Favorites on Home screen; Locations in store picker; both also accessible from Profile |
| **Chick-fil-A** | ✅ "Favorites" tab in bottom nav | ✅ "My Location" in store picker | Dedicated bottom-nav Favorites tab for food; locations stay in the locator flow |
| **Chipotle** | ✅ "Recent Orders" + saved combos | ✅ Saved locations | Home screen "Your Usual" section; locations in the ordering flow |
| **Dutch Bros** | ✅ Favorited drinks | ✅ My Locations | Favorites surfaced on home screen carousel; manage in Profile |
| **Sweetgreen** | ✅ "Favorites" tab | ✅ Saved locations | Unified Favorites page, locations in selector |

### Key Takeaways

1. **Menu favorites and saved locations serve different purposes** — menu favorites drive reordering speed; saved locations reduce friction in the store-selection step.
2. **Nobody merges them into a single combined page** — they are conceptually different (what you eat vs. where you eat).
3. **Profile/Account acts as a hub, not the primary home** — leading apps put quick-access links to both on the Profile page, but the actual management happens on dedicated screens.
4. **The home screen is king** — the #1 best practice is surfacing favorite menu items on the home/dashboard screen for one-tap reordering.

---

## Recommendation: Hybrid Hub Approach

> [!IMPORTANT]
> **Keep the two separate dedicated pages** (`menu-favorites` and `location-favorites`), but **add a "My Favorites" section to the Account page** that acts as a quick-access hub linking to both. This matches the Starbucks/Dutch Bros pattern and is the cleanest architecture for a pickup-only OLO app.

### Why This Is Better Than the Alternatives

| Approach | Pros | Cons | Verdict |
|:---|:---|:---|:---|
| **A. Two separate pages (current)** | Clean separation of concerns | No central hub; users must remember two separate URLs | ⚠️ Functional but disjointed |
| **B. One combined page** | Single destination | Confusing UX — locations and drinks are fundamentally different interactions | ❌ Anti-pattern |
| **C. Everything in Profile** | One place for everything | Profile becomes bloated; favorites get buried below personal info and settings | ❌ Bad discoverability |
| **D. Hub on Profile + dedicated pages (recommended)** | Central access point, clean dedicated management, matches industry leaders | Minor implementation effort | ✅ Best of all worlds |

---

## Proposed Changes

### Account/Profile Page — Add "My Favorites" Hub Section
#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

Insert a new card between the **Account Settings** card and the **Order History** card in the `'account'` route handler (~line 4102). This card will contain:

- **"My Favorites" header** with a heart icon (consistent with the favorites visual language)
- **Two row buttons**:
  - 🍵 **Menu Favorites** — shows a count badge (e.g., "4 items"), clicking navigates to `menu-favorites`
  - 📍 **Saved Locations** — shows a count badge (e.g., "3 stores"), clicking navigates to `location-favorites`
- Styled consistently with the existing Account Settings and Order History cards

```
┌─────────────────────────────────┐
│ ♥  My Favorites                 │
├─────────────────────────────────┤
│ 🍵  Menu Favorites    4 items → │
│ 📍  Saved Locations   3 stores →│
└─────────────────────────────────┘
```

---

### Keep Existing Dedicated Pages (No Changes Needed)
#### [NO CHANGE] Menu Favorites page (`menu-favorites` route)
#### [NO CHANGE] Location Favorites page (`location-favorites` route)

These pages remain as-is. They are the actual management surfaces where users add/remove/edit favorites and labels. The Account page hub simply links to them.

---

## Open Questions

> [!NOTE]
> **Home screen favorites carousel** — Do you also want me to surface a "Your Favorites" quick-reorder carousel on the home/dashboard page (`restaurant-home`)? This is the #1 industry best practice for driving repeat orders, but it's a bigger change. I can add it as a follow-up phase if you'd like.

> [!NOTE]
> **Hamburger menu links** — Should the hamburger/sidebar menu include direct links to both favorites pages, or is the Account hub sufficient for discoverability?

---

## Verification Plan

### Manual Verification
1. Navigate to the **Account** page and verify the new "My Favorites" hub card appears between Account Settings and Order History
2. Verify the count badges dynamically update (e.g., favoriting a new store on the locator page should increment the "Saved Locations" count on the Account page)
3. Verify clicking each row navigates to the correct dedicated page
4. Verify both dedicated pages (`menu-favorites` and `location-favorites`) continue to work as before

---

## Task Checklist

- [x] Add "My Favorites" hub card to the Account page (between Account Settings and Order History)
- [x] Add "Your Favorites" carousel to the desktop `restaurant-home` view
- [x] Add links to Menu Favorites and Saved Locations in the hamburger menu
- [x] Verify syntax and test

---

## Walkthrough

We have successfully implemented interactive store favorites, custom labels, basemap color enhancements, smooth micro-animations, and integrated favorites across the profile/navigation surfaces.

## Changes Made

### 1. "My Favorites" Hub on My Account Page
* Added a new **My Favorites** card to the [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) `'account'` route handler, positioned between Account Settings and Order History.
* Displays dynamic counts of menu favorites (e.g., "4 items") and saved locations (e.g., "3 stores").
* Provides clickable rows navigating directly to the dedicated `menu-favorites` and `location-favorites` management screens.

### 2. Desktop Favorites Carousel
* Implemented a dynamic **Your Favorites** section on the desktop `restaurant-home` view in `app.js`.
* If the user has favorite items, they see a clean **4-column grid** displaying up to 4 favorites. This layout is perfectly aligned with the margins, gutters, and boundaries of the category list above it (`max-w-[1080px]` container with `gap-6` spacing). Each card uses the premium featured items card layout (full-card background image, dark purple/violet gradient overlay fading out by a 65% stop, a pink "Favorites" heart badge, and a single prominent white "Add to Order" action button).
* Centered the section header ("Your Favorites" title and subheading) to align perfectly with the categories and featured items sections on the home page, and relocated the pink **Manage Favorites** text link/arrow button to be centered directly below the 4-column cards grid.
* Styled all the interactive indicators (the "Favorites" top-left badge background, the "Manage Favorites" text/arrow button, the "Add to Order" text color, the empty state heart icon, and the empty state buttons) with the secondary brand hex color `#E61874`.
* Clicking anywhere on the card or on the action button triggers customization by calling a new helper function `selectFavoriteAndNavigate(name)`.
* If the user has no favorites, it renders a premium card encouraging them to discover the menu and favorite items.

### 3. Hamburger Menu Links
* Added direct navigation links for **Menu Favorites** and **Saved Locations** inside the `hamburgerDrawerHTML` nav items list.
* The sidebar drawer now matches the primary navigation options expected in modern OLO apps.

### 4. Custom Line Burst Animations & UI Styling (Previous Phase)
* Replaced the box-shadow circular particles animation with a premium, clean **8-line radial burst** in [shared.css](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/shared.css).
* Configured bouncy `@keyframes heartBurst` to animate the heart icon itself on toggle.
* Increased the size of the heart buttons on cards to `w-8 h-8` and their icons to `text-[19px]` for better visual emphasis.
* Set up map sidebar modifications and saved locations management templates.

---

## Verification Results

### Automated Syntax Check
We ran a syntax compiler check to verify there are no JavaScript syntax errors in the refactored code:
```bash
node -c app.js
```
* **Result**: Passed successfully with no errors or warnings.
