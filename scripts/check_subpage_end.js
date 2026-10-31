const fs = require('fs');

const content = fs.readFileSync('components/eracex/subpage-translations.ts', 'utf8');
const lastClose = content.lastIndexOf('  },\n};');
console.log('lastClose index:', lastClose, 'length:', content.length);
console.log(content.slice(lastClose));
