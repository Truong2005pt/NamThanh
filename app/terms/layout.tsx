import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Điều Khoản Sử Dụng | ERACEX',
  description: 'Điều khoản và điều kiện sử dụng dịch vụ ERACEX.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
