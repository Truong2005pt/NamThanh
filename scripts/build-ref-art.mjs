// Renders the program-parameter and reward-cycle artwork (matching the Two-Step / 5-day artwork style)
// with Lucide icons, in dark and light, via headless Edge. Output: public/eracex-ref/assets/*.webp
// Usage: node scripts/build-ref-art.mjs   (needs msedge + python PIL for the PNG -> WebP step)
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const OUT = 'public/eracex-ref/assets';
const TMP = process.env.ART_TMP || 'scripts/.art-tmp';
fs.mkdirSync(TMP, { recursive: true });
const EDGE = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe';

const iconDir = 'node_modules/lucide-react/dist/esm/icons';
function icon(name, size, stroke = 1.6) {
  const src = fs.readFileSync(path.join(iconDir, `${name}.mjs`), 'utf8');
  const i = src.indexOf('node:');
  let j = src.indexOf('[', i), k = j, d = 0;
  for (; k < src.length; k++) { if (src[k] === '[') d++; else if (src[k] === ']') { d--; if (!d) break; } }
  const nodes = Function(`return ${src.slice(j, k + 1)}`)();
  const body = nodes.map(([t, a]) => { const { key, ...r } = a; return `<${t} ${Object.entries(r).map(([x, y]) => `${x}="${y}"`).join(' ')}/>`; }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
}

const themes = {
  dark: { bg: '#101010', card: 'linear-gradient(#1d1d1d,#131313)', cardLine: '#8a7440', num: '#c9a85a', text: '#f3efe6', sub: '#a29d90', line: '#6f5f35', pillLine: '#8a7440', shadow: '0 18px 40px rgba(0,0,0,.55)', tile: 'linear-gradient(#1f1f1f,#121212)' },
  light: { bg: '#faf8f4', card: 'linear-gradient(#f7f6f4,#efeeec)', cardLine: '#c9a85a', num: '#b8913c', text: '#1c1b18', sub: '#6e6a60', line: '#c9b98a', pillLine: '#b8913c', shadow: '0 18px 36px rgba(120,100,50,.18)', tile: 'linear-gradient(#ffffff,#f1efe9)' },
};

function paramsPage(t, cards, pill) {
  const w = cards.length;
  return `<div class="art"><div class="rail"></div>
  <div class="cards">${cards.map((c, i) => `<div class="card">
    <b class="num">${c.num}</b><span class="ic">${icon(c.icon, 56, 1.5)}</span><strong>${c.title}</strong><small>${c.sub}</small></div>${i < w - 1 ? `<span class="arr">${icon('arrow-right', 26, 1.6)}</span>` : ''}`).join('')}</div>
  <div class="dots">${cards.map(() => '<i></i>').join('')}</div>
  <div class="pill">${pill}</div></div>`;
}

function rewardsPage(days) {
  const cal = Array.from({ length: 7 }, () => `<span>${icon('calendar-check', 46, 1.5)}</span>`).join('');
  return `<div class="art rw"><div class="cal">${cal}</div>
  <div class="ring">${icon('rotate-cw', 150, 1.4)}<b>${days}</b></div>
  <div class="tile">${icon('trophy', 170, 1.3)}</div></div>`;
}

const css = (t) => `
*{box-sizing:border-box;margin:0}
body{width:830px;height:700px;background:${t.bg};font-family:'Inter','Segoe UI',sans-serif;color:${t.text};overflow:hidden}
.art{position:relative;width:830px;height:700px}
.rail{position:absolute;left:0;right:0;top:485px;height:2px;background:${t.line};opacity:.7}
.cards{position:absolute;left:0;right:0;top:56px;display:flex;justify-content:center;align-items:center;gap:0}
.card{width:232px;height:376px;border:2px solid ${t.cardLine};border-radius:22px;background:${t.card};box-shadow:${t.shadow};display:flex;flex-direction:column;align-items:center;padding:38px 12px 0;text-align:center}
.num{font-family:'DM Sans',sans-serif;font-weight:600;font-size:60px;letter-spacing:-.04em;color:${t.num};line-height:1}
.ic{margin:30px 0 26px;color:${t.num}}
.card strong{font-family:'DM Sans',sans-serif;font-size:27px;font-weight:600;line-height:1.15}
.card small{margin-top:8px;font-size:19px;line-height:1.3;color:${t.sub}}
.arr{width:44px;display:grid;place-items:center;color:${t.line}}
.dots{position:absolute;left:0;right:0;top:475px;display:flex;justify-content:center;gap:152px}
.dots i{width:22px;height:22px;border-radius:50%;background:${t.num};border:5px solid ${t.bg};box-shadow:0 0 0 2px ${t.line}}
.pill{position:absolute;left:50%;top:565px;transform:translateX(-50%);padding:10px 34px;border:2px solid ${t.pillLine};border-radius:999px;font-size:24px;font-weight:500;color:${t.text}}
.rw .cal{position:absolute;left:70px;top:80px;display:flex;gap:10px;color:${t.num}}
.rw .ring{position:absolute;right:90px;top:50px;width:210px;height:210px;color:${t.num};display:grid;place-items:center}
.rw .ring svg{position:absolute;inset:30px}
.rw .ring b{position:relative;font-family:'DM Sans',sans-serif;font-size:62px;font-weight:600;letter-spacing:-.04em;color:${t.text}}
.rw .tile{position:absolute;left:185px;top:255px;width:360px;height:360px;border:2px solid ${t.cardLine};border-radius:34px;background:${t.tile};box-shadow:${t.shadow};display:grid;place-items:center;color:${t.num}}
`;

const jobs = [
  ['params-one-step', paramsPage(null, [
    { num: '10%', icon: 'target', title: 'Phase 1', sub: 'Evaluation<br>Profit target' },
    { num: '3%', icon: 'shield-alert', title: 'Daily loss', sub: 'Per-day limit' },
    { num: '6%', icon: 'award', title: 'Funded', sub: 'Fixed total<br>loss limit' }], 'One-Step')],
  ['params-instant-funding', paramsPage(null, [
    { num: '3%', icon: 'shield-alert', title: 'Daily loss', sub: 'Per-day limit' },
    { num: '5%', icon: 'trending-down', title: 'Total loss', sub: 'Trailing<br>threshold' },
    { num: '1:40', icon: 'gauge', title: 'Funded', sub: 'Maximum<br>leverage' }], 'Instant Funding')],
  ['params-instant-light', paramsPage(null, [
    { num: '3%', icon: 'shield-alert', title: 'Daily loss', sub: 'Per-day limit' },
    { num: '5%', icon: 'trending-down', title: 'Total loss', sub: 'Trailing<br>threshold' },
    { num: '25%', icon: 'scale', title: 'Consistency', sub: 'Best-day<br>cap' }], 'Instant Light')],
  ['rewards-14day', rewardsPage(14)],
];

for (const theme of ['dark', 'light']) {
  const t = themes[theme];
  for (const [name, body] of jobs) {
    const html = `<!doctype html><meta charset="utf-8"><style>@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@500;600&family=Inter:wght@400;500&display=swap');${css(t)}</style><body>${body}</body>`;
    const f = path.resolve(TMP, `${name}-${theme}.html`);
    fs.writeFileSync(f, html);
    const png = path.resolve(TMP, `${name}-${theme}.png`);
    execFileSync(EDGE, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=2', '--window-size=830,700', '--virtual-time-budget=6000', `--screenshot=${png}`, 'file:///' + f.replace(/\\/g, '/')], { stdio: 'ignore' });
    execFileSync('python', ['-c', `from PIL import Image;Image.open(r'${png}').convert('RGB').save(r'${path.resolve(OUT, `${name}-${theme}.webp`)}',quality=88)`]);
    console.log('ok', `${name}-${theme}`);
  }
}
