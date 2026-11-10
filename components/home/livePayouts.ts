"use client";

import { useEffect, useState } from "react";
import { PAYOUTS } from "./data";

/** Illustrative feed: deterministic per 20-minute slot, so every visitor sees the same rows at the same time. */
export type LivePayout = { id: string; when: string; name: string; amount: string; country: string; cc?: string; program: string; size: string };

const PEOPLE: [string, string][] = [
  ["Gaurang N.", "in"], ["Aakash S.", "np"], ["Yosef D.", "et"], ["Hou Joon Y.", "my"], ["Veli-Matti P.", "fi"],
  ["Raihan K.", "ie"], ["Bor B.", "si"], ["Hiroki K.", "jp"], ["Fabian T.", "us"], ["Carlos T.", "us"],
  ["Berkay S.", "tr"], ["Cristian H.", "ro"], ["Hemalata P.", "in"], ["Luis M.", "us"], ["Moses A.", "ng"],
  ["Fakhri B.", "tn"], ["Minh T.", "vn"], ["Toan N.", "vn"], ["Hieu L.", "vn"], ["Wei L.", "sg"],
  ["Omar K.", "ae"], ["Oliver H.", "gb"], ["Liam C.", "au"], ["Lukas M.", "de"], ["Arjun R.", "in"],
  ["Sofia P.", "pt"], ["Mateo G.", "es"], ["Elena V.", "pl"], ["Noah B.", "ca"], ["Yuki T.", "jp"],
  ["Thanh P.", "vn"], ["Daniel K.", "za"], ["Ahmad R.", "my"], ["Pierre D.", "fr"], ["Marco B.", "it"],
  ["Somchai W.", "th"], ["Budi S.", "id"], ["Jose R.", "ph"], ["Kenji M.", "jp"], ["Amir H.", "ae"],
];
const PROGRAMS: [string, number[]][] = [
  ["Two-Step", [5000, 10000, 25000, 50000, 100000]],
  ["One-Step", [5000, 10000, 25000, 50000, 100000]],
  ["Instant Funding", [5000, 10000, 25000, 50000, 100000]],
  ["Instant Light", [5000, 10000, 25000]],
];

const SLOT = 20 * 60 * 1000;

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const p2 = (n: number) => String(n).padStart(2, "0");
const fmtWhen = (ts: number) => {
  const d = new Date(ts + 7 * 3600 * 1000);
  return `${p2(d.getUTCDate())}/${p2(d.getUTCMonth() + 1)}/${d.getUTCFullYear()} · ${p2(d.getUTCHours())}:${p2(d.getUTCMinutes())}`;
};
const fmtMoney = (n: number) => "$" + n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export function livePayouts(now: number, count = 8): LivePayout[] {
  const out: LivePayout[] = [];
  let slot = Math.floor(now / SLOT);
  while (out.length < count && slot > 0) {
    const r = rng(slot * 2654435761);
    if (r() < 0.72) {
      const ts = slot * SLOT + Math.floor(r() * SLOT);
      if (ts <= now) {
        const [name, cc] = PEOPLE[Math.floor(r() * PEOPLE.length)];
        const [program, sizes] = PROGRAMS[Math.floor(r() * PROGRAMS.length)];
        const size = sizes[Math.floor(r() * sizes.length)];
        const gross = size * (0.012 + r() * 0.07);
        const amount = Math.round(gross * 0.8 * 100) / 100;
        out.push({ id: `EX-${1000 + (slot % 9000)}`, when: fmtWhen(ts), name: name.toUpperCase(), amount: fmtMoney(amount), country: "", cc, program, size: "$" + size.toLocaleString("en-US") });
      }
    }
    slot -= 1;
  }
  return out;
}

export function countryName(cc: string, lang: string) {
  try {
    return new Intl.DisplayNames([lang === "fil" ? "tl" : lang], { type: "region" }).of(cc.toUpperCase()) || cc.toUpperCase();
  } catch {
    return cc.toUpperCase();
  }
}

/** Static rows on the server and first paint, live rows after mount; refreshed every 30 seconds. */
export function useLivePayouts(count = 8): (LivePayout)[] {
  const [rows, setRows] = useState<LivePayout[]>(PAYOUTS as LivePayout[]);
  useEffect(() => {
    const tick = () => setRows(livePayouts(Date.now(), count));
    tick();
    const id = window.setInterval(tick, 30000);
    return () => window.clearInterval(id);
  }, [count]);
  return rows;
}
