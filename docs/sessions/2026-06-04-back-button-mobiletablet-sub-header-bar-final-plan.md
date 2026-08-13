# Back Button — Mobile/Tablet Sub-Header Bar (FINAL PLAN)

---


**Date:** 2026-06-04  
**Conversation ID:** `22858822-cf76-47e7-a047-160ddf900f13`


---

## Implementation Plan

## Decisions Locked

| Question | Decision |
|---|---|
| Pages with chevron-left in mobile header | Replace chevron with hamburger icon (`openHamburger()`), add Back sub-bar below |
| `order-status` back target | → `account` (accessed from My Orders context) |
| `order-confirm` | Include Back button, label = **"Back to Menu"** |
| `directions` | Special case — full-screen map layout, no sticky header. Add a floating `← Back` pill button overlaid on the map (top-left, matching the existing search bar position) |

---

## The Back Sub-Header Template

Placed immediately after `</header>`, mobile/tablet only:

```html
${!isDesktop ? `
<div class="bg-white border-b border-gray-100 shrink-0 px-4 py-2">
    <button onclick="navigateTo('BACK_TARGET')" class="flex items-center gap-1.5 text-xs text-[#1f0b35] font-black uppercase tracking-tight group hover:text-violet-600 transition-colors">
        <i class="fa-solid fa-chevron-left text-[10px] text-violet-600 transition-transform group-hover:-translate-x-0.5"></i>
        <span>Back</span>
    </button>
</div>
` : ''}
```

---

## Page-by-Page Change Table

| Route | Line | Mobile Header Change | Back sub-bar target |
|---|---|---|---|
| `cart` | 3677 | No change (already has hamburger) | `menu` |
| `account` | 3903 | No change (already has hamburger) | `restaurant-home` |
| `checkout` | 5198 | Swap chevron → hamburger | `cart` |
| `order-status` | 4303 | Swap chevron → hamburger | `account` |
| `track-order` | 4496 | Swap chevron → hamburger | `order-status` |
| `order-confirm` | 5050 | Swap chevron → hamburger | `menu` (label: "Back to Menu") |
| `menu-favorites` | 5511 | Swap chevron → hamburger | `menu` |
| `location-favorites` | 5437 | Swap chevron → hamburger | `locations` |
| `registration` | 4689 | Swap chevron → hamburger | `sign-in` |
| `order-details` | 2642 | Swap chevron → hamburger | `locations` |
| `order-details-alt` | 2919 | Swap chevron → hamburger | `locations-alt` |
| `menu-scan` | 3137 | No change (check) | `restaurant-home` |
| `forgot-password` | 1775 | Has back button already in page body — no header change | `sign-in` |
| `rewards` | 1775 | Has back button already in page body — check header | `account` |
| `customize` | 3344 | Swap chevron → hamburger | `menu` |
| `customize-alt` | 3507 | **Already done** ✅ | `menu-alt` |
| `directions` | mobile | Special: no sticky header → floating Back pill on map | `locations` |
| `privacy` | 5583 | Swap chevron → hamburger | `restaurant-home` |

---

## Execution Order

1. **[POC]** `cart` — add Back sub-bar only (header already has hamburger)
2. Get user sign-off, then apply to all remaining pages in one pass

---

## Verification

- Mobile viewport: sub-bar visible below nav bar, Back navigates correctly
- Desktop viewport: sub-bar hidden, desktop nav unchanged
- All excluded pages (`home`, `menu`, `locations`, etc.) have no sub-bar
