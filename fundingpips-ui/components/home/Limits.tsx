'use client';

import { useMemo, useState } from 'react';
import { PLAN_PRODUCTS } from '@/lib/data';

// Nến minh hoạ sinh từ bộ số cố định (không phải dữ liệu thị trường). Trục giá tính theo % số dư ban đầu.
function rng(seed: number) {
  return () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
}
type K = { o: number; h: number; l: number; c: number };
const DAYS = 5, PER = 10;
const WAY = [100, 101.4, 100.7, 102.6, 101.9, 103.8, 103, 105, 104.2, 106.4, 105.6, 107.6];
function candles(): K[] {
  const r = rng(11), n = DAYS * PER, out: K[] = []; let p = 100;
  for (let i = 0; i < n; i++) {
    const t = (i / (n - 1)) * (WAY.length - 1), j = Math.min(Math.floor(t), WAY.length - 2), f = (1 - Math.cos((t - j) * Math.PI)) / 2;
    const target = WAY[j] + (WAY[j + 1] - WAY[j]) * f;
    const o = p, c = o + (target - o) * 0.6 + (r() - 0.5) * 0.9;
    out.push({ o, c, h: Math.max(o, c) + r() * 0.45, l: Math.min(o, c) - r() * 0.45 });
    p = c;
  }
  return out;
}

const pct = (s: string) => parseFloat(s);
const W = 720, H = 390, L = 8, R = 92, T = 16, B = 40;
const GREEN = '#16a34a', RED = '#ef4444', AMBER = '#f59e0b', LOSS = '#dc2626';

const PRODUCTS = PLAN_PRODUCTS.map((p) => ({
  id: p.id, name: p.name.replace(' Option', ''),
  daily: pct(p.dailyLoss), max: pct(p.maxLoss), trailing: /trailing/i.test(p.maxLoss),
}));

