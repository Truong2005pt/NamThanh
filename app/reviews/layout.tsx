import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thông Tin Chương Trình | ERACEX',
  description: 'Thông tin về các chương trình đánh giá giao dịch mô phỏng, chia sẻ lợi nhuận cao và điều kiện rút tiền tại ERACEX.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
