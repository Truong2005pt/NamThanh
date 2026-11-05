import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing | Chọn Gói Thử Thách | ERACEX',
  description: 'Các gói Two-Step, One-Step, Instant Funding và Instant Funding Light với tài khoản từ $5,000 đến $100,000.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
