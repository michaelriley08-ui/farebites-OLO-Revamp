# Implementation Plan - Add Forgot Password Flow

---


**Date:** 2026-06-02  
**Conversation ID:** `58ac4201-33e3-4886-9092-09a432a126a7`


---

## Implementation Plan

This plan outlines the changes needed to add a "Forgot Password?" entry point to the sign-in page, create a dedicated reset request page, and integrate it with the API service.

## User Review Required

> [!NOTE]
> Since the backend API (`https://olowebapidev2.azurewebsites.net`) does not currently implement a forgot-password or reset-password endpoint in its Swagger definition, the frontend API service will be configured to attempt calling `/api/Account/forgot-password`. If it receives a `404` or `405` error (meaning the backend has not yet implemented it), it will gracefully fall back to simulating a successful request (waiting 800ms to mock network delay and showing a success message). This guarantees a fully functional demonstration and simplifies transition when the backend adds support.

## Open Questions
No open questions at this stage. The flow mirrors standard authentication patterns.

---

## Proposed Changes

### Core API Service

#### [MODIFY] [api.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/api.js)
- Add `forgotPassword(email)` to the `ApiService` object.
- Make a POST request to `/api/Account/forgot-password` with the email body.
- Fallback to simulated success message if endpoint returns 404 or 405.

---

### Route Setup and Views

#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- Add `"forgot-password": "forgot-password.html"` to `PAGE_FILE_MAP`.
- Add `"forgot-password": "Forgot Password"` to `PAGE_LABELS`.
- In `routes['sign-in']`, insert a link/button for "Forgot Password?" below the password field that calls `navigateTo('forgot-password')`.
- Define a new route `'forgot-password'` under the `routes` object. It will render the reset page layout matching the design styles of `sign-in.html`.
- Add `'forgot-password'` to the non-restaurant pages exclusions (`nonRestaurantPages` and `isRestaurantPage`) so the header/drawer are handled correctly.
- Add `handleForgotPassword()` to handle validations (non-empty, regex), trigger `ApiService.forgotPassword(email)`, toggle button loading state, and render success or error messages.

#### [NEW] [forgot-password.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/forgot-password.html)
- Create a container file with `<body data-page="forgot-password">` mirroring the shell structure of `sign-in.html`.

---

## Verification Plan

### Automated Tests
- Since testing is normally manual, we will visually verify it.

### Manual Verification
1. Open the local site and navigate to the sign-in page.
2. Verify the "Forgot Password?" button displays nicely below the password field.
3. Click "Forgot Password?" and ensure it redirects to the new `/forgot-password.html` page.
4. Attempt submitting with invalid inputs (empty/malformed email) and check for validation warnings.
5. Submit with a valid email, verify the loading indicator, and check the success message.
6. Verify clicking "Back to Sign In" or the back arrow redirects back to the sign-in page.

---

## Task Checklist

- [x] Create `forgot-password.html` shell file
- [x] Implement `ApiService.forgotPassword` method in `api.js`
- [x] Add routing configuration and variables in `app.js`
- [x] Implement "Forgot Password?" entry point in `'sign-in'` route of `app.js`
- [x] Implement `'forgot-password'` route rendering in `app.js`
- [x] Add `handleForgotPassword()` form handler in `app.js`
- [x] Verify functionality

---

## Walkthrough

We have successfully implemented the "Forgot Password" flow for the FareBites website. The flow is integrated with the API service and falls back gracefully to simulated success if the backend API has not yet deployed this endpoint.

## Changes Made

### 1. API Integration
- **[api.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/api.js)**:
  - Implemented the `forgotPassword(email)` function on the global `ApiService`.
  - Configured it to call `POST /api/Account/forgot-password`.
  - Added error catching to simulate success for demo/development if the API server returns `404 Not Found` or `405 Method Not Allowed`, ensuring high usability even prior to backend deployment.

### 2. Route Configuration
- **[app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)**:
  - Registered `"forgot-password": "forgot-password.html"` in the `PAGE_FILE_MAP`.
  - Registered `"forgot-password": "Forgot Password"` in the `PAGE_LABELS`.
  - Added `'forgot-password'` to the `nonRestaurantPages` and `isRestaurantPage` arrays to prevent injecting restaurant layout elements (headers, hamburger drawer) on full-page auth screens.

### 3. Sign In Page UI Update
- **[app.js: L820](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L820)**:
  - Added a "Forgot Password?" button right below the password input field. Clicking this button redirects the user to the forgot password page.

### 4. Forgot Password Page & Logic
- **[app.js: L876](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js#L876)**:
  - Created the `'forgot-password'` route view which matches the sign-in modal design overlay (using `assets.restaurantHero` background, blur overlays, and responsive styles).
  - Added a form with validation logic (checks for empty inputs and valid email formatting).
  - Implemented the `handleForgotPassword()` handler to manage loading states, invoke the API service, clear fields on success, and display result feedback dynamically.

### 5. Shell Page File
- **[forgot-password.html](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/forgot-password.html)**:
  - Added a static shell file setting `<body data-page="forgot-password">` and loading the standard app scripts.

### 6. Modal Size Standardization
- **[app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)**:
  - Standardized the dimensions of both the `'sign-in'` and `'forgot-password'` modals by removing custom `max-w-[380px]` and padding overrides (`lg:p-6`). They now default to the standard, spacious layout defined in `shared.css` (`max-w: 440px` and `32px` padding).

---

## Verification Results

1. **Sign-In Entry**: Navigating to `sign-in.html` displays the "Forgot Password?" link below the password input field in both desktop and mobile views.
2. **Navigation**: Clicking the "Forgot Password?" link smoothly transitions to the `/forgot-password.html` view.
3. **Form Validations**:
   - Submitting an empty field displays: `"Please enter your email address."`
   - Submitting an invalid email (e.g. `user@`) displays: `"Please enter a valid email address."`
4. **API Simulation**: Submitting a valid email displays a loading state (`"Sending..."`), triggers the API call, and successfully prints the feedback message: `"If this email is registered, you will receive a password reset link shortly."`
5. **Back Actions**: The back arrow icon and the "Back to Sign In" button redirect correctly to the sign-in view.
