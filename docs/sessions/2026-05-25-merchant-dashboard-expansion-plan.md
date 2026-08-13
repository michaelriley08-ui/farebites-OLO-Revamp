# Merchant Dashboard Expansion Plan

---


**Date:** 2026-05-25  
**Conversation ID:** `774d1d7e-2baf-437a-9e54-d238be803168`


---

## Implementation Plan

The goal is to build out the functional interfaces for the Merchant Dashboard on the `dashboard.html` page. This involves creating new routes and views within the existing SPA structure to allow managing menu items, store hours, and promotions.

## User Review Required

> [!IMPORTANT]
> The menu items will be managed in-memory for this mockup. Any changes (adding/editing/featuring) will persist only for the duration of the session.
> I will use the data from `Menu_Items.csv` to initialize the list.

## Proposed Changes

### [Component] Merchant Dashboard (app.js)

I will add new routes to the `routes` object and update the `dashboard` view to link to them.

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/FB-OLO-Revamp/app.js)

- **Menu & Items Management (`merchant-menu`)**:
    - A searchable list of all menu items.
    - Each item will have an "Edit" button and a "Featured" star toggle.
    - A floating "Add Item" button to open a creation modal.
    - The "Featured Dishes" functionality will be integrated here as requested.
- **Store Hours (`merchant-hours`)**:
    - A clean, daily schedule editor.
    - Support for "Open 24 Hours" or specific time ranges.
- **Promos & Coupons (`merchant-promos`)**:
    - A list of active and inactive coupons.
    - Ability to create new coupon codes with discount types (Percentage/Fixed).
- **Navigation**:
    - Each sub-page will have a "Back" button to return to the main dashboard.
    - Consistent premium "Merchant Portal" header branding.

## Verification Plan

### Automated Tests
- I will use the browser tool to:
    - Navigate to the dashboard.
    - Click "Menu & Items" and verify the list loads.
    - Toggle a "Featured" status and verify UI update.
    - Open the "Add Item" modal.
    - Navigate to "Store Hours" and verify the schedule view.

### Manual Verification
- Verify that the design feels "premium" and "WOWs" the user with smooth transitions and a sleek dark/light balance.
