const fs = require('fs');

const globalLogic = `
window.systemPagesData = [
    { group: "ordering-flow", id: "landing", name: "FareBites Home", file: "index.html", icon: "fa-house", color: "#7c3aed", auth: false, description: "Platform landing page. Entry point for the FareBites online ordering system.", endpoints: [], connects: ["restaurant-home", "sign-in"] },
    { group: "ordering-flow", id: "restaurant-home", name: "i-Tea Home", file: "index.html", icon: "fa-store", color: "#7c3aed", auth: false, description: "Restaurant brand home. Showcases i-Tea with featured items, rewards teaser.", endpoints: [], connects: ["locations", "menu", "sign-in"] },
    { group: "ordering-flow", id: "locations", name: "Pick a Location", file: "locations.html", icon: "fa-location-dot", color: "#0ea5e9", auth: false, description: "Displays all i-Tea locations with live hours.", endpoints: [ { method: "GET", path: "/api/Locations", note: "Fetch all restaurant locations" }, { method: "GET", path: "/api/RestaurantMenu/location/{id}/hours", note: "Standard weekly hours per location" } ], connects: ["menu", "directions"] },
    { group: "ordering-flow", id: "directions", name: "Directions", file: "directions.html", icon: "fa-map-location-dot", color: "#0ea5e9", auth: false, description: "Map view and directions to a specific location.", endpoints: [], connects: [] },
    { group: "ordering-flow", id: "menu", name: "Menu", file: "menu.html", icon: "fa-utensils", color: "#0ea5e9", auth: false, description: "Full menu browser with tabs: Menu, Featured, Favorites, and Order History.", endpoints: [ { method: "GET", path: "/api/RestaurantMenu/location/{id}/menu", note: "Fetch categories + tax rate + convenience fee" }, { method: "GET", path: "/api/RestaurantMenu/location/{id}/menuitems", note: "Fetch items for a specific category" }, { method: "GET", path: "/api/RestaurantMenu/location/{id}/featured", note: "Fetch featured items" } ], connects: ["customize", "cart"] },
    { group: "ordering-flow", id: "menu-alt", name: "Menu Alt", file: "menu-alt.html", icon: "fa-utensils", color: "#0ea5e9", auth: false, description: "Alternative menu layout with distinct category styling.", endpoints: [ { method: "GET", path: "/api/RestaurantMenu/location/{id}/menu", note: "Fetch categories" }, { method: "GET", path: "/api/RestaurantMenu/location/{id}/menuitems", note: "Fetch items for a specific category" } ], connects: ["customize", "cart"] },
    { group: "ordering-flow", id: "menu-favorites", name: "Menu Favorites", file: "menu-favorites.html", icon: "fa-heart", color: "#ec4899", auth: true, description: "User's favorited items.", endpoints: [ { method: "GET", path: "/api/User/favorites", note: "Fetch favorited menu items" } ], connects: ["customize"] },
    { group: "ordering-flow", id: "menu-scan", name: "Menu Scan", file: "menu-scan.html", icon: "fa-qrcode", color: "#0ea5e9", auth: false, description: "Scan QR code to access menu.", endpoints: [], connects: ["menu"] },
    { group: "ordering-flow", id: "customize", name: "Customize Item", file: "order-customize.html", icon: "fa-sliders", color: "#0ea5e9", auth: false, description: "Deep customization of a menu item (size, ice, sugar, toppings).", endpoints: [ { method: "GET", path: "/api/RestaurantMenu/item/{id}/modifiers", note: "Fetch all modifier groups and options for item" } ], connects: ["cart"] },
    { group: "ordering-flow", id: "cart", name: "Cart & Checkout", file: "cart.html", icon: "fa-cart-shopping", color: "#0ea5e9", auth: false, description: "Review selected items, update quantities, apply promos.", endpoints: [ { method: "POST", path: "/api/Order/validate-promo", note: "Validate promo code against cart items" } ], connects: ["checkout", "menu"] },
    { group: "ordering-flow", id: "checkout", name: "Checkout", file: "checkout.html", icon: "fa-credit-card", color: "#059669", auth: true, description: "Finalize order details, select tip, enter payment info.", endpoints: [ { method: "POST", path: "/api/Payment/intent", note: "Create Stripe payment intent" }, { method: "POST", path: "/api/Order/submit", note: "Submit final order details and payment token" } ], connects: ["order-confirm"] },
    { group: "ordering-flow", id: "order-confirm", name: "Confirmation", file: "order-confirm.html", icon: "fa-check-circle", color: "#059669", auth: false, description: "Order success page showing order number and estimated time.", endpoints: [ { method: "GET", path: "/api/Order/{id}/status", note: "Fetch initial order status and ETA" } ], connects: ["track-order", "restaurant-home"] },
    { group: "ordering-flow", id: "track-order", name: "Track Order", file: "track-order.html", icon: "fa-motorcycle", color: "#059669", auth: false, description: "Live tracking of order progress.", endpoints: [ { method: "GET", path: "/api/Order/{id}/tracking", note: "Fetch live order tracking status" } ], connects: [] },
    { group: "account", id: "profile", name: "Profile", file: "profile.html", icon: "fa-id-badge", color: "#6b7280", auth: true, description: "User profile, order history, and saved addresses.", endpoints: [ { method: "GET", path: "/api/User/profile", note: "Fetch user profile details" }, { method: "GET", path: "/api/Order/history", note: "Fetch past orders" } ], connects: ["order-details"] },
    { group: "account", id: "order-details", name: "Order Details", file: "order-details.html", icon: "fa-receipt", color: "#6b7280", auth: true, description: "Detailed view of a past order.", endpoints: [ { method: "GET", path: "/api/Order/{id}", note: "Fetch full details of an order" } ], connects: [] },
    { group: "account", id: "order-details-alt", name: "Order Details Alt", file: "order-details-alt.html", icon: "fa-receipt", color: "#6b7280", auth: true, description: "Alternative detailed view of a past order.", endpoints: [ { method: "GET", path: "/api/Order/{id}", note: "Fetch full details of an order" } ], connects: [] },
    { group: "account", id: "sign-in", name: "Sign In", file: "sign-in.html", icon: "fa-right-to-bracket", color: "#6b7280", auth: false, description: "Login to existing account.", endpoints: [ { method: "POST", path: "/api/Auth/login", note: "Authenticate user and return JWT" } ], connects: ["restaurant-home", "registration"] },
    { group: "account", id: "registration", name: "Registration", file: "registration.html", icon: "fa-user-plus", color: "#6b7280", auth: false, description: "Create a new account.", endpoints: [ { method: "POST", path: "/api/Auth/register", note: "Register new user account" } ], connects: ["restaurant-home"] },
    { group: "supporting", id: "privacy", name: "Privacy & Terms", file: "privacy.html", icon: "fa-shield-halved", color: "#9ca3af", auth: false, description: "Privacy policy and terms of service.", endpoints: [], connects: [] },
    { group: "supporting", id: "accessibility", name: "Accessibility", file: "accessibility.html", icon: "fa-universal-access", color: "#9ca3af", auth: false, description: "Accessibility statement and WCAG compliance.", endpoints: [], connects: [] },
    { group: "supporting", id: "sections", name: "Sections (Demos)", file: "sections.html", icon: "fa-cubes", color: "#9ca3af", auth: false, description: "Component and UI pattern playground.", endpoints: [], connects: [] }
];

window.systemTreeStructure = {
  id: "landing",
  children: [
    {
      id: "restaurant-home",
      children: [
        {
          id: "locations",
          children: [
            {
              id: "menu",
              children: [
                { id: "menu-alt" },
                { id: "menu-scan" },
                { id: "customize" },
                {
                  id: "cart",
                  children: [
                    {
                      id: "checkout",
                      children: [
                        {
                          id: "order-confirm",
                          children: [
                            { id: "track-order" }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            { id: "directions" }
          ]
        },
        {
          id: "sign-in",
          children: [
            { id: "registration" },
            {
              id: "profile",
              children: [
                { id: "menu-favorites" },
                { id: "order-details" },
                { id: "order-details-alt" }
              ]
            }
          ]
        },
        { id: "privacy" },
        { id: "accessibility" },
        { id: "sections" }
      ]
    }
  ]
};

window.buildTreeHtmlGlobal = (node) => {
  const page = window.systemPagesData.find(p => p.id === node.id);
  if (!page) return "";
  
  const tooltipHtml = \`
    <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 text-left pointer-events-none transform group-hover:-translate-y-2">
      <div class="flex items-center gap-2 mb-2">
        <div class="w-6 h-6 rounded-lg flex items-center justify-center shrink-0" style="background-color: \${page.color}18;">
          <i class="fa-solid \${page.icon} text-[10px]" style="color: \${page.color};"></i>
        </div>
        <div class="text-[11px] font-black text-gray-900">\${page.name}</div>
      </div>
      <p class="text-[11px] text-gray-500 font-medium leading-relaxed">\${page.description}</p>
      <div class="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
    </div>
  \`;

  return \`
    <li>
      <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('\${page.id}')">
        \${tooltipHtml}
        <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: \${page.color};">
          <i class="fa-solid \${page.icon} text-xl text-white"></i>
        </div>
        <div class="mt-3 text-center w-24">
          <div class="text-[11px] font-black text-gray-900 leading-tight">\${page.name}</div>
          <div class="text-[9px] font-medium text-gray-400 mt-1 uppercase tracking-widest">\${page.endpoints.length} APIs</div>
        </div>
      </div>
      \${node.children && node.children.length > 0 ? \`<ul>\${node.children.map(window.buildTreeHtmlGlobal).join("")}</ul>\` : ""}
    </li>
  \`;
};
`;

