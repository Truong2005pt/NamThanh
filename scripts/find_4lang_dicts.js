const fs = require('fs');
const path = require('path');

function checkFileForLangs(p) {
  const content = fs.readFileSync(p, 'utf8');
  // Check if file defines vi, zh, ja, en object or checks currentLang === 'vi'
  const has4Langs = /['"]?vi['"]?\s*:\s*\{[\s\S]*?['"]?zh['"]?\s*:\s*\{[\s\S]*?['"]?ja['"]?\s*:\s*\{[\s\S]*?['"]?en['"]?\s*:\s*\{/.test(content);
  const hasLangCheck = /currentLang\s*===/g.test(content);
  if (has4Langs) {
    console.log(`4-lang dictionary found: ${p}`);
  }
}

function scan(dir) {
  for (const f of fs.readdirSync(dir)) {
    if (f === 'node_modules' || f === '.next' || f === '.git' || f === 'scratch') continue;
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) scan(full);
    else if (/\.(tsx|ts)$/.test(f)) checkFileForLangs(full);
  }
}

scan('components');
scan('app');
