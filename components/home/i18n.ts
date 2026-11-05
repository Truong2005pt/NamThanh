"use client";

import { useCallback } from "react";
import { useLanguage } from "@/components/eracex/LanguageContext";
import { LOCALES } from "./locales";

export const T = (s: string) => s;

const KEEP = new Set(["Thưởng 80%", "Số tiền bằng 80% lợi nhuận đủ điều kiện; bấm mã hồ sơ để xem phép tính tương ứng.", "Ví dụ phép tính: $2,803.00 × 80% = $2,242.40."]);
export const widenRate = (v: string) => v.replace(/(?<![\d.,$–-])80\s?%(?!\s*[–-]\s*90)/g, "80–90%");

export function useT() {
  const { currentLang } = useLanguage();
  return useCallback(
    (src: string, vars?: Record<string, string | number>) => {
      let out = (currentLang !== "vi" && LOCALES[currentLang]?.[src]) || src;
      if (!KEEP.has(src)) out = widenRate(out);
      if (vars) for (const k of Object.keys(vars)) out = out.split(`{${k}}`).join(String(vars[k]));
      return out;
    },
    [currentLang],
  );
}
