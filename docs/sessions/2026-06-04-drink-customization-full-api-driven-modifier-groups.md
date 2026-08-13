# Drink Customization — Full API-Driven Modifier Groups

---


**Date:** 2026-06-04  
**Conversation ID:** `0738301c-6863-4b63-9b73-2351c956ef03`


---

## Implementation Plan

## Background

The `order-customize.html` page currently renders modifiers from `menuSubItemGroups` returned by `GET /api/RestaurantMenu/location/{locationId}/menu-item/{menuItemId}` (`MenuItemDetailDto`). The API now **also** returns `menuSubItems`, `subMenuChoices`, and `menuSubItemModifyPrices` — all of which are relevant for drink customization (sugar level, ice level, size, toppings, etc.).

The current page already calls this endpoint, but only consumes `menuSubItemGroups`. The goal is to render all modifier data correctly, using proven industry patterns from leading drink OLOs (Gong Cha, Tiger Sugar, Kung Fu Tea, Boba Guys).

---

## API Data Model — What the Endpoint Returns

`MenuItemDetailDto` has **four modifier collections**:

| Field | Schema | What it represents |
|---|---|---|
| `menuSubItemGroups` | `MenuSubItemGroupDto[]` | Grouped option sets with min/max select (e.g. "Ice Level", "Sugar Level", "Toppings") |
| `menuSubItems` | `MenuSubItemDto[]` | Flat list of ungrouped add-ons (e.g. "Add Popping Boba") |
| `subMenuChoices` | `SubMenuChoiceDto[]` | "Choose a size / base" — nested sub-item groups (like a size choice that unlocks further options) |
| `menuSubItemModifyPrices` | `MenuSubItemModifyPriceDto[]` | Modify-type items with add/extra/less/no pricing tiers |

### `MenuSubItemGroupDto` (the main driver today)
- `groupName` / `displayName` — human label
- `minSelect` / `maxSelect` — validation rules (0 = optional, 1 = radio, >1 = multi)
- `isSubstitute` — true for "substitute" groups (e.g. milk substitutes)
- `groupPrices: MenuSubItemGroupPriceDto[]` — each price entry has `menuSubItem`, `price`, `halfPrice`, `isDefault`, `position`

### `MenuSubItemModifyPriceDto` (new — for add/less/extra/no modifiers)
- Links a `menuSubItemId` to a parent menu item
- Has `addPrice`, `extraPrice`, `lessPrice`, `noPrice` — the 4 standard "modify type" options
- `isDefaultItem` — whether this sub-item is included by default

### `OrderMenuSubItemRequest` (what we send when placing an order)
- `menuSubItemId`, `itemTypeId`, `itemGroupPriceId`, `quantity`, `modifyType` (null/"add"/"extra"/"less"/"no"), `side` (for pizza half/half)

---

## Industry-Standard UX Patterns for Drink OLOs

Research from Gong Cha, Tiger Sugar, Kung Fu Tea, and Boba Guys confirms these best practices:

### 1. **Segmented Control / Pill Selector** — for mutually exclusive single-choice groups
- Used for: Sugar Level, Ice Level, Size, Temperature (Hot/Cold/Iced)
- Horizontally scrollable pill row (not dropdown — dropdowns hurt conversion on mobile)
- Selected pill: brand color fill + white text; unselected: light gray border

### 2. **Checkbox Grid / Stepper** — for multi-select toppings
- Used for: Toppings, Puddings, Jellies
- Show price delta prominently (+$0.75)
- Quantity stepper (–/+) for extras that can be doubled

