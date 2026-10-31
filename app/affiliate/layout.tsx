import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Affiliate - Chương Trình Đối Tác | ERACEX',
  description: 'Chương trình đối tác ERACEX. Tỷ lệ hoa hồng, lịch thanh toán và điều kiện được nêu trong điều khoản chương trình.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
