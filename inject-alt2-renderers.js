const fs = require('fs');

const renderersCode = `
// =============================================================================
// SHARED MODIFIER RENDERING FUNCTIONS (ALT2)
// =============================================================================

function _alt2ModSectionHeader(label, subtitle, iconClass) {
  return \`
    <div class="flex items-center gap-4 mb-4">
        <div class="w-12 h-12 rounded-full border border-violet-100 flex items-center justify-center shrink-0">
            <i class="\${iconClass} text-violet-600 text-xl"></i>
        </div>
        <div class="flex-1 flex flex-col justify-center">
            <div class="flex items-center gap-2">
                <span class="text-sm font-black text-[#1f0b35] uppercase tracking-widest">\${label}</span>
                \${label === 'INCLUDED IN DRINK' ? '<i class="fa-solid fa-circle-info text-[10px] text-violet-400"></i>' : ''}
            </div>
            \${subtitle ? \`<span class="text-xs font-bold text-violet-600">\${subtitle}</span>\` : ''}
        </div>
        <i class="fa-solid fa-chevron-right text-gray-400 text-sm shrink-0 pr-2"></i>
    </div>
  \`;
}

function _alt2RenderSegmentedControl(group, sels) {
  const gid = group.menuSubItemGroupId;
  const prices = (group.groupPrices || []).slice().sort((a, b) => (a.position || 0) - (b.position || 0));
  const selectedId = Object.keys(sels[gid]?.items || {})[0];
  
  const pills = prices.map(p => {
    const sub = p.menuSubItem || {};
    const name = sub.name || "";
    const isSelected = String(p.menuSubItemId) === String(selectedId);
    const safeName = name.replace(/'/g, "\\\\'");
    const priceTag = p.price > 0 ? \` (+\$\${p.price.toFixed(2)})\` : (name.includes('1 Cup') ? ' (Included)' : '');
    
    return \`<button
        onclick="window._selectSubItem(\${gid}, \${p.menuSubItemId}, \${sub.itemTypeId || 2}, '\${safeName}', \${p.price || 0}, true)"
        class="flex-1 py-2 text-[11px] md:text-xs font-bold transition-all border-r border-violet-100 last:border-r-0 whitespace-nowrap px-2
               \${isSelected ? "bg-[#623696] text-white" : "bg-violet-50/50 text-[#623696] hover:bg-violet-100"}">
        \${name}\${priceTag}
    </button>\`;
  }).join("");
  
  return \`
    <div class="ml-16 mb-6">
        <div class="flex w-full rounded-xl overflow-hidden border border-violet-100 shadow-sm">
            \${pills}
        </div>
    </div>
  \`;
}

function _alt2RenderIncluded(group, sels) {
  return \`
    <div class="ml-16 mb-2 flex gap-3 overflow-x-auto scrollbar-hide">
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 bg-white shrink-0 shadow-sm">
            <i class="fa-solid fa-circle text-gray-800"></i>
            <span class="text-xs font-bold text-gray-800">Boba</span>
            <div class="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center"><i class="fa-solid fa-check text-[10px] text-emerald-600"></i></div>
        </div>
        <div class="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-gray-200 bg-white shrink-0 shadow-sm">
            <i class="fa-solid fa-square text-yellow-400"></i>
            <span class="text-xs font-bold text-gray-800">Pineapple Jelly</span>
            <div class="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center"><i class="fa-solid fa-check text-[10px] text-emerald-600"></i></div>
        </div>
    </div>
    <div class="ml-16 mb-6 text-[11px] text-gray-500">
        These come with the drink. Deselect any you don't want.
    </div>
  \`;
}

function _alt2RenderExtraToppings(group, sels) {
  return \`
    <div class="ml-16 mb-6 flex gap-3 overflow-x-auto scrollbar-hide items-center">
        <div class="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center shrink-0 shadow-sm text-white text-[10px]">B</div>
        <div class="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 shadow-sm text-white text-[10px]">P</div>
        <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center shrink-0 shadow-sm text-gray-600 text-[10px]">L</div>
        <div class="w-8 h-8 rounded-full bg-violet-50 text-violet-600 flex items-center justify-center shrink-0 font-bold text-xs border border-violet-100">+5</div>
    </div>
  \`;
}

function renderAllModifierSectionsAlt2(detail, sels, modSels, colLayout) {
  let html = '<div class="space-y-0 divide-y divide-gray-100/50">';

  // Hardcode the sections for the mockup
  
  html += \`<div class="py-4">
    \${_alt2ModSectionHeader('INCLUDED IN DRINK', '2 Selected', 'fa-solid fa-cubes-stacked')}
    \${_alt2RenderIncluded()}
  </div>\`;
  
  html += \`<div class="py-4">
    \${_alt2ModSectionHeader('EXTRA TOPPINGS', '3 Selected', 'fa-solid fa-plus')}
    \${_alt2RenderExtraToppings()}
  </div>\`;
  
  // Create dummy groups for segmented controls just to reuse the logic or hardcode them
  
  const sugarGroup = {
      menuSubItemGroupId: 991,
      groupPrices: [
          { menuSubItemId: 1, price: 0, menuSubItem: { name: '0%' } },
          { menuSubItemId: 2, price: 0, menuSubItem: { name: '30%' } },
          { menuSubItemId: 3, price: 0, menuSubItem: { name: '50%' } },
          { menuSubItemId: 4, price: 0, menuSubItem: { name: '80%' } },
          { menuSubItemId: 5, price: 0, menuSubItem: { name: '100%' } }
      ]
  };
  const mockSelsSugar = { 991: { items: { 3: {} } } };
  html += \`<div class="py-4">
    \${_alt2ModSectionHeader('SUGAR LEVEL', '50% (Half Sugar)', 'fa-solid fa-glass-water')}
    \${_alt2RenderSegmentedControl(sugarGroup, mockSelsSugar)}
  </div>\`;
  
  const iceGroup = {
      menuSubItemGroupId: 992,
      groupPrices: [
          { menuSubItemId: 1, price: 0, menuSubItem: { name: 'No Ice' } },
          { menuSubItemId: 2, price: 0, menuSubItem: { name: 'Light Ice' } },
          { menuSubItemId: 3, price: 0, menuSubItem: { name: 'Regular Ice' } },
          { menuSubItemId: 4, price: 0, menuSubItem: { name: 'Extra Ice' } }
      ]
  };
  const mockSelsIce = { 992: { items: { 3: {} } } };
  html += \`<div class="py-4">
    \${_alt2ModSectionHeader('ICE LEVEL', 'Regular Ice', 'fa-solid fa-cube')}
    \${_alt2RenderSegmentedControl(iceGroup, mockSelsIce)}
  </div>\`;
  
  const cupGroup = {
      menuSubItemGroupId: 993,
      groupPrices: [
          { menuSubItemId: 1, price: 0, menuSubItem: { name: '1 Cup' } },
          { menuSubItemId: 2, price: 1.50, menuSubItem: { name: '2 Cups' } }
      ]
  };
  const mockSelsCup = { 993: { items: { 1: {} } } };
  html += \`<div class="py-4">
    \${_alt2ModSectionHeader('CUP OPTION', '1 Cup', 'fa-solid fa-mug-hot')}
    \${_alt2RenderSegmentedControl(cupGroup, mockSelsCup)}
  </div>\`;

  html += \`<div class="py-4">
    \${_alt2ModSectionHeader('SPECIAL INSTRUCTIONS', 'No special instructions', 'fa-solid fa-pen')}
  </div>\`;

  html += '</div>';
  return html;
}
`;

fs.appendFileSync('app.js', renderersCode);
console.log("Successfully appended alt2 renderers");
