"use client";

import { useEffect, useRef, useState } from "react";
import { Award, ArrowUpRight, Plus, X, CalendarCheck, CalendarClock, CalendarMinus, Check, Info, ListChecks, Receipt, Scale, ShieldAlert, Timer, TrendingUp } from "lucide-react";
import { PROGRAMS, usd } from "./data";
import { useSelection } from "./SelectionContext";
import { money } from "./utils";
import { T, useT, widenRate } from "./i18n";
import { useLanguage } from "@/components/eracex/LanguageContext";
import { metricView, type MetricKey } from "./metrics";

type Row = { icon: typeof Award; label: string; tip: string; v: string; n?: string; pct?: boolean; mk: MetricKey };

const CURRENCIES = [
  { code: "USD", flag: "us", sym: "$", rate: 1 },
  { code: "EUR", flag: "eu", sym: "€", rate: 0.92 },
  { code: "GBP", flag: "gb", sym: "£", rate: 0.79 },
  { code: "AUD", flag: "au", sym: "A$", rate: 1.52 },
  { code: "SGD", flag: "sg", sym: "S$", rate: 1.34 },
  { code: "JPY", flag: "jp", sym: "¥", rate: 150 },
  { code: "AED", flag: "ae", sym: "AED ", rate: 3.67 },
  { code: "VND", flag: "vn", sym: "₫", rate: 25000 },
] as const;

