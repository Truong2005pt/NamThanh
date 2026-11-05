// Builds components/eracex-ref/ref-scope.css: the reference site's stylesheets, every selector
// prefixed with .ref-scope so they cannot leak into the rest of the site.
import fs from 'node:fs';
import postcss from 'postcss';

const SRC = process.argv[2];
const FILES = ['style', 'layout', 'theme', 'chrome', 'comparison', 'ecosystem', 'sub-pages', 'product-pages', 'company-pages', 'ib-page', 'about-page', 'contact-page', 'faq-hub'];
const SCOPE = '.ref-scope';

// Typography pass: the concept stylesheets use 8-12px text. Lift small sizes to a readable scale and
// route fonts through variables (--ref-head / --ref-body, defined in ref-type.css).
const TYPE_SCALE = { 5: 10, 6: 10, 7: 10.5, 8: 11, 9: 11.5, 10: 12, 11: 13, 12: 14, 13: 14.5 };
export function retype(decl) {
  if (decl.prop === 'font-size' || decl.prop === 'font') {
    decl.value = decl.value.replace(/(^|\s)(\d+(?:\.\d+)?)px/, (m, pre, n) => `${pre}${TYPE_SCALE[Math.round(n)] ?? n}px`);
  }
  if (decl.prop === 'font' || decl.prop === 'font-family') {
    decl.value = decl.value
      .replace(/'?Manrope'?(,\s*sans-serif)?/g, 'var(--ref-head)')
      .replace(/'?Be Vietnam Pro'?(,\s*sans-serif)?/g, 'var(--ref-body)');
  }
}

function scopeSelector(sel) {
  sel = sel.trim();
  if (!sel) return sel;
  if (/^(from|to|\d+(\.\d+)?%)$/.test(sel)) return sel;
  // html/:root theme conditions stay outside, the rest goes under the scope
  let m = sel.match(/^(?:html|:root)((?:\[[^\]]+\])*)(?:\s+([\s\S]*))?$/);
  if (m) {
    const attrs = m[1] || '';
    let rest = m[2];
    // "html[data-theme=light] body.x .y": body is the scope root itself
    let rootExtra = '';
    const b = rest && rest.match(/^body((?:\.[\w-]+|\[[^\]]+\])*)(?:\s+([\s\S]*))?$/);
    if (b) { rootExtra = b[1] || ''; rest = b[2]; }
    if (!attrs) return rest ? `${SCOPE}${rootExtra} ${rest}` : `${SCOPE}${rootExtra}`;
    return rest ? `:root${attrs} ${SCOPE}${rootExtra} ${rest}` : `:root${attrs} ${SCOPE}${rootExtra}`;
  }
  m = sel.match(/^body((?:\.[\w-]+|\[[^\]]+\])*)(?:\s+([\s\S]*))?$/);
  if (m) {
    const cls = m[1] || '';
    const rest = m[2];
    const head = `${SCOPE}${cls}`;
    return rest ? `${head} ${rest}` : head;
  }
  if (sel === '*' || sel.startsWith('*::') || sel.startsWith('*,')) return `${SCOPE} ${sel}`;
  return `${SCOPE} ${sel}`;
}

let out = '';
const imports = [];
for (const f of FILES) {
  let css = fs.readFileSync(`${SRC}/${f}.css`, 'utf8');
  css = css.replace(/@import\s+url\([^)]*\)\s*;?/g, (m) => { imports.push(m); return ''; });
  const root = postcss.parse(css);
  root.walkDecls(retype);
  root.walkRules((rule) => {
    if (rule.parent && rule.parent.type === 'atrule' && /keyframes/i.test(rule.parent.name)) return;
    rule.selectors = rule.selectors.map(scopeSelector);
  });
  out += `/* ---- ${f}.css ---- */\n${root.toString()}\n`;
}
const header = "@import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400..700&family=Inter:wght@400;500;600;700&family=Be+Vietnam+Pro:wght@400;500;600;700&display=swap');";
fs.writeFileSync('components/eracex-ref/ref-scope.css', `${header}\n${out}`);
console.log('ok', out.length);
