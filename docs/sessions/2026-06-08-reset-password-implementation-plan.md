# Reset Password Implementation Plan

---


**Date:** 2026-06-08  
**Conversation ID:** `5219efc8-7dd8-44dd-8fdc-a21dbdcd7b26`


---

## Implementation Plan

The backend sends a reset password link that points to `reset-password.html` with two URL parameters: `email` and `code`. Because this page doesn't exist yet, it results in a 404 error. We need to implement the full UI and API integration for the actual reset step.

## Proposed Changes

### `reset-password.html`
- **[NEW]** Create `reset-password.html` as a shell file, identical in structure to `forgot-password.html`, but with `data-page="reset-password"`.

### `api.js`
- **[MODIFY]** Add a new function `resetPassword(email, code, newPassword, confirmPassword)`.
- **[MODIFY]** This function will send a `POST` request to `/api/Account/reset-password` matching the Swagger schema.

### `app.js`
- **[MODIFY]** Add `"reset-password"` to the routing/mapping configurations (similar to how `forgot-password` is set up).
- **[MODIFY]** Create a new view template `VIEWS["reset-password"]` that renders a form with:
  - "New Password" input
  - "Confirm New Password" input
  - "Submit" button
- **[MODIFY]** Extract the `email` and `code` parameters directly from the browser URL (`window.location.search`) when rendering the page or submitting the form.
- **[MODIFY]** Add a new `handleResetPassword()` function to handle the form submission, call `window.ApiService.resetPassword()`, and show a success dialog or error message. Upon success, redirect to the `sign-in` page.

## User Review Required

> [!IMPORTANT]
> The design for the reset password form will match the existing "Forgot Password" aesthetic (white card, input fields, purple submit button). Does this sound good, or do you have specific design requirements for this screen?

## Verification Plan

1. Click the link from the email you received to open `reset-password.html?email=...&code=...`.
2. Ensure the page loads without a 404 error and shows the New Password form.
3. Submit a new password and confirm the API successfully changes the password and redirects to sign-in.
4. Try to sign in with the new password.

---

## Task Checklist

- [x] Create `reset-password.html` shell.
- [x] Implement `resetPassword` API call in `api.js`.
- [x] Add `reset-password` view to `app.js` and extract URL params.
- [x] Implement `handleResetPassword` logic in `app.js`.
- [x] Verify functionality.

---

## Walkthrough

This document details the frontend implementation for the end-to-end password reset flow, designed to interface seamlessly with the `.NET` Account APIs and SendGrid.

## 1. Forgot Password Fixes (SendGrid Integration)

### The Issue
Previously, the `/api/Account/forgot-password` endpoint was returning a `200 Success` response, but SendGrid was silently dropping the emails. This occurred because SendGrid enforces strict sender and link validation policies:
1. `WebsiteUrl` was mapping to an unverified sender domain instead of the verified `support@farebites.com`.
2. When testing the frontend via a local file system (`file:///...`), `window.location.origin` resolved to `"null"` or `"file://"`. SendGrid interprets `file://` links in the payload as phishing/malicious and drops the email.

### The Implementation
We updated the `forgotPassword` function in `api.js` to ensure a strict, valid payload is always sent:

```javascript
async forgotPassword(email) {
    // Intercept local file testing to prevent SendGrid from dropping the email due to an invalid link
    let origin = window.location.origin;
    if (origin === "null" || origin.includes("file://")) {
        origin = "http://localhost:8000";
    }
    
    return await this.request('/api/Account/forgot-password', 'POST', { 
        Email: email,
        ResetPasswordUrl: origin + "/reset-password.html",
        WebsiteUrl: "support@farebites.com",
        WebsiteShortName: "Farebites"
    });
}
```

## 2. Reset Password Implementation

### The Issue
SendGrid successfully delivers the email with a link formatted as:
`http://{domain}/reset-password.html?email={email}&code={resetCode}`
However, the frontend lacked the view and logic to handle this redirect, resulting in a 404 error. 

### The Implementation
We built the complete UI and API logic to fulfill the Swagger `ResetPasswordRequest` schema.

**1. `reset-password.html`**
Created a new shell HTML page mapped to `data-page="reset-password"` to capture the redirect from the SendGrid email.

**2. Frontend View & Logic (`app.js`)**
- Created the `"reset-password"` template in the `VIEWS` object, matching the aesthetic of the Forgot Password card, featuring two inputs: `New Password` and `Confirm Password`.
- Implemented `handleResetPassword()` which extracts the URL query parameters using the standard `URLSearchParams` API.

```javascript
// URL Parameter Extraction in app.js
const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');
const code = urlParams.get('code');

// ... validation logic ...

await window.ApiService.resetPassword(email, code, password, confirmPassword);
```

**3. API Service (`api.js`)**
Added the `resetPassword` method to interface with the `/api/Account/reset-password` endpoint, perfectly matching the Swagger definition:

```javascript
async resetPassword(email, code, newPassword, confirmPassword) {
    return await this.request('/api/Account/reset-password', 'POST', {
        email: email,
        code: code,
        password: newPassword,
        confirmPassword: confirmPassword
    });
}
```

Upon a successful 200 OK from this endpoint, the frontend alerts the user of success and redirects them back to the `sign-in` view to authenticate with their new credentials.
