'use client';

import { Check } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { Logo } from './Logo';
import { Pic } from './Pic';

const COPY = {
  en: { tag: 'Simulated trading evaluation', title: 'Trade like a legend', lines: ['Rules of every program are shown before you pay', 'Simulated accounts from $5,000 to $100,000', 'You never cover simulated losses', 'Withdrawal conditions shown per program'], login: 'Log in', signup: 'Sign up' },
  vi: { tag: 'Đánh giá giao dịch mô phỏng', title: 'Giao dịch đẳng cấp như một huyền thoại', lines: ['Quy tắc của từng chương trình hiển thị trước khi thanh toán', 'Tài khoản mô phỏng từ $5,000 đến $100,000', 'Bạn không phải bù bất kỳ khoản lỗ mô phỏng nào', 'Điều kiện rút tiền hiển thị theo từng chương trình'], login: 'Đăng nhập', signup: 'Đăng ký' },
} as const;

export function useAuthCopy() {
  const { lang } = useLang();
  return lang === 'vi' ? COPY.vi : COPY.en;
}

/** Máy tính: chia hai phần, một bên giới thiệu, một bên biểu mẫu. Điện thoại: chỉ biểu mẫu. */
export function AuthShell({ children }: { children: React.ReactNode; tabs?: boolean }) {
  const c = useAuthCopy();
  return (
    <section className="wrap py-6 lg:py-10">
      <div className="grid lg:grid-cols-2 rounded-[28px] overflow-hidden border border-line bg-card shadow-[0_30px_80px_-40px_rgba(10,26,79,.35)] min-h-[640px]">
        <aside className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-[var(--tint)] via-[var(--bg)] to-[var(--tint2)] border-r border-line">
          <Logo size={18} />
          <div>
            <h2 className="text-4xl xl:text-[44px] leading-[1.08] font-extrabold tracking-tight mt-4">{c.title}</h2>
            <ul className="grid gap-3.5 mt-8">
              {c.lines.map((l) => (
                <li key={l} className="flex gap-3 text-[0.9375rem] font-medium"><span className="w-6 h-6 rounded-full bg-accent/10 text-accent2 grid place-items-center shrink-0"><Check className="w-3.5 h-3.5" /></span>{l}</li>
              ))}
            </ul>
          </div>
          <Pic src="/images/stock/chart-dark.jpg" ratio="16/8" className="rounded-2xl border border-line" />
        </aside>

        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-14">
          <div className="mx-auto w-full max-w-md">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
