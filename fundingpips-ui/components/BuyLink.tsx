'use client';

import { checkoutHref } from '@/lib/config';
import { currentRef } from '@/lib/referral';

/** Nút mua: chuyển sang trang thanh toán của đối tác kèm mã gói; mã giới thiệu được nối vào khi bấm. */
export function BuyLink({ planId, size, className = '', children }: { planId: string; size: number; className?: string; children: React.ReactNode }) {
  return (
    <a
      href={checkoutHref(planId, size)}
      className={className}
      onClick={(e) => { e.currentTarget.href = checkoutHref(planId, size, currentRef()); }}
    >
      {children}
    </a>
  );
}
