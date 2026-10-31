import type { Metadata } from 'next';
import { ResetPasswordFlow } from '@/components/eracex/ResetPasswordFlow';

export const metadata: Metadata = {
  title: 'Reset Password | ERACEX',
  robots: { index: false, follow: false },
};

export default function ResetPasswordPage() {
  return <ResetPasswordFlow />;
}
