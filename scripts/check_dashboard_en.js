const fs = require('fs');

const content = fs.readFileSync('components/eracex/TraderDashboardSection.tsx', 'utf8');
const enIdx = content.indexOf('    en: {');
if (enIdx !== -1) {
  console.log(content.slice(enIdx, enIdx + 900));
}
