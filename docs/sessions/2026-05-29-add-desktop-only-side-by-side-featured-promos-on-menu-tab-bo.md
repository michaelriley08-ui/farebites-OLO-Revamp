# Add Desktop-Only Side-by-Side Featured Promos on Menu Tab (Boba Button Style Swap)

---


**Date:** 2026-05-29  
**Conversation ID:** `1a02a625-ed12-414d-8641-d1d273f3e2be`


---

## Implementation Plan

Refine the Brown Sugar Boba Latte promo card button to use a white background with purple text (swapping from purple background with white text).

## Proposed Changes

### farebites-OLO-Revamp

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

- Update the Boba Slide's hover-reveal button styles in `app.js`:
  - Swap button background from `bg-violet-600` to `bg-white`.
  - Swap text color from `text-white` to `text-violet-600`.
  - Set hover state to `hover:bg-violet-50`.

## Verification Plan

### Automated/Manual Verification
- Verify the Boba card hover button displays with a white background and purple text.
- Verify Grapefruit button remains white background with orange text.

---

## Task Checklist

- `[x]` Swap Boba button colors in `app.js` under the `menu` tab view:
  - `[x]` Change background to `bg-white` and hover to `hover:bg-violet-50`.
  - `[x]` Change text color to `text-violet-600`.
- `[x]` Verify Boba card hover button displays with white background and purple text.
- `[x]` Complete walkthrough and document verification.

---

## Walkthrough

Refined the desktop-only side-by-side featured promotional cards at the top of the "Menu" feed to swap the button colors on the Brown Sugar Boba Latte card, aligning it stylistically with the Grapefruit card.

## Changes Made

### Boba Latte Button Styling

#### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

- Swapped the colors on the Boba Latte card's hover-reveal button:
  - Background: White (`bg-white`)
  - Text Color: Purple/Violet (`text-violet-600`)
  - Hover Background: Light Purple (`hover:bg-violet-50`)

## Verification Details

- **Visual Alignment**: Both promo cards now feature clean white buttons with custom thematic text colors (purple/violet for Boba, orange for Grapefruit) when hovered.
- **Micro-interactions**: Hover transitions remain smooth and responsive.
