import { AuthShell } from '@/components/AuthShell';
import { LoginForm } from '@/components/AuthForms';

export const metadata = { title: 'Log in | ERACEX' };

export default function Page() {
  return <AuthShell><LoginForm /></AuthShell>;
}
