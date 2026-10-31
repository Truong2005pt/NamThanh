import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đăng Ký | ERACEX',
  description: 'Tạo tài khoản ERACEX để bắt đầu thử thách cấp vốn.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
