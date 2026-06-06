const fs = require('fs');

const code = `
routes["dev"] = () => {
    return \`
      <div class="fixed inset-0 bg-[#f5f4ff] flex flex-col items-center justify-center z-[999999] px-4">
        <div class="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full border border-violet-100 text-center">
          <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Dev Environment</h2>
          <p class="text-sm text-gray-500 font-medium mb-8">This is the development dashboard.</p>
        </div>
      </div>
    \`;
};

routes["sitemap"] = () => {
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

          <div class="w-full h-full overflow-auto flex justify-center items-center pb-32">
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
            <div id="sitemap-tree-content" class="sitemap-tree inline-block min-w-max transition-transform origin-top pt-8" style="transform: scale(0.6)">
              <script>window.sitemapZoomLevel = 0.6;</script>
              <ul>
                <li>
                  <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('restaurant-home')">
                    <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: #7c3aed;">
                      <i class="fa-solid fa-store text-xl text-white"></i>
                    </div>
                    <div class="mt-3 text-center w-24">
                      <div class="text-[11px] font-black text-gray-900 leading-tight">i-Tea Home</div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('locations')">
                        <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: #0ea5e9;">
                          <i class="fa-solid fa-location-dot text-xl text-white"></i>
                        </div>
                        <div class="mt-3 text-center w-24">
                          <div class="text-[11px] font-black text-gray-900 leading-tight">Locations</div>
                        </div>
                      </div>
                      <ul>
                        <li>
                          <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('menu')">
                            <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: #0ea5e9;">
                              <i class="fa-solid fa-utensils text-xl text-white"></i>
                            </div>
                            <div class="mt-3 text-center w-24">
                              <div class="text-[11px] font-black text-gray-900 leading-tight">Menu</div>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('customize')">
                                <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: #0ea5e9;">
                                  <i class="fa-solid fa-sliders text-xl text-white"></i>
                                </div>
                                <div class="mt-3 text-center w-24">
                                  <div class="text-[11px] font-black text-gray-900 leading-tight">Customize Item</div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('cart')">
                                <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: #0ea5e9;">
                                  <i class="fa-solid fa-cart-shopping text-xl text-white"></i>
                                </div>
                                <div class="mt-3 text-center w-24">
                                  <div class="text-[11px] font-black text-gray-900 leading-tight">Cart & Checkout</div>
                                </div>
                              </div>
                              <ul>
                                <li>
                                  <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('checkout')">
                                    <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: #059669;">
                                      <i class="fa-solid fa-credit-card text-xl text-white"></i>
                                    </div>
                                    <div class="mt-3 text-center w-24">
                                      <div class="text-[11px] font-black text-gray-900 leading-tight">Checkout</div>
                                    </div>
                                  </div>
                                  <ul>
                                    <li>
                                      <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('order-confirm')">
                                        <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: #059669;">
                                          <i class="fa-solid fa-check-circle text-xl text-white"></i>
                                        </div>
                                        <div class="mt-3 text-center w-24">
                                          <div class="text-[11px] font-black text-gray-900 leading-tight">Confirmation</div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <div class="relative group inline-flex flex-col items-center cursor-pointer" onclick="navigateTo('sign-in')">
                        <div class="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm relative z-10 transition-transform group-hover:scale-105" style="background-color: #6b7280;">
                          <i class="fa-solid fa-user text-xl text-white"></i>
                        </div>
                        <div class="mt-3 text-center w-24">
                          <div class="text-[11px] font-black text-gray-900 leading-tight">Sign In / Join</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
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

let appJs = fs.readFileSync('app.js', 'utf8');
const privacyStart = appJs.indexOf('routes["privacy"] = () => {');
if (privacyStart > -1) {
    appJs = appJs.substring(0, privacyStart) + code + "\n\n" + appJs.substring(privacyStart);
    fs.writeFileSync('app.js', appJs);
}
