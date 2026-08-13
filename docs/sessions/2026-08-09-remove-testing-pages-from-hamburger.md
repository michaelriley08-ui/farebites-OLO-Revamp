# Remove Testing Pages from Hamburger Drawer

**Date:** 2026-08-09  
**Conversation ID:** `ae440a8a-aaf5-4399-b898-bacd0202a97e`

## Summary

The mobile and tablet hamburger navigation drawer contained a "Pages" section and an "Alt Versions" card that were added during development for convenient navigation between raw HTML files. These were developer-only shortcuts that should not appear in a production app.

## Implementation Plan

**File Modified:** `app.js`  
**Function:** `hamburgerDrawerHTML()`

Remove the HTML block (approx. lines 1681–1710) that rendered:
- A "Pages" heading with links to all `.html` files (e.g., `index.html`, `menu.html`, `cart.html`, etc.)
- An "Alt Versions" card with links to `menu.html?store=7`, `location-favorites.html`, `menu-favorites.html`

## Verification Plan

Open the hamburger drawer on mobile/tablet viewport and confirm the drawer terminates cleanly after the primary nav items (Home, Menu, Locations, Cart, Log In/Out).

---

## Task Checklist

- [x] Identify the exact block in `hamburgerDrawerHTML()` in `app.js`
- [x] Remove the Pages section and Alt Versions card HTML
- [x] Verify surrounding template literal syntax is intact

---

## Walkthrough

### Changes Made

**[app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)** — Removed lines 1681–1710 from `hamburgerDrawerHTML()`:

```diff
                       .join("")}
-                    
-                    <div class="px-6 py-4 mt-2">
-                        <div class="font-black text-[22px] text-gray-900 leading-tight mb-3">Pages</div>
-                        <div class="flex flex-col gap-3">
-                            <a href="index.html" ...>index.html</a>
-                            <a href="menu.html" ...>menu.html</a>
-                            ... (12 more links)
-                        </div>
-                        <!-- Alt Versions Card -->
-                        <div class="mt-5 p-4 bg-violet-50 rounded-2xl ...">
-                            <div ...>Alt Versions</div>
-                            <a href="menu.html?store=7" ...>menu.html</a>
-                            <a href="location-favorites.html" ...>location-favorites.html</a>
-                            <a href="menu-favorites.html" ...>menu-favorites.html</a>
-                        </div>
-                    </div>
                 </nav>
```

### Verification

- Verified syntax integrity of the surrounding template literal — the `</nav>` closing tag and `</div>` backdrop follow correctly.
- The drawer now terminates cleanly after the navigation items list.
