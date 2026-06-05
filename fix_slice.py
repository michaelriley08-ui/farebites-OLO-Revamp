import re

with open('app.js', 'r') as f:
    content = f.read()

# Replace .slice(0, 3).map with .map
content = content.replace('featuredItems.slice(0, 3).map', 'featuredItems.map')
# Replace .slice(0, 5).map with .map
content = content.replace('featuredItems.slice(0, 5).map', 'featuredItems.map')

with open('app.js', 'w') as f:
    f.write(content)
