"use client";

import { useEffect, type ReactNode } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/components/eracex/LanguageContext";
import { useT } from "./i18n";

export function useL() {
  const { currentLang } = useLanguage();
  return { lang: currentLang, L: (vi: string, en: string) => (currentLang === "vi" ? vi : en) };
}

export function Modal({ eyebrow, title, onClose, children, closeLabel }: { eyebrow: string; title: string; onClose: () => void; children: ReactNode; closeLabel: string }) {
  useEffect(() => {
    const k = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", k); document.body.style.overflow = prev; };
  }, [onClose]);
  return (
    <div className="sk-mdlg" role="presentation" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="box" role="dialog" aria-modal="true" aria-label={title}>
        <div className="top"><span>{eyebrow}</span><button type="button" aria-label={closeLabel} onClick={onClose}><X size={16} /></button></div>
        <h3>{title}</h3>
        {children}
        <button type="button" className="sk-mclose" onClick={onClose}>{closeLabel}</button>
      </div>
    </div>
  );
}

const REGIONS = ["AF", "BY", "CU", "KP", "IR", "LY", "MM", "RU", "SS", "SY", "VE"];

export function TerritoryDialog({ onClose }: { onClose: () => void }) {
  const { lang, L } = useL();
  const t = useT();
  let names: Intl.DisplayNames | null = null;
  try { names = new Intl.DisplayNames([lang === "fil" ? "tl" : lang], { type: "region" }); } catch { names = null; }
  const nm = (c: string) => { try { return names?.of(c) || c; } catch { return c; } };
  const list = [
    nm("AF"), nm("BY"),
    L("Crimea / Donetsk / Luhansk / Kherson / Zaporizhzhia / Sevastopol", "Crimea / Donetsk / Luhansk / Kherson / Zaporizhzhia / Sevastopol"),
    nm("CU"), nm("KP"), L("Gaza", "Gaza"), nm("IR"), nm("LY"), nm("MM"), nm("RU"), nm("SS"), nm("SY"), nm("VE"),
  ];
  void REGIONS; void t;
  return (
    <Modal eyebrow={L("PHẠM VI PHỤC VỤ", "SERVICE COVERAGE")} title={L("Quốc gia và vùng lãnh thổ bị hạn chế", "Restricted countries and territories")} onClose={onClose} closeLabel={L("Đóng danh sách", "Close list")}>
      <small className="prog">{L("Theo tài liệu Restricted jurisdictions (các khu vực bị hạn chế) của đối tác công nghệ.", "Per the technology partner restricted jurisdictions document.")}</small>
      <p className="lead">{L("Các hạn chế áp dụng với công dân và/hoặc người cư trú tại các khu vực sau:", "Restrictions apply to citizens and/or residents of the following regions:")}</p>
      <ul className="terr">{list.map((x) => <li key={x}>{x}</li>)}</ul>
      <p className="src">{L("Danh sách được đối chiếu tài liệu do đối tác công nghệ cung cấp. Đây là danh sách hạn chế, không phải số liệu tổng quốc gia được phục vụ.", "The list is reconciled with the document provided by the technology partner. It is a list of restrictions, not a total count of countries served.")}</p>
    </Modal>
  );
}

export type ProofItem = { id: string; when: string; name: string; amount: string; country: string; program: string; size: string };

export function ProofDialog({ item, onClose }: { item: ProofItem; onClose: () => void }) {
  const { L } = useL();
  const t = useT();
  const paid = parseFloat(item.amount.replace(/[$,]/g, "")) || 0;
  const gross = paid / 0.8;
  const fmt = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const rows: [string, string][] = [
    [L("Người nhận (mẫu)", "Recipient (sample)"), item.name],
    [L("Quốc gia (mẫu)", "Country (sample)"), t(item.country)],
    [L("Thời điểm mẫu (UTC+7)", "Sample time (UTC+7)"), item.when],
    [L("Chương trình", "Program"), item.program],
    [L("Quy mô mô phỏng", "Simulated size"), item.size],
    [L("Lợi nhuận đủ điều kiện (minh họa)", "Eligible profit (illustrative)"), fmt(gross)],
    [L("Tỷ lệ thưởng cơ bản", "Base reward rate"), "80%"],
    [L("Khoản thưởng minh họa", "Illustrative reward"), item.amount],
  ];
  return (
    <Modal eyebrow={L("VÍ DỤ TÍNH THƯỞNG", "REWARD CALCULATION EXAMPLE")} title={`${L("Hồ sơ mẫu", "Sample record")} ${item.id}`} onClose={onClose} closeLabel={L("Đóng ví dụ", "Close example")}>
      <div className="rows">{rows.map(([a, b]) => <div key={a}><span>{a}</span><b>{b}</b></div>)}</div>
      <p className="src">{L("Hồ sơ mẫu để duyệt giao diện. Số tiền minh họa không phải khoản chi trả thật hoặc cam kết thu nhập. Yêu cầu thưởng phụ thuộc việc đáp ứng đầy đủ điều kiện chương trình.", "Sample record for design review. Illustrative amounts are not real payouts or income promises. Reward requests depend on meeting all program conditions.")}</p>
    </Modal>
  );
}
