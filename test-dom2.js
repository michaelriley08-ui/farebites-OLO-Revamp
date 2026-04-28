const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const menuStart = content.indexOf("'menu': () => {");
const menuEnd = content.indexOf("'customize': () => {");
const menuCode = content.substring(menuStart, menuEnd);

console.log("Found w-full max-w-[1080px] in menu:", menuCode.includes('w-full max-w-[1080px]'));
console.log("Lines with max-w-[1080px]:");
const lines = menuCode.split('\n');
lines.forEach((l, i) => {
    if (l.includes('max-w-[1080px]')) console.log(i + ": " + l.trim());
});

console.log("Length of menu code:", menuCode.length);
