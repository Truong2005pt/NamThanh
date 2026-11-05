"use client";

import { useEffect, useRef, useState } from "react";
import { Award, ArrowUpRight, CalendarCheck, CalendarClock, CalendarMinus, Check, Info, ListChecks, Receipt, Scale, ShieldAlert, Timer, TrendingUp } from "lucide-react";
import { PROGRAMS, usd } from "./data";
import { useSelection } from "./SelectionContext";
import { money } from "./utils";
import { T, useT, widenRate } from "./i18n";

type Row = { icon: typeof Award; label: string; tip: string; v: string; n?: string; pct?: boolean };

export function Plans() {
  const t = useT();
  const { program: p, sizeIdx, size, fee, setProgram, setSizeIdx } = useSelection();
  const [showAmt, setShowAmt] = useState(false);
  const [addons, setAddons] = useState([false, false]);
  const [tip, setTip] = useState<number | null>(null);
  const total = fee * (1 + 0.2 * addons.filter(Boolean).length);
  const fmt = (n: number) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));

  const rows: Row[] = [
    { icon: TrendingUp, label: T("Mục tiêu lợi nhuận"), tip: T("Mức lợi nhuận cần đạt trong mỗi vòng đánh giá, tính theo quy mô tài khoản."), v: p.target, pct: true },
    { icon: CalendarMinus, label: T("Mức lỗ tối đa hàng ngày"), tip: T("Mức lỗ tối đa cho phép trong một ngày giao dịch, tính theo số dư lúc 00:00 UTC."), v: p.daily, pct: true },
    { icon: ShieldAlert, label: T("Mức lỗ tối đa"), tip: T("Tổng mức lỗ tối đa cho phép. Chạm ngưỡng này, tài khoản sẽ bị đóng."), v: p.max, n: p.maxNote, pct: true },
    { icon: CalendarCheck, label: T("Số ngày giao dịch tối thiểu"), tip: T("Số ngày có hoạt động giao dịch tối thiểu cần đáp ứng."), v: p.minDays, n: p.minNote },
    { icon: Timer, label: T("Thời gian giao dịch"), tip: T("Không giới hạn thời gian hoàn thành, nhưng cần duy trì hoạt động theo quy tắc."), v: T(T("Không giới hạn")), n: T(T("Duy trì hoạt động")) },
    { icon: Receipt, label: T("Hoàn phí"), tip: T("Áp dụng theo điều khoản chương trình; không hoàn phí tự động."), v: T("Theo điều khoản"), n: T("Không hoàn tự động") },
    { icon: Award, label: T("Phần thưởng"), tip: T("Tỷ lệ thưởng cơ bản trên kết quả đủ điều kiện."), v: "80%" },
    { icon: CalendarClock, label: T("Chu kỳ yêu cầu thưởng"), tip: T("Chu kỳ gửi yêu cầu thưởng; không phải cam kết thời gian tiền về."), v: p.cycle, n: p.cycleNote },
    { icon: Scale, label: T("Đòn bẩy tối đa"), tip: T("Đòn bẩy tối đa áp dụng cho tài khoản, kèm mức khi đã Funded."), v: p.leverage, n: p.leverageNote },
  ];
  if (p.extra) rows.push({ icon: ListChecks, label: p.extra[0], tip: t("Quy tắc áp dụng cho {name}, ở mức {v}.", { name: p.name, v: p.extra[1] }), v: p.extra[1] });

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
        <span className="sk-cur">USD <small>{t("Đô la Mỹ")}</small></span>
        <label className="sk-check">
          <input type="checkbox" checked={showAmt} onChange={(e) => setShowAmt(e.target.checked)} />
          <i aria-hidden><Check size={12} strokeWidth={3.5} /></i> {t("Hiển thị số tiền")}
        </label>
        <span className="sk-hint">{t("Rê chuột hoặc chạm vào tiêu chí để xem giải thích")}</span>
      </div>

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
                    <span className="rl" tabIndex={0}>
                      <Icon size={16} strokeWidth={1.6} /><u>{t(r.label)}</u><Info size={13} className="info" />
                      <span className="tip" role="tooltip">{t(r.tip)}</span>
                    </span>
                  </th>
                  {p.sizes.map((s, i) => <td key={s} className={i === sizeIdx ? "sel" : ""}>{cell(r, s)}</td>)}
                </tr>
              );
            })}
            <tr className="fee">
              <th>{t("Phí tham gia một lần")} <small>USD</small></th>
              {p.fees.map((f, i) => (
                <td key={i} className={i === sizeIdx ? "sel" : ""}>
                  <b>{usd(f)}</b>
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
                  {tip === k && <p className="tipm">{t(r.tip)}</p>}
                </li>
              );
            })}
          </ul>
          <div className="fee"><div><small>{t("Phí tham gia một lần")} · USD</small><b>{usd(fee)}</b></div><button type="button" className="sk-btn sk-btn-gold" onClick={() => document.querySelector(".sk-sum")?.scrollIntoView({ behavior: "smooth", block: "center" })}>{t("Chọn gói")} <ArrowUpRight size={15} /></button></div>
        </div>
      </div>

      <p className="sk-foot sk-center">{t("Số tiền lỗ ngày giả định số dư lúc 00:00 UTC bằng quy mô ban đầu. Lỗ tổng Instant/Light là khoảng lỗ theo quy mô ban đầu; ngưỡng bám đỉnh vốn thực có.")}</p>

      <div className="sk-sumwrap">
        <div className="sk-card sk-sum">
          <div><small>{t("LỰA CHỌN CỦA BẠN")}</small><b>{p.name}</b><span>{usd(size)}</span></div>
          <div className="price"><small>{t("Phí tham gia một lần")}</small><strong>{fmt(total)} <em>USD</em></strong>{total !== fee && <s>{fmt(fee)}</s>}</div>
          <a className="sk-btn sk-btn-gold" href="/pricing">{t("Xem gói đã chọn")} <ArrowUpRight size={15} /></a>
        </div>
        <div className="sk-card sk-addons" role="group" aria-label={t("Tiện ích bổ sung tùy chọn")}>
          <p>{t("Tiện ích bổ sung tùy chọn")}</p>
          <div>
            {([[T("Tăng tỷ lệ chia lợi nhuận"), "10%"], [T("Tăng giới hạn drawdown"), "1%"]] as const).map(([tt, v], i) => (
              <button type="button" key={tt} className={addons[i] ? "on" : ""} aria-pressed={addons[i]} onClick={() => setAddons((a) => a.map((x, k) => (k === i ? !x : x)))}>
                <span className="tx"><b>{t(tt)} <i>{v}</i></b><small>{t("+20% phí bổ sung")} <em>(+{fmt(fee * 0.2)})</em></small></span>
                <span className="sw" aria-hidden />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
