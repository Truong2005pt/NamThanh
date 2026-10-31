const fs = require('fs');
const path = require('path');

const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

console.log('--- 1. Checking SUPPORTED_LANGUAGES in lib/i18n.ts ---');
const i18nContent = fs.readFileSync('lib/i18n.ts', 'utf8');
langs.forEach(l => {
  const codeCheck = new RegExp(`code:\\s*['"]${l}['"]`).test(i18nContent);
  if (!codeCheck) console.log(`  [MISSING IN SUPPORTED_LANGUAGES]: ${l}`);
});

console.log('\n--- 2. Checking lib/locales/*.ts completeness against TranslationDictionary ---');
const enLocale = fs.readFileSync('lib/locales/en.ts', 'utf8');
// Extract top-level keys in en.ts
const localeFiles = fs.readdirSync('lib/locales').filter(f => f.endsWith('.ts'));
console.log('Total locale files:', localeFiles.length);
langs.forEach(l => {
  const filePath = path.join('lib/locales', `${l}.ts`);
  if (!fs.existsSync(filePath)) {
    console.log(`  [MISSING FILE lib/locales/${l}.ts]`);
  }
});

console.log('\n--- 3. Checking internal dictionaries in components/eracex ---');
const compDir = 'components/eracex';
const compFiles = fs.readdirSync(compDir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

compFiles.forEach(f => {
  const content = fs.readFileSync(path.join(compDir, f), 'utf8');
  // Check if file has any language keys
  const matchedLangs = langs.filter(l => {
    return new RegExp(`(^|\\n|\\s|{|,)['"]?${l}['"]?\\s*:\\s*{`).test(content);
  });
  if (matchedLangs.length > 0) {
    if (matchedLangs.length < langs.length) {
      const missing = langs.filter(l => !matchedLangs.includes(l));
      console.log(`  [PARTIAL INLINE DICT] ${f}: Has ${matchedLangs.length}/${langs.length}. Missing: ${missing.join(', ')}`);
    } else {
      console.log(`  [FULL 19 INLINE DICT] ${f}`);
    }
  }
});

console.log('\n--- 4. Checking app/ pages for hardcoded texts or missing translations ---');
function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanDir(fullPath);
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const matchedLangs = langs.filter(l => {
        return new RegExp(`(^|\\n|\\s|{|,)['"]?${l}['"]?\\s*:\\s*{`).test(content);
      });
      if (matchedLangs.length > 0) {
        if (matchedLangs.length < langs.length) {
          const missing = langs.filter(l => !matchedLangs.includes(l));
          console.log(`  [PARTIAL INLINE DICT IN APP] ${fullPath}: Has ${matchedLangs.length}/${langs.length}. Missing: ${missing.join(', ')}`);
        } else {
          console.log(`  [FULL 19 INLINE DICT IN APP] ${fullPath}`);
        }
      }
    }
  }
}
scanDir('app');

console.log('\n--- 5. Checking content/ directory ---');
if (fs.existsSync('content')) {
  scanDir('content');
}
