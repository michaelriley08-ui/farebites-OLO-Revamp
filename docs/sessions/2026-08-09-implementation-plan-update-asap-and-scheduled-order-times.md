# Implementation Plan - Update ASAP and Scheduled Order Times

---


**Date:** 2026-08-09  
**Conversation ID:** `c076b26d-28f5-4db6-bc58-d51cc711d68a`


---

## Implementation Plan

This plan details the changes to `app.js` to ensure that ASAP times and future order scheduling options respect store opening times plus the required preparation time (20 minutes).

## Proposed Changes

### Core Logic

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

We will introduce a new helper function `getStoreTimesForDay` to get the structured store opening hours, closing hours, and closed status for any selected day. Then, we will update `getEstimatedPickupTime` and `getDynamicTimes` to utilize this function and enforce:
1. **ASAP Time**: Must be at least `openTime + 20 minutes` if ordering before the store opens.
2. **Scheduled "Later" Times**: The starting slots for both "Today" and future days must begin no earlier than `openTime + 20 minutes` (prep time), rounded to the next 15-minute slot.

Specifically:
- **[NEW HELPER]** `getStoreTimesForDay(selectedDayLabel)` to fetch opening/closing hours.
- **[MODIFY]** `getEstimatedPickupTime(offsetMinutes)` to check if `now + offsetMinutes` is before the store's opening time on Today. If so, return `openTime + offsetMinutes`.
- **[MODIFY]** `getDynamicTimes(selectedDayLabel)` to use `getStoreTimesForDay(selectedDayLabel)` and adjust start times for scheduling slots for both "Today" (considering `now`) and future days (considering `openTime`).

## Verification Plan

### Manual Verification
- Run the local server and verify that when ordering before a store's opening time (e.g. store opens at 11:30 AM and the current time is before that):
  - The ASAP time slot displayed in the UI correctly shows `11:50 AM` (open time + 20 mins) instead of a time before opening.
  - The "Schedule Later" time slot list correctly starts at `11:45 AM` or `12:00 PM` (depending on 15-minute rounding after the 11:50 AM opening limit) instead of `11:30 AM`.
- Verify that if the store is already open (e.g. current time is 2:00 PM and store is open):
  - ASAP time is calculated as `2:20 PM` (now + 20 minutes).
  - "Schedule Later" time slots for "Today" start after `now + 20 minutes`.
  - "Schedule Later" time slots for future days start at `openTime + 20 minutes` (rounded to the next 15-minute slot).

---

## Task Checklist

- [x] Implement `getStoreTimesForDay` helper function in `app.js`
- [x] Modify `getEstimatedPickupTime` to respect store opening hours and preparation time
- [x] Modify `getDynamicTimes` to respect store opening hours and preparation time for both Today and future days
- [x] Manually verify correct time displays in the cart and checkout flows
- [x] Align Drive Through icon and inline method selector on the Cart page
- [x] Verify Drive Through ASAP and scheduled times function correctly

---

## Walkthrough

We have successfully updated the ASAP and Future Scheduled Order Times functionality to respect the store's opening times and preparation time (20 minutes) across all pickup/fulfillment methods, and aligned the **Drive Through** method in the Cart page layout.

## Changes Made

### 1. Added `getStoreTimesForDay` Helper Function
We added [getStoreTimesForDay](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L380-L478) to extract standard business hours or holiday overrides for a given day label ("Today", "Tomorrow", etc.) and return the parsed `openTime` and `closeTime` dates.

### 2. Modified `getEstimatedPickupTime` (ASAP Time)
We updated [getEstimatedPickupTime](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L370-L379) to compare the calculated pickup time with Today's opening time. If Today's opening time plus prep time is later than `now + 20 minutes`, it returns the opening time plus prep time (e.g. 10:20 AM if the store opens at 10:00 AM).

### 3. Modified `getDynamicTimes` (Scheduled/Later Times)
We refactored [getDynamicTimes](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L490-L510) to start generating time slots:
- For **Today**: no earlier than `Math.max(now + 20 minutes, openTime + 20 minutes)`.
- For **Future Days**: no earlier than `openTime + 20 minutes`.
Each start time is then rounded up to the next 15-minute slot.

### 4. Aligned **Drive Through** Pickup Method on the Cart Page
- We mapped the `"Drive Through"` fulfillment mode to the correct car icon (`fa-car`) on the Cart page pickup method indicator.
- We added "Drive Through" as an option in the inline method selector drawer on the Cart page, using a clean 2x2 grid layout.

---

## Verification Results

### 1. Cart Page Initial State
When "Drive Through" is selected, the cart page correctly displays the car icon and labels it "Drive Through".

![Initial Cart Page with Drive Through Selected](/Users/michael-riley/.gemini/antigravity-ide/brain/c076b26d-28f5-4db6-bc58-d51cc711d68a/initial_cart_page_1786296703644.png)

### 2. Inline Method Selector Drawer
Opening the selector drawer shows the new "Drive Through" option with its respective car icon.

![Pickup Method Selector Drawer showing Drive Through](/Users/michael-riley/.gemini/antigravity-ide/brain/c076b26d-28f5-4db6-bc58-d51cc711d68a/method_selector_drawer_1786296713932.png)

### 3. Interactive Walkthrough Video
The recording below demonstrates switching the pickup method to "Drive Through" on the Cart page and verifying that future pickup times start correctly (e.g., at 12:00 PM when the store opens at 11:30 AM).

![Drive Through Selection and Time Verification Flow](/Users/michael-riley/.gemini/antigravity-ide/brain/c076b26d-28f5-4db6-bc58-d51cc711d68a/verify_drive_through_1786296698180.webp)
