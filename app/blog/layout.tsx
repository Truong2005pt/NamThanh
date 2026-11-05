import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Kiến Thức Giao Dịch | ERACEX',
  description: 'Bài viết về giao dịch, quản lý rủi ro và quy tắc chương trình.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
