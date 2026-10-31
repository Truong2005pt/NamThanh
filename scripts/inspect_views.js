const fs = require('fs');

['contact', 'competition', 'refund-policy', 'legal', 'about', 'how-it-works'].forEach(p => {
  const file = `app/${p}/page.tsx`;
  if (fs.existsSync(file)) {
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    console.log(`=== app/${p}/page.tsx ===`);
    console.log(lines.slice(0, 15).join('\n'));
  }
});
