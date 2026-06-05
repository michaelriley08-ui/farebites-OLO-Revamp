import re

with open('app.js', 'r') as f:
    content = f.read()

# Replace return \` with return `
content = content.replace('return \\`', 'return `')
# Replace \`; with `;
content = content.replace('\\`;', '`;')
# Replace \${ with ${
content = content.replace('\\${', '${')

with open('app.js', 'w') as f:
    f.write(content)
