# Hamburger Nav + Compact Menu Header Redesign

---


**Date:** 2026-05-26  
**Conversation ID:** `8f061000-8f8d-4abf-ae47-1f8afc203e49`


---

## Implementation Plan

This plan implements the three feedback items for the restaurant webview:
- A global hamburger slide-out drawer for top-level navigation
- A redesigned compact sticky header on `menu.html`
- Removal of redundant back button and "Menu" title from the menu page

---

## Proposed Changes

### 1 — Global Hamburger Drawer (new helper function in `app.js`)

A new `renderHamburgerDrawer()` helper generates the drawer HTML and injects it into the current page's root `div`. The drawer state is toggled via `mockupState.hamburgerOpen`.

**Drawer layout (matches Crumbl/Starbucks pattern):**

```
┌─────────────────────────────┐
│  Hi, Michaelangelo          │ ← if signed in
│  View My Account  ×         │
│ ─────────────────────────── │
│  Home                       │
│  Menu                       │
│  Locations                  │
│  Rewards                    │
│  Gift Cards                 │
├─────────────────────────────┤
│  Sign Out                   │ ← bottom of drawer
└─────────────────────────────┘
```

If **not signed in**, the top shows:
```
│  Sign In               ×   │
```

The drawer slides in from the left as a fixed overlay with a semi-transparent backdrop on the right side (tap backdrop to close).

---

### 2 — `restaurant-home` + `restaurant-home-logo` Headers

**Current:**
```
[👤 user] [🔲 scan]   PICKUP / Home   [🛍 cart]
```

**Updated:**
```
[≡ hamburger] [👤 user] [🔲 scan]   PICKUP / Home   [🛍 cart]
```

Hamburger icon added to the left icon group. Tapping it sets `mockupState.hamburgerOpen = true` and calls `navigateTo(currentPage)` to re-render with drawer open.

---

### 3 — `menu` Page Header — Full Redesign

**Current (2 rows):**
```
Row 1: [← back]      Menu      [🛍 cart]
Row 2: [≡] [🔍]   Hi Michaelangelo   [⭐ rewards]
Row 3: [Menu] [Featured] [Favorites] [History]  ← tabs
```

**Updated (2 rows, slimmer):**
```
Row 1: [≡ hamburger] [🔍 search]   i-Tea   [⭐ rewards] [🛍 cart]
Row 2: [Menu] [Featured] [Favorites] [History]  ← tabs
```

- **Removes:** back button, "Menu" title text, "Hi Michaelangelo" greeting (moved to hamburger drawer)
- **Keeps:** hamburger, search, rewards icon, cart icon, tab bar
- **Center:** Restaurant name "i-Tea" (or location info) as a lightweight text label

---

## Affected Code in `app.js`

### Functions to add
- `openHamburger()` — sets state and re-renders
- `closeHamburger()` — sets state and re-renders
- `hamburgerDrawerHTML()` — returns the drawer HTML string

### Routes to modify
| Route | Change |
|---|---|
| `restaurant-home` | Add `≡` to header left icon group |
| `restaurant-home-logo` | Add `≡` to header left icon group |
| `menu` | Replace header rows 1+2 with single compact row |

### `renderPage()` injection
The drawer HTML will be injected at the top of the rendered content for all restaurant pages when `mockupState.hamburgerOpen === true`.

---

## Verification Plan

- Open `restaurant-home.html` → tap `≡` → drawer slides in with signed-in greeting
- Tap backdrop or `×` → drawer closes
- Navigate from drawer links (Home → restaurant-home, Menu → menu, Locations → location-pick)
- Open `menu.html` → confirm single-row sticky header: `≡` / `🔍` / `i-Tea` / `⭐` / `🛍`
- Confirm tab row (Menu / Featured / Favorites / History) still works below
- Check desktop viewport — hamburger drawer hidden, desktop nav used instead

---

## Task Checklist

- [x] Add `hamburgerOpen`, `menuSearchOpen`, `menuSearchQuery` to `DEFAULT_STATE`
- [x] Add `openHamburger()` / `closeHamburger()` global functions
- [x] Add `hamburgerDrawerHTML()` function (all restaurant pages, all nav links)
- [x] Inject drawer into `renderPage()` for all restaurant pages
- [x] Update `restaurant-home` header — add `≡` to left icon group
- [x] Update `restaurant-home-logo` header — add `≡` to left icon group
- [x] Redesign `menu` page header — compact single row: `≡` `🔍` `[i-Tea logo]` `⭐` `🛍`
- [x] Add inline search bar row (below header, shown when `menuSearchOpen`)
- [x] Wire search filter to menu item rendering
- [x] Slim down menu sticky tabs row (remove greeting row, keep only tabs)
- [x] Update `account` page header — replace `←` with `≡` hamburger
- [x] Update `cart` page header — replace `←` with `≡` hamburger
- [x] Update `qr-code-guide` header — replace `←` with `≡` hamburger
- [x] Add post-render autofocus hook for search input
- [x] Syntax check passed (`node --check`)
