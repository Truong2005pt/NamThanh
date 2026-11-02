// Tệp cấu hình duy nhất (tương đương config.js trong hợp đồng): liên kết đối tác, mã gói, tham số giới thiệu.
// Bên B chỉ sửa tệp này để đổi liên kết, không cần sửa giao diện. '#' = chưa có liên kết đối tác.
import { PLAN_PRODUCTS } from './plans';

export const PARTNER = {
  loginUrl: '/login',
  registerUrl: '/sign-up',
  checkoutUrl: '#',
  packageParam: 'package',
  refParams: ['ref', 'ib'],
  refCookie: 'ref_code',
  refCookieDays: 30,
};

/** Mã gói gửi sang đối tác. Quy ước mẫu: tiền tố của gói + quy mô (PKG_2S_100K). Đổi theo danh sách mã thật của đối tác. */
export function packageCode(planId: string, size: number): string {
  const p = PLAN_PRODUCTS.find((x) => x.id === planId);
  return `${p?.partnerPackagePrefix ?? 'PKG'}_${size / 1000}K`;
}

export function checkoutHref(planId: string, size: number, ref?: string | null): string {
  const q = new URLSearchParams({ [PARTNER.packageParam]: packageCode(planId, size) });
  if (ref) q.set(PARTNER.refParams[0], ref);
  const base = PARTNER.checkoutUrl;
  return `${base}${base.includes('?') ? '&' : '?'}${q.toString()}`;
}
