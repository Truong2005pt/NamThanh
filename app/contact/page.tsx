import { Metadata } from 'next';
import { ContactView } from '@/components/eracex/ContactView';

export const metadata: Metadata = {
  title: 'Contact Support | Trung Tâm Hỗ Trợ | ERACEX',
  description: 'Liên hệ đội ngũ hỗ trợ của ERACEX về chương trình đánh giá, tài khoản ERACEX Platform, quy định drawdown, yêu cầu rút tiền và hợp tác.',
};

export default function ContactPage() {
  return <ContactView />;
}