export function Plans() {
  const t = useT();
  const { program: p, sizeIdx, size, fee, setProgram, setSizeIdx } = useSelection();
  const [showAmt, setShowAmt] = useState(false);
  const [curCode, setCurCode] = useState<(typeof CURRENCIES)[number]["code"]>("USD");
  const [moreCur, setMoreCur] = useState(false);
  const cur = CURRENCIES.find((c) => c.code === curCode) || CURRENCIES[0];
  const cv = (n: number) => {
    if (cur.code === "USD") return "$" + (Number.isInteger(n) ? n.toLocaleString("en-US") : n.toFixed(2));
    const v = n * cur.rate;
    const r = cur.code === "JPY" || cur.code === "VND" ? Math.round(v / (cur.code === "VND" ? 1000 : 10)) * (cur.code === "VND" ? 1000 : 10) : Math.round(v);
    return cur.sym + r.toLocaleString("en-US");
  };
  const [addons, setAddons] = useState([false, false]);
  const [tip, setTip] = useState<number | null>(null);
  const { currentLang } = useLanguage();
  const L = (vi: string, en: string) => (currentLang === "vi" ? vi : en);
  const [pop, setPop] = useState<{ k: MetricKey; left: number; top: number; w: number } | null>(null);
  const [dlg, setDlg] = useState<MetricKey | null>(null);
  const popTimer = useRef<number | null>(null);
  const showPop = (k: MetricKey, el: HTMLElement) => {
    if (popTimer.current) window.clearTimeout(popTimer.current);
    const r = el.getBoundingClientRect();
    const w = Math.min(320, window.innerWidth - 24);
    const left = Math.max(12, Math.min(r.left, window.innerWidth - w - 12));
    const above = r.top > 190;
    setPop({ k, left, top: above ? r.top - 10 : r.bottom + 10, w });
    setPopAbove(above);
  };
  const hidePop = () => {
    if (popTimer.current) window.clearTimeout(popTimer.current);
    popTimer.current = window.setTimeout(() => setPop(null), 180);
  };
  const keepPop = () => { if (popTimer.current) window.clearTimeout(popTimer.current); };
  const [popAbove, setPopAbove] = useState(true);
  useEffect(() => {
    const off = () => setPop(null);
    window.addEventListener("scroll", off, true);
    window.addEventListener("resize", off);
    return () => { window.removeEventListener("scroll", off, true); window.removeEventListener("resize", off); };
  }, []);
  useEffect(() => {
    if (!dlg) return;
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") setDlg(null); };
    document.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [dlg]);
  const view = (k: MetricKey) => metricView(k, p, size, currentLang);
  const total = fee * (1 + 0.2 * addons.filter(Boolean).length);
  const fmt = (n: number) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));

  const rows: Row[] = [
    { mk: "target", icon: TrendingUp, label: T("Mục tiêu lợi nhuận"), tip: T("Mức lợi nhuận cần đạt trong mỗi vòng đánh giá, tính theo quy mô tài khoản."), v: p.target, pct: true },
    { mk: "daily", icon: CalendarMinus, label: T("Mức lỗ tối đa hàng ngày"), tip: T("Mức lỗ tối đa cho phép trong một ngày giao dịch, tính theo số dư lúc 00:00 UTC."), v: p.daily, pct: true },
    { mk: "loss", icon: ShieldAlert, label: T("Mức lỗ tối đa"), tip: T("Tổng mức lỗ tối đa cho phép. Chạm ngưỡng này, tài khoản sẽ bị đóng."), v: p.max, pct: true },
    { mk: "days", icon: CalendarCheck, label: T("Số ngày giao dịch tối thiểu"), tip: T("Số ngày có hoạt động giao dịch tối thiểu cần đáp ứng."), v: p.minDays },
    { mk: "period", icon: Timer, label: T("Thời gian giao dịch"), tip: T("Không giới hạn thời gian hoàn thành, nhưng cần duy trì hoạt động theo quy tắc."), v: T(T("Không giới hạn")) },
    { mk: "refund", icon: Receipt, label: T("Hoàn phí"), tip: T("Áp dụng theo điều khoản chương trình; không hoàn phí tự động."), v: T("Theo điều khoản") },
    { mk: "reward", icon: Award, label: T("Phần thưởng"), tip: T("Tỷ lệ thưởng cơ bản trên kết quả đủ điều kiện."), v: "80%" },
    { mk: "cycle", icon: CalendarClock, label: T("Chu kỳ yêu cầu thưởng"), tip: T("Chu kỳ gửi yêu cầu thưởng; không phải cam kết thời gian tiền về."), v: p.cycle },
    { mk: "leverage", icon: Scale, label: T("Đòn bẩy tối đa"), tip: T("Đòn bẩy tối đa áp dụng cho tài khoản, kèm mức khi đã Funded."), v: p.leverage, n: p.leverageNote },
  ];
  if (p.extra) rows.push({ mk: "consistency", icon: ListChecks, label: p.extra[0], tip: t("Quy tắc áp dụng cho {name}, ở mức {v}.", { name: p.name, v: p.extra[1] }), v: p.extra[1] });

  const amount = (v: string, s: number) => {
    const m = v.match(/^(\d+(?:[.,]\d+)?)%$/);
    return m ? money((s * parseFloat(m[1].replace(",", "."))) / 100) : v;
  };
  const cell = (r: Row, s: number) => {
    const parts = r.v.split(" · ");
    const single = parts.length === 1 && /^\d/.test(r.v) && r.pct;
    return (
      <>
        {parts.map((x, k) => {
          const m = x.match(/^(Vòng \d):\s*(.+)$/);
          const val = m ? m[2] : x;
          const shown = t(val);
          return (
            <span key={k} className="ln">
              {m && <em>{t("Vòng {n}", { n: m[1].replace(/\D/g, "") })}</em>}
              {val === "80%" ? <i className="chip">{widenRate(val)}</i> : <b>{showAmt && r.pct ? amount(val, s) : shown}</b>}
            </span>
          );
        })}
        {(r.n || (showAmt && single)) && <small>{showAmt && single ? [r.v, r.n && t(r.n)].filter(Boolean).join(" · ") : r.n && t(r.n)}</small>}
      </>
    );
  };

  const scroller = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const box = scroller.current;
    if (!box || window.innerWidth > 900) return;
    const th = box.querySelector<HTMLElement>("thead th.sel");
    if (th) box.scrollTo({ left: Math.max(0, th.offsetLeft - 150), behavior: "smooth" });
  }, [sizeIdx, p.id]);

  return (
    <section className="sk-wrap sk-section" id="configure">
      <h2 className="sk-center">{t("Một lựa chọn phù hợp")}</h2>
      <p className="sk-sub sk-center">{t("Một hành trình rõ ràng.")}</p>
      <p className="sk-intro sk-center">{t("So sánh bốn chương trình. Chọn quy mô và xem phí tham gia.")}</p>

      <div className="sk-tabs" role="tablist">
        {PROGRAMS.map((x) => <button key={x.id} role="tab" aria-selected={x.id === p.id} className={x.id === p.id ? "on" : ""} onClick={() => setProgram(x.id)}>{x.name}</button>)}
      </div>
      <p className="sk-pintro sk-center">{t(p.intro)}</p>

      <div className="sk-ctrl">
        <div className="sk-curs" role="group" aria-label={L("Tiền tệ hiển thị", "Display currency")}>
          {CURRENCIES.slice(0, 3).map((c) => (
            <button key={c.code} type="button" className={c.code === curCode ? "on" : ""} aria-pressed={c.code === curCode} onClick={() => setCurCode(c.code)}>
              <span className={`fi fis fi-${c.flag} sk-flag`} aria-hidden />{c.code}
            </button>
          ))}
          {(moreCur ? CURRENCIES.slice(3) : []).map((c) => (
            <button key={c.code} type="button" className={c.code === curCode ? "on" : ""} aria-pressed={c.code === curCode} onClick={() => setCurCode(c.code)}>
              <span className={`fi fis fi-${c.flag} sk-flag`} aria-hidden />{c.code}
            </button>
          ))}
          <button type="button" className="more" aria-expanded={moreCur} onClick={() => setMoreCur((v) => !v)}>
            <Plus size={15} />{moreCur ? L("Thu gọn", "Show less") : L("Hiển thị thêm", "Show more")}
          </button>
        </div>
        <label className="sk-switch">
          <input type="checkbox" checked={showAmt} onChange={(e) => setShowAmt(e.target.checked)} />
          <i aria-hidden /> {t("Hiển thị số tiền")}
        </label>
      </div>
      {cur.code !== "USD" && <p className="sk-curnote">{L("Quy đổi tham khảo theo tỷ giá gần đúng. Phí tham gia chính thức tính bằng USD.", "Indicative conversion at approximate rates. The official participation fee is charged in USD.")}</p>}

      <div className="sk-card sk-table-wrap" ref={scroller}>
        <table className="sk-cmp">
          <thead>
            <tr>
              <th><span>{t("Thông số chương trình")}</span></th>
              {p.sizes.map((s, i) => (
                <th key={s} className={i === sizeIdx ? "sel" : ""}>
                  <button onClick={() => setSizeIdx(i)}><small>{t("Tài khoản")}</small><b>{usd(s)}</b><em>{i === sizeIdx ? t("Đang chọn") : "ERACEX"}</em></button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const Icon = r.icon;
              return (
                <tr key={r.label}>
                  <th>
                    <span className="rl" tabIndex={0} onMouseEnter={(e) => showPop(r.mk, e.currentTarget)} onMouseLeave={hidePop} onFocus={(e) => showPop(r.mk, e.currentTarget)} onBlur={hidePop} onClick={(e) => showPop(r.mk, e.currentTarget)}>
                      <Icon size={16} strokeWidth={1.6} /><u>{t(r.label)}</u><Info size={13} className="info" />
                    </span>
                  </th>
                  {p.sizes.map((s, i) => <td key={s} className={i === sizeIdx ? "sel" : ""}>{cell(r, s)}</td>)}
                </tr>
              );
            })}
            <tr className="fee">
              <th>{t("Phí tham gia một lần")} <small>{cur.code}</small></th>
              {p.fees.map((f, i) => (
                <td key={i} className={i === sizeIdx ? "sel" : ""}>
                  <b>{cv(f)}</b>
                  <button onClick={() => setSizeIdx(i)}>{t("Chọn gói")} <ArrowUpRight size={14} /></button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {}
      <div className="sk-cmp-m">
        <div className="sizes" role="tablist">
          {p.sizes.map((x, i) => <button key={x} type="button" role="tab" aria-selected={i === sizeIdx} className={i === sizeIdx ? "on" : ""} onClick={() => setSizeIdx(i)}>{usd(x)}</button>)}
        </div>
        <div className="sk-card card">
          <div className="head"><small>{t("Tài khoản")}</small><b>{usd(size)}</b><em>{p.name}</em></div>
          <ul>
            {rows.map((r, k) => {
              const Icon = r.icon;
              return (
                <li key={r.label}>
                  <button type="button" className="lbl" aria-expanded={tip === k} onClick={() => setTip(tip === k ? null : k)}><Icon size={16} strokeWidth={1.6} /><span>{t(r.label)}</span><Info size={13} /></button>
                  <div className="val">{cell(r, size)}</div>
                  {tip === k && <p className="tipm">{view(r.mk).short} <button type="button" className="more" onClick={() => setDlg(r.mk)}>{L("Hiển thị thêm", "Show more")} <ArrowUpRight size={13} /></button></p>}
                </li>
              );
            })}
          </ul>
          <div className="fee"><div><small>{t("Phí tham gia một lần")} · {cur.code}</small><b>{cv(fee)}</b></div><button type="button" className="sk-btn sk-btn-gold" onClick={() => document.querySelector(".sk-sum")?.scrollIntoView({ behavior: "smooth", block: "center" })}>{t("Chọn gói")} <ArrowUpRight size={15} /></button></div>
        </div>
      </div>

      <p className="sk-foot sk-center">{t("Số tiền lỗ ngày giả định số dư lúc 00:00 UTC bằng quy mô ban đầu. Lỗ tổng Instant/Light là khoảng lỗ theo quy mô ban đầu; ngưỡng bám đỉnh vốn thực có.")}</p>

      <div className="sk-sumwrap">
        <div className="sk-card sk-sum">
          <div><small>{t("LỰA CHỌN CỦA BẠN")}</small><b>{p.name}</b><span>{usd(size)}</span></div>
          <div className="price"><small>{t("Phí tham gia một lần")}</small><strong>{cv(total)} <em>{cur.code}</em></strong>{total !== fee && <s>{cv(fee)}</s>}</div>
          <a className="sk-btn sk-btn-gold" href="/sign-up">{t("Nhận Cấp Vốn")} <ArrowUpRight size={15} /></a>
        </div>
        <div className="sk-card sk-addons" role="group" aria-label={t("Tiện ích bổ sung tùy chọn")}>
          <p>{t("Tiện ích bổ sung tùy chọn")}</p>
          <div>
            {([[T("Tăng tỷ lệ chia lợi nhuận"), "10%"], [T("Tăng giới hạn drawdown"), "1%"]] as const).map(([tt, v], i) => (
              <button type="button" key={tt} className={addons[i] ? "on" : ""} aria-pressed={addons[i]} onClick={() => setAddons((a) => a.map((x, k) => (k === i ? !x : x)))}>
                <span className="tx"><b>{t(tt)} <i>{v}</i></b><small>{t("+20% phí bổ sung")} <em>(+{cv(fee * 0.2)})</em></small></span>
                <span className="sw" aria-hidden />
              </button>
            ))}
          </div>
        </div>
      </div>

      {pop && (
        <div className="sk-mpop" role="tooltip" style={{ left: pop.left, top: pop.top, width: pop.w, transform: popAbove ? "translateY(-100%)" : "none" }} onMouseEnter={keepPop} onMouseLeave={hidePop}>
          <p>{view(pop.k).short}</p>
          <button type="button" onClick={() => { setDlg(pop.k); setPop(null); }}>{L("Hiển thị thêm", "Show more")} <ArrowUpRight size={13} /></button>
        </div>
      )}
      {dlg && (() => {
        const v = view(dlg);
        return (
          <div className="sk-mdlg" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) setDlg(null); }}>
            <div className="box" role="dialog" aria-modal="true" aria-label={v.label}>
              <div className="top"><span>{`ERACEX / ${L("Thông số chương trình", "Program parameters")}`}</span><button type="button" aria-label={L("Đóng", "Close")} onClick={() => setDlg(null)}><X size={16} /></button></div>
              <h3>{v.label}</h3>
              <small className="prog">{p.name} · {usd(size)}</small>
              <div className="vis">
                <em>{L("THÔNG SỐ ĐANG XEM", "CURRENT PARAMETER")}</em>
                {v.value.map(([a, b], i) => <div key={i} className="val">{a && <span>{a}</span>}<strong>{b}</strong></div>)}
                <small>{v.note}</small>
                {v.diagram.length > 0 && (
                  <div className="dia">
                    {v.diagram.map(([a, b, w]) => <div key={a}><span>{a}</span><b>{b}</b><i style={{ width: `${w}%` }} /></div>)}
                    <small>{L("Sơ đồ giải thích phép tính, không phải kết quả giao dịch", "Calculation diagram, not a trading result")}</small>
                  </div>
                )}
              </div>
              <div className="txt">{v.body.map((x, i) => <p key={i}>{widenRate(x)}</p>)}</div>
              <p className="src">{L("Tham chiếu tài liệu", "Document reference")}: {v.source}</p>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
