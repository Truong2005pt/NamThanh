'use client';

import { PARTNER } from './config';

const CONSENT = 'cookie_consent';

export const getConsent = (): 'accepted' | 'declined' | null => {
  try { const v = localStorage.getItem(CONSENT); return v === 'accepted' || v === 'declined' ? v : null; } catch { return null; }
};
export const setConsent = (v: 'accepted' | 'declined') => { try { localStorage.setItem(CONSENT, v); } catch {} };

function readCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return m ? decodeURIComponent(m[1]) : null;
}

/** Mã giới thiệu trên đường dẫn (?ref= hoặc ?ib=), giữ tạm trong phiên cho tới khi khách đồng ý cookie. */
export function captureRef() {
  try {
    const q = new URLSearchParams(location.search);
    for (const k of PARTNER.refParams) {
      const v = q.get(k);
      if (v) sessionStorage.setItem('pending_ref', v);
    }
    persistRef();
  } catch {}
}

/** Khi khách đồng ý cookie, mã được lưu vào cookie. */
export function persistRef() {
  try {
    const v = sessionStorage.getItem('pending_ref');
    if (v) {
      document.cookie = `${PARTNER.refCookie}=${encodeURIComponent(v)}; max-age=${PARTNER.refCookieDays * 86400}; path=/; SameSite=Lax`;
    }
  } catch {}
}

export function currentRef(): string | null {
  try { return readCookie(PARTNER.refCookie) || sessionStorage.getItem('pending_ref'); } catch { return null; }
}