const routesCode = `
routes["dev"] = () => {
  if (!mockupState.sitemapAuthenticated) {
    return \`
      <div class="fixed inset-0 bg-[#f5f4ff] flex flex-col items-center justify-center z-[999999] px-4">
        <div class="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full border border-violet-100 text-center">
          <div class="w-16 h-16 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i class="fa-solid fa-lock text-2xl"></i>
          </div>
          <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Restricted Access</h2>
          <p class="text-sm text-gray-500 font-medium mb-8">Please enter the password to view the development dashboard.</p>
          <form onsubmit="event.preventDefault(); const p = document.getElementById('sitemap-pwd').value; if(p==='4949') { mockupState.sitemapAuthenticated = true; persistAllState(); renderPage(); } else { alert('Incorrect Password'); }">
            <input type="password" id="sitemap-pwd" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 text-center text-lg tracking-widest font-mono font-black text-gray-900 focus:outline-none focus:border-violet-500 transition-colors mb-4" placeholder="••••" autofocus>
            <button type="submit" class="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-3.5 font-black uppercase text-sm tracking-widest transition-colors active:scale-95 shadow-md">Unlock Dashboard</button>
          </form>
        </div>
      </div>
    \`;
  }

  const pages = window.systemPagesData;
  const methodColors = { GET: { bg: "bg-blue-100", text: "text-blue-700" }, POST: { bg: "bg-emerald-100", text: "text-emerald-700" }, PUT: { bg: "bg-amber-100", text: "text-amber-700" }, DELETE: { bg: "bg-red-100", text: "text-red-700" } };
  
  const totalEndpoints = pages.reduce((sum, p) => sum + p.endpoints.length, 0);
  const protectedPages = pages.filter(p => p.auth).length;
  const totalPages = pages.length;

  return \`
    <div class="bg-[#f8f9fa] min-h-screen relative font-sans text-gray-900 pb-24 selection:bg-violet-200 selection:text-violet-900">
      <header class="bg-white/90 backdrop-blur-md px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 border-b border-gray-100">
        <div class="w-full max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <button onclick="window.history.back()" class="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors shrink-0">
              <i class="fa-solid fa-chevron-left text-gray-600 text-sm"></i>
            </button>
            <div>
              <h1 class="text-base font-black text-gray-900 uppercase tracking-tight leading-tight">Dev Environment</h1>
              <p class="text-[11px] font-medium text-gray-400 leading-tight">Platform Architecture & API Reference</p>
            </div>
          </div>
        </div>
      </header>

      <div class="w-full max-w-[1400px] mx-auto px-4 lg:px-8 mt-12 space-y-12">
        
        <div class="bg-violet-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-sm">
          <i class="fa-solid fa-code absolute -right-10 -bottom-10 text-[200px] text-white/5 rotate-12"></i>
          <div class="relative z-10 max-w-2xl mb-8">
            <h1 class="text-4xl font-black uppercase tracking-tight mb-4">FareBites Platform Architecture</h1>
            <p class="text-violet-100 text-lg font-medium leading-relaxed">Comprehensive overview of the frontend application structure, user flows, and API integrations.</p>
          </div>
          
          <div class="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0"><i class="fa-solid fa-file-code"></i></div>
              <div><div class="text-2xl font-black leading-tight">\${totalPages}</div><div class="text-[10px] uppercase tracking-widest text-violet-200 font-bold">Total Pages</div></div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0"><i class="fa-solid fa-lock"></i></div>
              <div><div class="text-2xl font-black leading-tight">\${protectedPages}</div><div class="text-[10px] uppercase tracking-widest text-violet-200 font-bold">Private Pages</div></div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0"><i class="fa-solid fa-plug"></i></div>
              <div><div class="text-2xl font-black leading-tight">\${totalEndpoints}</div><div class="text-[10px] uppercase tracking-widest text-violet-200 font-bold">API Endpoints</div></div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
              <div class="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0"><i class="fa-solid fa-mobile-screen"></i></div>
              <div><div class="text-2xl font-black leading-tight">100%</div><div class="text-[10px] uppercase tracking-widest text-violet-200 font-bold">Responsive</div></div>
            </div>
          </div>
        </div>

        <!-- QUICK NAVIGATION -->
        <div class="flex flex-wrap items-center gap-2 mb-8 bg-white/50 backdrop-blur-sm p-3 rounded-2xl border border-gray-100 shadow-sm">
          <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest mx-2">Jump to:</span>
          <button onclick="document.getElementById('section-flow').scrollIntoView({behavior:'smooth'})" class="px-3 py-1.5 bg-white border border-gray-100 hover:border-violet-300 hover:text-violet-700 text-gray-600 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm">Primary Flow</button>
          <button onclick="document.getElementById('section-api').scrollIntoView({behavior:'smooth'})" class="px-3 py-1.5 bg-white border border-gray-100 hover:border-gray-400 hover:text-gray-900 text-gray-600 text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm">API Reference</button>
          <div class="ml-auto flex items-center">
            <button onclick="navigateTo('sitemap')" class="px-4 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-[11px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2"><i class="fa-solid fa-diagram-project"></i> Visual Flowchart</button>
          </div>
        </div>

        <div id="section-flow" class="scroll-mt-32">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-2xl bg-violet-600 flex items-center justify-center shrink-0">
              <i class="fa-solid fa-layer-group text-white text-sm"></i>
            </div>
            <div>
              <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight">System Pages</h2>
              <p class="text-xs text-gray-500 font-medium">All components and their corresponding API endpoints</p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            \${pages.map(page => \`
              <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative group">
                <div class="flex items-start gap-4 mb-4">
                  <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style="background-color: \${page.color}15; color: \${page.color};">
                    <i class="fa-solid \${page.icon} text-xl"></i>
                  </div>
                  <div class="flex-1">
                    <h3 class="text-sm font-black text-gray-900 leading-tight flex items-center justify-between">
                       <span>\${page.name}</span>
                       \${page.auth ? '<i class="fa-solid fa-lock text-[10px] text-gray-400" title="Auth Required"></i>' : ''}
                    </h3>
                    <a href="\${page.file}" target="_blank" class="text-[10px] font-mono text-gray-500 hover:text-violet-600 mt-1 flex items-center gap-1 transition-colors">
                      \${page.file} <i class="fa-solid fa-arrow-up-right-from-square text-[8px]"></i>
                    </a>
                  </div>
                </div>
                <p class="text-xs text-gray-600 font-medium leading-relaxed mb-4 min-h-[40px]">\${page.description}</p>
                \${page.endpoints.length > 0 ? \`
                  <div class="space-y-2 mt-4 pt-4 border-t border-gray-50">
                    \${page.endpoints.map(ep => {
                      const c = methodColors[ep.method] || methodColors.GET;
                      return \`
                        <div class="flex items-start gap-2">
                          <span class="text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest \${c.bg} \${c.text} shrink-0 mt-0.5">\${ep.method}</span>
                          <code class="text-[10px] font-mono text-gray-600 break-all">\${ep.path}</code>
                        </div>
                      \`;
                    }).join("")}
                  </div>
                \` : \`\`}
              </div>
            \`).join("")}
          </div>
        </div>

        <div id="section-api" class="scroll-mt-32">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-2xl bg-gray-800 flex items-center justify-center shrink-0">
              <i class="fa-solid fa-table-list text-white text-sm"></i>
            </div>
            <div>
              <h2 class="text-lg font-black text-gray-900 uppercase tracking-tight">API Endpoint Reference</h2>
              <p class="text-xs text-gray-500 font-medium">All \${totalEndpoints} endpoints used across the platform</p>
            </div>
          </div>
          <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-gray-50 border-b border-gray-100">
                    <th class="text-left text-[11px] font-black text-gray-400 uppercase tracking-widest px-5 py-3.5 w-16">Method</th>
                    <th class="text-left text-[11px] font-black text-gray-400 uppercase tracking-widest px-5 py-3.5">Endpoint</th>
                    <th class="text-left text-[11px] font-black text-gray-400 uppercase tracking-widest px-5 py-3.5 hidden md:table-cell">Description</th>
                    <th class="text-left text-[11px] font-black text-gray-400 uppercase tracking-widest px-5 py-3.5 hidden lg:table-cell">Used On</th>
                  </tr>
                </thead>
                <tbody>
                  \${(() => {
                    const allEndpoints = [];
                    pages.forEach(page => {
                      page.endpoints.forEach(ep => {
                        const existing = allEndpoints.find(e => e.method === ep.method && e.path === ep.path);
                        if (existing) {
                          if (!existing.pages.includes(page.name)) existing.pages.push(page.name);
                        } else {
                          allEndpoints.push({ ...ep, pages: [page.name] });
                        }
                      });
                    });
                    const methodOrder = { GET: 0, POST: 1, PUT: 2, DELETE: 3 };
                    allEndpoints.sort((a, b) => (methodOrder[a.method] || 99) - (methodOrder[b.method] || 99));
                    return allEndpoints.map((ep, i) => {
                      const c = methodColors[ep.method] || methodColors.GET;
                      return \`
                        <tr class="border-b border-gray-50 hover:bg-gray-50/60 transition-colors \${i % 2 === 0 ? "" : "bg-gray-50/30"}">
                          <td class="px-5 py-3.5">
                            <span class="text-[11px] font-black px-2.5 py-1 rounded-full \${c.bg} \${c.text}">\${ep.method}</span>
                          </td>
                          <td class="px-5 py-3.5">
                            <code class="text-[11px] font-mono text-gray-700 break-all">\${ep.path}</code>
                          </td>
                          <td class="px-5 py-3.5 hidden md:table-cell">
                            <span class="text-[11px] text-gray-500 font-medium">\${ep.note}</span>
                          </td>
                          <td class="px-5 py-3.5 hidden lg:table-cell">
                            <div class="flex flex-wrap gap-1">
                              \${ep.pages.map(pn => \`<span class="text-[10px] font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">\${pn}</span>\`).join("")}
                            </div>
                          </td>
                        </tr>\`;
                    }).join("");
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
    </div>
  \`;
};

routes["sitemap"] = () => {
  return \`
    <div class="bg-[#f8f9fa] min-h-screen relative font-sans text-gray-900 pb-24 selection:bg-violet-200 selection:text-violet-900">
      <header class="bg-white/90 backdrop-blur-md px-4 py-4 flex items-center shadow-sm z-50 sticky top-0 border-b border-gray-100">
        <div class="w-full max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <button onclick="window.history.back()" class="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors shrink-0">
              <i class="fa-solid fa-chevron-left text-gray-600 text-sm"></i>
            </button>
            <div>
              <h1 class="text-base font-black text-gray-900 uppercase tracking-tight leading-tight">Visual Flowchart</h1>
              <p class="text-[11px] font-medium text-gray-400 leading-tight">FareBites × i-Tea Online Ordering</p>
            </div>
          </div>
        </div>
      </header>

      <div class="relative z-10 w-full max-w-full mx-auto p-4 md:p-8 h-[calc(100vh-70px)]">
        <div id="section-tree" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 md:p-12 overflow-hidden w-full h-full relative">
          
          <div class="absolute top-6 right-6 flex flex-col gap-1 z-20 bg-white shadow-md border border-gray-100 rounded-xl p-1">
            <button onclick="window.sitemapZoomLevel = Math.min(2, (window.sitemapZoomLevel||0.5) + 0.1); document.getElementById('sitemap-tree-content').style.transform = 'scale(' + window.sitemapZoomLevel + ')'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600"><i class="fa-solid fa-plus"></i></button>
            <div class="w-full h-px bg-gray-100"></div>
            <button onclick="window.sitemapZoomLevel = Math.max(0.1, (window.sitemapZoomLevel||0.5) - 0.1); document.getElementById('sitemap-tree-content').style.transform = 'scale(' + window.sitemapZoomLevel + ')'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600"><i class="fa-solid fa-minus"></i></button>
            <div class="w-full h-px bg-gray-100"></div>
            <button onclick="window.sitemapZoomLevel = 0.5; document.getElementById('sitemap-tree-content').style.transform = 'scale(0.5)'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 text-[10px] font-bold">FIT</button>
            <button onclick="window.sitemapZoomLevel = 1; document.getElementById('sitemap-tree-content').style.transform = 'scale(1)'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 text-[10px] font-bold">1x</button>
          </div>

          <div class="w-full h-full overflow-auto flex justify-center items-start pt-8 pb-32" id="sitemap-scroll-container">
            <style>
              .sitemap-tree ul { padding-top: 24px; position: relative; display: flex; justify-content: center; }
              .sitemap-tree li { float: left; text-align: center; list-style-type: none; position: relative; padding: 24px 12px 0 12px; }
              .sitemap-tree li::before, .sitemap-tree li::after{ content: ''; position: absolute; top: 0; right: 50%; border-top: 2px dashed #cbd5e1; width: 50%; height: 24px; }
              .sitemap-tree li::after{ right: auto; left: 50%; border-left: 2px dashed #cbd5e1; }
              .sitemap-tree li:only-child::after, .sitemap-tree li:only-child::before { display: none; }
              .sitemap-tree li:only-child{ padding-top: 0;}
              .sitemap-tree li:first-child::before, .sitemap-tree li:last-child::after{ border: 0 none; }
              .sitemap-tree li:last-child::before{ border-right: 2px dashed #cbd5e1; border-radius: 0 8px 0 0; }
              .sitemap-tree li:first-child::after{ border-radius: 8px 0 0 0; }
              .sitemap-tree ul ul::before{ content: ''; position: absolute; top: 0; left: 50%; border-left: 2px dashed #cbd5e1; width: 0; height: 24px; }
            </style>
            <!-- transform-origin top keeps it pinned to top so it doesn't crop -->
            <div id="sitemap-tree-content" class="sitemap-tree inline-block min-w-max transition-transform origin-top" style="transform: scale(0.5)">
              <script>
                window.sitemapZoomLevel = 0.5;
                setTimeout(() => {
                   let sc = document.getElementById('sitemap-scroll-container');
                   if (sc) sc.scrollTop = 0;
                }, 100);
              </script>
              <ul>
                \${window.buildTreeHtmlGlobal(window.systemTreeStructure)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`;
};
`;

let appCode = fs.readFileSync('app.js', 'utf8');

// Strip out current dev and sitemap
let startDev = appCode.indexOf('routes["dev"] = () => {');
let startPrivacy = appCode.indexOf('routes["privacy"] = () => {');
if (startDev > -1 && startPrivacy > -1) {
    appCode = appCode.substring(0, startDev) + "\n\n" + globalLogic + "\n\n" + routesCode + "\n\n" + appCode.substring(startPrivacy);
    fs.writeFileSync('app.js', appCode);
    console.log("Successfully rebuilt dev and sitemap routes without errors.");
}
