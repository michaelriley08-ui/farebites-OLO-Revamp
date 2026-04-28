const fs = require('fs');
const content = fs.readFileSync('app.js', 'utf8');
const match = content.match(/<div class="p-6 md:p-8 max-w-\[1080px\] mx-auto w-full">/g);
console.log("Matched max-w-[1080px]:", match ? match.length : 0);

const split = content.split("'menu': () => {")[1].split("},")[0];
console.log("Menu route preview:\n", split.substring(0, 1500));
