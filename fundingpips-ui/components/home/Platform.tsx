import { ChartCandlestick, ListChecks, Smartphone, Wallet } from 'lucide-react';
import { Ph } from '../Ph';
import { Float } from '../Pic';

// Nến minh hoạ sinh từ bộ số ngẫu nhiên cố định (mulberry32), không phải dữ liệu thị trường.
function rng(seed: number) {
  return () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
type K = { o: number; h: number; l: number; c: number; v: number };
function makeCandles(n: number, seed: number, way: number[]): K[] {
  const r = rng(seed); const out: K[] = []; let p = way[0];
  for (let i = 0; i < n; i++) {
    const t = (i / (n - 1)) * (way.length - 1), j = Math.min(Math.floor(t), way.length - 2), f = (1 - Math.cos((t - j) * Math.PI)) / 2;
    const target = way[j] + (way[j + 1] - way[j]) * f;
    const o = p, c = o + (target - o) * 0.55 + (r() - 0.5) * 3.2;
    const h = Math.max(o, c) + r() * 1.6, l = Math.min(o, c) - r() * 1.6;
    out.push({ o, h, l, c, v: 0.25 + r() * 0.6 + Math.abs(c - o) * 0.15 });
    p = c;
  }
  return out;
}
const WAY_MAIN = [104, 96, 108, 101, 118, 109, 114, 100, 112, 126, 118, 124];
const WAY_SPARK = [100, 112, 103, 108, 96, 110, 121, 113, 126];
const sma = (k: K[], n: number) => k.map((_, i) => { const s = k.slice(Math.max(0, i - n + 1), i + 1); return s.reduce((a, x) => a + x.c, 0) / s.length; });
const UP = '#16a34a', DN = '#ef4444';

/** Biểu đồ nến: lưới, trục giá, đường trung bình, cột khối lượng và vạch giá hiện tại. */
function Chart({ w, h, n = 48, seed = 7, id = 'c' }: { w: number; h: number; n?: number; seed?: number; id?: string }) {
  const ks = makeCandles(n, seed, WAY_MAIN), ma = sma(ks, 9);
  const axis = 44, tAxis = 16, top = 8, bot = h - tAxis - 8;
  const lo = Math.min(...ks.map((k) => k.l)) - 1, hi = Math.max(...ks.map((k) => k.h)) + 1;
  const y = (v: number) => bot - ((v - lo) / (hi - lo)) * (bot - top);
  const pw = w - axis, step = pw / ks.length, last = ks[ks.length - 1];
  const grid = [0, 1, 2, 3, 4].map((g) => lo + ((hi - lo) * g) / 4);
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" role="img" aria-label="Chart illustration">
      {grid.map((g) => <g key={g}><line x1="0" x2={pw} y1={y(g)} y2={y(g)} stroke="var(--line)" strokeDasharray="2 4" /><text x={w - 4} y={y(g) + 3} textAnchor="end" fontSize="9" fill="var(--muted)">{g.toFixed(2)}</text></g>)}
      {ks.map((k, i) => {
        const up = k.c >= k.o, x = i * step + step / 2, col = up ? UP : DN;
        return <g key={i}><line x1={x} x2={x} y1={y(k.h)} y2={y(k.l)} stroke={col} strokeWidth="1" /><rect x={x - step * 0.32} width={step * 0.64} y={y(Math.max(k.o, k.c))} height={Math.max(1.2, Math.abs(y(k.o) - y(k.c)))} fill={col} /></g>;
      })}
      {[0, 1, 2, 3, 4, 5, 6].map((q) => { const x = (q / 6) * (pw - 24) + 12; const m = 9 * 60 + q * 60; return <g key={'t' + q}><line x1={x} x2={x} y1={h - tAxis} y2={h - tAxis + 3} stroke="var(--muted)" /><text x={x} y={h - 3} textAnchor="middle" fontSize="9" fill="var(--muted)">{String(Math.floor(m / 60)).padStart(2, '0')}:{String(m % 60).padStart(2, '0')}</text></g>; })}
      <polyline fill="none" stroke="#f59e0b" strokeWidth="1.4" strokeLinejoin="round" points={ma.map((v, i) => `${i * step + step / 2},${y(v)}`).join(' ')} />
      <line x1="0" x2={pw} y1={y(last.c)} y2={y(last.c)} stroke={last.c >= last.o ? UP : DN} strokeDasharray="3 3" strokeWidth=".9" />
      <rect x={pw + 1} y={y(last.c) - 7} width={axis - 2} height="14" rx="3" fill={last.c >= last.o ? UP : DN} />
      <text x={pw + axis / 2} y={y(last.c) + 3} textAnchor="middle" fontSize="9" fontWeight="700" fill="#fff">{last.c.toFixed(2)}</text>
    </svg>
  );
}

