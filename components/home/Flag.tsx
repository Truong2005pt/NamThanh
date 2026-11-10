"use client";

import "flag-icons/css/flag-icons.min.css";
import { useT } from "./i18n";

const CODE: Record<string, string> = { "Việt Nam": "vn", "Hoa Kỳ": "us", "Vương quốc Anh": "gb", "Nhật Bản": "jp", "Đức": "de", Singapore: "sg", UAE: "ae", "Úc": "au" };

export function Flag({ country, cc }: { country: string; cc?: string }) {
  const t = useT();
  const name = t(country);
  return <span className={`fi fis fi-${cc || CODE[country]} sk-flag`} role="img" aria-label={name} title={name} />;
}
