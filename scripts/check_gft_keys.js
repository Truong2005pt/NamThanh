const fs = require('fs');
const path = require('path');

const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

function extractKeys(obj, prefix = '') {
  let keys = [];
  for (const k in obj) {
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      keys = keys.concat(extractKeys(obj[k], prefix ? `${prefix}.${k}` : k));
    } else {
      keys.push(prefix ? `${prefix}.${k}` : k);
    }
  }
  return keys;
}

const content = fs.readFileSync('components/eracex/gft-translations.ts', 'utf8');
const jsonLike = content
  .replace(/import\s+[^;]+;/g, '')
  .replace(/export\s+interface\s+[\s\S]+?;\n}/g, '')
  .replace(/export\s+const\s+GFT_TRANSLATIONS\s*:\s*Record<string,\s*GftTranslationDictionary>\s*=\s*/, 'module.exports = ')
  .replace(/export\s+function\s+[\s\S]+$/, '')
  .replace(/;\s*$/, '');

const tmpFile = path.join('scratch', 'temp_gft.js');
fs.writeFileSync(tmpFile, jsonLike);

try {
  const gft = require(path.resolve(tmpFile));
  const enKeys = extractKeys(gft['en']);
  console.log(`gft en has ${enKeys.length} total translation keys`);

  langs.forEach(lang => {
    if (!gft[lang]) {
      console.log(`[${lang}] MISSING in gft-translations!`);
      return;
    }
    const langKeys = extractKeys(gft[lang]);
    const missingInLang = enKeys.filter(k => !langKeys.includes(k));
    const extraInLang = langKeys.filter(k => !enKeys.includes(k));
    if (missingInLang.length > 0 || extraInLang.length > 0) {
      console.log(`[${lang}] Missing: ${missingInLang.length}, Extra: ${extraInLang.length}`);
    } else {
      const emptyKeys = enKeys.filter(k => {
        const parts = k.split('.');
        let val = gft[lang];
        for (const p of parts) val = val ? val[p] : undefined;
        return typeof val !== 'string' || val.trim() === '';
      });
      if (emptyKeys.length > 0) {
        console.log(`[${lang}] Empty keys:`, emptyKeys);
      } else {
        console.log(`[${lang}] GFT PERFECT: all ${enKeys.length} keys populated!`);
      }
    }
  });
} catch (e) {
  console.error('Error checking GFT:', e.message);
}
