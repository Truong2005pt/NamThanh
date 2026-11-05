'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { watchNoLabel } from '@/components/eracex-ref/nolabel';

/** Legal documents keep their exact wording; everything else drops demo / mô phỏng / minh họa labels. */
const LEGAL = /^\/(terms|terms-and-conditions|funded-terms|funded-account-disclaimer|risk-disclosure|complaints-policy|privacy|privacy-policy|client-privacy-policy|refund-policy|restricted-jurisdictions)(\/|$)/;

export function NoLabelGlobal() {
  const pathname = usePathname() || '/';
  useEffect(() => {
    if (LEGAL.test(pathname)) return;
    return watchNoLabel(document.body);
  }, [pathname]);
  return null;
}
