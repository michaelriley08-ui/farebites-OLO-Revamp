# Remove Temporary Viewport Switcher & Enable Clean Responsive Design

---


**Date:** 2026-05-30  
**Conversation ID:** `ef2fc8b2-ad9a-472d-a40d-ab6355bb4ec8`


---

## Implementation Plan

Instead of patching the prototype-only simulated mobile frame and switcher widget, we are removing this temporary code completely. This makes the application production-ready, allowing it to adapt dynamically to the user's actual device screen width (desktop, tablet, or mobile) and be verified using standard browser DevTools (e.g. Chrome Device Mode).

## Proposed Changes

---

### Viewport and Device Simulator Removal

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

- Remove the `forcedViewport` override initialization on line 114:
  `let forcedViewport = sessionStorage.getItem('farebitesForcedViewport') || null;`
- Update `getCurrentViewport()` to only rely on window width:
  ```javascript
  function getCurrentViewport() {
      if (window.innerWidth >= 1024) return 'desktop';
      if (window.innerWidth >= 640) return 'tablet';
      return 'mobile';
  }
  ```
- Update the `'resize'` event listener to remove references to `forcedViewport`.
- Remove the call to `applyViewportContainerStyles()` at the beginning of `renderPage()`.
- Remove the call to `renderViewportSwitcher()` at the end of `renderPage()`.
- Delete the temporary viewport switcher utilities code block:
  - `applyViewportContainerStyles()`
  - `renderViewportSwitcher()`
  - `setForcedViewport()`

## Verification Plan

### Manual Verification
- Open the application in a browser.
- Verify that the floating viewport switcher widget is gone.
- Inspect the page using **Chrome DevTools** (`Cmd + Option + I` or Right-click -> Inspect).
- Toggle Chrome's **Device Toolbar** (`Cmd + Shift + M`) and switch between different preset sizes (e.g. iPhone 12 Pro, iPad, Desktop).
- Confirm the layout dynamically adjusts to the simulated screens without any hardcoded scale/bezel overlays.

---

## Task Checklist

- [x] Remove `forcedViewport` initialization and references in `getCurrentViewport()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- [x] Clean up the `'resize'` event listener in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- [x] Remove calls to `applyViewportContainerStyles()` and `renderViewportSwitcher()` in `renderPage()` in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- [x] Delete the temporary viewport switcher utilities code block in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- [x] Remove the hardcoded simulated status bar mockup from the `directions` page template in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- [x] Verify fluid responsiveness across breakpoints (mobile, tablet, desktop)

---

## Walkthrough

We have removed the temporary custom viewport switcher and device-simulating frames from the application's codebase to clean it up for production deployment and enable native browser-driven responsive rendering.

## Changes Made

### Viewport and Switcher Code Cleanup
- **[app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)**:
  - Removed the `forcedViewport` variable and references.
  - Simplified `getCurrentViewport()` to dynamically return `'desktop'`, `'tablet'`, or `'mobile'` layout categories based solely on the current browser `window.innerWidth`.
  - Cleaned up the window `'resize'` event listener to immediately detect browser sizing changes and re-render routes when boundaries are crossed.
  - Removed calls to `applyViewportContainerStyles()` and `renderViewportSwitcher()` inside `renderPage()`.
  - Deleted the sitemap/switcher HTML construction function and style application utilities entirely.
  - Removed the hardcoded simulated mobile status bar mockup (time, signal, wifi, and battery icons) from the `directions` page template so it matches the clean layout of all other pages.

## Verification & Testing
1. **No Layout Interferences**: The website now loads natively at the correct window size without rendering simulated bezels, shadows, custom scale transforms, or forcing a `375px` x `667px` viewport box on mobile layouts.
2. **Directions Page Cleaned**: Navigating to the directions page no longer displays the hardcoded phone status bar, layout is clean and responsive.
3. **Breakpoints Testing**:
   - Resizing the browser window automatically triggers the respective layout view rules when crossing `640px` (Tablet) and `1024px` (Desktop) widths.
   - Inspecting the page using **Chrome DevTools Device Emulation** (e.g. simulating an iPhone 12 Pro or iPhone 13/14) shows the layout rendering in the exact, authentic mobile proportions natively supported by mobile browsers.
