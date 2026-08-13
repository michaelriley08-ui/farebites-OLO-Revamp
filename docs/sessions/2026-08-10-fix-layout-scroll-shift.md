# Fix: Layout Shift and Unscrollable Pages

**Date:** 2026-08-10  
**Conversation ID:** 11cf739d-60ff-40c1-841f-406549704c41

## Summary
Home page and menu page were unscrollable on desktop, content appeared shifted to the right, and the Location/Sign In nav items were cut off. Investigation pointed to three separate issues.

## Root Causes Found

### 1. Body overflow stuck from modify modal
`_openModifyModal()` sets `document.body.style.overflow = "hidden"`. If the user navigated away from the customize page while the modal was open, that overflow lock was never cleared. `renderPage()` never reset it.

### 2. `menu-scroller` used `h-full` + `overflow-y-auto` on desktop
On desktop, `app-content` uses `min-height: 100vh`. Since `h-full` resolves to 100% of the parent's computed height (which grows with content), `menu-scroller` became exactly the size of all its content — no overflow, no scroll possible.

### 3. No overflow-x containment on html/body
Any slightly-too-wide element (carousel with negative margins, etc.) pushed the document wider than the viewport, causing horizontal scroll. With the document shifted right, the sticky nav's right items (Location, Sign In) appeared off screen.

## Fixes Applied

- **`shared.css`**: Added `overflow-x: hidden` to both `html` and `body`.
- **`app.js` — `renderPage()`**: Added body overflow reset at top of function.
- **`app.js` — `menu-scroller`**: Desktop uses `min-h-screen` with no overflow-y (window scrolls). Mobile/tablet keeps `h-full overflow-y-auto`.
- **All `*.html` files**: Cache buster bumped `v24` → `v25`.

## Walkthrough

Changes made via direct code analysis. User should hard-refresh (`Cmd+Shift+R`) to pick up new cached files.
