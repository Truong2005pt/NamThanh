"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { WHY } from "./data";
import { useT } from "./i18n";

const SECONDS = 6;

const SLIDES = [
  { img: "/home/stock/s0.jpg", pos: "50% 40%", href: "#configure" },
  { img: "/home/stock/s1.jpg", pos: "50% 22%", href: "#configure" },
  { img: "/home/stock/s2.jpg", pos: "50% 35%", href: "#rewards" },
  { img: "/home/stock/s3.jpg", pos: "50% 40%", href: "#how" },
  { img: "/home/stock/s4.jpg", pos: "50% 58%", href: "#configure" },
  { img: "/home/stock/s5.jpg", pos: "50% 55%", href: "#rewards" },
  { img: "/home/stock/s6.jpg", pos: "50% 45%", href: "#technology" },
  { img: "/home/stock/s7.jpg", pos: "50% 40%", href: "#faq" },
] as const;

export function WhySlides() {
  const t = useT();
  const [k, setK] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = WHY.length;
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => setK((v) => (v + 1) % total), SECONDS * 1000);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [k, paused, total]);

  const go = (n: number) => setK((n + total) % total);

  return (
    <div
      className="sk-slides"
      role="region"
      aria-roledescription="carousel"
      aria-label={t("Vì sao chọn ERACEX")}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {WHY.map(([, title, text], i) => {
        const s = SLIDES[i];
        return (
          <div key={title} className={"sk-slide" + (i === k ? " on" : "")} aria-hidden={i !== k}>
            {}
            <img src={s.img} alt="" style={{ objectPosition: s.pos }} loading={i === 0 ? "eager" : "lazy"} />
            <div className="cap">
              <h3>{t(title)}</h3>
              <p>{t(text)}</p>
              <a href={s.href} tabIndex={i === k ? 0 : -1}>{t("Tìm hiểu thêm")} <ArrowUpRight size={14} /></a>
            </div>
          </div>
        );
      })}

      <button type="button" className="nav prev" aria-label={t("Trước")} onClick={() => go(k - 1)}><ChevronLeft size={18} /></button>
      <button type="button" className="nav next" aria-label={t("Sau")} onClick={() => go(k + 1)}><ChevronRight size={18} /></button>

      <div className="dots" role="tablist" aria-label={t("Chọn nội dung")}>
        {WHY.map(([, title], i) => (
          <button key={title} type="button" role="tab" aria-selected={i === k} aria-label={t(title)} className={i === k ? "on" : ""} onClick={() => go(i)} />
        ))}
      </div>
    </div>
  );
}
