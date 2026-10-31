const fs = require('fs');

const content = fs.readFileSync('components/eracex/TraderDashboardSection.tsx', 'utf8');
const enIdx = content.indexOf('    en: {');
const dEndIdx = content.indexOf('  };', enIdx);
console.log('d ends at:', dEndIdx);
console.log(content.slice(enIdx, dEndIdx + 4));
