'use client';

import { useEffect } from 'react';
import { captureRef } from '@/lib/referral';

/** Không còn thanh xác thực cookie. Chỉ ghi nhận mã giới thiệu (?ref= hoặc ?ib=) khi khách vào trang. */
export function CookieBar() {
  useEffect(() => { captureRef(); }, []);
  return null;
}
