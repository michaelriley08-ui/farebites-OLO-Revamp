# Implementation Plan - Automatic Logout (Inactivity Session Timeout)

---


**Date:** 2026-06-02  
**Conversation ID:** `96716547-0343-4f16-9ed6-13b0e94ce7f4`


---

## Implementation Plan

We will implement an inactivity-based session timeout (automatic logout) system that aligns with industry standards for online commerce and ordering portals. If a logged-in user is inactive (no mouse moves, scrolls, clicks, or keystrokes) for a configured period (default: 15 minutes), they will be warned 30 seconds prior and then automatically logged out, with a notification banner displayed on the Sign In page.

## Proposed Changes

We will modify `app.js` to add state management, user event listeners, a background interval check, an inactivity warning modal, a notice on the Sign In screen, and testing controls in the account page.

### [app.js](file:///Users/michael-riley/GitHub%20Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js)

#### 1. Add Default State Variables
Initialize session settings in `DEFAULT_STATE`:
- `sessionTimeoutDuration`: `900000` (15 minutes in milliseconds)
- `sessionWarningDuration`: `30000` (30 seconds in milliseconds)
- `lastActiveTime`: `Date.now()`
- `showSessionTimeoutWarning`: `false`
- `sessionTimeoutCountdown`: `30` (remaining seconds)
- `loggedOutReason`: `null` (stores `'inactivity'` if logged out automatically)

#### 2. Event Listeners for Activity Tracking
We will bind event listeners to the `window` to capture user activity and reset the `lastActiveTime` timer:
- Events to listen to: `mousemove`, `mousedown`, `keypress`, `scroll`, `touchstart`, `click`.
- We will throttle state updates (e.g. updating at most once every 3 seconds) to ensure optimal performance.
- When activity is detected, we will also hide the warning modal if it is showing.

#### 3. Background Interval Check
A periodic `setInterval` will run every 1 second:
- **Condition**: Only active if `mockupState.isLoggedIn` is true.
- **Computation**:
  - Calculate `elapsedTime = Date.now() - mockupState.lastActiveTime`.
  - If `elapsedTime >= mockupState.sessionTimeoutDuration`:
    - Call `signOutUser()`.
    - Set `mockupState.loggedOutReason = 'inactivity'`.
    - Set `mockupState.showSessionTimeoutWarning = false`.
    - Persist state and redirect to `sign-in`.
  - Else if `elapsedTime >= (mockupState.sessionTimeoutDuration - mockupState.sessionWarningDuration)`:
    - User has entered the warning window.
    - Calculate `remainingSeconds = Math.ceil((mockupState.sessionTimeoutDuration - elapsedTime) / 1000)`.
    - Set `mockupState.showSessionTimeoutWarning = true`.
    - Set `mockupState.sessionTimeoutCountdown = remainingSeconds`.
    - Trigger a re-render using `renderPage()` to update the countdown in real time.
  - Else (user is active or warning window hasn't been reached yet):
    - If `mockupState.showSessionTimeoutWarning` was `true`, set it to `false` and trigger a re-render.

#### 4. Warning Modal UI Overlay
We will render a premium session timeout warning modal at the bottom of the `renderPage()` function when `mockupState.showSessionTimeoutWarning` is true.
- **Design Elements**:
  - Blurred glass backdrop (`backdrop-blur-sm`).
  - Sleek container with a countdown animation.
  - Title: "Are you still there?"
  - Subtitle: "For your security, you will be logged out in **{X} seconds** due to inactivity."
  - Action buttons:
    - **Stay Logged In**: Resets `lastActiveTime = Date.now()`, sets `showSessionTimeoutWarning = false`, and updates the page.
    - **Sign Out**: Calls `signOutUser()` immediately.

#### 5. Sign In Page Message
In the `routes['sign-in']` function:
- Read `mockupState.loggedOutReason`.
- If it is `'inactivity'`, clear the reason to prevent repeated alerts, and display a warning banner inside the Sign In modal:
  ```html
  <div class="mb-4 p-3 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold rounded-2xl flex items-center gap-2">
      <i class="fa-solid fa-circle-exclamation text-amber-500 text-sm shrink-0"></i>
      <span class="text-left leading-tight">You've been logged out automatically due to inactivity to keep your account secure.</span>
  </div>
  ```

#### 6. Add Testing Controls on My Account Page
To make testing convenient and transparent for developers and reviewers, we will add interactive testing buttons in the **Debug Info** section of `user-profile.html` (rendered by the `account` route in `app.js`):
- We will add clickable options to switch the session timeout duration:
  - **15 Minutes** (Standard production timeout)
  - **1 Minute** (30s activity window + 30s warning window)
  - **30 Seconds** (15s activity window + 15s warning window)
- Clicking these options will instantly adjust the active session parameters, allowing easy testing of both the warning dialog and the automatic logout redirect.
- We will also display the real-time active session information:
  - Time elapsed since last activity.
  - Remaining time before the warning.

---

## Verification Plan

### Manual Verification
1. **Regular Login & Session Extension**:
   - Log in.
   - Go to "My Account" page.
   - Click "1 Minute" under the session timeout developer controls.
   - Remain active (move mouse, click things) for over 30 seconds.
   - Verify that the warning modal **does not** show up because user interaction keeps updating the activity timestamp.
2. **Warning Modal Countdown**:
   - Go to "My Account" page, click "30 Seconds" (or "1 Minute") test timeout, then do not move the mouse/interact.
   - Wait 15 seconds (for 30s timeout) or 30 seconds (for 1m timeout).
   - Verify that a beautiful warning modal pops up overlaying the screen, displaying a ticking countdown.
3. **Session Extension from Modal**:
   - When the warning modal is active, click "Stay Logged In".
   - Verify the modal disappears and the session timer is reset.
4. **Auto-logout and Sign In Alert**:
   - Trigger the countdown again and let it reach zero.
   - Verify the app logs out the user, redirects them to the Sign In page, and displays the "logged out automatically due to inactivity" banner.
