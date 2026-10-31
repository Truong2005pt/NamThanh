'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { BLOG_POSTS, getLocalizedPost } from '@/lib/blog-data';
import { ArrowLeft, Clock, Calendar, User, Zap } from 'lucide-react';

interface SlugDictionary {
  notFoundTitle: string;
  notFoundDesc: string;
  backToBlog: string;
  backToAllArticles: string;
  ctaTitle: string;
  ctaDesc: string;
  ctaButton: string;
}

const DICTIONARY: Record<string, SlugDictionary> = {
  vi: {
    notFoundTitle: 'Không Tìm Thấy Bài Viết',
    notFoundDesc: 'Bài viết bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.',
    backToBlog: 'Quay lại danh sách Blog',
    backToAllArticles: 'Quay lại tất cả bài viết',
    ctaTitle: 'Bắt Đầu Chương Trình Đánh Giá',
    ctaDesc: 'Tài khoản mô phỏng từ $5,000 đến $100,000, chia sẻ lợi nhuận cao và quy tắc rõ ràng trước khi thanh toán.',
    ctaButton: 'Xem Gói Challenge',
  },
  zh: {
    notFoundTitle: '未找到该文章',
    notFoundDesc: '您所寻找的文章不存在或已被移动。',
    backToBlog: '返回博客专区',
    backToAllArticles: '返回全部文章列表',
    ctaTitle: '开启您的自营实盘交易之旅',
    ctaDesc: '$5,000至$100,000的模拟账户、高比例利润分成，付款前规则清晰。',
    ctaButton: '查看考核方案',
  },
  ja: {
    notFoundTitle: '記事が見つかりません',
    notFoundDesc: 'お探しの記事は存在しないか、移動された可能性があります。',
    backToBlog: 'ブログ一覧に戻る',
    backToAllArticles: 'すべての記事に戻る',
    ctaTitle: 'プロップ資金獲得の第一歩を踏み出す',
    ctaDesc: '$5,000から$100,000までのシミュレーションアカウント、高い利益分配、お支払い前に明確なルール。',
    ctaButton: 'チャレンジプランを見る',
  },
  en: {
    notFoundTitle: 'Article Not Found',
    notFoundDesc: 'The requested article could not be found or has moved.',
    backToBlog: 'Back to Blog',
    backToAllArticles: 'Back to all articles',
    ctaTitle: 'Begin Your Evaluation Journey',
    ctaDesc: 'Simulated accounts from $5,000 to $100,000, a high profit share and clear rules before you pay.',
    ctaButton: 'View Challenges',
  },
  es: {
      "notFoundTitle": "Artículo No Encontrado",
      "notFoundDesc": "El artículo solicitado no existe o ha sido trasladado.",
      "backToBlog": "Volver al Blog",
      "backToAllArticles": "Volver a todos los artículos",
      "ctaTitle": "Comienza Tu Trayectoria de Evaluación",
      "ctaDesc": "Cuentas simuladas de $5,000 a $100,000, reparto de beneficios alto y reglas claras antes de pagar.",
      "ctaButton": "Ver Desafíos"
  },
  pt: {
      "notFoundTitle": "Artigo Não Encontrado",
      "notFoundDesc": "O artigo solicitado não foi encontrado ou mudou de endereço.",
      "backToBlog": "Voltar ao Blog",
      "backToAllArticles": "Voltar para todos os artigos",
      "ctaTitle": "Inicie Sua Jornada de Avaliação",
      "ctaDesc": "Contas simuladas de $5,000 a $100,000, divisão de lucros alta e regras claras antes de pagar.",
      "ctaButton": "Ver Desafios"
  },
  fr: {
      "notFoundTitle": "Article Introuvable",
      "notFoundDesc": "L’article demandé est introuvable ou a été déplacé.",
      "backToBlog": "Retour au Blog",
      "backToAllArticles": "Retour à tous les articles",
      "ctaTitle": "Commencez Votre Évaluation Dès Aujourd’hui",
      "ctaDesc": "Comptes simulés de 5 000 $ à 100 000 $, partage des profits élevé et règles claires avant de payer.",
      "ctaButton": "Découvrir les Challenges"
  },
  de: {
      "notFoundTitle": "Artikel Nicht Gefunden",
      "notFoundDesc": "Der angeforderte Artikel existiert nicht oder wurde verschoben.",
      "backToBlog": "Zurück zum Blog",
      "backToAllArticles": "Zurück zu allen Artikeln",
      "ctaTitle": "Starten Sie Ihre Evaluierungsreise",
      "ctaDesc": "Simulierte Konten von $5,000 bis $100,000, hohe Gewinnaufteilung und klare Regeln vor der Zahlung.",
      "ctaButton": "Challenges Ansehen"
  },
  it: {
      "notFoundTitle": "Articolo Non Trovato",
      "notFoundDesc": "L’articolo richiesto non è stato trovato o è stato spostato.",
      "backToBlog": "Torna al Blog",
      "backToAllArticles": "Torna a tutti gli articoli",
      "ctaTitle": "Inizia il Tuo Percorso di Valutazione",
      "ctaDesc": "Conti simulati da $5,000 a $100,000, ripartizione degli utili alta e regole chiare prima del pagamento.",
      "ctaButton": "Esplora le Challenge"
  },
  pl: {
      "notFoundTitle": "Nie Znaleziono Artykułu",
      "notFoundDesc": "Żądany artykuł nie istnieje lub został przeniesiony.",
      "backToBlog": "Powrót do Bloga",
      "backToAllArticles": "Wróć do wszystkich artykułów",
      "ctaTitle": "Rozpocznij Swoją Drogę do Kapitału",
      "ctaDesc": "Konta symulowane od $5,000 do $100,000, wysoki podział zysków i jasne zasady przed zapłatą.",
      "ctaButton": "Zobacz Wyzwania"
  },
  tr: {
      "notFoundTitle": "Makale Bulunamadı",
      "notFoundDesc": "Aradığınız makale mevcut değil veya taşınmış olabilir.",
      "backToBlog": "Bloga Geri Dön",
      "backToAllArticles": "Tüm makalelere dön",
      "ctaTitle": "Değerlendirme Yolculuğunuza Başlayın",
      "ctaDesc": "$5,000 ile $100,000 arasında simüle hesaplar, yüksek kâr paylaşımı ve ödemeden önce net kurallar.",
      "ctaButton": "Challenge’ları Gör"
  },
  id: {
      "notFoundTitle": "Artikel Tidak Ditemukan",
      "notFoundDesc": "Artikel yang diminta tidak dapat ditemukan atau telah dipindahkan.",
      "backToBlog": "Kembali ke Blog",
      "backToAllArticles": "Kembali ke semua artikel",
      "ctaTitle": "Mulai Perjalanan Evaluasi Anda",
      "ctaDesc": "Akun simulasi dari $5,000 hingga $100,000, pembagian profit tinggi, dan aturan yang jelas sebelum Anda membayar.",
      "ctaButton": "Lihat Pilihan Challenge"
  },
  th: {
      "notFoundTitle": "ไม่พบบทความ",
      "notFoundDesc": "ไม่พบบทความที่คุณต้องการ หรือบทความดังกล่าวถูกย้ายไปแล้ว",
      "backToBlog": "กลับสู่หน้ารวมบทความ",
      "backToAllArticles": "กลับสู่บทความทั้งหมด",
      "ctaTitle": "เริ่มต้นเส้นทางการขอรับทุนเทรดของคุณ",
      "ctaDesc": "บัญชีจำลองตั้งแต่ $5,000 ถึง $100,000 แบ่งกำไรสูง และกฎที่ชัดเจนก่อนชำระเงิน",
      "ctaButton": "ดูแพ็กเกจ Challenge"
  },
  fil: {
      "notFoundTitle": "Hindi Nahanap ang Artikulo",
      "notFoundDesc": "Ang hiniling na artikulo ay hindi mahanap o nailipat na.",
      "backToBlog": "Bumalik sa Blog",
      "backToAllArticles": "Bumalik sa lahat ng artikulo",
      "ctaTitle": "Simulan ang Iyong Evaluation Journey",
      "ctaDesc": "Mga simulated na account mula $5,000 hanggang $100,000, mataas na hatian ng kita, at malinaw na mga patakaran bago magbayad.",
      "ctaButton": "Tingnan ang Challenges"
  },
  hi: {
      "notFoundTitle": "लेख नहीं मिला",
      "notFoundDesc": "अनुरोधित लेख नहीं मिल सका या हटा दिया गया है।",
      "backToBlog": "ब्लॉग पर वापस जाएं",
      "backToAllArticles": "सभी लेखों पर वापस जाएं",
      "ctaTitle": "अपनी मूल्यांकन यात्रा शुरू करें",
      "ctaDesc": "$5,000 से $100,000 तक के सिम्युलेटेड खाते, उच्च लाभ विभाजन और भुगतान से पहले स्पष्ट नियम।",
      "ctaButton": "चैलेंज देखें"
  },
  ko: {
      "notFoundTitle": "아티클을 찾을 수 없습니다",
      "notFoundDesc": "요청하신 아티클이 존재하지 않거나 주소가 변경되었습니다.",
      "backToBlog": "블로그 홈으로 이동",
      "backToAllArticles": "전체 아티클 목록 보기",
      "ctaTitle": "프랍 챌린지 도전을 시작하세요",
      "ctaDesc": "최대 $2,000,000 자금 확장, 의무 매매일 0일, 최대 95% 수익 분배 혜택.",
      "ctaButton": "챌린지 플랜 보기"
  },
  ru: {
      "notFoundTitle": "Статья не найдена",
      "notFoundDesc": "Запрошенная статья не существует или была перемещена.",
      "backToBlog": "Назад в блог",
      "backToAllArticles": "Ко всем статьям",
      "ctaTitle": "Начните свой путь к финансированию",
      "ctaDesc": "Масштабирование до $2 000 000, 0 обязательных дней и распределение прибыли до 95%.",
      "ctaButton": "Смотреть челленджи"
  },
  ar: {
      "notFoundTitle": "المقال غير موجود",
      "notFoundDesc": "المقال المطلوب غير موجود أو تم نقله.",
      "backToBlog": "العودة إلى المدونة",
      "backToAllArticles": "الرجوع إلى جميع المقالات",
      "ctaTitle": "ابدأ رحلة التقييم الآن",
      "ctaDesc": "تدرج حتى 2,000,000$، بدون حد أدنى للأيام، ونسبة مشاركة أرباح تصل إلى 95%.",
      "ctaButton": "استعراض التحديات"
  },
  nl: {
      "notFoundTitle": "Artikel Niet Gevonden",
      "notFoundDesc": "Het opgevraagde artikel bestaat niet of is verplaatst.",
      "backToBlog": "Terug naar Blog",
      "backToAllArticles": "Terug naar alle artikelen",
      "ctaTitle": "Begin Uw Evaluatietraject",
      "ctaDesc": "Schaal op tot $2.000.000, 0 minimale dagen en behoud tot 95% winstdeling.",
      "ctaButton": "Bekijk Challenges"
  },
};

