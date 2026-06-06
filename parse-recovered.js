const fs = require('fs');
let args = JSON.parse(fs.readFileSync('recovered_args.json', 'utf8'));

let sitemapCode = args.ReplacementContent;
if (!sitemapCode) {
  // If it was multi_replace_file_content
  let chunks = typeof args.ReplacementChunks === 'string' ? JSON.parse(args.ReplacementChunks) : args.ReplacementChunks;
  if (chunks) {
    for (let c of chunks) {
      if (c.ReplacementContent.includes('PRIMARY ORDERING FLOW')) {
        sitemapCode = c.ReplacementContent;
      }
    }
  }
}

// Remove the `routes["dev"]` and `routes["sitemap"]` from app.js entirely, and inject this old logic.
// We will rename the old sitemap logic to dev, and append the new flowchart-only logic for sitemap.
let appCode = fs.readFileSync('app.js', 'utf8');

// The original logic I wrote was:
// `routes["sitemap"] = () => {` ...
sitemapCode = sitemapCode.trim();

// Since sitemapCode was the ReplacementContent, it might start with `"routes[\"sitemap\"] = () => {` (escaped string).
// If `args.ReplacementContent` was a string, `JSON.parse` already decoded it, so `sitemapCode` is literal code.

// Let's strip the first line if it's `routes["sitemap"] = () => {` and wrap it properly.
if (sitemapCode.startsWith('routes["sitemap"]')) {
  sitemapCode = sitemapCode.replace('routes["sitemap"] = () => {', 'routes["dev"] = () => {');
} else {
  sitemapCode = 'routes["dev"] = () => {\n' + sitemapCode;
}

// We need to clean up `app.js` first. Remove current `routes["dev"]` and `routes["sitemap"]`.
let startDev = appCode.indexOf('routes["dev"] = () => {');
let startPrivacy = appCode.indexOf('routes["privacy"] = () => {');
if (startDev > -1 && startPrivacy > -1) {
    appCode = appCode.substring(0, startDev) + appCode.substring(startPrivacy);
}

// Ensure the new logic has the password protection for dev
if (!sitemapCode.includes('sitemapAuthenticated')) {
  sitemapCode = sitemapCode.replace('routes["dev"] = () => {', 'routes["dev"] = () => {\n  if (!mockupState.sitemapAuthenticated) {\n    return `\n      <div class="fixed inset-0 bg-[#f5f4ff] flex flex-col items-center justify-center z-[999999] px-4">\n        <div class="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full border border-violet-100 text-center">\n          <div class="w-16 h-16 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">\n            <i class="fa-solid fa-lock text-2xl"></i>\n          </div>\n          <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Restricted Access</h2>\n          <p class="text-sm text-gray-500 font-medium mb-8">Please enter the password to view the platform sitemap.</p>\n          <form onsubmit="event.preventDefault(); const p = document.getElementById(\\\'sitemap-pwd\\\').value; if(p===\\\'4949\\\') { mockupState.sitemapAuthenticated = true; persistAllState(); renderPage(); } else { alert(\\\'Incorrect Password\\\'); }">\n            <input type="password" id="sitemap-pwd" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 text-center text-lg tracking-widest font-mono font-black text-gray-900 focus:outline-none focus:border-violet-500 transition-colors mb-4" placeholder="••••" autofocus>\n            <button type="submit" class="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-3.5 font-black uppercase text-sm tracking-widest transition-colors active:scale-95 shadow-md">Unlock Dashboard</button>\n          </form>\n        </div>\n      </div>\n    `;\n  }');
}

fs.writeFileSync('restored_dev.js', sitemapCode);
console.log('Restored dev code written to restored_dev.js');
