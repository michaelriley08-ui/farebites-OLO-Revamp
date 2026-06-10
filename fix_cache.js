const fs = require('fs');
const glob = require('fs').readdirSync('.');

const htmlFiles = glob.filter(f => f.endsWith('.html'));
for (const file of htmlFiles) {
    let content = fs.readFileSync(file, 'utf8');
    content = content.replace(/src="app\.js(\?v=\d+)?"/g, 'src="app.js?v=4"');
    content = content.replace(/src="api\.js(\?v=\d+)?"/g, 'src="api.js?v=4"');
    content = content.replace(/href="shared\.css(\?v=\d+)?"/g, 'href="shared.css?v=4"');
    fs.writeFileSync(file, content);
}
console.log("Updated cache busters in " + htmlFiles.length + " files.");
