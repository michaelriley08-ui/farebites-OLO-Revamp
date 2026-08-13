# Fix: Saved Locations Count Mismatch on Profile Page

**Date:** 2026-08-09  
**Conversation ID:** 56464908-1a0c-4042-945a-5818d4dfeb02

## Summary

Two related bugs caused the "Saved Locations" count on the Account/Profile page to be wrong and out of sync with the `location-favorites` page.

1. **Profile badge showed wrong count** — 3 hardcoded `fav: true` entries in the `LOCATIONS` array (demo/seed data) caused brand-new users to see "3 stores" without ever clicking a heart.
2. **Profile count and favorites page were misaligned** — The profile used a raw, unfiltered location list while the favorites page used `getEnabledLocations()` (which applies an active store IDs filter). The Tearay location (ID: 9008) was not in the active IDs list, so it was counted on the profile but never appeared on the favorites page.

## Implementation Plan

### Fix 1 — Removed hardcoded `fav: true` from LOCATIONS seed data
Set all 3 LOCATIONS entries to `fav: false`:
- `i-Tea - Tempe` (line 118)
- `i-Tea - OAKLAND` (line 208)
- `i-Tea - TEARAY` (line 248)

### Fix 2 — Fixed `savedLocsCount` to use `getEnabledLocations()` + localStorage

```js
// Before:
const locList = mockupState.apiLocations?.length > 0 ? mockupState.apiLocations : LOCATIONS;
const savedLocsCount = locList.filter((l) => l.fav).length;

// After:
const enabledLocs = getEnabledLocations();
const storedFavs = JSON.parse(localStorage.getItem("farebites_location_favorites") || "{}");
const savedLocsCount = enabledLocs.filter((l) => !!storedFavs[l.name]).length;
```

Both the profile badge and the favorites page now read from the same source of truth: the `farebites_location_favorites` localStorage key, filtered to the same active location set.

## Verification Plan

### Manual Verification
1. Clear localStorage → profile shows **0 stores**
2. Go to Locations → heart a store → profile badge shows **1 store**
3. Click "Saved Locations" → favorites page shows the **same store**
4. Delete from favorites → badge returns to **0 stores**

---

## Task Checklist
- [x] Remove hardcoded `fav: true` from LOCATIONS (3 entries)
- [x] Fix `savedLocsCount` on account page to use `getEnabledLocations()` + localStorage

---

## Walkthrough

### Files Modified
- [`app.js`](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

### Changes Made

**Lines 118, 208, 248** — Removed demo seed favorites from `LOCATIONS`:
```diff
-    fav: true,   // i-Tea - Tempe
+    fav: false,

-    fav: true,   // i-Tea - OAKLAND
+    fav: false,

-    fav: true,   // i-Tea - TEARAY
+    fav: false,
```

**Lines 5753–5758** — Fixed profile badge count:
```diff
-    const locList = mockupState.apiLocations?.length > 0 ? mockupState.apiLocations : LOCATIONS;
-    const savedLocsCount = locList.filter((l) => l.fav).length;
+    const enabledLocs = getEnabledLocations();
+    const storedFavs = JSON.parse(localStorage.getItem("farebites_location_favorites") || "{}");
+    const savedLocsCount = enabledLocs.filter((l) => !!storedFavs[l.name]).length;
```

### Notes
- Users who already had the seed favorites stored in their localStorage will still see those 3 entries on the favorites page until they manually remove them. This is intentional — we don't want to silently wipe user data.
- Going forward, the count and the list will always be perfectly in sync.
