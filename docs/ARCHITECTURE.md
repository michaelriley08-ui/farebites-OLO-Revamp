# Project Architecture & State

> **Living Document**: This file acts as the "Source of Truth" for how the frontend application is architected, how state is managed, and what APIs are connected. It is meant to be updated continuously as the project evolves.

---

## 1. Overview
The project is a custom web application built with **HTML, CSS (Vanilla), and Vanilla JavaScript**. It acts as a modern frontend for an OLO (Online Ordering) system (branded as i-Tea). 
It intentionally avoids heavy JS frameworks (like React or Next.js) to keep the stack simple, utilizing a custom state management system built into `app.js` and an API abstraction layer in `api.js`.

## 2. State Management (`mockupState`)
All global application state is stored in a centralized `mockupState` object inside `app.js`. This object is the "brain" of the UI.
* **Core Responsibilities:**
  * **User Context:** `isLoggedIn`, `userProfile`, `userEmail`
  * **Cart & E-Commerce:** `cart` array, `cartItemCount`, `bagQuantity`, pricing calculations.
  * **Fulfillment:** `fulfillmentMode` (In-store vs Delivery), `selectedLocationId`, `orderTime` (ASAP vs Later).
  * **API Caching:** Stores fetched `apiLocations`, `apiCategories`, and `apiMenuItems` to prevent redundant network requests.
* **Persistence:** `mockupState` is automatically serialized to `sessionStorage` on every update. This ensures that when a user navigates between different HTML pages (like moving from `menu.html` to `checkout.html`), the state is preserved and seamlessly rehydrated. Tokens and location labels can use `localStorage` for longer persistence.

## 3. API Integrations (`api.js`)
All backend communication routes through the `ApiService` defined in `api.js`.
* **Base URL:** `https://olowebapidev2.azurewebsites.net` (Used when running locally).
* **Authentication:** Uses JWT (JSON Web Tokens). Upon successful login, the token is stored in `sessionStorage` (or `localStorage` if "Remember Me" is checked) and automatically appended as a `Bearer` token to all subsequent API requests.
* **Currently Implemented Endpoints:**
  * **Account:** 
    * `POST /api/Account/login`
    * `POST /api/Account/register`
    * `POST /api/Account/logout`
    * `GET / PUT /api/Account/profile`
    * `POST /api/Account/change-password`
    * `GET /api/Account/orders` (Order History)
  * **Menu:** 
    * `GET /api/RestaurantMenu/location/{id}/menu-item/{id}` (Fetches details for a specific item)
  * **Orders:** 
    * `POST /api/CustomerOrder/guest` (Place a guest order)
    * `GET /api/CustomerOrder/{id}` (Fetch order status details)

## 4. Static Placeholders, Mocks & Missing APIs
Because the backend is still evolving, the frontend currently uses "workarounds" (mocked data and logic) to provide a complete user experience. These will need to be replaced with real backend logic eventually:
* **Forgot Password:** The `/api/Account/forgot-password` endpoint is not fully ready on the server (returns 404/405). `api.js` intercepts this error and simulates a successful response with an artificial delay.
* **Cart Logic & Calculations:** The cart structure, item addition, subtotal calculations, tax, and convenience fees are currently calculated **entirely in the frontend** inside `app.js`. In a robust production environment, the backend usually maintains a server-side "cart session" to prevent price manipulation.
* **Tipping:** Tip percentages (10%, 15%, 20%) and custom tips are maintained in `mockupState` and added to the frontend grand total.
* **Payment Modals:** The payment flows (Credit Card, Gift Card, Loyalty Rewards) are visual UI modals only. There is no actual payment gateway integration (like Stripe or Square) hooked up yet.
* **Menu Data Fallbacks:** If the API fails to return locations or menu items, the app will fall back to hardcoded `LOCATIONS` and mock items to ensure the UI doesn't appear broken.

## 5. Documentation Workflow System
To avoid manually copying code and explanations into a Google Doc, we use the following system natively inside the repository:
1. **`docs/ARCHITECTURE.md`** (This file): The master overview of how the app works, its data flows, and API states.
2. **`docs/MASTER_LOG.md`**: The chronological changelog.
**The System:** At the end of every significant chat session, the AI agent will automatically update `ARCHITECTURE.md` (if APIs or structural concepts change) and append a brief summary of the new features to `MASTER_LOG.md`. This keeps documentation version-controlled and tightly coupled to the codebase.
