# Time Selection & Dynamic Hours Plan

---


**Date:** 2026-06-05  
**Conversation ID:** `a9199c96-5175-4004-a803-027e2806c850`


---

## Implementation Plan

## 1. Industry Standard UI Discussion
To answer your first question: **You did not overthink it!** The "pill" or "bullet" grid you currently have is actually the gold standard for modern, mobile-first restaurant ordering (used by Toast, Square, and many Olo implementations). 

Using a native `<input type="time">` is universally discouraged because every browser renders it differently. iOS Safari forces a giant scrolling wheel, desktop Chrome opens a weird tiny popover, and Android does a full-screen clock UI. It creates an inconsistent experience.

A dropdown menu (`<select>`) is the second-best option and is very clean, but it requires two taps (open dropdown -> select time) and scrolling. The pill grid requires only one tap. 

**Recommendation:** I highly recommend we **keep the pill grid** because it's the fastest way for a user to tap and checkout.

## 2. Dynamic Hours & Holidays (The Current State)
You brought up an excellent point. Right now, your application has the `businessHours` and `holidayHours` APIs integrated on the backend, **but the time picker modal does not use them.**

Currently, the `getDynamicTimes()` function is "dumb"—it just looks at your exact local time, adds 20 minutes, and blindly spits out the next 40 slots in 15-minute increments, regardless of whether you selected "Today" or "Sunday", and regardless of the store's hours!

## 3. The Implementation Plan

We need to rewrite the time slot generation so it is perfectly in sync with the `hours` and `hours-with-holidays` APIs.

### [MODIFY] `app.js`

1. **Update `getDynamicTimes(selectedDate)`:**
   - We will modify this function to accept the currently selected day.
   - It will look up the current `locationObj` to find the `businessHours` for that specific day of the week.
   - It will check the `holidayHours` array to see if the `selectedDate` matches a holiday. If it does, it will override the regular hours with the holiday hours.
   
2. **Calculate Start and End Times:**
   - **If the user selects "Today":** The first available time slot will be `Max(Current Time + 20 mins, Store Open Time)`.
   - **If the user selects a Future Day:** The first available time slot will simply be the `Store Open Time`.
   - The list of generated pills will completely stop at `Store Close Time - 20 mins` (the cutoff time).
   - If the store is closed (or the holiday hours indicate it's closed), we will display a message saying "Closed for this date" instead of showing time pills.

3. **Re-render on Date Change:**
   - Whenever the user clicks a different day in the Date Picker calendar, we will instantly re-calculate the `times15` array for that specific day before opening the Time Picker.

## User Review Required

> [!NOTE]
> Are you on board with keeping the "pill" grid since it's actually the highest-converting industry standard, and proceeding with the backend logic rewrite so it perfectly respects your hours/holidays APIs?

---

## Task Checklist

- `[x]` Update `getDynamicTimes(selectedDay)` in `app.js` to accept the selected day.
- `[x]` Implement logic to find the correct `locationObj` and its `businessHours` for the selected day of the week.
- `[x]` Implement logic to check `holidayHours` for the specific selected date and override regular hours if applicable.
- `[x]` Calculate start time:
  - If "Today": `Max(Current Time + 20 mins, Store Open Time)`
  - If future date: `Store Open Time`
- `[x]` Calculate end time: `Store Close Time - 20 mins`.
- `[x]` Handle "Closed" scenarios (no time slots generated).
- `[x]` Update the render loop so `times15 = getDynamicTimes(mockupState.selectedDay)` is passed correctly.

---

## Walkthrough

This walkthrough details the visual styling updates, layout improvements, and smart route initialization features implemented in the Farebites OLO Revamp application during this session.

---

## 1. Brand Color & Copy Enhancements
To align with the updated design system, we applied the bright pink brand color (`#da2377`) and refined key homepage details:

* **ASAP Reset Link:** Changed the styling of the "Change back to ASAP" link in the time picker widget to `#da2377`.
* **Scroll-to-Top Button:** Updated the floating action button in the bottom right corner of the screens to use the bright pink color (`#da2377`).
* **Hero Section Copy:** Changed the homepage hero subheader text from `"Sip the"` to an italicized, stylized `"Taste The"`.
* **Hero Favorite Icon:** Colored the heart icon in the hero banner using the bright pink brand color (`#da2377`).
* **Hero Order Button:** Updated the "Order Now" text on the main action button inside the hero banner to bright pink (`#da2377`).
* **Hero Overlay Reversion:** Briefly experimented with changing the desktop hero banner overlay gradient to `#A77ABA` and successfully restored it back to the original `violet-600` purple layout as requested.

---

## 2. Navigation Dropdown: "Alt Versions" Grouping
We cleaned up the list of pages in the navigation dropdowns by grouping all development/test pages into a dedicated card section:

* **Mobile Navigation Drawer:**
  * Removed `menu-alt.html`, `location-favorites.html`, `menu-favorites.html`, and `order-details-alt.html` from the main list.
  * Added a light purple container card (`bg-violet-50` with a border) at the bottom labeled **Alt Versions** grouping these links.
* **Desktop Pages Mega Menu:**
  * Removed the alternative pages from the three layout columns.
  * Appended a full-width footer card (`col-span-3 mt-2 p-4 bg-violet-50 rounded-2xl border border-violet-100`) labeled **Alt Versions**.
  * Structured the links inside the card in a 3-column sub-grid with white translucent background pills that change background on hover and display a micro arrow icon.

---

## 3. Direct Navigation to `menu-alt.html` (Castro Valley Store)
We bypassed the location selection requirement for testing alternative menus so that clicking `menu-alt.html` loads the Castro Valley menu directly:

* **Query Parameters:** Configured the `menu-alt.html` navigation links to include `?store=7`.
* **Navigation Hooks:** 
  * Updated the `navigateTo()` router utility in `app.js` to automatically set the state (name, ID, address, distance, and empty categories/items arrays) to the Castro Valley store when heading to `menu-alt`.
  * Updated `DOMContentLoaded` in `app.js` to check for `store=7` in the URL or default to Castro Valley if landing on `menu-alt.html` with no location selected.
  * This prevents the app from redirecting the user to `locations-alt.html`, directly calling `fetchMenuAndItems(7)` instead.

---

## 4. Cache-Busting Implementation
To ensure changes load immediately without requiring a manual cache clearing:
* Incremented the version queries mapping `app.js` to `?v=9` across the following files:
  * [index.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/index.html)
  * [order-details-alt.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/order-details-alt.html)
  * [checkout.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/checkout.html)
  * [menu.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu.html)
  * [menu-alt.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/menu-alt.html)

---

## How to Verify
1. **Homepage Styles:** Open [index.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/index.html) in your browser. Verify the hero text reads *"Taste The Goodness"* with the pink heart icon and the "Order Now" text in pink.
2. **Alt Versions Section:** Click the **PAGES** menu dropdown in the top header. You should see a full-width footer card labeled **Alt Versions** containing `menu-alt.html`, `location-favorites.html`, and `order-details-alt.html`.
3. **Smart Redirect Bypass:** Click the `menu-alt.html` link. The page will load `menu-alt.html?store=7` directly and display the Castro Valley store menu without redirecting you to `locations-alt.html`.
