'use client';

import React from 'react';
import { useLanguage } from '@/components/eracex/LanguageContext';
import { PageHeroBanner } from '@/components/eracex/PageHeroBanner';
import { FaqSection } from '@/components/eracex/FaqSection';
import { SITE_CONFIG } from '@/config/site-config';
import { MessageSquare, Mail, Send, HelpCircle, CheckCircle2 } from 'lucide-react';
import { ImageBand } from '@/components/eracex/ImageBand';

export default function FaqPage() {
  const { t, currentLang } = useLanguage();

  const d = {
    vi: {
      badgeText: 'TRUNG TÂM HỖ TRỢ & CÂU HỎI THƯỜNG GẶP',
      title: 'Giải Đáp Mọi Thắc Mắc Về Chương Trình Đánh Giá',
      subtitle: 'Tra cứu các câu hỏi thường gặp về quy tắc đánh giá, nền tảng ERACEX, phí chương trình và điều kiện rút tiền.',
      feature1: 'Quy Tắc Rõ Ràng',
      feature2: 'Minh Bạch',
      feature3: 'Hỗ Trợ Khách Hàng',
      floatTag1: 'HỖ TRỢ',
      floatVal1: 'Liên hệ',
      floatTag2: 'THÔNG TIN',
      floatVal2: 'FAQ',
      browseFaq: 'Khám Phá Các Câu Hỏi',
      liveSupport: 'Hỗ Trợ Trực Tuyến',
      stillQuestions: 'Vẫn Còn Câu Hỏi Cần Giải Đáp?',
      stillQuestionsDesc: 'Đội ngũ hỗ trợ của ERACEX sẵn sàng giải đáp các thắc mắc còn lại của bạn.',
      emailBtn: 'Gửi Email Hỗ Trợ',
    },
    zh: {
      badgeText: '支持与知识中心',
      title: '关于ERACEX计划您需要了解的一切',
      subtitle: '搜索有关评估规则、ERACEX平台、计划费用和提现条件的常见问题。',
      feature1: '规则清晰',
      feature2: '透明',
      feature3: '客户支持',
      floatTag1: '支持',
      floatVal1: '联系我们',
      floatTag2: '信息',
      floatVal2: 'FAQ',
      browseFaq: '浏览全部问题',
      liveSupport: '在线支持台',
      stillQuestions: '仍有疑问需要解答？',
      stillQuestionsDesc: '我们的支持团队随时为您解答其他任何问题。',
      emailBtn: '发邮件给支持团队',
    },
    ja: {
      badgeText: 'サポート＆ナレッジデスク',
      title: 'ERACEXプログラムについて知っておくべきすべてのこと',
      subtitle: '評価ルール、ERACEXプラットフォーム、プログラム料金、出金条件に関するよくある質問を検索できます。',
      feature1: '明確なルール',
      feature2: '透明性',
      feature3: 'カスタマーサポート',
      floatTag1: 'サポート',
      floatVal1: 'お問い合わせ',
      floatTag2: '情報',
      floatVal2: 'FAQ',
      browseFaq: 'よくある質問を閲覧',
      liveSupport: 'ライブサポートデスク',
      stillQuestions: '他にご不明な点がありますか？',
      stillQuestionsDesc: 'サポートチームが残りのご質問にお答えします。',
      emailBtn: 'サポートにメールする',
    },
    en: {
      badgeText: 'SUPPORT & KNOWLEDGE DESK',
      title: 'Everything You Need To Know About ERACEX Programs',
      subtitle: 'Search frequently asked questions regarding evaluation rules, the ERACEX platform, program fees and withdrawal conditions.',
      feature1: 'Clear Rules',
      feature2: 'Transparent',
      feature3: 'Customer Support',
      floatTag1: 'SUPPORT',
      floatVal1: 'Contact us',
      floatTag2: 'INFORMATION',
      floatVal2: 'FAQ',
      browseFaq: 'Browse FAQs',
      liveSupport: 'Live Support Desk',
      stillQuestions: 'Still Have Questions?',
      stillQuestionsDesc: 'Our support team is here to answer any remaining questions.',
      emailBtn: 'Email Support',
    },
    es: {
          "badgeText": "CENTRO DE SOPORTE Y BASE DE CONOCIMIENTO",
          "title": "Todo lo que Necesitas Saber Sobre los Programas de ERACEX",
          "subtitle": "Busca las preguntas frecuentes sobre reglas de evaluación, la plataforma ERACEX, tarifas de los programas y condiciones de retiro.",
          "feature1": "Reglas Claras",
          "feature2": "Transparente",
          "feature3": "Atención al Cliente",
          "floatTag1": "SOPORTE",
          "floatVal1": "Contáctanos",
          "floatTag2": "INFORMACIÓN",
          "floatVal2": "FAQ",
          "browseFaq": "Explorar Preguntas Frecuentes",
          "liveSupport": "Mesa de Soporte en Vivo",
          "stillQuestions": "¿Aún Tienes Preguntas?",
          "stillQuestionsDesc": "Nuestro equipo de soporte está aquí para responder cualquier pregunta pendiente.",
          "emailBtn": "Escribir al Soporte"
    },
    pt: {
          "badgeText": "CENTRAL DE SUPORTE E BASE DE CONHECIMENTO",
          "title": "Tudo o que Você Precisa Saber Sobre os Programas da ERACEX",
          "subtitle": "Pesquise as perguntas frequentes sobre regras de avaliação, a plataforma ERACEX, taxas dos programas e condições de saque.",
          "feature1": "Regras Claras",
          "feature2": "Transparente",
          "feature3": "Atendimento ao Cliente",
          "floatTag1": "SUPORTE",
          "floatVal1": "Fale conosco",
          "floatTag2": "INFORMAÇÕES",
          "floatVal2": "FAQ",
          "browseFaq": "Navegar nas Dúvidas",
          "liveSupport": "Central de Suporte ao Vivo",
          "stillQuestions": "Ainda Tem Dúvidas?",
          "stillQuestionsDesc": "Nossa equipe de suporte está aqui para responder qualquer dúvida restante.",
          "emailBtn": "Enviar E-mail ao Suporte"
    },
    fr: {
          "badgeText": "CENTRE D'AIDE ET BASE DE CONNAISSANCES",
          "title": "Tout ce qu'il faut savoir sur les programmes ERACEX",
          "subtitle": "Consultez les questions fréquentes sur les règles d'évaluation, la plateforme ERACEX, les frais des programmes et les conditions de retrait.",
          "feature1": "Règles claires",
          "feature2": "Transparent",
          "feature3": "Support client",
          "floatTag1": "SUPPORT",
          "floatVal1": "Contactez-nous",
          "floatTag2": "INFORMATIONS",
          "floatVal2": "FAQ",
          "browseFaq": "Consulter la FAQ",
          "liveSupport": "Assistance en direct",
          "stillQuestions": "Vous Avez Encore des Questions ?",
          "stillQuestionsDesc": "Notre équipe de support est là pour répondre à toutes vos questions restantes.",
          "emailBtn": "Écrire au support"
    },
    de: {
          "badgeText": "SUPPORT- & WISSENSCENTER",
          "title": "Alles, was Sie über die ERACEX-Programme wissen müssen",
          "subtitle": "Durchsuchen Sie die häufig gestellten Fragen zu Evaluierungsregeln, der ERACEX-Plattform, Programmgebühren und Auszahlungsbedingungen.",
          "feature1": "Klare Regeln",
          "feature2": "Transparent",
          "feature3": "Kundensupport",
          "floatTag1": "SUPPORT",
          "floatVal1": "Kontaktieren Sie uns",
          "floatTag2": "INFORMATIONEN",
          "floatVal2": "FAQ",
          "browseFaq": "FAQs Durchsuchen",
          "liveSupport": "Live-Support-Desk",
          "stillQuestions": "Haben Sie Noch Fragen?",
          "stillQuestionsDesc": "Unser Support-Team beantwortet gern alle weiteren Fragen.",
          "emailBtn": "E-Mail an den Support"
    },
    it: {
          "badgeText": "CENTRO ASSISTENZA E CONOSCENZA",
          "title": "Tutto quello che devi sapere sui programmi ERACEX",
          "subtitle": "Cerca tra le domande frequenti su regole di valutazione, piattaforma ERACEX, commissioni dei programmi e condizioni di prelievo.",
          "feature1": "Regole chiare",
          "feature2": "Trasparente",
          "feature3": "Assistenza clienti",
          "floatTag1": "ASSISTENZA",
          "floatVal1": "Contattaci",
          "floatTag2": "INFORMAZIONI",
          "floatVal2": "FAQ",
          "browseFaq": "Esplora le FAQ",
          "liveSupport": "Assistenza dal vivo",
          "stillQuestions": "Hai Ancora Domande?",
          "stillQuestionsDesc": "Il nostro team di assistenza è qui per rispondere a qualsiasi altra domanda.",
          "emailBtn": "Scrivi all'assistenza"
    },
    pl: {
          "badgeText": "CENTRUM POMOCY I WIEDZY",
          "title": "Wszystko, co musisz wiedzieć o programach ERACEX",
          "subtitle": "Przeszukaj najczęstsze pytania o zasady oceny, platformę ERACEX, opłaty za programy i warunki wypłat.",
          "feature1": "Jasne zasady",
          "feature2": "Przejrzyste",
          "feature3": "Obsługa klienta",
          "floatTag1": "WSPARCIE",
          "floatVal1": "Skontaktuj się z nami",
          "floatTag2": "INFORMACJE",
          "floatVal2": "FAQ",
          "browseFaq": "Przeglądaj Pytania i Odpowiedzi",
          "liveSupport": "Wsparcie na żywo",
          "stillQuestions": "Masz Dodatkowe Pytania?",
          "stillQuestionsDesc": "Nasz zespół wsparcia odpowie na wszystkie pozostałe pytania.",
          "emailBtn": "Napisz do wsparcia"
    },
    tr: {
          "badgeText": "DESTEK VE BİLGİ MERKEZİ",
          "title": "ERACEX Programları Hakkında Bilmeniz Gereken Her Şey",
          "subtitle": "Değerlendirme kuralları, ERACEX platformu, program ücretleri ve çekim koşullarıyla ilgili sık sorulan soruları arayın.",
          "feature1": "Net Kurallar",
          "feature2": "Şeffaf",
          "feature3": "Müşteri Desteği",
          "floatTag1": "DESTEK",
          "floatVal1": "Bize ulaşın",
          "floatTag2": "BİLGİ",
          "floatVal2": "FAQ",
          "browseFaq": "Soruları İnceleyin",
          "liveSupport": "Canlı Destek Masası",
          "stillQuestions": "Hâlâ Sorularınız mı Var?",
          "stillQuestionsDesc": "Destek ekibimiz kalan tüm sorularınızı yanıtlamak için burada.",
          "emailBtn": "Destek Ekibine E-posta Gönderin"
    },
    id: {
          "badgeText": "PUSAT BANTUAN & BASIS PENGETAHUAN",
          "title": "Semua yang Perlu Anda Ketahui Tentang Program ERACEX",
          "subtitle": "Cari pertanyaan yang sering diajukan tentang aturan evaluasi, platform ERACEX, biaya program, dan ketentuan penarikan.",
          "feature1": "Aturan yang Jelas",
          "feature2": "Transparan",
          "feature3": "Dukungan Pelanggan",
          "floatTag1": "DUKUNGAN",
          "floatVal1": "Hubungi kami",
          "floatTag2": "INFORMASI",
          "floatVal2": "FAQ",
          "browseFaq": "Jelajahi FAQ",
          "liveSupport": "Meja Dukungan Langsung",
          "stillQuestions": "Masih Memiliki Pertanyaan?",
          "stillQuestionsDesc": "Tim dukungan kami siap menjawab pertanyaan Anda yang tersisa.",
          "emailBtn": "Email ke Dukungan"
    },
    th: {
          "badgeText": "ศูนย์ช่วยเหลือและฐานความรู้",
          "title": "ทุกสิ่งที่คุณควรรู้เกี่ยวกับโปรแกรม ERACEX",
          "subtitle": "ค้นหาคำถามที่พบบ่อยเกี่ยวกับกฎการประเมิน แพลตฟอร์ม ERACEX ค่าธรรมเนียมโปรแกรม และเงื่อนไขการถอนเงิน",
          "feature1": "กฎที่ชัดเจน",
          "feature2": "โปร่งใส",
          "feature3": "ฝ่ายสนับสนุนลูกค้า",
          "floatTag1": "ฝ่ายสนับสนุน",
          "floatVal1": "ติดต่อเรา",
          "floatTag2": "ข้อมูล",
          "floatVal2": "FAQ",
          "browseFaq": "ดูคำถามที่พบบ่อยทั้งหมด",
          "liveSupport": "ฝ่ายสนับสนุนสด",
          "stillQuestions": "ยังมีคำถามที่ต้องการคำตอบเพิ่มเติมใช่หรือไม่?",
          "stillQuestionsDesc": "ทีมสนับสนุนของเราพร้อมตอบคำถามที่เหลือของคุณ",
          "emailBtn": "ส่งอีเมลถึงฝ่ายสนับสนุน"
    },
    fil: {
          "badgeText": "SUPPORT AT KNOWLEDGE DESK",
          "title": "Lahat ng Dapat Mong Malaman Tungkol sa mga Programa ng ERACEX",
          "subtitle": "Maghanap ng mga madalas itanong tungkol sa mga patakaran ng evaluation, platform ng ERACEX, bayad sa programa, at mga kondisyon sa pag-withdraw.",
          "feature1": "Malinaw na mga Patakaran",
          "feature2": "Transparent",
          "feature3": "Suporta sa Customer",
          "floatTag1": "SUPORTA",
          "floatVal1": "Makipag-ugnayan sa amin",
          "floatTag2": "IMPORMASYON",
          "floatVal2": "FAQ",
          "browseFaq": "Tingnan ang FAQs",
          "liveSupport": "Live Support Desk",
          "stillQuestions": "May mga Tanong Ka Pa Ba?",
          "stillQuestionsDesc": "Narito ang aming support team para sagutin ang anumang natitirang tanong.",
          "emailBtn": "Mag-email sa Support"
    },
    hi: {
          "badgeText": "सहायता और ज्ञान केंद्र",
          "title": "ERACEX प्रोग्राम के बारे में वह सब जो आपको जानना चाहिए",
          "subtitle": "मूल्यांकन नियमों, ERACEX प्लेटफ़ॉर्म, प्रोग्राम शुल्क और निकासी शर्तों से जुड़े अक्सर पूछे जाने वाले प्रश्न खोजें।",
          "feature1": "स्पष्ट नियम",
          "feature2": "पारदर्शी",
          "feature3": "ग्राहक सहायता",
          "floatTag1": "सहायता",
          "floatVal1": "हमसे संपर्क करें",
          "floatTag2": "जानकारी",
          "floatVal2": "FAQ",
          "browseFaq": "अक्सर पूछे जाने वाले प्रश्न देखें",
          "liveSupport": "लाइव सहायता डेस्क",
          "stillQuestions": "क्या आपके पास अभी भी प्रश्न हैं?",
          "stillQuestionsDesc": "हमारी सहायता टीम आपके बाकी सभी प्रश्नों के उत्तर देने के लिए यहाँ है।",
          "emailBtn": "सहायता को ईमेल करें"
    },
    ko: {
          "badgeText": "24/7 고객 지원 및 지식 정보 센터",
          "title": "ERACEX 프랍 펀딩에 대해 자주 묻는 질문 총정리",
          "subtitle": "챌린지 평가 규정, ERACEX 플랫폼 연동, 첫 출금 시 100% 참가비 환불 정책 및 초고속 페이아웃 방식에 관한 핵심 답변을 즉시 확인하세요.",
          "feature1": "5분 이내 신속 답변",
          "feature2": "100% 투명한 운영",
          "feature3": "24/7 실시간 상담 지원",
          "floatTag1": "평균 응답 속도",
          "floatVal1": "5분 미만",
          "floatTag2": "운영 시간",
          "floatVal2": "365일 24시간",
          "browseFaq": "자주 묻는 질문 전체보기",
          "liveSupport": "24/7 실시간 고객센터",
          "stillQuestions": "궁금한 점이 아직 남아 있으신가요?",
          "stillQuestionsDesc": "ERACEX 전문 엔지니어링 지원팀과 리스크 매니저가 24시간 언제든 친절하게 안내해 드립니다.",
          "emailBtn": "24/7 고객센터 문의 메일 보내기"
    },
    ru: {
          "badgeText": "КРУГЛОСУТОЧНЫЙ ЦЕНТР ПОДДЕРЖКИ И ЗНАНИЙ 24/7",
          "title": "Все, что вам нужно знать о проп-финансировании в ERACEX",
          "subtitle": "Мгновенный поиск ответов на частые вопросы о правилах оценки, платформе ERACEX, политике 100% возврата взноса и быстрых выплатах.",
          "feature1": "Ответ < 5 минут",
          "feature2": "100% Прозрачность",
          "feature3": "Круглосуточная помощь",
          "floatTag1": "СКОРОСТЬ ОТВЕТА",
          "floatVal1": "< 5 минут",
          "floatTag2": "ДОСТУПНОСТЬ",
          "floatVal2": "24/7 на связи",
          "browseFaq": "Посмотреть все вопросы",
          "liveSupport": "Живая поддержка 24/7",
          "stillQuestions": "Остались вопросы?",
          "stillQuestionsDesc": "Наша команда технических специалистов и трейдеров готова проконсультировать вас в любое время суток.",
          "emailBtn": "Написать в техподдержку 24/7"
    },
    ar: {
          "badgeText": "مركز المساعدة وقاعدة المعرفة 24/7",
          "title": "كل ما تحتاج معرفته عن تمويل التداول مع ERACEX",
          "subtitle": "ابحث فوراً في الأسئلة الشائعة حول قواعد التقييم، منصة ERACEX، سياسة استرداد الرسوم بنسبة 100% وطرق السحب السريعة.",
          "feature1": "الرد خلال < 5 دقائق",
          "feature2": "شفافية كاملة 100%",
          "feature3": "دعم مباشر 24/7",
          "floatTag1": "سرعة الاستجابة",
          "floatVal1": "< 5 دقائق",
          "floatTag2": "التواجد",
          "floatVal2": "مكتب 24/7",
          "browseFaq": "استعراض الأسئلة الشائعة",
          "liveSupport": "مكتب الدعم المباشر 24/7",
          "stillQuestions": "هل ما زالت لديك أسئلة؟",
          "stillQuestionsDesc": "فريق الدعم الهندسي وخبراء التداول متاحون على مدار الساعة للإجابة عن جميع استفساراتك.",
          "emailBtn": "إرسال بريد إلكتروني للدعم 24/7"
    },
    nl: {
          "badgeText": "24/7 SUPPORT & KENNISCENTRUM",
          "title": "Alles Wat U Moet Weten Over ERACEX Financiering",
          "subtitle": "Zoek direct in veelgestelde vragen over challenge-regels, ERACEX-connectiviteit, 100% restitutiebeleid en razendsnelle uitbetalingen.",
          "feature1": "< 5 Min Reactietijd",
          "feature2": "100% Transparant",
          "feature3": "24/7 Realtime Hulp",
          "floatTag1": "REACTIESNELHEID",
          "floatVal1": "< 5 Min",
          "floatTag2": "BESCHIKBAARHEID",
          "floatVal2": "24/7 Desk",
          "browseFaq": "Bekijk Alle Veelgestelde Vragen",
          "liveSupport": "Live Supportdesk 24/7",
          "stillQuestions": "Heeft U Nog Vragen?",
          "stillQuestionsDesc": "Onze technische support engineers en risicospecialisten staan 24/7 klaar om u te begeleiden.",
          "emailBtn": "E-mail 24/7 Helpdesk"
    },
  }[currentLang] || {
    badgeText: 'SUPPORT & KNOWLEDGE DESK',
    title: 'Everything You Need To Know About ERACEX Programs',
    subtitle: 'Search frequently asked questions regarding evaluation rules, the ERACEX platform, program fees and withdrawal conditions.',
    feature1: 'Clear Rules',
    feature2: 'Transparent',
    feature3: 'Customer Support',
    floatTag1: 'SUPPORT',
    floatVal1: 'Contact us',
    floatTag2: 'INFORMATION',
    floatVal2: 'FAQ',
    browseFaq: 'Browse FAQs',
    liveSupport: 'Live Support Desk',
    stillQuestions: 'Still Have Questions?',
    stillQuestionsDesc: 'Our support team is here to answer any remaining questions.',
    emailBtn: 'Email Support',
  };

  return (
    <div className="pb-16 app-bg app-text">
      {/* 1. DEDICATED FULL-VIEWPORT HERO BANNER WITH 3D ILLUSTRATION */}
      <PageHeroBanner
        badgeText={d.badgeText}
        badgeIcon={<HelpCircle className="w-4 h-4 text-[#c68a00] dark:text-[#ffc501]" />}
        title={d.title}
        subtitle={d.subtitle}
        breadcrumbs={[
          { label: t.nav.home, href: '/' },
          { label: t.nav.faq },
        ]}
        primaryCta={{
          label: d.browseFaq,
          href: '#faq',
          icon: <HelpCircle className="w-5 h-5 fill-black text-[#f6bf4a]" />,
        }}
        features={[
          { icon: <MessageSquare className="w-4 h-4" />, text: d.feature1 },
          { icon: <CheckCircle2 className="w-4 h-4" />, text: d.feature2 },
          { icon: <Send className="w-4 h-4" />, text: d.feature3 },
        ]}
        imageSrc="/images/banner-faq-3d.jpg"
        imageAlt="ERACEX Support Desk"
        floatingBadge1={{
          tag: d.floatTag1,
          value: d.floatVal1,
          icon: <MessageSquare className="w-5 h-5" />,
        }}
        floatingBadge2={{
          tag: d.floatTag2,
          value: d.floatVal2,
          icon: <Send className="w-5 h-5" />,
        }}
      />

      {/* 2. CORE FAQ COMPONENT */}
      <FaqSection />

      <ImageBand caption="rules" variant="wide" images={[{ src: '/images/eracex-f1-banner.jpg', alt: 'ERACEX Trusted by Traders' }]} />

      {/* 3. STILL HAVE QUESTIONS CONTACT DESK (FULL-WIDTH) */}
      <section className="py-16 border-t app-border app-subtle w-full">
        <div className="w-full max-w-[1400px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 text-center">
          <div className="p-8 sm:p-12 rounded-3xl border app-border-gold app-surface shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#f6bf4a]/15 dark:bg-[#ffc501]/10 flex items-center justify-center text-[#c68a00] dark:text-[#ffc501] mx-auto mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3 app-text">
              {d.stillQuestions}
            </h3>
            <p className="text-sm max-w-xl mx-auto mb-8 app-text-secondary">
              {d.stillQuestionsDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.brand.supportEmail}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl btn-outline-gold text-xs font-bold"
              >
                <Mail className="w-4 h-4" />
                <span>{d.emailBtn}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