/** Biểu đồ đường có vùng tô màu cho thẻ điện thoại. */
function Spark({ w, h, seed = 21, id = 's' }: { w: number; h: number; seed?: number; id?: string }) {
  const ks = makeCandles(40, seed, WAY_SPARK).map((k) => k.c);
  const lo = Math.min(...ks), hi = Math.max(...ks), pad = 6;
  const pts = ks.map((v, i) => [(i / (ks.length - 1)) * w, h - pad - ((v - lo) / (hi - lo)) * (h - pad * 2)]);
  const line = pts.map((p) => p.join(',')).join(' ');
  const end = pts[pts.length - 1];
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-full" role="img" aria-label="Chart illustration">
      <defs><linearGradient id={id} x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor={UP} stopOpacity=".35" /><stop offset="1" stopColor={UP} stopOpacity="0" /></linearGradient></defs>
      {[0.33, 0.66].map((g) => <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="var(--line)" strokeDasharray="2 4" />)}
      <polygon points={`0,${h} ${line} ${w},${h}`} fill={`url(#${id})`} />
      <polyline points={line} fill="none" stroke={UP} strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={end[0] - 3} cy={end[1]} r="6" fill={UP} opacity=".2" /><circle cx={end[0] - 3} cy={end[1]} r="2.6" fill={UP} stroke="#fff" strokeWidth="1" />
    </svg>
  );
}

/** Giới thiệu nền tảng giao dịch bằng hình minh hoạ: màn hình biểu đồ trên máy tính và ứng dụng di động xếp chồng. */
export function PlatformShowcase() {
  const items: [any, string][] = [[ChartCandlestick, 'Chart view'], [Wallet, 'Balance and equity'], [ListChecks, 'Open positions']];
  return (
    <section className="py-20 lg:py-28 overflow-hidden">
      <div className="wrap grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-center">
        <div>
          <h2 className="h2">Your trading platform, on desktop and mobile</h2>
          <ul className="grid gap-3 mt-8">
            {items.map(([I, t]) => <li key={t} className="flex items-center gap-3 font-semibold"><span className="w-11 h-11 rounded-xl bg-accent/10 text-accent2 grid place-items-center"><I className="w-5 h-5" /></span>{t}</li>)}
          </ul>
          <p className="text-xs text-muted mt-8">Illustration of the interface. Not live market data.</p>
        </div>

        <div className="relative pb-16 lg:pb-6 lg:pr-24">
          <div className="relative z-10 rounded-2xl border border-line bg-card shadow-[0_50px_100px_-50px_rgba(10,26,79,.6)] overflow-hidden">
            <div className="flex items-center gap-4 px-4 py-2.5 border-b border-line bg-card2 text-xs font-bold">
              <Ph kind="logo" ratio="4/1" className="!w-20 !rounded-md" />
              <span className="px-2.5 py-1 rounded-md bg-card border border-line">Chart</span><span className="text-muted">Positions</span><span className="text-muted hidden sm:inline">History</span>
            </div>
            <div className="grid sm:grid-cols-[1fr_170px]">
              <div className="p-4 min-h-[240px]">
                <div className="flex items-center justify-between text-xs mb-2"><span className="font-extrabold">Instrument</span><span className="text-good font-bold">+1.84%</span></div>
                <div className="h-[250px]"><Chart w={560} h={250} n={56} /></div>
              </div>
              <div className="hidden sm:grid content-start gap-3 p-4 border-l border-line text-xs">
                <div className="grid grid-cols-2 gap-2"><span className="h-9 rounded-lg bg-[#ef4444] text-white font-bold grid place-items-center">Sell</span><span className="h-9 rounded-lg bg-[#16a34a] text-white font-bold grid place-items-center">Buy</span></div>
                <div className="rounded-lg bg-card2 border border-line p-2.5"><div className="text-muted">Volume</div><div className="font-extrabold">1.00</div></div>
                <div className="rounded-lg bg-card2 border border-line p-2.5"><div className="text-muted">Stop loss</div><div className="font-extrabold">Set</div></div>
              </div>
            </div>
            <div className="grid grid-cols-3 border-t border-line text-xs text-center">
              {[['Balance', '$100,000'], ['Equity', '$101,840'], ['Floating P&L', '+$1,840']].map(([k, v]) => <div key={k} className="p-3 border-r border-line last:border-0"><div className="text-muted">{k}</div><div className="font-extrabold mt-0.5">{v}</div></div>)}
            </div>
          </div>

          <div className="absolute z-20 right-0 -top-6 lg:-top-10 w-[150px] sm:w-[180px] rounded-[26px] border-[5px] border-[var(--navy)] bg-card shadow-[0_40px_80px_-30px_rgba(10,26,79,.7)] overflow-hidden">
            <div className="bg-[var(--navy)] text-white px-3 pt-3 pb-4"><div className="text-[0.625rem] text-white/60 flex items-center gap-1"><Smartphone className="w-3 h-3" />Account</div><div className="text-lg font-extrabold">$101,840</div><div className="text-[0.625rem] text-[#5ee9a4] font-bold">+1.84%</div></div>
            <div className="h-[96px] px-1"><Spark w={180} h={96} /></div>
            <div className="p-2.5 grid gap-1.5 text-[0.625rem]">{['Position 1', 'Position 2'].map((p, i) => <div key={p} className="flex justify-between rounded-lg bg-card2 px-2 py-1.5"><span className="font-bold">{p}</span><span className={i ? 'text-[#ef4444] font-bold' : 'text-good font-bold'}>{i ? '-$120' : '+$310'}</span></div>)}</div>
          </div>

          <Float src="/images/coins-cash.png" className="hidden lg:block absolute -left-12 -bottom-4 w-[130px] -rotate-6 z-20" />
        </div>
      </div>
    </section>
  );
}
