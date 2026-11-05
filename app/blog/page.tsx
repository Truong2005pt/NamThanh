'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { PageHeroBanner } from '@/components/eracex/PageHeroBanner';
import { BLOG_POSTS, getLocalizedPost } from '@/lib/blog-data';
import { BookOpen, Clock, Calendar, ArrowRight, User } from 'lucide-react';
import { ImageBand } from '@/components/eracex/ImageBand';

interface BlogDictionary {
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  readArticles: string;
  startEvaluation: string;
  f1Text: string;
  f2Text: string;
  f3Text: string;
  badge1Tag: string;
  badge1Val: string;
  badge2Tag: string;
  badge2Val: string;
  allCategory: string;
  catRisk: string;
  catRules: string;
  catScaling: string;
  readFullArticle: string;
}

const DICTIONARY: Record<string, BlogDictionary> = {
  vi: {
    badge: 'KIẾN THỨC & QUY TẮC CHƯƠNG TRÌNH',
    titlePrefix: 'Cẩm Nang Đánh Giá & ',
    titleHighlight: 'Quản Trị Rủi Ro',
    subtitle: 'Các bài viết về quản trị rủi ro, quy tắc chương trình và điều kiện rút tiền của ERACEX.',
    readArticles: 'Khám Phá Bài Viết',
    startEvaluation: 'Bắt Đầu Đánh Giá',
    f1Text: 'Nội Dung Giáo Dục',
    f2Text: 'Quy Tắc Rõ Ràng',
    f3Text: 'Đánh Giá Giao Dịch',
    badge1Tag: 'CHUYÊN SÂU',
    badge1Val: 'Quy Tắc & Rủi Ro',
    badge2Tag: 'QUẢN TRỊ RỦI RO',
    badge2Val: 'Đánh Giá Giao Dịch',
    allCategory: 'Tất Cả Bài Viết',
    catRisk: 'Chiến Lược Quản Vốn',
    catRules: 'Quy Tắc Chương Trình',
    catScaling: 'Rút Tiền & Chi Trả',
    readFullArticle: 'Đọc Toàn Bộ Bài Viết',
  },
  zh: {
    badge: '知识与计划规则',
    titlePrefix: '评估指南与',
    titleHighlight: '风险管理',
    subtitle: '关于ERACEX风险管理、计划规则和提现条件的文章。',
    readArticles: '浏览文章',
    startEvaluation: '开始考核',
    f1Text: '教育内容',
    f2Text: '规则清晰',
    f3Text: '模拟交易',
    badge1Tag: '研究',
    badge1Val: '规则与风险',
    badge2Tag: '风险模型',
    badge2Val: '模拟交易',
    allCategory: '全部精选文章',
    catRisk: '资金管理策略',
    catRules: '计划规则',
    catScaling: '提现与支付',
    readFullArticle: '阅读完整文章',
  },
  ja: {
    badge: 'ナレッジ＆プログラムルール',
    titlePrefix: '評価ガイド＆',
    titleHighlight: 'リスク管理',
    subtitle: 'ERACEXにおけるリスク管理、プログラムルール、出金条件に関する記事。',
    readArticles: '記事を読む',
    startEvaluation: 'チャレンジを開始',
    f1Text: '教育コンテンツ',
    f2Text: '明確なルール',
    f3Text: 'シミュレーション取引',
    badge1Tag: 'リサーチ',
    badge1Val: 'ルールとリスク',
    badge2Tag: 'リスクモデル',
    badge2Val: 'シミュレーション取引',
    allCategory: 'すべての記事',
    catRisk: '資金管理戦略',
    catRules: 'プログラムルール',
    catScaling: '出金と支払い',
    readFullArticle: '記事全文を読む',
  },
  en: {
    badge: 'KNOWLEDGE & PROGRAM RULES',
    titlePrefix: 'Evaluation Guides & ',
    titleHighlight: 'Risk Management',
    subtitle: 'Articles on risk management, program rules and withdrawal conditions at ERACEX.',
    readArticles: 'Read Articles',
    startEvaluation: 'Start Evaluation',
    f1Text: 'Educational Content',
    f2Text: 'Clear Rules',
    f3Text: 'Trading Evaluation',
    badge1Tag: 'RESEARCH',
    badge1Val: 'Rules & Risk',
    badge2Tag: 'RISK MODEL',
    badge2Val: 'Trading Evaluation',
    allCategory: 'All Articles',
    catRisk: 'Risk Management',
    catRules: 'Program Rules',
    catScaling: 'Withdrawals & Payouts',
    readFullArticle: 'Read Full Article',
  },
  es: {
      "badge": "CONOCIMIENTO Y REGLAS DEL PROGRAMA",
      "titlePrefix": "Guías de Evaluación y ",
      "titleHighlight": "Gestión de Riesgo",
      "subtitle": "Artículos sobre gestión de riesgo, reglas de los programas y condiciones de retiro en ERACEX.",
      "readArticles": "Leer Artículos",
      "startEvaluation": "Comenzar Evaluación",
      "f1Text": "Contenido Educativo",
      "f2Text": "Reglas Claras",
      "f3Text": "Trading Simulado",
      "badge1Tag": "INVESTIGACIÓN",
      "badge1Val": "Reglas y Riesgo",
      "badge2Tag": "MODELO DE RIESGO",
      "badge2Val": "Trading Simulado",
      "allCategory": "Todos los Artículos",
      "catRisk": "Gestión de Riesgo",
      "catRules": "Reglas del Programa",
      "catScaling": "Retiros y Pagos",
      "readFullArticle": "Leer Artículo Completo"
  },
  pt: {
      "badge": "CONHECIMENTO E REGRAS DO PROGRAMA",
      "titlePrefix": "Guias de Avaliação e ",
      "titleHighlight": "Gestão de Risco",
      "subtitle": "Artigos sobre gestão de risco, regras dos programas e condições de saque na ERACEX.",
      "readArticles": "Ler Artigos",
      "startEvaluation": "Iniciar Avaliação",
      "f1Text": "Conteúdo Educacional",
      "f2Text": "Regras Claras",
      "f3Text": "Trading Simulado",
      "badge1Tag": "PESQUISA",
      "badge1Val": "Regras e Risco",
      "badge2Tag": "MODELO DE RISCO",
      "badge2Val": "Trading Simulado",
      "allCategory": "Todos os Artigos",
      "catRisk": "Gestão de Risco",
      "catRules": "Regras do Programa",
      "catScaling": "Saques e Pagamentos",
      "readFullArticle": "Ler Artigo Completo"
  },
  fr: {
      "badge": "CONNAISSANCES ET RÈGLES DU PROGRAMME",
      "titlePrefix": "Guides d'évaluation et ",
      "titleHighlight": "gestion du risque",
      "subtitle": "Articles sur la gestion du risque, les règles des programmes et les conditions de retrait chez ERACEX.",
      "readArticles": "Lire les Articles",
      "startEvaluation": "Commencer l’Évaluation",
      "f1Text": "Contenu éducatif",
      "f2Text": "Règles claires",
      "f3Text": "Trading simulé",
      "badge1Tag": "RECHERCHE",
      "badge1Val": "Règles et risque",
      "badge2Tag": "MODÈLE DE RISQUE",
      "badge2Val": "Trading simulé",
      "allCategory": "Tous les Articles",
      "catRisk": "Gestion des Risques",
      "catRules": "Règles du programme",
      "catScaling": "Retraits et paiements",
      "readFullArticle": "Lire l’Article Complet"
  },
  de: {
      "badge": "WISSEN & PROGRAMMREGELN",
      "titlePrefix": "Evaluierungsleitfäden & ",
      "titleHighlight": "Risikomanagement",
      "subtitle": "Artikel zu Risikomanagement, Programmregeln und Auszahlungsbedingungen bei ERACEX.",
      "readArticles": "Artikel Lesen",
      "startEvaluation": "Evaluierung Starten",
      "f1Text": "Lehrinhalte",
      "f2Text": "Klare Regeln",
      "f3Text": "Simulierter Handel",
      "badge1Tag": "RECHERCHE",
      "badge1Val": "Regeln & Risiko",
      "badge2Tag": "RISIKOMODELL",
      "badge2Val": "Simulierter Handel",
      "allCategory": "Alle Artikel",
      "catRisk": "Risikomanagement",
      "catRules": "Programmregeln",
      "catScaling": "Auszahlungen & Payouts",
      "readFullArticle": "Vollständigen Artikel Lesen"
  },
  it: {
      "badge": "CONOSCENZA E REGOLE DEL PROGRAMMA",
      "titlePrefix": "Guide alla valutazione e ",
      "titleHighlight": "gestione del rischio",
      "subtitle": "Articoli su gestione del rischio, regole dei programmi e condizioni di prelievo in ERACEX.",
      "readArticles": "Leggi gli Articoli",
      "startEvaluation": "Inizia Valutazione",
      "f1Text": "Contenuti educativi",
      "f2Text": "Regole chiare",
      "f3Text": "Valutazione del trading",
      "badge1Tag": "RICERCA",
      "badge1Val": "Regole e rischio",
      "badge2Tag": "MODELLO DI RISCHIO",
      "badge2Val": "Valutazione del trading",
      "allCategory": "Tutti gli Articoli",
      "catRisk": "Gestione del Rischio",
      "catRules": "Regole del programma",
      "catScaling": "Prelievi e pagamenti",
      "readFullArticle": "Leggi l’Articolo Completo"
  },
  pl: {
      "badge": "WIEDZA I ZASADY PROGRAMU",
      "titlePrefix": "Przewodniki po ocenie i ",
      "titleHighlight": "zarządzanie ryzykiem",
      "subtitle": "Artykuły o zarządzaniu ryzykiem, zasadach programów i warunkach wypłat w ERACEX.",
      "readArticles": "Czytaj Artykuły",
      "startEvaluation": "Rozpocznij Egzamin",
      "f1Text": "Treści edukacyjne",
      "f2Text": "Jasne zasady",
      "f3Text": "Symulowany trading",
      "badge1Tag": "BADANIA",
      "badge1Val": "Zasady i ryzyko",
      "badge2Tag": "MODEL RYZYKA",
      "badge2Val": "Symulowany trading",
      "allCategory": "Wszystkie Artykuły",
      "catRisk": "Zarządzanie Ryzykiem",
      "catRules": "Zasady programu",
      "catScaling": "Wypłaty i płatności",
      "readFullArticle": "Przeczytaj Cały Artykuł"
  },
  tr: {
      "badge": "BİLGİ VE PROGRAM KURALLARI",
      "titlePrefix": "Değerlendirme Rehberleri ve ",
      "titleHighlight": "Risk Yönetimi",
      "subtitle": "ERACEX'te risk yönetimi, program kuralları ve çekim koşulları hakkında makaleler.",
      "readArticles": "Makaleleri Oku",
      "startEvaluation": "Değerlendirmeyi Başlat",
      "f1Text": "Eğitici İçerik",
      "f2Text": "Net Kurallar",
      "f3Text": "Simüle İşlem",
      "badge1Tag": "ARAŞTIRMA",
      "badge1Val": "Kurallar ve Risk",
      "badge2Tag": "RİSK MODELİ",
      "badge2Val": "Simüle İşlem",
      "allCategory": "Tüm Makaleler",
      "catRisk": "Risk Yönetimi",
      "catRules": "Program Kuralları",
      "catScaling": "Çekimler ve Ödemeler",
      "readFullArticle": "Makalenin Tamamını Oku"
  },
  id: {
      "badge": "PENGETAHUAN & ATURAN PROGRAM",
      "titlePrefix": "Panduan Evaluasi & ",
      "titleHighlight": "Manajemen Risiko",
      "subtitle": "Artikel tentang manajemen risiko, aturan program, dan ketentuan penarikan di ERACEX.",
      "readArticles": "Baca Artikel",
      "startEvaluation": "Mulai Evaluasi",
      "f1Text": "Konten Edukatif",
      "f2Text": "Aturan yang Jelas",
      "f3Text": "Trading Simulasi",
      "badge1Tag": "RISET",
      "badge1Val": "Aturan & Risiko",
      "badge2Tag": "MODEL RISIKO",
      "badge2Val": "Trading Simulasi",
      "allCategory": "Semua Artikel",
      "catRisk": "Manajemen Risiko",
      "catRules": "Aturan Program",
      "catScaling": "Penarikan & Pembayaran",
      "readFullArticle": "Baca Artikel Lengkap"
  },
  th: {
      "badge": "ความรู้และกฎของโปรแกรม",
      "titlePrefix": "คู่มือการประเมินและ",
      "titleHighlight": "การบริหารความเสี่ยง",
      "subtitle": "บทความเกี่ยวกับการบริหารความเสี่ยง กฎของโปรแกรม และเงื่อนไขการถอนเงินที่ ERACEX",
      "readArticles": "อ่านบทความ",
      "startEvaluation": "เริ่มการประเมิน",
      "f1Text": "เนื้อหาเพื่อการศึกษา",
      "f2Text": "กฎที่ชัดเจน",
      "f3Text": "การเทรดจำลอง",
      "badge1Tag": "งานวิจัย",
      "badge1Val": "กฎและความเสี่ยง",
      "badge2Tag": "โมเดลความเสี่ยง",
      "badge2Val": "การเทรดจำลอง",
      "allCategory": "บทความทั้งหมด",
      "catRisk": "การจัดการความเสี่ยง",
      "catRules": "กฎของโปรแกรม",
      "catScaling": "การถอนเงินและการจ่ายเงิน",
      "readFullArticle": "อ่านบทความฉบับเต็ม"
  },
  fil: {
      "badge": "KAALAMAN AT MGA PATAKARAN NG PROGRAMA",
      "titlePrefix": "Mga Gabay sa Evaluation at ",
      "titleHighlight": "Pamamahala ng Panganib",
      "subtitle": "Mga artikulo tungkol sa pamamahala ng panganib, mga patakaran ng programa, at mga kondisyon sa pag-withdraw sa ERACEX.",
      "readArticles": "Basahin ang mga Artikulo",
      "startEvaluation": "Simulan ang Evaluation",
      "f1Text": "Nilalamang Pang-edukasyon",
      "f2Text": "Malinaw na mga Patakaran",
      "f3Text": "Trading Evaluation",
      "badge1Tag": "PANANALIKSIK",
      "badge1Val": "Mga Patakaran at Panganib",
      "badge2Tag": "MODELO NG RISK",
      "badge2Val": "Trading Evaluation",
      "allCategory": "Lahat ng Artikulo",
      "catRisk": "Pamamahala ng Panganib",
      "catRules": "Mga Patakaran ng Programa",
      "catScaling": "Mga Withdrawal at Payout",
      "readFullArticle": "Basahin ang Buong Artikulo"
  },
  hi: {
      "badge": "ज्ञान और प्रोग्राम नियम",
      "titlePrefix": "मूल्यांकन गाइड और ",
      "titleHighlight": "जोखिम प्रबंधन",
      "subtitle": "ERACEX में जोखिम प्रबंधन, प्रोग्राम नियमों और निकासी की शर्तों पर लेख।",
      "readArticles": "लेख पढ़ें",
      "startEvaluation": "मूल्यांकन शुरू करें",
      "f1Text": "शैक्षिक सामग्री",
      "f2Text": "स्पष्ट नियम",
      "f3Text": "सिम्युलेटेड ट्रेडिंग",
      "badge1Tag": "शोध",
      "badge1Val": "नियम और जोखिम",
      "badge2Tag": "जोखिम मॉडल",
      "badge2Val": "सिम्युलेटेड ट्रेडिंग",
      "allCategory": "सभी लेख",
      "catRisk": "जोखिम प्रबंधन",
      "catRules": "प्रोग्राम नियम",
      "catScaling": "निकासी और भुगतान",
      "readFullArticle": "पूरा लेख पढ़ें"
  },
  ko: {
      "badge": "아카데미 및 심층 시장 분석 리포트",
      "titlePrefix": "프랍 트레이딩 가이드 및 ",
      "titleHighlight": "챌린지 합격 전략",
      "subtitle": "ERACEX 글로벌 수석 애널리스트들이 집필한 리스크 관리 원칙, 실전 매매 기법 및 트레이딩 심리 가이드.",
      "readArticles": "아티클 읽기",
      "startEvaluation": "평가 시작하기",
      "f1Text": "매주 신규 업데이트",
      "f2Text": "실전 적용 지식",
      "f3Text": "글로벌 프랍 전문가",
      "badge1Tag": "시장 리서치",
      "badge1Val": "기술적 & 거시경제",
      "badge2Tag": "리스크 모델",
      "badge2Val": "100% 기관 표준",
      "allCategory": "전체 아티클",
      "catRisk": "자금 관리 전략",
      "catRules": "프랍 펀딩 규정",
      "catScaling": "성장 로드맵",
      "readFullArticle": "전문 읽기"
  },
  ru: {
      "badge": "АКАДЕМИЯ И АНАЛИТИКА РЫНКОВ",
      "titlePrefix": "Руководства по проп-трейдингу и ",
      "titleHighlight": "Стратегии прохождения",
      "subtitle": "Глубокий анализ рынков, принципы риск-менеджмента и психология торговли от ведущих экспертов ERACEX.",
      "readArticles": "Читать статьи",
      "startEvaluation": "Начать оценку",
      "f1Text": "Еженедельные выпуски",
      "f2Text": "Практические навыки",
      "f3Text": "Специалисты проп-индустрии",
      "badge1Tag": "ИССЛЕДОВАНИЯ",
      "badge1Val": "Теханализ и Макро",
      "badge2Tag": "МОДЕЛЬ РИСКА",
      "badge2Val": "100% Проф-стандарты",
      "allCategory": "Все статьи",
      "catRisk": "Управление рисками",
      "catRules": "Правила проп-фирм",
      "catScaling": "План масштабирования",
      "readFullArticle": "Читать статью полностью"
  },
  ar: {
      "badge": "الأكاديمية والتحليلات السوقية المعمقة",
      "titlePrefix": "أدلة تداول الشركات و ",
      "titleHighlight": "استراتيجيات اجتياز التقييم",
      "subtitle": "تحليلات سوقية متقدمة، ومبادئ إدارة المخاطر، وسيكولوجية التداول من كبار خبراء ERACEX.",
      "readArticles": "قراءة المقالات",
      "startEvaluation": "بدء التقييم",
      "f1Text": "تحديثات أسبوعية",
      "f2Text": "معرفة عملية تطبيقية",
      "f3Text": "خبراء التمويل المؤسسي",
      "badge1Tag": "أبحاث",
      "badge1Val": "فني واقتصادي",
      "badge2Tag": "نموذج المخاطر",
      "badge2Val": "معايير احترافية 100%",
      "allCategory": "جميع المقالات",
      "catRisk": "إدارة المخاطر",
      "catRules": "قواعد التمويل",
      "catScaling": "خطة زيادة رأس المال",
      "readFullArticle": "قراءة المقال كاملاً"
  },
  nl: {
      "badge": "ACADEMIE & MARKTINTELLIGENTIE",
      "titlePrefix": "Prop Trading Gidsen & ",
      "titleHighlight": "Evaluatie-Inzichten",
      "subtitle": "Diepgaande marktanalyses, risicobeheerprincipes en handelspsychologie van de specialisten van ERACEX.",
      "readArticles": "Lees Artikelen",
      "startEvaluation": "Start Evaluatie",
      "f1Text": "Wekelijkse Updates",
      "f2Text": "Praktische Kennis",
      "f3Text": "Prop Firm Specialisten",
      "badge1Tag": "RESEARCH",
      "badge1Val": "Technisch & Macro",
      "badge2Tag": "RISICOMODEL",
      "badge2Val": "100% Pro Standaard",
      "allCategory": "Alle Artikelen",
      "catRisk": "Risicomanagement",
      "catRules": "Prop Firm Regels",
      "catScaling": "Opschaalplan",
      "readFullArticle": "Lees Volledig Artikel"
  },
};

