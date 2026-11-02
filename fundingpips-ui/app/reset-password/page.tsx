import { AuthShell } from '@/components/AuthShell';
import { ResetFlow } from '@/components/AuthForms';

export const metadata = { title: 'Reset password | ERACEX', robots: { index: false, follow: false } };

export default function Page() {
  return <AuthShell tabs={false}><ResetFlow /></AuthShell>;
}
