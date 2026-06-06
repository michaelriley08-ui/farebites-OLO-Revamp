const fs = require('fs');
const path = '/Users/michael-riley/GitHub Repositories/FB-OLO-Revamp/farebites-OLO-Revamp/app.js';
let content = fs.readFileSync(path, 'utf8');

const devStart = content.indexOf('routes["dev"] = () => {');
const privacyStart = content.indexOf('routes["privacy"] = () => {');

if (devStart === -1 || privacyStart === -1) {
  console.error("Could not find routes.");
  process.exit(1);
}

let devRouteCode = content.substring(devStart, privacyStart);

let sitemapRouteCode = devRouteCode.replace('routes["dev"]', 'routes["sitemap"]');

const returnStart = sitemapRouteCode.indexOf('  return `');
if (returnStart === -1) {
  console.error("Could not find return statement in dev route.");
  process.exit(1);
}

const newReturnBlock = `  return \`
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
        <!-- TREE VIEW -->
        <div id="section-tree" class="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 md:p-12 overflow-hidden w-full h-full relative">
          
          <div class="absolute top-6 right-6 flex flex-col gap-1 z-20 bg-white shadow-md border border-gray-100 rounded-xl p-1">
            <button onclick="window.sitemapZoomLevel = Math.min(2, (window.sitemapZoomLevel||0.5) + 0.1); document.getElementById('sitemap-tree-content').style.transform = 'scale(' + window.sitemapZoomLevel + ')'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600"><i class="fa-solid fa-plus"></i></button>
            <div class="w-full h-px bg-gray-100"></div>
            <button onclick="window.sitemapZoomLevel = Math.max(0.1, (window.sitemapZoomLevel||0.5) - 0.1); document.getElementById('sitemap-tree-content').style.transform = 'scale(' + window.sitemapZoomLevel + ')'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600"><i class="fa-solid fa-minus"></i></button>
            <div class="w-full h-px bg-gray-100"></div>
            <button onclick="window.sitemapZoomLevel = 0.5; document.getElementById('sitemap-tree-content').style.transform = 'scale(0.5)'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 text-[10px] font-bold">FIT</button>
            <button onclick="window.sitemapZoomLevel = 1; document.getElementById('sitemap-tree-content').style.transform = 'scale(1)'" class="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center text-gray-600 text-[10px] font-bold">1x</button>
          </div>

          <div class="w-full h-full overflow-auto flex justify-center items-center pb-32">
            <style>
              .sitemap-tree ul {
                  padding-top: 24px; position: relative;
                  display: flex;
                  justify-content: center;
              }
              .sitemap-tree li {
                  float: left; text-align: center;
                  list-style-type: none;
                  position: relative;
                  padding: 24px 12px 0 12px;
              }
              .sitemap-tree li::before, .sitemap-tree li::after{
                  content: '';
                  position: absolute; top: 0; right: 50%;
                  border-top: 2px dashed #cbd5e1;
                  width: 50%; height: 24px;
              }
              .sitemap-tree li::after{
                  right: auto; left: 50%;
                  border-left: 2px dashed #cbd5e1;
              }
              .sitemap-tree li:only-child::after, .sitemap-tree li:only-child::before {
                  display: none;
              }
              .sitemap-tree li:only-child{ padding-top: 0;}
              .sitemap-tree li:first-child::before, .sitemap-tree li:last-child::after{
                  border: 0 none;
              }
              .sitemap-tree li:last-child::before{
                  border-right: 2px dashed #cbd5e1;
                  border-radius: 0 8px 0 0;
              }
              .sitemap-tree li:first-child::after{
                  border-radius: 8px 0 0 0;
              }
              .sitemap-tree ul ul::before{
                  content: '';
                  position: absolute; top: 0; left: 50%;
                  border-left: 2px dashed #cbd5e1;
                  width: 0; height: 24px;
              }
            </style>
            <div id="sitemap-tree-content" class="sitemap-tree inline-block min-w-max transition-transform origin-top pt-8" style="transform: scale(0.5)">
              <script>
                window.sitemapZoomLevel = 0.5;
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
};
`;

sitemapRouteCode = sitemapRouteCode.substring(0, returnStart) + newReturnBlock;

content = content.substring(0, privacyStart) + sitemapRouteCode + content.substring(privacyStart);

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully added new sitemap route');
