'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { AlertCircle, ArrowLeft, Home } from 'lucide-react';

const NOT_FOUND_DICT: Record<string, { title: string; desc: string; backHome: string }> = {
  vi: {
    title: '404 — Không Tìm Thấy Trang',
    desc: 'Trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển sang địa chỉ mới.',
    backHome: 'Trở Về Trang Chủ',
  },
  en: {
    title: '404 — Page Not Found',
    desc: 'The page you are looking for does not exist or has been moved to another URL.',
    backHome: 'Back to Home',
  },
  zh: {
    title: '404 — 页面未找到',
    desc: '您访问的页面不存在或已被移除至其他链接。',
    backHome: '返回首页',
  },
  ja: {
    title: '404 — ページが見つかりません',
    desc: 'お探しのページは存在しないか、別のURLに移動した可能性があります。',
    backHome: 'ホームに戻る',
  },
  es: {
    title: '404 — Página No Encontrada',
    desc: 'La página que buscas no existe o ha sido trasladada a otra dirección.',
    backHome: 'Volver al Inicio',
  },
  pt: {
    title: '404 — Página Não Encontrada',
    desc: 'A página que você está procurando não existe ou foi movida para outro endereço.',
    backHome: 'Voltar ao Início',
  },
  fr: {
    title: '404 — Page Non Trouvée',
    desc: 'La page que vous recherchez n\'existe pas ou a été déplacée vers une autre adresse.',
    backHome: 'Retour à l\'Accueil',
  },
  de: {
    title: '404 — Seite Nicht Gefunden',
    desc: 'Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben.',
    backHome: 'Zurück zur Startseite',
  },
  it: {
    title: '404 — Pagina Non Trovata',
    desc: 'La pagina che stai cercando non esiste o è stata spostata.',
    backHome: 'Torna alla Home',
  },
  pl: {
    title: '404 — Strona Nie Została Znaleziona',
    desc: 'Strona, której szukasz, nie istnieje lub została przeniesiona.',
    backHome: 'Wróć do Strony Głównej',
  },
  tr: {
    title: '404 — Sayfa Bulunamadı',
    desc: 'Aradığınız sayfa mevcut değil veya başka bir adrese taşınmış olabilir.',
    backHome: 'Ana Sayfaya Dön',
  },
  id: {
    title: '404 — Halaman Tidak Ditemukan',
    desc: 'Halaman yang Anda cari tidak ada atau telah dipindahkan ke tautan lain.',
    backHome: 'Kembali ke Beranda',
  },
  th: {
    title: '404 — ไม่พบหน้าที่คุณต้องการ',
    desc: 'หน้าที่คุณกำลังค้นหาไม่มีอยู่จริงหรือถูกย้ายไปยังที่อยู่ใหม่แล้ว',
    backHome: 'กลับสู่หน้าหลัก',
  },
  fil: {
    title: '404 — Hindi Natagpuan ang Pahina',
    desc: 'Ang pahinang hinahanap mo ay hindi umiiral o inilipat na sa ibang address.',
    backHome: 'Bumalik sa Home',
  },
  hi: {
    title: '404 — पृष्ठ नहीं मिला',
    desc: 'आप जिस पृष्ठ की तलाश कर रहे हैं वह मौजूद नहीं है या किसी अन्य पते पर स्थानांतरित कर दिया गया है।',
    backHome: 'होमपेज पर वापस जाएं',
  },
  ko: {
    title: '404 — 페이지를 찾을 수 없습니다',
    desc: '요청하신 페이지가 존재하지 않거나 다른 주소로 이동되었습니다.',
    backHome: '홈으로 돌아가기',
  },
  ru: {
    title: '404 — Страница Не Найдена',
    desc: 'Запрашиваемая страница не существует или была перемещена по новому адресу.',
    backHome: 'Вернуться на Главную',
  },
  ar: {
    title: '404 — الصفحة غير موجودة',
    desc: 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى عنوان آخر.',
    backHome: 'العودة إلى الرئيسية',
  },
  nl: {
    title: '404 — Pagina Niet Gevonden',
    desc: 'De pagina die u zoekt bestaat niet of is verplaatst naar een ander adres.',
    backHome: 'Terug naar Home',
  },
};

export default function NotFound() {
  const { currentLang } = useLanguage();
  const t = NOT_FOUND_DICT[currentLang] || NOT_FOUND_DICT['en'];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 app-bg app-text">
      <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl border app-border app-surface shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-[#f6bf4a]/20 text-[#c68a00] dark:text-[#ffc501] flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl font-black">{t.title}</h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">{t.desc}</p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl btn-gold text-black font-black text-sm"
          >
            <Home className="w-4 h-4" />
            <span>{t.backHome}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
