# Registration Form Troubleshooting & Fix Plan

---


**Date:** 2026-06-09  
**Conversation ID:** `49e3f8b9-876d-4231-bde5-69e8e8898ee7`


---

## Implementation Plan

We've reviewed the Swagger schema and the current `app.js` implementation for the registration process.

## Findings
1. **Schema Mismatch & Missing Fields:** The Swagger schema at `/api/Account/register` expects several address properties (`street`, `city`, `state`, `zipCode`) which are currently mocked in the UI but lack `id` attributes and aren't captured by `handleRegistration()`. Furthermore, the payload currently sends casing like `WebsiteUrl` (PascalCase), whereas the API schema strictly expects camelCase (`websiteUrl`, `callbackUrl`, `websiteShortName`).
2. **"Nothing Happened" Bug:** It is highly likely the API threw a validation error due to the missing/improperly formatted fields or unhandled error exceptions, which prevented the success logic from triggering. 
3. **Success Redirection:** On a successful registration, the code silently routed the user straight to `sign-in`. Without a proper success banner or confirmation page, this feels abrupt and unpolished.

## Proposed Changes

### 1. `app.js` (Registration Form HTML)
- Add `id` attributes to the address fields (`reg-street`, `reg-city`, `reg-state`, `reg-zip`).
- Update `handleRegistration()` to capture these address values.

### 2. `app.js` (Payload Construction)
- Refactor the POST payload to strictly adhere to the Swagger schema using camelCase properties.
```javascript
const data = {
  firstName, lastName, email, password, phoneNumber,
  street, city, state, zipCode,
  websiteUrl: window.location.origin,
  callbackUrl: window.location.origin + "/index.html",
  websiteShortName: "itea"
};
```

### 3. `app.js` (Registration Success Screen)
- **New View Component (`registration-success`):** Create a new, beautifully designed "Registration Success" screen in `app.js`. 
- **Design Elements:** It will include a clear confirmation message (e.g., "Account Created Successfully!"), instructions to check their email for verification (per best practices for online ordering), and a prominent button to "Sign In" or "Go to Homepage".
- **Navigation Update:** Update `handleRegistration()` so that on a successful API call, it performs `navigateTo('registration-success')` instead of silently going to `sign-in`.

## User Review Required
> [!IMPORTANT]
> The new success page will direct users to check their email before logging in, as is standard practice. If the Farebites OLO system doesn't actually require email verification to place an order, please let me know, and I can adjust the copy to just invite them to sign in without email verification.

## Verification Plan
### Manual Verification
- We will fill out the registration form with valid test data.
- Ensure the payload sent matches the Swagger definition.
- Verify that upon success, the user is seamlessly routed to the new, premium Registration Success screen.

---

## Task Checklist

- `[x]` Initialize task list
- `[x]` Add `id` attributes to the address fields in the registration form HTML
- `[x]` Update `handleRegistration` to capture address fields and format payload with camelCase properties
- `[x]` Create `registration-success` view with instructions to check email/spam
- `[x]` Update `handleRegistration` to navigate to `registration-success` on success
- `[x]` Register `registration-success` in the application routes/screens
- `[x]` Create walkthrough artifact

---

## Walkthrough

This document details the frontend implementation for User Registration, designed to interface seamlessly with the backend APIs.

## 1. The Issue / Requirement

### The Issue
The registration API (`/api/Account/register`) was dropping requests because the frontend payload properties were formatted in PascalCase (e.g., `WebsiteUrl`, `CallbackUrl`) instead of the strictly required camelCase matching the Swagger schema (`websiteUrl`, `callbackUrl`). Additionally, the UI had address fields (Street, City, State, Zip) but lacked the necessary `id` attributes to capture this data, meaning `street`, `city`, `state`, and `zipCode` were not being sent to the backend. Lastly, the frontend silently redirected to the `sign-in` page on success, providing no feedback to the user, particularly omitting the instruction to verify their email address.

### The Implementation Summary
We mapped the HTML inputs to capture the address fields, restructured the `handleRegistration` payload to perfectly match the camelCase Swagger schema, and built a dedicated `registration-success` view that explicitly warns users to check their spam folder for the verification email.

## 2. Code Implementation

### app.js (HTML Template)
In the `registration` view mapping, we added `id` attributes to the previously un-tracked address inputs (`reg-street`, `reg-city`, `reg-state`, `reg-zip`). We also created a new `registration-success` view in `app.js` and registered it to the `PAGE_FILE_MAP` and `PAGE_LABELS` objects.

```javascript
// New route mappings in app.js
const PAGE_FILE_MAP = {
  // ...
  registration: "registration.html",
  "registration-success": "registration-success.html",
  // ...
};
```

### app.js (`handleRegistration`)
We extracted the new address inputs, reformatted the payload to enforce strict camelCase properties matching the Swagger schema, and updated the successful resolution block to `navigateTo("registration-success")` instead of `navigateTo("sign-in")`.

```javascript
async function handleRegistration() {
  // ... (previous field extraction)
  const street = document.getElementById("reg-street")?.value;
  const city = document.getElementById("reg-city")?.value;
  const state = document.getElementById("reg-state")?.value;
  const zipCode = document.getElementById("reg-zip")?.value;

  // ... (validation checks)

  try {
    if (!window.ApiService) throw new Error("API Service not loaded");

    const data = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      street,
      city,
      state,
      zipCode,
      websiteUrl: window.location.origin,
      callbackUrl: window.location.origin + "/index.html",
      websiteShortName: "itea",
    };

    await window.ApiService.register(data);

    // On success, redirect to success page
    navigateTo("registration-success");
  } catch (err) {
    // ...
  }
}
```

## 3. API Integration Mapping

Detail exactly how the frontend changes map to the backend endpoints or Swagger documentation.
- **Endpoint:** `POST /api/Account/register`
- **Schema Name:** `RegisterRequest` (Extracted from Swagger Components)
- **Payload Rules:** The API strictly requires camelCase variables for `websiteUrl`, `callbackUrl`, and `websiteShortName`. Standard parameters (`email`, `password`, `firstName`, `lastName`) are required. Address fields (`street`, `city`, `state`, `zipCode`) and `phoneNumber` are optional but fully mapped in this implementation.

```javascript
// Exact payload passed to window.ApiService.register(data)
// which triggers: await this.request('/api/Account/register', 'POST', userData);
const data = {
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  street,
  city,
  state,
  zipCode,
  websiteUrl: window.location.origin,
  callbackUrl: window.location.origin + "/index.html",
  websiteShortName: "itea", // Required by backend to map tenant details
};
```
