# Desktop Hero Overlap Design Plan

---


**Date:** 2026-05-26  
**Conversation ID:** `838a1683-b6d4-4cab-b67c-0e2e5f32b157`


---

## Implementation Plan

We want to update the layout on the desktop version of the restaurant homepage (`restaurant-home` and `restaurant-home-logo` views) so that:
1. The hero image doesn't cover the entire screen background on desktop. Instead, it occupies a distinct top banner section (showing more of the background/hero image).
2. Below the hero banner, we introduce a solid content background (e.g. light gray or white).
3. The row of 4 carousel cards is pulled upward using negative margins so that the top half of the cards overlaps the bottom edge of the hero banner, creating a "peeking up" layout effect.
4. Mobile and Tablet layouts remain completely unchanged.

## Proposed Changes

### [Component Name] Restaurant Home Route & Layouts

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
We will modify both the `restaurant-home` and `restaurant-home-logo` routes inside the `routes` object:

* **Background Configuration**:
  On desktop (`isDesktop`), we will remove the full-screen absolute background image overlay and constrain it to a top hero header container (e.g. `lg:h-[420px]`).
* **Content Container**:
  Introduce a solid white or light-slate background container directly below the hero banner.
* **Negative Margin Overlap**:
  Wrap the carousel container in a wrapper that has a negative margin on desktop (`lg:-mt-28` or `lg:-translate-y-1/2`) to pull the top of the cards over the bottom edge of the hero image.
* **Z-Index Controls**:
  Ensure proper stacking contexts (`relative z-30`) so the cards float on top of the hero banner border cleanly.

## Verification Plan

### Manual Verification
* Run the preview switcher in **Desktop** mode. Verify that the hero banner is positioned at the top, followed by a solid background page section, with the 4 menu cards overlapping the banner seam.
* Switch to **Mobile** and **Tablet** modes. Verify that the layout remains exactly as it was, with the full-screen background image and floating bottom carousel intact.
