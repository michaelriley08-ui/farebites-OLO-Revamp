# Account for Restaurant Local Time

---


**Date:** 2026-06-05  
**Conversation ID:** `8047260b-ed04-4d9f-8818-8a4f410912b5`


---

## Implementation Plan

This plan outlines the approach to ensure the website displays and calculates times based on the restaurant's local time zone, rather than the user's browser time zone.

## Current State & The Problem
Currently, the application uses the user's device time (`new Date()`, `Date.now()`) to calculate current times, order pickup times, and business hours. If a user in Arizona opens the website to order from a restaurant in California, their browser calculates everything in Arizona time. This can cause confusion, display incorrect open/close times, and result in wrong pickup time expectations.

## API Missing Data
> [!IMPORTANT]
> I have reviewed the Swagger API documentation (`docs/swagger.json`), specifically checking the `LocationDto`, `Restaurant`, and `LocationHoursDto` objects. Currently, the API **does not return** any time zone information (such as `America/Los_Angeles` or a UTC offset) for the locations.

To properly account for local time, we must know the restaurant's time zone. Relying on the user's browser to ask for their location (like some apps do) only tells us where the *user* is, not what time zone the *restaurant* operates in. 

## Action Required: Update Swagger API
The backend team needs to add a `timeZone` property to the `LocationDto` or `LocationHoursDto` endpoints.
- **Recommended Format:** A standard IANA time zone string (e.g., `"America/Los_Angeles"`, `"America/Phoenix"`, `"America/New_York"`). 

## Proposed Frontend Changes (Once API is Updated)

Once the API provides the restaurant's time zone, we will implement the following changes:

### 1. Store the Time Zone
When we fetch the restaurant/location data on load, we will save the `timeZone` property into the global application state (`mockupState.restaurantTimeZone`).

### 2. Time Zone-Aware Logic
We will replace reliance on standard `new Date()` in the browser with time zone-aware date formatting. 
- We can use the native `Intl.DateTimeFormat` API or include a lightweight library like `dayjs` (with the timezone plugin) to handle the conversions.
- Whenever we check "Is the restaurant open right now?", we will convert the current UTC time to the *restaurant's* time zone before comparing it to the `BusinessHourDto` start/end times.

### 3. Clear UI Display
Any time displayed to the user (e.g., "Order placed at 10:00 AM", "Pickup at 10:30 AM") will explicitly be formatted in the restaurant's time zone, and we can append the time zone abbreviation (e.g., "10:30 AM PST") so there is absolutely no confusion for out-of-state users.

### 4. Order Submission
When an order is placed (`CreateOrderDto`), the `pickUpTime` and `orderDate` will be calculated correctly relative to the restaurant's time zone, ensuring the backend receives the exact intended time regardless of where the customer physically is.

## User Review Required

> [!CAUTION]
> Before we can write the code to fix this, you will need to request the backend developers to add the `timeZone` property to the API. 
> 
> **Question:** Would you like me to wait until the API is updated, or would you like me to start preparing the frontend logic using a "hardcoded" placeholder time zone (e.g., `America/Los_Angeles`) so that it's ready to go as soon as the API is updated?
