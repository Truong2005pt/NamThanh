"use client";

import { useEffect, useRef, useState } from "react";
import { Award, ArrowUpRight, CalendarCheck, CalendarClock, CalendarMinus, Check, Info, ListChecks, Receipt, Scale, ShieldAlert, Timer, TrendingUp } from "lucide-react";
import { PROGRAMS, usd } from "./data";
import { useSelection } from "./SelectionContext";
import { money } from "./utils";

type Row = { icon: typeof Award; label: string; tip: string; v: string; n?: string; pct?: boolean };

export function Plans() {
  const { program: p, sizeIdx, size, fee, setProgram, setSizeIdx } = useSelection();
  const [showAmt, setShowAmt] = useState(false);
  const [addons, setAddons] = useState([false, false]);
  const [tip, setTip] = useState<number | null>(null);
  const total = fee * (1 + 0.2 * addons.filter(Boolean).length);
  const fmt = (n: number) => "$" + (Number.isInteger(n) ? n : n.toFixed(2));

  const rows: Row[] = [
    { icon: TrendingUp, label: "Mục tiêu lợi nhuận", tip: "Mức lợi nhuận cần đạt trong mỗi vòng đánh giá, tính theo quy mô tài khoản.", v: p.target, pct: true },
    { icon: CalendarMinus, label: "Mức lỗ tối đa hàng ngày", tip: "Mức lỗ tối đa cho phép trong một ngày giao dịch, tính theo số dư lúc 00:00 UTC.", v: p.daily, pct: true },
    { icon: ShieldAlert, label: "Mức lỗ tối đa", tip: "Tổng mức lỗ tối đa cho phép. Chạm ngưỡng này, tài khoản sẽ bị đóng.", v: p.max, n: p.maxNote, pct: true },
    { icon: CalendarCheck, label: "Số ngày giao dịch tối thiểu", tip: "Số ngày có hoạt động giao dịch tối thiểu cần đáp ứng.", v: p.minDays, n: p.minNote },
    { icon: Timer, label: "Thời gian giao dịch", tip: "Không giới hạn thời gian hoàn thành, nhưng cần duy trì hoạt động theo quy tắc.", v: "Không giới hạn", n: "Duy trì hoạt động" },
    { icon: Receipt, label: "Hoàn phí", tip: "Áp dụng theo điều khoản chương trình; không hoàn phí tự động.", v: "Theo điều khoản", n: "Không hoàn tự động" },
    { icon: Award, label: "Phần thưởng", tip: "Tỷ lệ thưởng cơ bản trên kết quả đủ điều kiện.", v: "80%" },
    { icon: CalendarClock, label: "Chu kỳ yêu cầu thưởng", tip: "Chu kỳ gửi yêu cầu thưởng; không phải cam kết thời gian tiền về.", v: p.cycle, n: p.cycleNote },
    { icon: Scale, label: "Đòn bẩy tối đa", tip: "Đòn bẩy tối đa áp dụng cho tài khoản, kèm mức khi đã Funded.", v: p.leverage, n: p.leverageNote },
  ];
  if (p.extra) rows.push({ icon: ListChecks, label: p.extra[0], tip: `Quy tắc áp dụng cho ${p.name}, ở mức ${p.extra[1]}.`, v: p.extra[1] });

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
          return (
            <span key={k} className="ln">
              {m && <em>{m[1]}</em>}
              {val === "80%" ? <i className="chip">{val}</i> : <b>{showAmt && r.pct ? amount(val, s) : val}</b>}
            </span>
          );
        })}
        {(r.n || (showAmt && single)) && <small>{showAmt && single ? [r.v, r.n].filter(Boolean).join(" · ") : r.n}</small>}
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
      <h2 className="sk-center">Một lựa chọn phù hợp</h2>
      <p className="sk-sub sk-center">Một hành trình rõ ràng.</p>
      <p className="sk-intro sk-center">So sánh bốn chương trình. Chọn quy mô và xem phí tham gia.</p>

      <div className="sk-tabs" role="tablist">
        {PROGRAMS.map((x) => <button key={x.id} role="tab" aria-selected={x.id === p.id} className={x.id === p.id ? "on" : ""} onClick={() => setProgram(x.id)}>{x.name}</button>)}
      </div>
      <p className="sk-pintro sk-center">{p.intro}</p>

      <div className="sk-ctrl">
        <span className="sk-cur">USD <small>Đô la Mỹ</small></span>
        <label className="sk-check">
          <input type="checkbox" checked={showAmt} onChange={(e) => setShowAmt(e.target.checked)} />
          <i aria-hidden><Check size={12} strokeWidth={3.5} /></i> Hiển thị số tiền
        </label>
        <span className="sk-hint">Rê chuột hoặc chạm vào tiêu chí để xem giải thích</span>
      </div>

      <div className="sk-card sk-table-wrap" ref={scroller}>
        <table className="sk-cmp">
          <thead>
            <tr>
              <th><span>Thông số chương trình</span></th>
              {p.sizes.map((s, i) => (
                <th key={s} className={i === sizeIdx ? "sel" : ""}>
                  <button onClick={() => setSizeIdx(i)}><small>Tài khoản</small><b>{usd(s)}</b><em>{i === sizeIdx ? "Đang chọn" : "ERACEX"}</em></button>
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
                      <Icon size={16} strokeWidth={1.6} /><u>{r.label}</u><Info size={13} className="info" />
                      <span className="tip" role="tooltip">{r.tip}</span>
                    </span>
                  </th>
                  {p.sizes.map((s, i) => <td key={s} className={i === sizeIdx ? "sel" : ""}>{cell(r, s)}</td>)}
                </tr>
              );
            })}
            <tr className="fee">
              <th>Phí tham gia một lần <small>USD</small></th>
              {p.fees.map((f, i) => (
                <td key={i} className={i === sizeIdx ? "sel" : ""}>
                  <b>{usd(f)}</b>
                  <button onClick={() => setSizeIdx(i)}>Chọn gói <ArrowUpRight size={14} /></button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* phones + tablets: one plan at a time */}
      <div className="sk-cmp-m">
        <div className="sizes" role="tablist">
          {p.sizes.map((x, i) => <button key={x} type="button" role="tab" aria-selected={i === sizeIdx} className={i === sizeIdx ? "on" : ""} onClick={() => setSizeIdx(i)}>{usd(x)}</button>)}
        </div>
        <div className="sk-card card">
          <div className="head"><small>Tài khoản</small><b>{usd(size)}</b><em>{p.name}</em></div>
          <ul>
            {rows.map((r, k) => {
              const Icon = r.icon;
              return (
                <li key={r.label}>
                  <button type="button" className="lbl" aria-expanded={tip === k} onClick={() => setTip(tip === k ? null : k)}><Icon size={16} strokeWidth={1.6} /><span>{r.label}</span><Info size={13} /></button>
                  <div className="val">{cell(r, size)}</div>
                  {tip === k && <p className="tipm">{r.tip}</p>}
                </li>
              );
            })}
          </ul>
          <div className="fee"><div><small>Phí tham gia một lần · USD</small><b>{usd(fee)}</b></div><button type="button" className="sk-btn sk-btn-gold" onClick={() => document.querySelector(".sk-sum")?.scrollIntoView({ behavior: "smooth", block: "center" })}>Chọn gói <ArrowUpRight size={15} /></button></div>
        </div>
      </div>

      <p className="sk-foot sk-center">Số tiền lỗ ngày giả định số dư lúc 00:00 UTC bằng quy mô ban đầu. Lỗ tổng Instant/Light là khoảng lỗ theo quy mô ban đầu; ngưỡng bám đỉnh vốn thực có.</p>

      <div className="sk-sumwrap">
        <div className="sk-card sk-sum">
          <div><small>LỰA CHỌN CỦA BẠN</small><b>{p.name}</b><span>{usd(size)}</span></div>
          <div className="price"><small>Phí tham gia một lần</small><strong>{fmt(total)} <em>USD</em></strong>{total !== fee && <s>{fmt(fee)}</s>}</div>
          <a className="sk-btn sk-btn-gold" href="/pricing">Xem gói đã chọn <ArrowUpRight size={15} /></a>
        </div>
        <div className="sk-card sk-addons" role="group" aria-label="Tiện ích bổ sung tùy chọn">
          <p>Tiện ích bổ sung tùy chọn</p>
          <div>
            {([["Tăng tỷ lệ chia lợi nhuận", "10%"], ["Tăng giới hạn drawdown", "1%"]] as const).map(([t, v], i) => (
              <button type="button" key={t} className={addons[i] ? "on" : ""} aria-pressed={addons[i]} onClick={() => setAddons((a) => a.map((x, k) => (k === i ? !x : x)))}>
                <span className="tx"><b>{t} <i>{v}</i></b><small>+20% phí bổ sung <em>(+{fmt(fee * 0.2)})</em></small></span>
                <span className="sw" aria-hidden />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
