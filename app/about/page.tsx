import { Metadata } from 'next';
import { AboutView } from '@/components/eracex/AboutView';

export const metadata: Metadata = {
  title: 'About Us | Về Chúng Tôi | ERACEX',
  description: 'Tìm hiểu về ERACEX: các chương trình đánh giá giao dịch mô phỏng với quy tắc được công bố rõ ràng trước khi thanh toán.',
};

export default function AboutPage() {
  return <AboutView />;
}
