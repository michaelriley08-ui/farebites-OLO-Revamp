---
name: full-impact-analysis
description: >
  Triggered when debugging bugs, fixing data display issues, resolving count
  mismatches, investigating state inconsistencies, or troubleshooting any
  feature that involves data flowing through multiple pages, components, or
  storage layers. Use this skill before proposing or making any code changes.
---

# Full-Impact Analysis Protocol

When this skill is active, you **must not write or propose any code changes** until you have completed the full-impact analysis below. This prevents the "plug one hole, create another" pattern.

---

## Step 1 — Identify the Data Source

Before anything else, answer:
- Where does this data **originate**? (API response, localStorage, in-memory state, hardcoded constant, user input?)
- Is there **more than one source** that could supply this data? (e.g., `apiLocations || LOCATIONS`)
- Is any of the source data **hardcoded / seed / demo data** that may be leaking into production?

---

## Step 2 — Trace Every Write Point

Find every place the data is **written or mutated**:
- Functions that set or toggle it (e.g., `toggleLocationFavorite`)
- Places it is persisted (e.g., `localStorage.setItem(...)`, `sessionStorage`, `persistAllState()`)
- Places it is initialized or seeded (e.g., `DEFAULT_STATE`, array literals with hardcoded flags)
- Places it is reset or cleared

List each write point with its **file + line number**.

---

## Step 3 — Trace Every Read Point

Find every place the data is **read or consumed**:
- UI components that display it (badge counts, list renders, empty states)
- Functions that compute derived values from it (counts, filters, totals)
- Navigation guards or conditional renders that depend on it
- Other features that piggyback on it

List each read point with its **file + line number**.

---

## Step 4 — Check for Misalignment Between Readers

This is the most critical step. For each pair of read points, verify:

| Check | Question to Ask |
|-------|----------------|
| **Same filter?** | Do all consumers apply the same filtering logic (e.g., active store IDs)? |
| **Same data source?** | Do all consumers read from the same source (localStorage vs in-memory vs API)? |
| **Same timing?** | Is the data available / synced by the time each consumer reads it? |
| **Same schema?** | Do all consumers expect the same data shape / field names? |
| **Seed data leak?** | Could hardcoded defaults inflate a count or display a value the user never set? |

Document any **inconsistencies found** — these are the actual bugs.

---

## Step 5 — Map Secondary Risk Areas

Before proposing a fix, answer:
- If I change the **write point**, which read points are affected?
- If I change the **data source**, which other features rely on the old source?
- If I remove **seed/demo data**, will any users lose state they expected to persist?
- Does this change affect **logged-in vs guest** users differently?
- Does this change behave differently on **first load vs return load**?

---

## Step 6 — Propose the Fix with Impact Statement

Only after completing Steps 1–5, write the implementation plan. Each proposed change must include:

1. **What** is being changed (file + line)
2. **Why** this specific change fixes the root cause (not just the symptom)
3. **What else it affects** — list every read/write point that will be impacted
4. **Verification** — how to confirm the fix works without breaking the listed consumers

---

## Example: How This Was Used

**Bug:** "Saved Locations says 4 stores but favorites page shows 0."

| Step | Finding |
|------|---------|
| Data source | `LOCATIONS` array (hardcoded) + `farebites_location_favorites` in localStorage |
| Write points | `toggleLocationFavorite()`, `persistAllState()`, first-load seeding block |
| Read points | Profile badge (`savedLocsCount`), `location-favorites` page render |
| Misalignment | Profile used raw `locList`; favorites page used `getEnabledLocations()` (active IDs filter) — different sets |
| Seed leak | 3 `LOCATIONS` entries had `fav: true` hardcoded — inflated count for new users |
| Fix | (1) Set all seed `fav` to `false`. (2) Align profile count to use `getEnabledLocations()` + localStorage |

---

## Trigger Phrases

You can activate this analysis explicitly by saying any of:
- `"Full-impact analysis before any fix."`
- `"Check the full data flow first."`
- `"Don't just patch it — trace the whole thing."`

Even without these phrases, this skill auto-activates on any debugging or bug-fix task involving data display, counts, state sync, or storage.
