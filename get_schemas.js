const fs = require('fs');

const content = fs.readFileSync('/Users/michael-riley/.gemini/antigravity-ide/brain/9d8dce57-99ac-4009-8c3f-3cf4e964de64/.system_generated/steps/5/content.md', 'utf-8');
const lines = content.split('\n');
const jsonStr = lines.slice(8).join('\n');
const swagger = JSON.parse(jsonStr);

function resolveSchema(ref) {
    if (!ref) return null;
    const path = ref.replace('#/', '').split('/');
    let current = swagger;
    for (const part of path) {
        current = current[part];
    }
    return current;
}

const createEndpoint = swagger.paths['/api/Orders/create']?.post;
const createNoPaymentEndpoint = swagger.paths['/api/Orders/create-without-payment']?.post;

console.log("=== /api/Orders/create ===");
if (createEndpoint) {
    const ref = createEndpoint.requestBody?.content?.['application/json']?.schema?.['$ref'];
    if (ref) {
        console.log("Schema Ref:", ref);
        console.log(JSON.stringify(resolveSchema(ref), null, 2));
    }
} else {
    console.log("Not found");
}

console.log("\n=== /api/Orders/create-without-payment ===");
if (createNoPaymentEndpoint) {
    const ref = createNoPaymentEndpoint.requestBody?.content?.['application/json']?.schema?.['$ref'];
    if (ref) {
        console.log("Schema Ref:", ref);
        console.log(JSON.stringify(resolveSchema(ref), null, 2));
    }
} else {
    console.log("Not found");
}
