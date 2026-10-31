import { Metadata } from 'next';
import { TransparencyView } from '@/components/eracex/TransparencyView';

export const metadata: Metadata = {
  title: 'Transparency | Thông Tin Chương Trình | ERACEX',
  description: 'Thông tin về quy mô tài khoản, chia sẻ lợi nhuận và giới hạn vốn cấp của các chương trình ERACEX.',
};

export default function TransparencyPage() {
  return <TransparencyView />;
}
