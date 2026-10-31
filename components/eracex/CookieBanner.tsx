'use client';

import { useEffect } from 'react';
import { syncReferralFromUrl } from '@/lib/referral';

/**
 * The cookie consent popup was removed. This component stays mounted only to capture
 * the affiliate code from ?ref= / ?ib= into the referral cookie (see lib/referral.ts).
 */
export const CookieBanner: React.FC = () => {
  useEffect(() => {
    syncReferralFromUrl();
  }, []);

  return null;
};