### 3. **Modify-Type Selector** — for included add-ons that can be adjusted
- Used for: Milk, Syrup, Boba (included by default, can be "extra", "less", or "none")
- Four-button row: **None | Less | Regular | Extra** (like Chipotle's customization wheel)
- Regular is the default (pre-selected)

### 4. **Scrollable Section Layout** with sticky "Add to Cart" footer
- Sections stack vertically: Image → Price/Name → Quantity → Sugar → Ice → Toppings → Modifiers → Note
- Sticky bottom bar with live price total and CTA button

### 5. **Validation Toast** for required groups
- If a required group has no selection, shake the section + show inline "Please select" badge before allowing add-to-cart

---

## Proposed Changes

### Architecture Decision

All logic stays in [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js) to stay consistent with the existing SPA approach. We will:

1. **Refactor** the `renderGroups()` helper inside both `'customize'` and `'customize-alt'` page renderers to be a shared `renderModifierSections()` function (extracted to the module scope to avoid duplication)
2. **Add `renderModifyPriceSection()`** for `menuSubItemModifyPrices`
3. **Add `renderSubMenuChoiceSection()`** for `subMenuChoices`
4. **Add `renderFlatSubItemSection()`** for flat `menuSubItems`
5. **Upgrade selection state** to store `modifyType` for modify-price items
6. **Add validation** before `_addToCart`

---

### Key Files

---

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

**`getDefaultCustomizeGroups()`** (line ~6315)
- Keep the existing fallback mock data (Sugar Level, Ice Level, Toppings) — it works well and is already structured like real API data

**New extracted function: `renderModifierSections(detail, sels, colLayout)`**
- Replaces the duplicated `renderGroups()` inner function in both `'customize'` and `'customize-alt'`
- Renders all four modifier types in the correct order:
  1. `subMenuChoices` → size/base choice (if present)
  2. `menuSubItemGroups` → sugar, ice, toppings (radio pills + steppers)
  3. `menuSubItemModifyPrices` → modify-type rows (None/Less/Regular/Extra)
  4. `menuSubItems` → flat add-ons (stepper rows)

**New UI components (rendered inside the above):**

| Component | For | Control type |
|---|---|---|
| `renderRadioGroup(group, sels)` | Single-select groups (maxSelect=1) | Horizontal scrollable pill row |
| `renderStepperGroup(group, sels)` | Multi-select groups (maxSelect>1) | Checkbox + optional stepper |
| `renderModifyTypeRow(modifyPrice, sels)` | Modify-price items | 4-button: None/Less/Regular/Extra |
| `renderFlatSubItemRow(subItem, sels)` | Flat sub-items | Stepper (+/–) |

**`window._selectModifyType(menuSubItemId, modifyType, price)`**
- New global handler for modify-type buttons (None/Less/Regular/Extra)
- Stored in `mockupState._customizeModifyTypes = { [menuSubItemId]: { modifyType, price } }`

**`window._addToCart()`** (line ~6529)
- Enhanced to also collect `_customizeModifyTypes` into `OrderMenuSubItemRequest` items with the correct `modifyType` field
- Adds required-group validation: check all groups where `minSelect >= 1` have at least one selection; if not, show toast + return early

**State additions to `mockupState`:**
- `_customizeModifyTypes: {}` — stores modify-type selections `{ [menuSubItemId]: { modifyType: 'add'|'extra'|'less'|'no', price: number } }`

**`selectItemAndNavigate()`** (line ~6360)
- Reset `_customizeModifyTypes = {}` when selecting a new item
- Apply default modify-type selections (items where `isDefaultItem = true` → set `modifyType = 'add'`)

---

## Visual Design

- **Pill selectors**: Horizontal scrollable row with `overflow-x: auto; scrollbar-none`. Selected = `bg-violet-600 text-white`, unselected = `border border-gray-200 text-gray-700 hover:border-violet-300`
- **Modify-type row**: 4 rounded buttons in a `grid grid-cols-4 gap-1` with icons (✕ / ↓ / ● / ↑). Active = `bg-violet-600 text-white shadow-sm`
- **Stepper rows**: unchanged from current (works well)
- **Validation**: When required group fails → border-red-400 pulse on the section + inline badge `Required — Please select one`
- **Section order badge**: Small colored icon before each section header to visually categorize (🧊 ice, 🍯 sugar, ✨ toppings, etc.)

---

## Open Questions

> [!IMPORTANT]
> **The API returned empty modifier arrays for the test item (Med Ranch, ID=1).** Real drink items at the selected location will have populated `menuSubItemGroups`. The fallback mock data (`getDefaultCustomizeGroups()`) will continue to work for items with no API data. **Do you want me to call the API with a specific drink item ID to verify the live modifier data shape before implementing?** Or proceed with the schema spec?

> [!NOTE]
> **`subMenuChoices` and `menuSubItemModifyPrices`**: The schema is defined in the API but may or may not be populated for your menu items yet. The plan handles them gracefully (renders when present, skips when empty). Should I give equal visual weight to these sections, or treat them as secondary?

> [!NOTE]
> **`modifyType` in the order payload**: The `OrderMenuSubItemRequest` has a `modifyType` field (string). Do you know the valid values the API expects? Based on the schema, likely `"add"`, `"extra"`, `"less"`, `"no"` — confirm with the API developer if possible.

---

## Verification Plan

### Automated (build check)
- Open the app in browser at `order-customize.html` and verify no JS console errors
- Navigate to a drink item → confirm modifier groups load from API (or fallback)

### Manual
- Select a location → pick a drink → verify Sugar/Ice/Toppings sections render
- Tap pills (sugar/ice) — confirm selection highlight updates
- Tap steppers (toppings) — confirm qty updates and price total changes
- Tap "Add to Cart" with no required selection → confirm validation toast fires
- Tap "Add to Cart" with all required selected → confirm cart navigation
- Verify `subMenuChoices` and `menuSubItemModifyPrices` sections render when API data is present

---

## Task Checklist

## Phase 1: State & Helpers
- [x] Find state init and add `_customizeModifyTypes: {}`
- [x] Add shared module-level modifier rendering functions
- [x] Add `window._selectModifyType()` global handler
- [x] Update `selectItemAndNavigate()` to reset `_customizeModifyTypes`

## Phase 2: Page Renderers
- [x] Refactor `'customize'` renderer to use shared functions
- [x] Refactor `'customize-alt'` renderer to use shared functions

## Phase 3: Cart + Validation
- [x] Enhance `_addToCart()` to collect modifyType items
- [x] Add required-group validation in `_addToCart()`

## Phase 4: CSS
- [x] Add `shake` keyframe + `.shake` class to shared.css
- [x] Add `.validation-error` highlight class to shared.css
- [x] Add `.pb-bottom-safe` iOS safe-area utility to shared.css

## Phase 5: Verify
- [ ] No console errors on customize page load
- [ ] Sugar/Ice pills render and respond to clicks
- [ ] Toppings steppers work and update price
- [ ] Add to Cart validates required groups
- [ ] Cart receives correct sub-items with modifyType
