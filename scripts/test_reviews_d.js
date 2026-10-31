const fs = require('fs');
const ts = require('typescript');

const c = fs.readFileSync('app/reviews/page.tsx', 'utf8');
const dMatch = c.match(/const d = \{([\s\S]*?)\n  \};/);
if (dMatch) {
  const code = 'const React = { createElement: () => null }; const d = {' + dMatch[1] + '\n}; exports.d = d;';
  const js = ts.transpileModule(code, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.React } }).outputText;
  const m = { exports: {} };
  new Function('module', 'exports', 'require', js)(m, m.exports, require);
  console.log('Total languages in app/reviews/page.tsx d:', Object.keys(m.exports.d).length);
  console.log('Langs:', Object.keys(m.exports.d).join(', '));
} else {
  console.log('dMatch not found');
}
