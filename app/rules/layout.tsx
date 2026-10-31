import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rules | Quy Tắc Chương Trình | ERACEX',
  description: 'Mục tiêu lợi nhuận, giới hạn lỗ, đòn bẩy và điều kiện rút tiền của các chương trình ERACEX.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
