const fs = require('fs');
const path = require('path');

const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

// Read en.ts and parse object keys recursively
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

// Transpile ts to js or regex-match
// Since ts files in lib/locales are pure object exports, let's load them via ts-node or a quick strip
const baseDir = 'lib/locales';
const results = {};

langs.forEach(lang => {
  const content = fs.readFileSync(path.join(baseDir, `${lang}.ts`), 'utf8');
  // strip export const <lang>: TranslationDictionary = 
  const jsonLike = content
    .replace(/import\s+[^;]+;/g, '')
    .replace(/export\s+const\s+\w+\s*:\s*TranslationDictionary\s*=\s*/, 'module.exports = ')
    .replace(/export\s+const\s+\w+\s*=\s*/, 'module.exports = ')
    .replace(/;\s*$/, '');
  
  const tmpFile = path.join('scratch', `temp_${lang}.js`);
  fs.writeFileSync(tmpFile, jsonLike);
  try {
    results[lang] = require(path.resolve(tmpFile));
  } catch (e) {
    console.error(`Error loading ${lang}:`, e.message);
  }
});

const enKeys = extractKeys(results['en']);
console.log(`en has ${enKeys.length} total translation keys`);

langs.forEach(lang => {
  if (!results[lang]) return;
  const langKeys = extractKeys(results[lang]);
  const missingInLang = enKeys.filter(k => !langKeys.includes(k));
  const extraInLang = langKeys.filter(k => !enKeys.includes(k));
  if (missingInLang.length > 0 || extraInLang.length > 0) {
    console.log(`[${lang}] Missing keys: ${missingInLang.length}, Extra keys: ${extraInLang.length}`);
    if (missingInLang.length > 0) console.log(`   Missing:`, missingInLang.slice(0, 5));
  } else {
    // Check for empty string values
    const emptyKeys = enKeys.filter(k => {
      const parts = k.split('.');
      let val = results[lang];
      for (const p of parts) val = val ? val[p] : undefined;
      return typeof val !== 'string' || val.trim() === '';
    });
    if (emptyKeys.length > 0) {
      console.log(`[${lang}] Has empty keys:`, emptyKeys);
    } else {
      console.log(`[${lang}] PERFECT: all ${enKeys.length} keys populated!`);
    }
  }
});
