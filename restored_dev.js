routes["dev"] = () => {
  if (!mockupState.sitemapAuthenticated) {
    return `
      <div class="fixed inset-0 bg-[#f5f4ff] flex flex-col items-center justify-center z-[999999] px-4">
        <div class="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full border border-violet-100 text-center">
          <div class="w-16 h-16 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i class="fa-solid fa-lock text-2xl"></i>
          </div>
          <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Restricted Access</h2>
          <p class="text-sm text-gray-500 font-medium mb-8">Please enter the password to view the platform sitemap.</p>
          <form onsubmit="event.preventDefault(); const p = document.getElementById(\'sitemap-pwd\').value; if(p===\'4949\') { mockupState.sitemapAuthenticated = true; persistAllState(); renderPage(); } else { alert(\'Incorrect Password\'); }">
            <input type="password" id="sitemap-pwd" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 text-center text-lg tracking-widest font-mono font-black text-gray-900 focus:outline-none focus:border-violet-500 transition-colors mb-4" placeholder="••••" autofocus>
            <button type="submit" class="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-3.5 font-black uppercase text-sm tracking-widest transition-colors active:scale-95 shadow-md">Unlock Dashboard</button>
          </form>
        </div>
      </div>
    `;
  }
"routes[\"sitemap\"] = () => {\n  const isDesktop = currentViewport === \"desktop\";\n\n  const pages = [\n    // --- PRIMARY ORDERING FLOW ---\n    {\n      group: \"ordering-flow\",\n      id: \"landing\",\n      name: \"FareBites Home\",\n      file: \"index.html\",\n      icon: \"fa-house\",\n      color: \"#7c3aed\",\n      auth: false,\n      description: \"Platform landing page. Entry point for the FareBites online ordering system.\",\n      endpoints: [],\n      connects: [\"restaurant-home\", \"sign-in\"],\n    },\n    {\n      group: \"ordering-flow\",\n      id: \"restaurant-home\",\n      name: \"i-Tea Home\",\n      file: \"index.html → restaurant-home\",\n      icon: \"fa-store\",\n      color: \"#7c3aed\",\n      auth: false,\n      description: \"Restaurant brand home. Showcases i-Tea with featured items, rewards teaser, and entry to ordering flow.\",\n      endpoints: [],\n      connects: [\"locations\", \"menu\", \"sign-in\"],\n    },\n    {\n      group: \"ordering-flow\",\n      id: \"locations\",\n      name: \"Pick a Location\",\n      file: \"locations.html\",\n      icon: \"fa-location-dot\",\n      color: \"#0ea5e9\",\n      auth: false,\n      description: \"Displays all i-Tea locations with live hours. User selects a store to start their order.\",\n      endpoints: [\n        { method: \"GET\", path: \"/api/Locations\", note: \"Fetch all restaurant locations\" },\n        { method: \"GET\", path: \"/api/RestaurantMenu/location/{id}/hours\", note: \"Standard weekly hours per location\" },\n        { method: \"GET\", path: \"/api/RestaurantMenu/location/{id}/hours-with-holidays\", note: \"Holiday schedule overrides\" },\n      ],\n      connects: [\"menu\", \"directions\"],\n    },\n    {\n      group: \"ordering-flow\",\n      id: \"menu\",\n      name: \"Menu\",\n      file: \"menu.html\",\n      icon: \"fa-utensils\",\n      color: \"#0ea5e9\",\n      auth: false,\n      description: \"Full menu browser with tabs: Menu, Featured, Favorites, and Order History. Category-based scrolling
<truncated 31151 bytes>