import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ — Câu Hỏi Thường Gặp | ERACEX',
  description: 'Giải đáp về thử thách, quy tắc, chi trả và tài khoản cấp vốn tại ERACEX.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
