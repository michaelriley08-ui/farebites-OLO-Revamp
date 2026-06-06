const fs = require('fs');

const appJs = fs.readFileSync('app.js', 'utf8');

// Find the start of customize: () => {
const customizeStart = appJs.indexOf('\n  customize: () => {\n');
if (customizeStart === -1) throw new Error("Could not find customize route");

// Find the end of customize by finding customize-alt:
const customizeAltStart = appJs.indexOf('\n  "customize-alt": () => {\n');
if (customizeAltStart === -1) throw new Error("Could not find customize-alt route");

// Find customize-alt2
const customizeAlt2Start = appJs.indexOf('\n  "customize-alt2": () => {\n');
if (customizeAlt2Start === -1) throw new Error("Could not find customize-alt2 route");

// Find cart:
const cartStart = appJs.indexOf('\n  cart: () => {\n');
if (cartStart === -1) throw new Error("Could not find cart route");

// The body of customize-alt2 is from customizeAlt2Start to cartStart
let alt2Body = appJs.substring(customizeAlt2Start, cartStart);

// Rename "customize-alt2": () => { to customize: () => {
alt2Body = alt2Body.replace('\n  "customize-alt2": () => {\n', '\n  customize: () => {\n');

// Replace fallback 'menu-alt' with 'menu'
alt2Body = alt2Body.replace(/'menu-alt'/g, "'menu'");

// The new appJs is:
// everything up to customizeStart
// + alt2Body
// + from customizeAltStart to customizeAlt2Start
// + from cartStart to end
const newAppJs = appJs.substring(0, customizeStart) 
               + alt2Body 
               + appJs.substring(customizeAltStart, customizeAlt2Start)
               + appJs.substring(cartStart);

fs.writeFileSync('app.js', newAppJs);
console.log("Replaced customize route with customize-alt2 logic and removed customize-alt2 route.");
