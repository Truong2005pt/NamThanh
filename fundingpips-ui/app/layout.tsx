import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { CookieBar } from '@/components/CookieBar';
import { DomTranslate } from '@/components/DomTranslate';
import { Footer, Header, PromoBar } from '@/components/Chrome';
import { LangProvider } from '@/lib/i18n';
import { THEME_INIT, ThemeProvider } from '@/lib/theme';

const dm = DM_Sans({ subsets: ['latin'], variable: '--font-dm', display: 'swap' });

export const metadata: Metadata = {
  title: 'ERACEX | Khung giao diện',
  description: 'Simulated trading evaluation programs with clear rules.',
  icons: { icon: '/brand/eracex-icon.png' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={dm.variable} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: THEME_INIT }} /></head>
      <body>
        <ThemeProvider><LangProvider>
          <PromoBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieBar />
          <DomTranslate />
        </LangProvider></ThemeProvider>
      </body>
    </html>
  );
}
