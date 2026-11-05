import { Metadata } from 'next';
import { HowItWorksView } from '@/components/eracex/HowItWorksView';

export const metadata: Metadata = {
  title: 'How It Works — Quy Trình Hoạt Động & Cấp Vốn | ERACEX',
  description: 'Tìm hiểu quy trình 4 bước tại ERACEX: chọn gói, đạt mục tiêu đánh giá, nhận tài khoản funded và rút lợi nhuận với tỷ lệ chia sẻ lợi nhuận cao.',
};

export default function HowItWorksPage() {
  return <HowItWorksView />;
}
