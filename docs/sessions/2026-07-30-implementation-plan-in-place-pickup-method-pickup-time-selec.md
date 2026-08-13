# Implementation Plan - In-Place Pickup Method & Pickup Time Selection on Cart Page

---


**Date:** 2026-07-30  
**Conversation ID:** `628bfa68-0870-4925-8f46-f16df4f5a538`


---

## Implementation Plan

## Overview
Currently, clicking on **Pickup Method** or **Pickup Time** in the order details card on `cart.html` navigates the user away to `order-details.html`. Furthermore, confirming changes on `order-details.html` routes the user to `menu.html` instead of returning to `cart.html`.

As requested, **no code changes have been made yet**. This document outlines UX best practices and implementation options for allowing users to update their fulfillment method and pickup time directly on `cart.html` without leaving the page.

---

## Analysis & Options Comparison

### Option 1: Inline Expandable Accordion / Drawer on Cart (Recommended UX)
- **Behavior**: Clicking "Pickup method" or "Pickup time" expands an inline edit section directly inside the order header card on `cart.html` (pushing down cart items smoothly).
- **Pros**:
  - Zero context loss; user never leaves the cart.
  - Smooth inline editing matching modern food ordering platforms (Toast, Uber Eats, DoorDash).
  - Order items, subtotal, and tax/fees recalculate and remain visible on screen.
- **Implementation**:
  - Add toggle state flags (`mockupState.cartEditingMethod`, `mockupState.cartEditingTime`).
  - Render method selector pills (Pickup / Curbside / Delivery) and date/time slot controls directly inside the card when expanded.

### Option 2: Bottom Sheet / Modal Overlay directly on Cart
- **Behavior**: Clicking "Pickup method" or "Pickup time" opens a bottom sheet or modal overlay directly on top of `cart.html`.
- **Pros**:
  - Reuses the standard `date-modal` and `time-modal` overlay structures.
  - Maintains focused mobile interaction without changing card height.
- **Implementation**:
  - Attach click handlers on `cart.html` that launch the date/time modal directly without calling `navigateTo('order-details')`.

### Option 3: Context-Aware Navigation ("Return to Cart")
- **Behavior**: Retain navigation to `order-details.html`, but remember the user came from `cart.html`. Change the bottom CTA button from "Start Order" to "Save & Return to Cart".
- **Pros**: Minimal UI layout changes on `cart.html`.
- **Cons**: Page switching is disruptive when the user is already reviewing their order in the cart.

---

## Recommended Solution: Option 1 (Inline Expandable Editing on `cart.html`)

We recommend implementing **Option 1** with fallback modal support for detailed calendar selection:

1. **Pickup Method Toggle**:
   - Clicking "Pickup Method" on `cart.html` toggles an inline pill bar (`[ Pickup ] [ Curbside ] [ Delivery ]`).
   - Selecting a method updates `mockupState.fulfillmentMode` immediately, updating fees and totals live.

2. **Pickup Time Toggle**:
   - Clicking "Pickup Time" on `cart.html` expands an inline control with quick choices (`ASAP (4-7m)` or `Schedule for Later`).
   - If "Schedule for Later" is tapped, a clean time slot picker expands inline or opens a time modal on `cart.html`.

3. **No Navigation Interruption**:
   - Removes `navigateTo('order-details')` calls from `cart.html` entirely.

---

## User Review Required

> [!IMPORTANT]
> **No code changes have been applied.** Please review the options above. Once you confirm your preferred approach (e.g. Option 1 Inline Expansion vs. Option 2 Modal Overlay), we will proceed with the code implementation.

---

## Proposed Code Changes

### JavaScript & Views

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- Update `cart` view renderer in `app.js`:
  - Replace `onclick="navigateTo('order-details')"` on pickup method & pickup time containers with inline expansion handlers (`toggleCartMethodEdit()`, `toggleCartTimeEdit()`).
  - Render the expandable method selector pills (Pickup, Curbside, Delivery) and inline date/time picker inside the order details card.
  - Embed the date and time modals into the `cart` page structure so selecting time slots updates `mockupState` directly on `cart.html`.

---

## Verification Plan

### Manual Verification
1. Open `cart.html` in browser.
2. Click **Pickup method** on the order header card: verify inline options expand directly on `cart.html` and toggling between Pickup/Curbside/Delivery updates the total without page redirection.
3. Click **Pickup time** on the order header card: verify time options expand inline on `cart.html`, allowing immediate time updates.
4. Verify cart item list, subtotal, tax, fees, and checkout button reflect changes in real time.

---

## Walkthrough

We have updated the plastic bag quantity behavior on [cart.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/cart.html) per your explicit guidance.

---

## Key Behavior Changes

### 1. Strict Zero (0) Default Bag Quantity
- **Initial State**: Plastic bag quantity now **strictly defaults to 0** for all new sessions and initial cart additions.
- **No Automatic Carry-Over or Auto-Increment**: The app will never auto-increment or auto-assign bag counts based on cart item count.
- **Manual User Control**: Users can manually increment to 1, 2, 3+ bags using the `+` / `-` buttons or leave it at `0` if they do not need bags.

### 2. Cache Buster Update (`?v=14`)
- Updated script query parameters across all 31 HTML files to `?v=14`.

---

## Verification Results

- **Syntax Check**: `node -c app.js` compiled with 0 errors.
- **Cache Busters**: All 31 HTML files updated to `?v=14`.
