# Implement Live Location Tracking (Geolocation API)

---


**Date:** 2026-06-07  
**Conversation ID:** `2dc70098-db4d-4c62-a959-26e42c8d164e`


---

## Implementation Plan

This document explains how the "Near Me" location functionality currently works and outlines the plan to implement real live location tracking using the browser's Geolocation API.

## How it works currently

Right now, the "Near Me" section and location distances are **mocked and entirely static**. 

If you look at the `LOCATIONS` array in `app.js` (around line 111), every location has a hard-coded distance value:
```javascript
{
  name: "i-Tea - Tempe",
  address: "825 W UNIVERSITY, TEMPE, AZ",
  dist: "0.8 mi", // <--- Hardcoded string
  lat: 33.4223,
  lng: -111.9514
}
```
When a user clicks "Near Me", the app simply renders the list using these fake, predefined `dist` values instead of dynamically calculating the real distance from the user. It doesn't know where the user actually is because it hasn't asked the browser for their coordinates yet.

## The Browser Location Popup

When you visit a site like DunkinDonuts.com and see the popup asking: *"Allow www.dunkindonuts.com to access your location"*, that popup is **not** custom HTML created by the developer. It is a native browser security prompt triggered automatically when a website's JavaScript calls the built-in [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API). 

Specifically, it gets triggered when a developer runs this code:
`navigator.geolocation.getCurrentPosition(successCallback, errorCallback)`

## Proposed Implementation Plan

To make the "Near Me" section work with live location, we will update `app.js` to use the Geolocation API. Here are the steps:

### 1. Create a Location Service Function
We'll create a new function `requestUserLocation()` that invokes `navigator.geolocation.getCurrentPosition()`. 
- This will automatically trigger the browser popup asking the user for permission.
- If the user clicks **Allow**, the browser fires our success callback, providing the user's real `latitude` and `longitude`.
- If the user clicks **Block**, the browser fires our error callback, and we can fallback to showing the locations without sorting them or displaying an error message.

### 2. Add a Distance Calculation Utility (Haversine Formula)
We will extract out a `calculateDistance(lat1, lon1, lat2, lon2)` helper function. You already have some math in `app.js` (`getNearbyLocationsCount`) that uses the Haversine formula to compute distance between coordinates. We'll reuse this logic to calculate the exact distance (in miles) between the user's real coordinates and each location's `lat`/`lng`.

### 3. Update State and Re-render
Once we get the user's location:
1. We iterate over the `locations` array.
2. Calculate the real distance for each location using our utility.
3. Update each location's `dist` string property (e.g., changing it from `"0.8 mi"` to `"4.2 mi"` based on the math).
4. Sort the array so the locations with the smallest distance are at the top.
5. Re-render the "Near Me" tab so the UI reflects the live, sorted locations.

## Open Questions

> [!IMPORTANT]
> **When should we trigger the location prompt?**
> Should we ask for location access immediately when the user loads the app, when they land on the `locations.html` page, or only when they explicitly click on the "Near Me" tab?
> *(Best practice usually recommends asking only when the user clicks a specific button like "Find Near Me", so they know why the site is asking for it).*

> [!WARNING]
> **What should happen if the user blocks location access?**
> If they deny the prompt, do we just fallback to the current default ordering? Do we want to show a small banner saying "Location access denied. Enter a zip code or browse all locations."?

---

## Task Checklist

- `[x]` Add `All` tab to the locations page layout (desktop & mobile).
- `[x]` Update location rendering to support the `All` filter (displaying all loaded locations).
- `[x]` Create `calculateDistance(lat1, lon1, lat2, lon2)` utility function.
- `[x]` Create `requestUserLocation()` function to trigger `navigator.geolocation.getCurrentPosition`.
- `[x]` Call `requestUserLocation()` when rendering the `locations` page.
- `[x]` Handle Geolocation Success: compute real distances, update `dist` strings, sort locations, and re-render.
- `[x]` Handle Geolocation Error: fallback to the `All` tab (or `My Locations`).

---

## Walkthrough

I have successfully implemented the live location tracking for the "Near Me" feature, as well as the new "All" tab functionality based on your feedback. 

## What was implemented

### 1. New "All" Tab
I updated the locations screen to include the third tab for "All" locations alongside "Near Me" and "My Locations". This tab simply displays the entire list of loaded locations without attempting to sort by distance or filter by favorites.

### 2. Live Location Prompt
I integrated the native `navigator.geolocation.getCurrentPosition` API. Whenever the `locations.html` page (or the alternative layout) is rendered, the app triggers this request.
* You will now see the browser's standard security popup asking "Allow localhost to access your location" (or "Allow dunkindonuts.com..." when deployed).
* We ensure the prompt is only triggered once per session to avoid annoying the user if they navigate back and forth.

### 3. Calculating Distance (Success Case)
When the user clicks **Allow**, we:
* Extract their real latitude and longitude from their device.
* Run those coordinates against the `lat`/`lng` of every loaded location using a Haversine math formula to determine the true direct distance in miles.
* Update the `dist` property on each store card (e.g. changing it to "3.4 mi" instead of the mocked data).
* Sort the "Near Me" tab so that the closest locations appear exactly at the top.
* Trigger an automatic UI refresh so the new order and distances are immediately visible.

### 4. Handling Rejection (Error Case)
When the user clicks **Block**, we gracefully catch the error.
* If they were currently viewing the "Near Me" tab, the app will automatically switch them over to the "All" tab as we discussed.
* A warning is logged to the console, and the app doesn't break.

## How to Verify
1. Open up the locations page in your browser.
2. Observe the browser prompt asking for location.
3. Accept the prompt and check the "Near Me" tab to see the distances updated based on your current physical location.
4. Refresh the page or clear permissions to test the **Block** scenario and verify it defaults you to the "All" tab.
