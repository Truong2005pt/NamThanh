'use client';

import { useEffect } from 'react';
import { syncReferralFromUrl } from '@/lib/referral';

export const CookieBanner: React.FC = () => {
  useEffect(() => {
    syncReferralFromUrl();
  }, []);

  return null;
};
