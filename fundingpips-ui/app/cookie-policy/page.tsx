import { LegalDocument, type LegalBlock } from '@/components/LegalDocument';

export const metadata = { title: 'Cookie Policy | ERACEX' };

// Nội dung chính sách cookie do Bên B cung cấp. Chưa có trong tài liệu nên chưa tự soạn.
const blocks: LegalBlock[] = [
  { t: 'p', x: '<b>Cookie Policy</b>', center: true },
  { t: 'p', x: 'Nội dung chính sách cookie do Bên B cung cấp sẽ được đặt tại đây.' },
];

export default function Page() {
  return <LegalDocument blocks={blocks} />;
}
