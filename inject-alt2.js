const fs = require('fs');

let content = fs.readFileSync('app.js', 'utf8');

// Find the customize-alt function
const startTag = '"customize-alt": () => {';
const nextTag = '\n  cart: () => {';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(nextTag);

if (startIndex === -1 || endIndex === -1) {
    console.error("Could not find customize-alt or cart");
    process.exit(1);
}

const customizeAltCode = content.substring(startIndex, endIndex);

// Create customize-alt2 code
const customizeAlt2Code = customizeAltCode
    .replace('"customize-alt":', '"customize-alt2":')
    .replace(/renderAllModifierSections/g, 'renderAllModifierSectionsAlt2')
    .replace(/'menu-alt'/g, "'menu-alt'"); // kept for back button? Actually back button should go back to menu-alt

// Insert it right after customize-alt
content = content.substring(0, endIndex) + ',\n  ' + customizeAlt2Code + content.substring(endIndex);

fs.writeFileSync('app.js', content);
console.log("Successfully injected customize-alt2 route logic");