export default function BlogPostDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { t, currentLang } = useLanguage();
  const d = DICTIONARY[currentLang] || DICTIONARY.en;

  const rawPost = BLOG_POSTS.find((p) => p.slug === slug);

  if (!rawPost) {
    return (
      <div className="pt-40 pb-20 max-w-xl mx-auto px-4 text-center app-bg app-text">
        <h1 className="text-3xl font-bold mb-4 app-text">
          {d.notFoundTitle}
        </h1>
        <p className="text-sm app-text-muted mb-6">
          {d.notFoundDesc}
        </p>
        <Link href="/blog" className="px-6 py-2.5 rounded-xl btn-gold text-xs font-bold inline-block">
          {d.backToBlog}
        </Link>
      </div>
    );
  }

  const post = getLocalizedPost(rawPost, currentLang);

  return (
    <article className="pt-28 pb-20 app-bg app-text">
      {/* BREADCRUMB */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="flex items-center gap-2 text-xs font-mono app-text-muted mb-6">
          <Link href="/" className="hover:text-[#ffc501]">{t.nav.home}</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#ffc501]">{t.nav.blog}</Link>
          <span>/</span>
          <span className="text-[#c68a00] dark:text-[#ffc501] truncate max-w-xs">{post.title}</span>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-mono app-text-secondary hover:text-[#ffc501] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{d.backToAllArticles}</span>
        </Link>
      </div>

      {/* ARTICLE HEADER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight mb-6 app-text">
          {post.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 py-4 border-t border-b app-border text-xs font-mono app-text-muted">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />
            <span className="font-bold app-text">{post.author}</span>
            <span className="app-text-muted">({post.authorRole})</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* ARTICLE BODY */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl border app-border-gold app-surface shadow-2xl mb-12">
          {/* EXCERPT CALLOUT */}
          <div className="p-5 rounded-2xl app-subtle border border-[#f6bf4a]/30 dark:border-[#f6bf4a]/20 font-medium text-base sm:text-lg italic leading-relaxed mb-8 text-[#c68a00] dark:text-[#ffc501]">
            &ldquo;{post.excerpt}&rdquo;
          </div>

          {/* CONTENT SECTIONS */}
          <div className="space-y-8 text-base leading-relaxed app-text-secondary">
            {post.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                {sec.heading && (
                  <h2 className="text-xl sm:text-2xl font-bold pt-4 app-text">
                    {sec.heading}
                  </h2>
                )}
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
            ))}
          </div>

          {/* IN-ARTICLE CTA BOX */}
          <div className="mt-12 p-8 rounded-2xl border app-border bg-[#ffc501]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold app-text mb-1">
                {d.ctaTitle}
              </h3>
              <p className="text-xs app-text-secondary">
                {d.ctaDesc}
              </p>
            </div>
            <Link
              href="/pricing"
              className="px-6 py-3 rounded-xl btn-gold text-xs font-bold inline-flex items-center gap-2 flex-shrink-0"
            >
              <Zap className="w-4 h-4 fill-black" />
              <span>{d.ctaButton}</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
