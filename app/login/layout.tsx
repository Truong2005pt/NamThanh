import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đăng Nhập | ERACEX',
  description: 'Đăng nhập vào tài khoản trader ERACEX.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