export default function BlogListingPage() {
  const { t, currentLang } = useLanguage();
  const d = DICTIONARY[currentLang] || DICTIONARY.en;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: d.allCategory },
    { id: 'risk', label: d.catRisk },
    { id: 'rules', label: d.catRules },
    { id: 'scaling', label: d.catScaling },
  ];

  const localizedPosts = BLOG_POSTS.map((post) => getLocalizedPost(post, currentLang));

  const filteredPosts = selectedCategory === 'all'
    ? localizedPosts
    : localizedPosts.filter((_, idx) => {
        if (selectedCategory === 'risk') return idx === 0;
        if (selectedCategory === 'rules') return idx === 1;
        if (selectedCategory === 'scaling') return idx === 2;
        return true;
      });

  return (
    <div className="pb-20 app-bg app-text">
      {/* 1. DEDICATED FULL-VIEWPORT HERO BANNER WITH 3D ILLUSTRATION */}
      <PageHeroBanner
        badgeText={d.badge}
        badgeIcon={<BookOpen className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />}
        title={
          <>
            {d.titlePrefix}<span className="text-[#c68a00] dark:text-[#ffc501]">{d.titleHighlight}</span>
          </>
        }
        subtitle={d.subtitle}
        breadcrumbs={[
          { label: t.nav.home, href: '/' },
          { label: t.nav.blog },
        ]}
        primaryCta={{
          label: d.readArticles,
          href: '#articles',
          icon: <BookOpen className="w-5 h-5 text-[#f6bf4a]" />,
        }}
        secondaryCta={{
          label: d.startEvaluation,
          href: '/pricing',
        }}
        features={[
          { icon: <Clock className="w-4 h-4" />, text: d.f1Text },
          { icon: <BookOpen className="w-4 h-4" />, text: d.f2Text },
          { icon: <User className="w-4 h-4" />, text: d.f3Text },
        ]}
        imageSrc="/images/banner-blog-3d.jpg"
        imageAlt="ERACEX Trading Academy & Market Intelligence Encyclopedia"
        floatingBadge1={{
          tag: d.badge1Tag,
          value: d.badge1Val,
          icon: <BookOpen className="w-5 h-5" />,
        }}
        floatingBadge2={{
          tag: d.badge2Tag,
          value: d.badge2Val,
          icon: <Clock className="w-5 h-5" />,
        }}
      />

      <ImageBand caption="markets" variant="accent" images={[{ src: '/images/trader-phone-laptop.jpg', alt: 'Trading on laptop and phone' }]} />

      {/* 2. CATEGORIES FILTER & ARTICLE LIST (ID: articles) */}
      <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 pt-8" id="articles">
        {/* CATEGORIES */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelectedCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
                selectedCategory === c.id
                  ? 'bg-[#ffc501] text-black shadow-md'
                  : 'app-surface border app-border app-text-secondary hover:app-text'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* ARTICLES GRID (ALTERNATING SESSION: UNROUNDED / SHARP EDGES) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-none border-t-4 border-t-amber-500 border-x border-b app-border card-surface p-7 flex flex-col justify-between group hover:border-[#ffc501]/50 transition-all shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono app-text-muted mb-4">
                  <span className="text-[#c68a00] dark:text-[#ffc501] font-bold px-2 py-0.5 rounded-none bg-[#f6bf4a]/15 dark:bg-[#ffc501]/10 border border-[#f6bf4a]/30 dark:border-[#ffc501]/20">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-[#ffc501] transition-colors leading-snug app-text">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-sm leading-relaxed app-text-secondary mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-xs app-text-muted font-mono mb-4 pt-4 border-t app-border">
                  <User className="w-3.5 h-3.5 text-[#ffc501]" />
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border app-border hover:border-[#ffc501] hover:bg-[#ffc501]/10 text-xs font-bold transition-all app-text"
                >
                  <span>{d.readFullArticle}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
