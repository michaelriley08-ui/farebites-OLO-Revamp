const fs = require('fs');

const content = fs.readFileSync('/Users/michael-riley/.gemini/antigravity-ide/brain/9d8dce57-99ac-4009-8c3f-3cf4e964de64/.system_generated/steps/5/content.md', 'utf-8');
const lines = content.split('\n');
const jsonStr = lines.slice(8).join('\n');
const swagger = JSON.parse(jsonStr);

let markdown = `# API Documentation & Guide\n\n`;
markdown += `Welcome to your API backend! Since you are new to APIs, let's start with a quick primer on how they work and the difference between the most common HTTP methods.\n\n`;

markdown += `## HTTP Methods Explained\n\n`;
markdown += `- **GET**: Used to **retrieve** data from the server. It does not change any data. Think of it as opening a web page or reading a database record.\n`;
markdown += `- **POST**: Used to **send** new data to the server, usually to create a new record or submit a form. For example, registering a new user or placing an order.\n`;
markdown += `- **PUT**: Used to **update** existing data on the server. If the data doesn't exist, it might create it, but it's typically used to replace the current representation of the target resource with the uploaded content (like updating your profile).\n`;
markdown += `- **DELETE**: Used to **remove** data from the server (like deleting an account or an item from a cart).\n\n`;

markdown += `## API Endpoints Overview\n\n`;
markdown += `Below is a breakdown of all the endpoints available in the Swagger UI, grouped by category (tags).\n\n`;

const tagsMap = {};

for (const [path, methods] of Object.entries(swagger.paths)) {
    for (const [method, details] of Object.entries(methods)) {
        const tags = details.tags || ['Uncategorized'];
        for (const tag of tags) {
            if (!tagsMap[tag]) tagsMap[tag] = [];
            tagsMap[tag].push({
                path,
                method: method.toUpperCase(),
                description: details.description || details.summary || '',
            });
        }
    }
}

for (const [tag, endpoints] of Object.entries(tagsMap).sort()) {
    markdown += `### ${tag}\n\n`;
    markdown += `| Method | Endpoint | Description |\n`;
    markdown += `|---|---|---|\n`;
    for (const ep of endpoints) {
        let desc = ep.description.replace(/\n/g, ' ');
        if (!desc) {
            // Try to infer from path
            desc = "Endpoint for " + ep.path;
        }
        markdown += `| **${ep.method}** | \`${ep.path}\` | ${desc} |\n`;
    }
    markdown += `\n`;
}

fs.writeFileSync('/Users/michael-riley/.gemini/antigravity-ide/brain/9d8dce57-99ac-4009-8c3f-3cf4e964de64/api_documentation.md', markdown);
console.log('Markdown generated successfully!');
