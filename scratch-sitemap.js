routes["sitemap"] = () => {
  if (!mockupState.sitemapAuthenticated) {
    return `
      <div class="fixed inset-0 bg-[#f5f4ff] flex flex-col items-center justify-center z-[999999] px-4">
        <div class="bg-white p-8 rounded-3xl shadow-xl max-w-sm w-full border border-violet-100 text-center">
          <div class="w-16 h-16 bg-violet-100 text-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i class="fa-solid fa-lock text-2xl"></i>
          </div>
          <h2 class="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Restricted Access</h2>
          <p class="text-sm text-gray-500 font-medium mb-8">Please enter the password to view the platform sitemap.</p>
          <form onsubmit="event.preventDefault(); const p = document.getElementById('sitemap-pwd').value; if(p==='4949') { mockupState.sitemapAuthenticated = true; persistAllState(); renderPage(); } else { alert('Incorrect Password'); }">
            <input type="password" id="sitemap-pwd" class="w-full bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-3 text-center text-lg tracking-widest font-mono font-black text-gray-900 focus:outline-none focus:border-violet-500 transition-colors mb-4" placeholder="••••" autofocus>
            <button type="submit" class="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-xl py-3.5 font-black uppercase text-sm tracking-widest transition-colors active:scale-95 shadow-md">Unlock Sitemap</button>
          </form>
        </div>
      </div>
    `;
  }

  const isDesktop = currentViewport === "desktop";

  // Re-use the existing routes data by calling a function if we moved it, but let's just extract it or duplicate it.
  // Actually, I can just copy the text from app.js lines 7410 to 7850
