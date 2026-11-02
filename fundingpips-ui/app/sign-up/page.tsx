import { AuthShell } from '@/components/AuthShell';
import { SignUpForm } from '@/components/AuthForms';

export const metadata = { title: 'Sign up | ERACEX' };

export default function Page() {
  return <AuthShell><SignUpForm /></AuthShell>;
}
