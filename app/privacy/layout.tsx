import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chính Sách Bảo Mật | ERACEX',
  description: 'Cách ERACEX thu thập, sử dụng và bảo vệ dữ liệu cá nhân.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
