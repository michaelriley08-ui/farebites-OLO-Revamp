FareBites split demo build

Open index.html or any individual *.html file directly in your browser.
Each page includes the full FareBites demo shell, dropdown navigator, and viewport switcher.

Notes:
- Shared styling is in shared.css.
- Shared behavior and all route rendering is in app.js.
- Browser sessionStorage is used so selections and viewport choice persist while navigating between files.
- A source typo was fixed: MapsTo(...) was converted to navigateTo(...).
- The original dropdown referenced bobs-boba-auth, but the source did not define a separate route for it, so it currently aliases to restaurant-homepage.
