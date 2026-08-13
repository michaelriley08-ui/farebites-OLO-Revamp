# Account Deletion Implementation Plan

---


**Date:** 2026-06-09  
**Conversation ID:** `bf31b29c-0096-4af8-a6fe-81ac2fcb3472`


---

## Implementation Plan

This plan outlines the industry standard flow for account deletion in Online Ordering (OLO) platforms, as well as the proposed implementation for FareBites to integrate the live `DELETE /api/Account/account/{customerId}` endpoint.

## Industry Standard for OLO Account Deletion

When a user requests to permanently delete their account on an online ordering website, the industry standard includes a multi-step process designed to prevent accidental deletion and provide a graceful exit:

1. **Explicit Confirmation**: 
   - Users are typically required to type a confirmation phrase (e.g., "DELETE" or "DELETE ACCOUNT") to ensure the action is intentional. *(We already have this step in the current mockup).*
2. **API Execution**: 
   - An authenticated request is dispatched to the backend (e.g., `DELETE /api/Account/account/{customerId}`).
3. **Session Termination (Client-Side)**:
   - The user's authentication tokens, cart, and profile data are immediately wiped from local storage and session storage. The UI state is reset to a "logged out" guest state.
4. **Redirection to Confirmation View**:
   - Instead of abruptly reloading the home page, the user is redirected to a dedicated "Account Deleted" confirmation page or view. This page informs the user that the process was successful and usually says something like: *"We're sorry to see you go! Your account has been permanently deleted."*
5. **Backend Processing (Server-Side)**:
   - The backend typically invalidates the user's tokens, anonymizes or schedules their personal data for deletion (subject to legal/accounting retention requirements for past orders), and automatically dispatches a final confirmation email.

## Proposed Changes

We will transition the account deletion from a frontend mockup to a fully integrated flow.

### `api.js`
We will add a new method to the `ApiService` class to handle the deletion request.
#### [MODIFY] [api.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/api.js)
- Add an `async deleteAccount(customerId)` method that calls `this.request('/api/Account/account/' + customerId, 'DELETE')`. *(The `request` method automatically handles attaching the Bearer token for authentication).*

### `app.js`
We will update the UI logic to handle the API call, session clearing, and redirection.
#### [MODIFY] [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)
- Update the **Delete Permanently** button's `onclick` handler to call a new async function `handleDeleteAccount()`.
- Create `async function handleDeleteAccount()`:
  - Retrieves the `customerId` from `mockupState.userProfile.customerId`.
  - Calls `await window.ApiService.deleteAccount(customerId)`.
  - Clears the user session (by calling `signOutUser()` internally or similar logic to clear tokens without navigating to `sign-in` immediately).
  - Updates the virtual routing state to display an `"account-deleted"` page.
- Add an `"account-deleted"` virtual page to the `renderPage()` logic to render a styled confirmation message.

## Verification Plan

### Manual Verification
1. Log into a test account on the application.
2. Navigate to the Account page and trigger the "Delete Permanently" modal.
3. Type the confirmation text and click the submit button.
4. Verify that the API call is successfully dispatched to the backend (returns 200).
5. Verify that the UI successfully transitions to the "Account Deleted" confirmation view.
6. Verify that local storage and session tokens are cleared (user is logged out).

---

## Task Checklist

- `[x]` Add `deleteAccount(customerId)` to `api.js`.
- `[x]` Add `handleDeleteAccount()` to `app.js` and update Delete button `onclick`.
- `[x]` Add `account-deleted` virtual page to `app.js` `renderPage()`.
- `[x]` Test/verify functionality.

---

## Walkthrough

The "Delete Permanently" functionality has been transitioned from a simple frontend mockup alert into a fully integrated feature that communicates with the backend API and cleanly logs the user out.

## What Was Changed

### 1. API Integration (`api.js`)
- Added a new `deleteAccount(customerId)` method to `ApiService` that correctly dispatches a `DELETE` request to `/api/Account/account/{customerId}`. 
- Because `ApiService.request()` is used, the current Bearer token is automatically attached for authentication.

### 2. Frontend State & Logic (`app.js`)
- Created an `async function handleDeleteAccount()` to manage the complex flow:
  1. Validates the confirmation text ("delete account").
  2. Extracts the `customerId` directly from the `mockupState.userProfile`.
  3. Dispatches the API request to delete the account.
  4. On success, instantly clears the `mockupState` (tokens, cart, profile data) to safely wipe the session without forcing a redirect to the login page immediately.
- Wired the red "Delete Permanently" button in the modal to trigger this new function instead of the mockup inline script.

### 3. New Confirmation Page
- Built a brand new `account-deleted` route view in `app.js`.
- This view provides a high-quality user experience by displaying a dedicated confirmation page: *"We're sorry to see you go! Your account and all associated data have been permanently deleted."*
- Includes a button allowing the user to gracefully return to the home screen.

## Validation
- **Authentication**: API requires the existing bearer token to execute.
- **Session Clear**: The local storage, cart data, and profile are reliably zeroed out post-deletion to prevent stale views.
- **Error Handling**: If the API call fails, the button resets, and an appropriate error message is displayed to the user via a native alert.
