"use client";

import { useCallback } from "react";
import { useLanguage } from "@/components/eracex/LanguageContext";
import { LOCALES } from "./locales";

/** Identity marker: tags a Vietnamese source string in plain data files so scripts/i18n-keys.mjs can extract it. */
export const T = (s: string) => s;

/** Base reward share is shown as an 80–90% range; exact-calculation strings keep 80%. */
const KEEP = new Set(["Thưởng 80%", "Số tiền bằng 80% lợi nhuận đủ điều kiện; bấm mã hồ sơ để xem phép tính tương ứng.", "Ví dụ phép tính: $2,803.00 × 80% = $2,242.40."]);
export const widenRate = (v: string) => v.replace(/(?<![\d.,$–-])80\s?%(?!\s*[–-]\s*90)/g, "80–90%");

/**
 * Homepage/footer translator. The Vietnamese source text is the key; `vi` and unknown keys render as written.
 * Placeholders use {name} and are filled from `vars`.
 */
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
