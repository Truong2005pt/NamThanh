const ts = require('typescript');
const fs = require('fs');

const langs = ['vi', 'en', 'zh', 'ja', 'es', 'pt', 'fr', 'de', 'it', 'pl', 'tr', 'id', 'th', 'fil', 'hi', 'ko', 'ru', 'ar', 'nl'];

function loadTsModule(filePath, exportName) {
  const code = fs.readFileSync(filePath, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  const fn = new Function('module', 'exports', 'require', js);
  fn(m, m.exports, require);
  return m.exports[exportName];
}

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

function auditTranslations(name, dict) {
  console.log(`\n=== AUDITING ${name} ===`);
  const enKeys = extractKeys(dict['en']);
  console.log(`Reference 'en' has ${enKeys.length} total keys`);
  
  langs.forEach(lang => {
    if (!dict[lang]) {
      console.log(`[${lang}] MISSING!`);
      return;
    }
    const lKeys = extractKeys(dict[lang]);
    const missing = enKeys.filter(k => !lKeys.includes(k));
    const extra = lKeys.filter(k => !enKeys.includes(k));
    
    // Check for untranslated (identical to English or empty)
    let untranslated = [];
    if (lang !== 'en') {
      enKeys.forEach(k => {
        const parts = k.split('.');
        let enVal = dict['en'];
        let lVal = dict[lang];
        for (const p of parts) {
          enVal = enVal ? enVal[p] : undefined;
          lVal = lVal ? lVal[p] : undefined;
        }
        if (typeof lVal === 'string' && lVal.trim() === '') {
          untranslated.push(`${k} (EMPTY)`);
        }
      });
    }

    if (missing.length > 0 || extra.length > 0 || untranslated.length > 0) {
      console.log(`[${lang}] Missing: ${missing.length}, Extra: ${extra.length}, Untranslated/Empty: ${untranslated.length}`);
      if (missing.length > 0) console.log(`   Missing:`, missing.slice(0, 5));
      if (untranslated.length > 0) console.log(`   Empty:`, untranslated.slice(0, 5));
    } else {
      console.log(`[${lang}] 100% OK (${lKeys.length} keys)`);
    }
  });
}

const gft = loadTsModule('components/eracex/gft-translations.ts', 'GFT_TRANSLATIONS');
auditTranslations('GFT_TRANSLATIONS', gft);

const sub = loadTsModule('components/eracex/subpage-translations.ts', 'SUBPAGE_TRANSLATIONS');
auditTranslations('SUBPAGE_TRANSLATIONS', sub);

const nav = loadTsModule('components/eracex/nav-translations.ts', 'NAV_TRANSLATIONS');
auditTranslations('NAV_TRANSLATIONS', nav);
