import type { Metadata } from 'next';
import { RefundPolicyView } from '@/components/eracex/RefundPolicyView';

export const metadata: Metadata = {
  title: 'Fees and Refund Policy | Chính Sách Phí & Thanh Toán | ERACEX',
  description: 'Phí chương trình không được hoàn lại sau khi cấp quyền truy cập tài khoản. Điều kiện thanh toán và rút tiền của ERACEX.',
};

export default function Page() {
  return (
    <div className="app-bg min-h-screen pt-24 sm:pt-28">
      <RefundPolicyView />
    </div>
  );
}
