import type { Metadata, Viewport } from 'next';
import { Be_Vietnam_Pro, DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/eracex/ThemeContext';
import { LanguageProvider } from '@/components/eracex/LanguageContext';
import { ScrollRevealProvider } from '@/components/eracex/ScrollRevealProvider';
import { Navbar } from '@/components/eracex/Navbar';
import { Footer } from '@/components/eracex/Footer';
import { CookieBanner } from '@/components/eracex/CookieBanner';
import { NoLabelGlobal } from '@/components/eracex/NoLabelGlobal';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  fallback: ['BVP Fallback', 'sans-serif'],
});

const inter = Inter({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm',
  fallback: ['sans-serif'],
});

export const metadata: Metadata = {
  title: 'ERACEX | Trading Evaluation Programs | Chương Trình Đánh Giá Giao Dịch',
  description: 'Chương trình đánh giá giao dịch ERACEX: tài khoản từ $5,000 đến $100,000, chia sẻ lợi nhuận cao, quy tắc hiển thị rõ ràng trước khi thanh toán.',
  icons: {
    icon: '/brand/eracex-icon.png',
    apple: '/brand/eracex-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" data-theme="dark" className={`${beVietnamPro.variable} ${dmSans.variable} ${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var urlParams = new URLSearchParams(window.location.search);
                  var queryTheme = urlParams.get('theme');
                  var saved = localStorage.getItem('eracex_theme');
                  var theme = (queryTheme === 'light' || queryTheme === 'dark') ? queryTheme : ((saved === 'light' || saved === 'dark') ? saved : 'dark');
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col font-sans app-bg app-text selection:bg-[#ffc501] selection:text-black">
        <ThemeProvider>
          <LanguageProvider>
            <ScrollRevealProvider>
              {/* GLOBAL HEADER NAVBAR */}
              <Navbar />

              {/* DYNAMIC PAGE CONTENT */}
              <main className="flex-1 gft-home">
                <NoLabelGlobal />
                {children}
              </main>

              {/* GLOBAL FOOTER */}
              <Footer />

              {/* GLOBAL COOKIE BANNER & REF ATTRIBUTION */}
              <CookieBanner />
            </ScrollRevealProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
