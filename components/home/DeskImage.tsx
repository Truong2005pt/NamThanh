"use client";

import { useT } from "./i18n";

/**
 * Laptop photo (body, keyboard, bezel) with the app drawn on its screen as real HTML/SVG, warped with a CSS
 * perspective matrix onto the screen's four corners. The labels are vector text, so they stay sharp at any size and
 * follow the language and the light/dark theme. The matrices map a 1000x760 screen onto each photo's screen quad
 * (light photo 690x490, dark photo 1024x765).
 */
const SCREENS = [
  { cls: "lt", src: "/home/laptop-light.webp", w: 690, h: 490, m: "matrix3d(0.4207048,-0.05742455,0,0.00013242,0.00634045,0.40742121,0,0.00001216,0,0,1,0,30,88,0,1)" },
  { cls: "dk", src: "/home/laptop-dark.webp", w: 1024, h: 765, m: "matrix3d(0.64152562,-0.08890245,0,0.0001416,0.0070664,0.6199644,0,0.0000092,0,0,1,0,48,130,0,1)" },
] as const;

const SIDE = ["Tài khoản", "Đánh giá", "Phần thưởng", "Xem quy tắc", "Liên hệ hỗ trợ"];
const ROWS: [string, string, string, boolean][] = [
  ["XAUUSD", "4045.16", "−0.23%", false],
  ["EURUSD", "1.11420", "−0.12%", false],
  ["BTCUSD", "80458.65", "−1.08%", false],
  ["GBPUSD", "1.33189", "+0.06%", true],
  ["XRPUSD", "1.3013", "−1.74%", false],
];
const LINE = "M0,92 L9,80 L17,84 L26,66 L35,72 L44,56 L53,60 L62,44 L71,50 L80,34 L89,40 L100,18";

function Screen() {
  const t = useT();
  return (
    <>
      <aside className="lp-side">
        <b className="lp-logo"><i />ERACEX</b>
        {SIDE.map((s, i) => <span key={s} className={i === 0 ? "on" : ""}>{t(s)}</span>)}
      </aside>
      <div className="lp-main">
        <div className="lp-head">
          <div><small>{t("TÀI KHOẢN FUNDED")}</small><h4>One-Step · $100,000</h4></div>
          <div className="lp-kpi"><small>{t("Lợi nhuận đủ điều kiện")}</small><strong>531.62 USD</strong></div>
        </div>
        <div className="lp-grid">
          <div className="lp-card lp-chart">
            <div className="lp-row"><small>{t("Mục tiêu lợi nhuận")}</small><strong>$99,840.50</strong></div>
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="lpg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2e9e5b" stopOpacity=".34" /><stop offset="1" stopColor="#2e9e5b" stopOpacity="0" /></linearGradient>
              </defs>
              <path d={`${LINE} L100,100 L0,100 Z`} fill="url(#lpg)" />
              <path d={LINE} fill="none" stroke="#2e9e5b" strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinejoin="round" />
              <line x1="0" x2="100" y1="72" y2="72" stroke="#e5484d" strokeWidth="2" strokeDasharray="8 8" vectorEffect="non-scaling-stroke" />
              <line x1="0" x2="100" y1="90" y2="90" stroke="#e5484d" strokeWidth="2" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <div className="lp-side2">
            <div className="lp-card"><small>{t("Mức lỗ tối đa hàng ngày")}</small><strong>$0.00 / $5K</strong><u><s style={{ width: "6%" }} /></u></div>
            <div className="lp-card"><small>{t("Mức lỗ tối đa")}</small><strong>$0.00 / $10K</strong><u><s style={{ width: "4%" }} /></u></div>
          </div>
        </div>
        <div className="lp-card lp-tbl">
          {ROWS.map(([sym, px, ch, up]) => (
            <div key={sym}><b>{sym}</b><span>{px}</span><em className={up ? "up" : "dn"}>{ch}</em></div>
          ))}
        </div>
      </div>
      <i className="lp-notch" />
    </>
  );
}

export function DeskImage() {
  return (
    <div className="sk-desk" role="img" aria-label="ERACEX">
      {SCREENS.map((s) => (
        <div key={s.cls} className={`lap ${s.cls}`} style={{ aspectRatio: `${s.w} / ${s.h}`, ["--iw" as string]: s.w, ["--ih" as string]: s.h }} aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={s.src} alt="" loading="lazy" draggable={false} />
          <div className="lp-scr" style={{ transform: `scale(calc(var(--H) / var(--ih))) ${s.m}` }}><Screen /></div>
        </div>
      ))}
    </div>
  );
}
