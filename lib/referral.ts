// lib/referral.ts
import Cookies from 'js-cookie';
import { SITE_CONFIG } from '@/config/site-config';

const REF_COOKIE_KEY = 'eracex_partner_ref';
const COOKIE_CONSENT_KEY = 'eracex_cookie_consent';

export function getStoredRefCode(): string | null {
  if (typeof window === 'undefined') return null;
  return Cookies.get(REF_COOKIE_KEY) || null;
}

export function saveRefCode(code: string): void {
  if (typeof window === 'undefined') return;
  // Lưu trong 90 ngày
  Cookies.set(REF_COOKIE_KEY, code.trim(), { expires: 90, path: '/' });
}

export function hasCookieConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return Cookies.get(COOKIE_CONSENT_KEY) === 'accepted';
}

export function setCookieConsent(accepted: boolean): void {
  if (typeof window === 'undefined') return;
  Cookies.set(COOKIE_CONSENT_KEY, accepted ? 'accepted' : 'declined', { expires: 365, path: '/' });
  if (!accepted) {
    Cookies.remove(REF_COOKIE_KEY);
  }
}

export function syncReferralFromUrl(): string | null {
  if (typeof window === 'undefined') return null;
  try {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get('ref') || params.get('ib');
    if (ref) {
      // Chỉ lưu nếu chưa từ chối cookie
      if (Cookies.get(COOKIE_CONSENT_KEY) !== 'declined') {
        saveRefCode(ref);
      }
      return ref;
    }
  } catch (err) {
    console.error('Lỗi khi đọc referral param:', err);
  }
  return getStoredRefCode();
}

/**
 * Xây dựng liên kết thanh toán nội bộ, tự động gắn mã gói và mã giới thiệu
 */
export function buildPartnerCheckoutUrl(packageCode: string): string {
  const base = SITE_CONFIG.partnerUrls.checkoutBase || '/pricing';
  const ref = getStoredRefCode();
  const sep = base.includes('?') ? '&' : '?';
  let res = `${base}${sep}pkg=${encodeURIComponent(packageCode)}`;
  if (ref) res += `&ref=${encodeURIComponent(ref)}`;
  return res;
}
