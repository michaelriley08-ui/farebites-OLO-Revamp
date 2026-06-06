const fs = require('fs');

const code = `
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

  const pages = [
    {
      group: "ordering-flow", id: "restaurant-home", name: "i-Tea Home", file: "index.html", icon: "fa-store", color: "#7c3aed",
      auth: false, description: "Restaurant brand home. Showcases i-Tea with featured items, rewards teaser.",
      endpoints: [], connects: ["locations", "menu", "sign-in"]
    },
    {
      group: "ordering-flow", id: "locations", name: "Pick a Location", file: "locations.html", icon: "fa-location-dot", color: "#0ea5e9",
      auth: false, description: "Displays all i-Tea locations with live hours.",
      endpoints: [
        { method: "GET", path: "/api/Locations", note: "Fetch all restaurant locations" },
        { method: "GET", path: "/api/RestaurantMenu/location/{id}/hours", note: "Standard weekly hours per location" }
      ],
      connects: ["menu", "directions"]
    },
    {
      group: "ordering-flow", id: "menu", name: "Menu", file: "menu.html", icon: "fa-utensils", color: "#0ea5e9",
      auth: false, description: "Full menu browser with tabs: Menu, Featured, Favorites, and Order History.",
      endpoints: [
        { method: "GET", path: "/api/RestaurantMenu/location/{id}/menu", note: "Fetch categories + tax rate + convenience fee" },
        { method: "GET", path: "/api/RestaurantMenu/location/{id}/menuitems", note: "Fetch items for a specific category" },
        { method: "GET", path: "/api/RestaurantMenu/location/{id}/featured", note: "Fetch featured items" }
      ],
      connects: ["customize", "cart"]
    },
    {
      group: "ordering-flow", id: "customize", name: "Customize Item", file: "order-customize.html", icon: "fa-sliders", color: "#0ea5e9",
      auth: false, description: "Deep customization of a menu item (size, ice, sugar, toppings).",
      endpoints: [
        { method: "GET", path: "/api/RestaurantMenu/item/{id}/modifiers", note: "Fetch all modifier groups and options for item" }
      ],
      connects: ["cart"]
    },
    {
      group: "ordering-flow", id: "cart", name: "Cart & Checkout", file: "cart.html", icon: "fa-cart-shopping", color: "#0ea5e9",
      auth: false, description: "Review selected items, update quantities, apply promos.",
      endpoints: [
        { method: "POST", path: "/api/Order/validate-promo", note: "Validate promo code against cart items" }
      ],
      connects: ["checkout", "menu"]
    },
    {
      group: "ordering-flow", id: "checkout", name: "Checkout", file: "checkout.html", icon: "fa-credit-card", color: "#059669",
      auth: true, description: "Finalize order details, select tip, enter payment info.",
      endpoints: [
        { method: "POST", path: "/api/Payment/intent", note: "Create Stripe payment intent" },
        { method: "POST", path: "/api/Order/submit", note: "Submit final order details and payment token" }
      ],
      connects: ["order-confirm"]
    },
    {
      group: "ordering-flow", id: "order-confirm", name: "Confirmation", file: "order-confirm.html", icon: "fa-check-circle", color: "#059669",
      auth: false, description: "Order success page showing order number and estimated time.",
      endpoints: [
        { method: "GET", path: "/api/Order/{id}/status", note: "Fetch initial order status and ETA" }
      ],
      connects: ["order-status", "restaurant-home"]
    },
    {
      group: "account", id: "sign-in", name: "Sign In / Join", file: "sign-in.html", icon: "fa-user", color: "#6b7280",
      auth: false, description: "Login or create an account.",
      endpoints: [
        { method: "POST", path: "/api/Auth/login", note: "Authenticate user and return JWT" },
        { method: "POST", path: "/api/Auth/register", note: "Register new user account" }
      ],
      connects: ["restaurant-home"]
    }
  ];

  const treeStructure = {
    id: "restaurant-home",
    children: [
      {
        id: "locations",
        children: [
          {
            id: "menu",
            children: [
              { id: "customize" },
              {
                id: "cart",
                children: [
                  {
                    id: "checkout",
                    children: [{ id: "order-confirm" }]
                  }
                ]
              }
            ]
          }
        ]
      },
      { id: "sign-in" }
    ]
  };

  const buildTreeHtml = (node) => {
    const page = pages.find(p => p.id === node.id);
    if (!page) return "";
    return \`
      <li>
        <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('\${page.id}')">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: \${page.color};">
            <i class="fa-solid \${page.icon} text-xl text-white"></i>
          </div>
          <div class="mt-3 text-center w-24">
            <div class="text-[11px] font-black text-gray-900 leading-tight">\${page.name}</div>
          </div>
        </div>
        \${node.children && node.children.length > 0 ? \`<ul>\${node.children.map(buildTreeHtml).join("")}</ul>\` : ""}
      </li>
    \`;
  };

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
        <div class="bg-violet-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-sm">
          <i class="fa-solid fa-code absolute -right-10 -bottom-10 text-[200px] text-white/5 rotate-12"></i>
          <div class="relative z-10 max-w-2xl">
            <h1 class="text-4xl font-black uppercase tracking-tight mb-4">FareBites Platform Architecture</h1>
            <p class="text-violet-100 text-lg font-medium leading-relaxed mb-8">Comprehensive overview of the frontend application structure, user flows, and API integrations.</p>
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
              <div class="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow relative group cursor-pointer" onclick="navigateTo('\${page.id}')">
                <div class="flex items-start gap-4 mb-4">
                  <div class="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0" style="background-color: \${page.color}15; color: \${page.color};">
                    <i class="fa-solid \${page.icon} text-xl"></i>
                  </div>
                  <div>
                    <h3 class="text-sm font-black text-gray-900 leading-tight">\${page.name}</h3>
                    <code class="text-[10px] font-mono text-gray-500 mt-1 block">\${page.file}</code>
                  </div>
                </div>
                <p class="text-xs text-gray-600 font-medium leading-relaxed mb-4 min-h-[40px]">\${page.description}</p>
                \${page.endpoints.length > 0 ? \`
                  <div class="space-y-2 mt-4 pt-4 border-t border-gray-50">
                    \${page.endpoints.map(ep => \`
                      <div class="flex items-start gap-2">
                        <span class="text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-widest bg-gray-100 text-gray-600 shrink-0 mt-0.5">\${ep.method}</span>
                        <code class="text-[10px] font-mono text-gray-600 break-all">\${ep.path}</code>
                      </div>
                    \`).join("")}
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
            </div>
          </div>
          <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="bg-gray-50 border-b border-gray-100">
                    <th class="text-left text-[11px] font-black text-gray-400 uppercase tracking-widest px-5 py-3.5 w-16">Method</th>
                    <th class="text-left text-[11px] font-black text-gray-400 uppercase tracking-widest px-5 py-3.5">Endpoint</th>
                    <th class="text-left text-[11px] font-black text-gray-400 uppercase tracking-widest px-5 py-3.5 hidden lg:table-cell">Used On</th>
                  </tr>
                </thead>
                <tbody>
                  \${(() => {
                    const allEndpoints = [];
                    pages.forEach(page => {
                      page.endpoints.forEach(ep => {
                        allEndpoints.push({ ...ep, page: page.name });
                      });
                    });
                    return allEndpoints.map((ep, i) => \`
                      <tr class="border-b border-gray-50 hover:bg-gray-50/60 transition-colors">
                        <td class="px-5 py-3.5"><span class="text-[11px] font-black px-2.5 py-1 rounded-full bg-gray-100">\${ep.method}</span></td>
                        <td class="px-5 py-3.5"><code class="text-[11px] font-mono text-gray-700 break-all">\${ep.path}</code></td>
                        <td class="px-5 py-3.5 hidden lg:table-cell"><span class="text-[10px] font-bold text-violet-600 bg-violet-50 px-2 py-0.5 rounded-full">\${ep.page}</span></td>
                      </tr>
                    \`).join("");
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
  const pages = [
    { id: "restaurant-home", name: "i-Tea Home", icon: "fa-store", color: "#7c3aed" },
    { id: "locations", name: "Pick a Location", icon: "fa-location-dot", color: "#0ea5e9" },
    { id: "menu", name: "Menu", icon: "fa-utensils", color: "#0ea5e9" },
    { id: "customize", name: "Customize Item", icon: "fa-sliders", color: "#0ea5e9" },
    { id: "cart", name: "Cart & Checkout", icon: "fa-cart-shopping", color: "#0ea5e9" },
    { id: "checkout", name: "Checkout", icon: "fa-credit-card", color: "#059669" },
    { id: "order-confirm", name: "Confirmation", icon: "fa-check-circle", color: "#059669" },
    { id: "sign-in", name: "Sign In / Join", icon: "fa-user", color: "#6b7280" }
  ];

  const treeStructure = {
    id: "restaurant-home",
    children: [
      {
        id: "locations",
        children: [
          {
            id: "menu",
            children: [
              { id: "customize" },
              {
                id: "cart",
                children: [
                  {
                    id: "checkout",
                    children: [{ id: "order-confirm" }]
                  }
                ]
              }
            ]
          }
        ]
      },
      { id: "sign-in" }
    ]
  };

  const buildTreeHtml = (node) => {
    const page = pages.find(p => p.id === node.id);
    if (!page) return "";
    return \`
      <li>
        <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('\${page.id}')">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: \${page.color};">
            <i class="fa-solid \${page.icon} text-xl text-white"></i>
          </div>
          <div class="mt-3 text-center w-24">
            <div class="text-[11px] font-black text-gray-900 leading-tight">\${page.name}</div>
          </div>
        </div>
        \${node.children && node.children.length > 0 ? \`<ul>\${node.children.map(buildTreeHtml).join("")}</ul>\` : ""}
      </li>
    \`;
  };

  const treeHtml = \`
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
            <button onclick="window.sitemapZoomLevel = Math.min(2, (window.sitemapZoomLevel||0.6) + 0.1); document.getElementById('sitemap-tree-content').style.transform = 'scale(' + window.sitemapZoomLevel + ')'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600"><i class="fa-solid fa-plus"></i></button>
            <div class="w-full h-px bg-gray-100"></div>
            <button onclick="window.sitemapZoomLevel = Math.max(0.1, (window.sitemapZoomLevel||0.6) - 0.1); document.getElementById('sitemap-tree-content').style.transform = 'scale(' + window.sitemapZoomLevel + ')'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600"><i class="fa-solid fa-minus"></i></button>
            <div class="w-full h-px bg-gray-100"></div>
            <button onclick="window.sitemapZoomLevel = 0.6; document.getElementById('sitemap-tree-content').style.transform = 'scale(0.6)'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 text-[10px] font-bold">FIT</button>
            <button onclick="window.sitemapZoomLevel = 1; document.getElementById('sitemap-tree-content').style.transform = 'scale(1)'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 text-[10px] font-bold">1x</button>
          </div>

          <!-- FIXED overflow layout so top nodes don't get cropped -->
          <div class="w-full h-full overflow-auto flex justify-center items-start pt-16 pb-32" id="sitemap-scroll-container">
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
            <div id="sitemap-tree-content" class="sitemap-tree inline-block min-w-max transition-transform origin-top" style="transform: scale(0.6)">
              <script>
                window.sitemapZoomLevel = 0.6;
                setTimeout(() => {
                   let sc = document.getElementById('sitemap-scroll-container');
                   if (sc) sc.scrollTop = 0;
                }, 100);
              </script>
              <ul>
                \${buildTreeHtml(treeStructure)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  \`;
  return treeHtml;
};
`;

let appCode = fs.readFileSync('app.js', 'utf8');

// Strip out current corrupted dev and sitemap
let startDev = appCode.indexOf('routes["dev"] = () => {');
let startPrivacy = appCode.indexOf('routes["privacy"] = () => {');
if (startDev > -1 && startPrivacy > -1) {
    appCode = appCode.substring(0, startDev) + "\n\n" + code + "\n\n" + appCode.substring(startPrivacy);
    fs.writeFileSync('app.js', appCode);
    console.log("Successfully rebuilt dev and sitemap routes");
}
