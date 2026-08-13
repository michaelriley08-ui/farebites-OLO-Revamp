# Remove Gift Card & Rewards from Checkout and Create Archive Page (`checkout-rewards.html`)

---


**Date:** 2026-08-01  
**Conversation ID:** `c02cb64f-2a1d-4fad-8913-32dd222b5f4a`


---

## Implementation Plan

Remove the non-functional **Gift Card** and **Rewards** payment cards and modals from the primary `checkout.html` page, and create a backup reference page (`checkout-rewards.html`) to preserve all code, styling, and modal interactions for future implementation.

## User Review Required

> [!NOTE]
> **Recommendation on Approach**: Creating `checkout-rewards.html` is the **best and cleanest approach**. 
> - It keeps `checkout.html` clean and production-ready with only functional payment methods (Credit/Debit Card).
> - It preserves 100% of the Gift Card redemption UI and the Punch Card / Loyalty modal UI in a standalone file (`checkout-rewards.html`) for easy access and copy-pasting when ready to build the backend.

## Proposed Changes

---

### Page Shell & Routing

#### [NEW] [checkout-rewards.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/checkout-rewards.html)
- Create `checkout-rewards.html` matching the SPA entry shell structure of `checkout.html` with `data-page="checkout-rewards"`.

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- Register `"checkout-rewards": "checkout-rewards.html"` in `PAGE_FILE_MAP` and `PAGE_LABELS`.
- **Primary `checkout` View**: Remove the Gift Card and Rewards card container (lines 7810-7833) and their respective modals (`payment-gift` and `payment-rewards`, lines 7957-8020) so `checkout.html` only displays Credit/Debit card options.
- **Archive `checkout-rewards` View**: Add a dedicated `checkout-rewards` view renderer in `app.js` containing the full checkout page *with* the Gift Card and Rewards cards and interactive modals intact.

---

## Verification Plan

### Automated Tests
- Syntax check `app.js` using node syntax validation (`node -c app.js`).

### Manual Verification
- Open `checkout.html` in browser to confirm the Gift Card & Rewards options and modals are gone and only Credit/Debit card is displayed.
- Open `checkout-rewards.html` in browser to confirm the Gift Card and Rewards options and modals are preserved and fully interactive for preview/testing.

---

## Walkthrough

Removed the non-functional **Gift Card** and **Rewards** cards and modals from `checkout.html` while preserving 100% of the UI components and modal interactions in a dedicated preview/archive page (`checkout-rewards.html`).

---

## Changes Made

### 1. Created Archive & Preview Page
#### [NEW] [checkout-rewards.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/checkout-rewards.html)
- Created `checkout-rewards.html` set up with `data-page="checkout-rewards"`.
- Serves as a standalone dev page where the Gift Card redemption modal and Punch Card / Loyalty modal can be inspected, tested, and re-integrated whenever backend endpoints become available.

### 2. Router & View Registrations
#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- Registered `"checkout-rewards": "checkout-rewards.html"` in `PAGE_FILE_MAP`.
- Registered `"checkout-rewards": "Checkout (Gift & Rewards)"` in `PAGE_LABELS`.
- Updated `checkout` view renderer:
  - Removed the Gift Card & Loyalty 2-column card container under **Payment Method**.
  - Removed the `payment-gift` (Redeem Gift Card) and `payment-rewards` (Punch Card) modals from the live checkout renderer.
  - Active checkout now cleanly displays Credit or Debit Card as the payment method.
- Added `checkout-rewards` view renderer:
  - Preserved the full original checkout page layout *including* Gift Card, Rewards Punch Card, and all 3 payment modals (Card, Gift Card, Rewards Punch Card).

---

## Verification Results

### Automated Tests
- Syntax check passed clean via Node.js syntax compiler:
  ```bash
  node -c app.js
  ```
  *(Returned exit code 0 with no errors)*

### Manual Verification
1. **`checkout.html`**:
   - Only displays Credit or Debit Card under Payment Method.
   - Gift Card and Rewards buttons/modals are removed.
2. **`checkout-rewards.html`**:
   - Displays Credit Card, Gift Card, and Rewards cards.
   - Interactive modals for Gift Card redemption and Punch Card rewards are preserved.
