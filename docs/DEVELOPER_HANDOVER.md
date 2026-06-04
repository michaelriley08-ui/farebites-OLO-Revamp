# 📘 Comprehensive Developer Handover & Technical Reference

Welcome to the FareBites (i-Tea) OLO (Online Ordering) Revamp project! 
This document serves as the **master technical guide** for any new developer joining the project. It outlines exactly how the major features were implemented, how data is persisted across the application, and the specific technical logic that drives the site from end to end.

---

## 1. Application Architecture & Routing

### The Monolithic Vanilla JS Structure
The project is built entirely in HTML, Tailwind CSS (via CDN or local processing), and Vanilla JavaScript. We intentionally avoided heavy frameworks like React to keep overhead low.
* **`app.js`**: The central "brain" of the frontend. It handles routing, state management, UI rendering, and user interactions.
* **`api.js`**: The isolated API layer that handles all network requests, JWT token management, and HTTP error handling.
* **HTML Pages**: Each view (e.g., `menu.html`, `checkout.html`) acts as an individual file, but they all share `app.js`.

### Client-Side Routing System
* **`renderPage()` & `navigateTo(pageId)`**: When a user clicks a link, `navigateTo()` intercepts it, updates the URL hash (or manages history), and calls `renderPage()`. 
* **Header Template System**: All 23 HTML files use a placeholder system (`#workspace-header`). The function `renderWorkspaceHeader()` dynamically injects the correct sticky header (with the back button, title, and cart icon) based on the active route, preventing code duplication across HTML files.
* **Scroll Memory**: `renderPage()` automatically scrolls the `.canvas-area` back to the top of the viewport when navigating between screens to simulate a native app feel.

---

## 2. State Management (`mockupState`)

The entire application relies on a global, mutable object called `mockupState`.
* **State Hydration:** Every time a page loads, `loadMockupState()` checks `sessionStorage` for existing state. This ensures that if a user reloads `checkout.html`, they don't lose their cart or selected fulfillment options.
* **Key Properties:**
  * `isLoggedIn`, `userEmail`, `userProfile`
  * `cart`, `cartItemCount`, `bagQuantity`, `tipPercentage`
  * `apiLocations`, `apiCategories`, `apiMenuItems` (Used to cache API data and prevent redundant network requests).
  * `fulfillmentMode` (Store/Delivery), `orderTime` (ASAP/Later), `selectedLocationId`.

---

## 3. Authentication & Session Management

### Login & "Remember Me"
* **Dynamic JWT Storage**: `ApiService.setToken()` conditionally stores the JWT:
  * **Remember Me Checked:** The token is saved to `localStorage` (persistent session). The user's email is also saved to `farebites_remembered_email` so the login form auto-fills on their next visit.
  * **Remember Me Unchecked:** The token is saved to `sessionStorage` (clears when the browser closes).

### Session Security & Auto-Logout
* **Inactivity Tracking**: Global event listeners (`mousemove`, `keydown`, `scroll`, `click`) track user presence.
* **Timeouts**: After 13 minutes of inactivity, a warning modal triggers. At 15 minutes, `executeAutoLogout()` fires, terminating the session securely via `signOutUser()` and redirecting to the sign-in page.

---

## 4. User Profile & Data Persistence

### Address Field Local Persistence (API Workaround)
* **The Problem:** The `GET /api/Account/profile` endpoint returns user profile data but excludes address fields. Reloading the page would normally clear the user's address.
* **The Solution:** On a successful profile update (`PUT /api/Account/profile`), the frontend saves the address fields to `localStorage` under `farebites_profile_address_[lowercase_email]`. During login or page load, the app merges the server profile with the local address data before rendering the UI.
* **Payload Sanitization:** The `PUT` profile endpoint rejects payloads containing the `email` field (400 Bad Request). The frontend actively sanitizes the payload to exclude `email` before submitting.

### Password Security
* **Visibility Toggles:** Dynamic eye / eye-slash icons let the user view their current, new, and confirm password fields in the Change Password modal. Controlled via `window.togglePasswordVisibility()`.

---

## 5. Cart & Order Management

### Persistent Cart Memory
* **Email-Keyed Cart Storage:** Modifying the cart triggers `syncCartToStorage()`. The `mockupState.cart` array is stringified and saved to `localStorage` under `farebites_cart_[USER_EMAIL]`.
* **Cart Hydration:** Upon successful login, `loadCartFromStorage()` retrieves the user's specific cart array and restores it to `mockupState.cart`.
* **Secure Cart Clearing:** When a user signs out, the active `mockupState.cart` is emptied to clear the UI, but the background `localStorage` cart is preserved for their next login.

### Order Customization & Pricing Logic
* **Dynamic Customization:** The `order-customize.html` view parses data from the backend `RestaurantMenu` API endpoints. It renders steppers for Ice/Sugar levels and checkboxes for Toppings.
* **Live Pricing:** As users select modifiers, the frontend dynamically calculates and updates the "Add to Cart" button price.
* **Subtotals & Taxes:** The Cart and Checkout pages calculate the subtotal, apply a location-specific `taxRate`, add the `convenienceFee`, and process the user's selected `tipPercentage` (10%, 15%, 20%, or Custom) natively in the browser before displaying the Grand Total.

### Past Order History & Reordering
* **Data Normalization:** The app fetches past orders via `/api/Account/orders`. It normalizes paginated/wrapped list structures (handling `.items`, `.data`, and array formats).
* **View Details:** `window.viewPastOrder(orderId)` maps past order properties into the confirmation screen format.
* **One-Click Reordering:** `window.reorderPastOrder(orderId)` retrieves past items, matches them with active menu items (mapping image assets and base prices), adds them back into the cart, and redirects straight to the checkout view.

### Cart "You May Also Like" Enhancements
* **Navigation Context:** Clicking a cross-sell item in the cart temporarily sets `mockupState.menuTab = 'menu'` before executing `selectItemAndNavigate()`, ensuring the global index matches the active menu state before opening the customization page.
* **Clickable Area:** The entire cross-sell card is clickable and scales up slightly on hover (`group-hover:scale-110`).

---

## 6. Menu UI & Navigation Architecture

### Dual Dropdown Navigation
* The header features two distinct dropdown menus separating brand contexts:
  * **FareBites Platform:** Contains platform-level links (Home, Profile, Sign In).
  * **Restaurant Context:** Contains restaurant-specific links (Menu, Locations, Order History).

### Tabbed Menu Layout
* The menu page utilizes a tabbed navigation system (Menu, Featured, Favorites, History).
* **Sticky Category Titles:** When scrolling down the "Menu" feed, category headers (e.g., "Milk Tea Specialty") use Tailwind's `scroll-mt-24 lg:scroll-mt-36` to ensure they stop below the sticky header without being hidden underneath it.

### Global Modal Positioning Fix
* **The Problem:** Modals rendering deep inside the DOM would sometimes appear below the viewport on long, scrolling pages due to parent `transform` CSS properties breaking the `position: fixed` context.
* **The Solution:** We bypass CSS caching and nesting issues by explicitly styling modal overlays with inline Tailwind classes: `fixed inset-0 z-[99999] bg-black/50 flex items-center justify-center`. This forces the modal to relative strictly to the browser window.
