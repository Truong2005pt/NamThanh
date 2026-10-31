const fs = require('fs');
const ts = require('typescript');

function loadLocale(lang) {
  const code = fs.readFileSync(`lib/locales/${lang}.ts`, 'utf8');
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  return m.exports[lang];
}

const vi = loadLocale('vi');
console.log('vi.rules:\n', JSON.stringify(vi.rules, null, 2));
console.log('\nvi.comparison:\n', JSON.stringify(vi.comparison, null, 2));