/** Giải thích giới hạn lỗ theo từng chương trình: biểu đồ nến 5 ngày, mức lỗ ngày và mức lỗ tối đa lấy từ bảng quy tắc. Chỉ là hình minh hoạ. */
export function LimitsDiagram() {
  const [sel, setSel] = useState(0);
  const prod = PRODUCTS[sel];
  const ks = useMemo(candles, []);
  const n = ks.length, pw = W - L - R;
  const step = pw / n;
  const cx = (i: number) => L + i * step + step / 2;

  // Mức lỗ ngày: tính từ vốn đầu ngày. Mức lỗ tối đa: cố định theo số dư ban đầu hoặc trượt theo đỉnh vốn.
  const dayFloor = Array.from({ length: DAYS }, (_, d) => (d === 0 ? 100 : ks[d * PER - 1].c) - prod.daily);
  let peak = 100;
  const maxFloor = ks.map((k) => { peak = Math.max(peak, k.h); return prod.trailing ? peak - prod.max : 100 - prod.max; });
  const lo = Math.min(...dayFloor, ...maxFloor) - 1.2, hi = Math.max(...ks.map((k) => k.h)) + 1.2;
  const y = (v: number) => H - B - ((v - lo) / (hi - lo)) * (H - T - B);
  const ticks = Array.from({ length: 6 }, (_, i) => lo + ((hi - lo) * i) / 5).filter((t) => Math.abs(t - 100) > 1.3);

  const floorPath = maxFloor.map((v, i) => `${i ? `H${L + i * step}V` : `M${L},`}${y(v)}`).join(' ') + ` H${W - R}`;
  const zone = `${floorPath} V${H - B} H${L} Z`;
  const last = ks[n - 1];

  return (
    <div>
      <h2 className="h2">How the loss limits work</h2>
      <div className="mt-10 rounded-2xl border border-line bg-card overflow-hidden shadow-[0_40px_90px_-60px_rgba(10,26,79,.55)]">
        <div role="tablist" className="flex flex-wrap items-center gap-1 px-3 sm:px-4 py-2.5 bg-card2 border-b border-line">
          {PRODUCTS.map((p, i) => (
            <button key={p.id} role="tab" aria-selected={i === sel} onClick={() => setSel(i)} className={`h-9 px-4 rounded-md text-sm font-bold transition ${i === sel ? 'bg-card border border-line shadow-sm text-ink' : 'border border-transparent text-muted hover:text-ink'}`}>{p.name}</button>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1fr_280px]">
          <div className="p-3 sm:p-5 min-w-0">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Loss limit illustration">
              {ticks.map((t) => (
                <g key={t}><line x1={L} x2={W - R} y1={y(t)} y2={y(t)} stroke="var(--line)" strokeDasharray="2 4" /><text x={W - 4} y={y(t) + 4} textAnchor="end" fontSize="11" fill="var(--muted)">{t.toFixed(1)}%</text></g>
              ))}
              {Array.from({ length: DAYS + 1 }, (_, d) => <line key={d} x1={L + d * PER * step} x2={L + d * PER * step} y1={T} y2={H - B} stroke="var(--line)" />)}
              {Array.from({ length: DAYS }, (_, d) => <text key={d} x={L + (d + 0.5) * PER * step} y={H - 16} textAnchor="middle" fontSize="11" fontWeight="600" fill="var(--muted)">Day {d + 1}</text>)}

              <path d={zone} fill={LOSS} opacity=".07" />
              {dayFloor.map((v, d) => <line key={d} x1={L + d * PER * step + 3} x2={L + (d + 1) * PER * step - 3} y1={y(v)} y2={y(v)} stroke={AMBER} strokeWidth="1.8" strokeDasharray="6 4" />)}
              <line x1={L} x2={W - R} y1={y(100)} y2={y(100)} stroke="var(--muted)" strokeDasharray="1 4" />

              {ks.map((k, i) => {
                const up = k.c >= k.o, col = up ? GREEN : RED;
                return <g key={i}><line x1={cx(i)} x2={cx(i)} y1={y(k.h)} y2={y(k.l)} stroke={col} strokeWidth="1" /><rect x={cx(i) - step * 0.3} width={step * 0.6} y={y(Math.max(k.o, k.c))} height={Math.max(1.2, Math.abs(y(k.o) - y(k.c)))} fill={col} /></g>;
              })}

              <path d={floorPath} fill="none" stroke={LOSS} strokeWidth="2" strokeLinejoin="round" />

              <g fontSize="11" fontWeight="700">
                <line x1={L} x2={W - R} y1={y(last.c)} y2={y(last.c)} stroke={last.c >= last.o ? GREEN : RED} strokeWidth=".8" strokeDasharray="3 3" />
                <rect x={W - R + 2} y={y(last.c) - 9} width="56" height="18" rx="3" fill={last.c >= last.o ? GREEN : RED} />
                <text x={W - R + 30} y={y(last.c) + 4} textAnchor="middle" fill="#fff">{last.c.toFixed(2)}%</text>
                <rect x={W - R + 2} y={y(maxFloor[n - 1]) - 9} width="56" height="18" rx="3" fill={LOSS} />
                <text x={W - R + 30} y={y(maxFloor[n - 1]) + 4} textAnchor="middle" fill="#fff">{maxFloor[n - 1].toFixed(2)}%</text>
                <text x={W - 4} y={y(100) + 4} textAnchor="end" fill="var(--text)">Start 100%</text>
              </g>
            </svg>
          </div>

          <aside className="border-t lg:border-t-0 lg:border-l border-line bg-card2/60 p-6 grid content-start gap-6">
            <div>
              <div className="text-xs font-bold text-muted">Daily loss</div>
              <div className="text-4xl font-extrabold tracking-tight mt-1 flex items-baseline gap-1">{prod.daily}<span className="text-xl">%</span></div>
              <div className="text-xs text-muted mt-1">Equity-based, measured from the start of each day</div>
            </div>
            <div>
              <div className="text-xs font-bold text-muted">Max loss</div>
              <div className="text-4xl font-extrabold tracking-tight mt-1 flex items-baseline gap-1">{prod.max}<span className="text-xl">%</span></div>
              <div className="text-xs text-muted mt-1">{prod.trailing ? 'Trailing: the level moves up with each new equity high, never down' : 'Equity-based: fixed from the initial account size'}</div>
            </div>
            <ul className="grid gap-2.5 text-xs font-semibold pt-5 border-t border-line">
              <li className="flex items-center gap-3"><i className="w-6 h-[2px]" style={{ background: AMBER }} />Daily loss level</li>
              <li className="flex items-center gap-3"><i className="w-6 h-[2px]" style={{ background: LOSS }} />Max loss level</li>
              <li className="flex items-center gap-3"><i className="w-6 h-3 rounded-sm" style={{ background: 'rgba(220,38,38,.12)' }} />Breach zone</li>
            </ul>
          </aside>
        </div>
      </div>
      <p className="text-xs text-muted mt-4">Illustration only, not market data. Percentages are from the rules table.</p>
    </div>
  );
}
