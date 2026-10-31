const fs = require('fs');

const faqHelpExtra = {
  vi: {
    desc: 'Đội ngũ chuyên viên quản lý rủi ro và kỹ thuật hỗ trợ xuyên suốt 24/7 qua Live Chat, Telegram và Discord.',
    emailSupport: 'Gửi Email Hỗ Trợ',
  },
  zh: {
    desc: 'ERACEX 技术团队与风控交易员 24/7 全天候在线，随时为您提供专业支持。',
    emailSupport: '发送客服邮件',
  },
  ja: {
    desc: 'リスク管理およびテクニカルサポートチームが24時間年中無休で対応します。',
    emailSupport: 'サポートメールを送信',
  },
  en: {
    desc: 'Our dedicated risk management and technical desk are available 24/7 to assist you.',
    emailSupport: 'Email Support',
  },
  es: {
    desc: 'Nuestro equipo de gestión de riesgo y soporte técnico está disponible 24/7 para asistirte.',
    emailSupport: 'Enviar Correo al Soporte',
  },
  pt: {
    desc: 'Nossa equipe de gerenciamento de risco e suporte técnico está disponível 24/7 para ajudar você.',
    emailSupport: 'Enviar E-mail de Suporte',
  },
  fr: {
    desc: 'Notre équipe de gestion des risques et de support technique est disponible 24h/24 et 7j/7 pour vous aider.',
    emailSupport: 'Envoyer un E-mail au Support',
  },
  de: {
    desc: 'Unser Risikomanagement- und technisches Support-Team steht Ihnen rund um die Uhr zur Verfügung.',
    emailSupport: 'E-Mail an Support Senden',
  },
  it: {
    desc: 'Il nostro team di gestione del rischio e supporto tecnico è disponibile 24 ore su 24 per assisterti.',
    emailSupport: 'Invia E-mail al Supporto',
  },
  pl: {
    desc: 'Nasz zespół ds. zarządzania ryzykiem i wsparcia technicznego jest dostępny 24/7, by Ci pomóc.',
    emailSupport: 'Napisz do Pomocy',
  },
  tr: {
    desc: 'Risk yönetimi ve teknik destek uzmanlarımız size yardımcı olmak için 7/24 hizmetinizdedir.',
    emailSupport: 'Destek E-postası Gönder',
  },
  id: {
    desc: 'Tim manajemen risiko dan dukungan teknis kami siap membantu Anda 24/7 sepanjang waktu.',
    emailSupport: 'Kirim Email Bantuan',
  },
  th: {
    desc: 'ทีมวิศวกรและผู้เชี่ยวชาญด้านความเสี่ยงของ ERACEX พร้อมดูแลและให้ความช่วยเหลือคุณตลอด 24 ชั่วโมง',
    emailSupport: 'ส่งอีเมลหาฝ่ายซัพพอร์ต',
  },
  fil: {
    desc: 'Ang aming risk management at technical desk ay laging handang tumulong sa iyo 24/7.',
    emailSupport: 'Mag-email sa Suporta',
  },
  hi: {
    desc: 'हमारी समर्पित जोखिम प्रबंधन और तकनीकी सहायता टीम आपकी सहायता के लिए 24/7 उपलब्ध है।',
    emailSupport: 'सहायता ईमेल भेजें',
  },
  ko: {
    desc: 'ERACEX 전문 리스크 관리팀과 기술 지원 센터가 365일 24시간 언제든 친절히 지원합니다.',
    emailSupport: '고객센터 이메일 문의',
  },
  ru: {
    desc: 'Наша команда риск-менеджеров и технических специалистов готова помочь вам круглосуточно 24/7.',
    emailSupport: 'Написать в техподдержку',
  },
  ar: {
    desc: 'فريقنا المخصص لإدارة المخاطر والدعم الفني متاح على مدار الساعة طوال أيام الأسبوع لمساعدتك.',
    emailSupport: 'إرسال بريد إلكتروني للدعم',
  },
  nl: {
    desc: 'Ons gespecialiseerde risicobeheer- en technische supportteam staat 24/7 klaar om u te ondersteunen.',
    emailSupport: 'E-mail Klantenservice',
  },
};

let code = fs.readFileSync('components/eracex/FaqSection.tsx', 'utf8').replace(/\r\n/g, '\n');

// Add dictionary before export const FaqSection
const dictStr = `const FAQ_HELP_DICT: Record<string, { desc: string; emailSupport: string }> = ${JSON.stringify(faqHelpExtra, null, 2)};\n\n`;
code = code.replace('export const FaqSection: React.FC', dictStr + 'export const FaqSection: React.FC');

// Inside component
code = code.replace('const { t, currentLang } = useLanguage();', 'const { t, currentLang } = useLanguage();\n  const faqHelp = FAQ_HELP_DICT[currentLang] || FAQ_HELP_DICT[\'en\'];');

// Replace desc ternary
const oldDesc = `{currentLang === 'vi'
                  ? 'Đội ngũ chuyên viên quản lý rủi ro và kỹ thuật hỗ trợ xuyên suốt 24/7 qua Live Chat, Telegram và Discord.'
                  : currentLang === 'zh'
                  ? 'ERACEX 技术团队与风控交易员 24/7 全天候在线，随时为您提供专业支持。'
                  : currentLang === 'ja'
                  ? 'リスク管理およびテクニカルサポートチームが24時間年中無休で対応します。'
                  : 'Our dedicated risk management and technical desk are available 24/7 to assist you.'}`;

code = code.replace(oldDesc, '{faqHelp.desc}');

// Replace emailSupport ternary
const oldEmail = `<span>{currentLang === 'vi' ? 'Gửi Email Hỗ Trợ' : currentLang === 'zh' ? '发送客服邮件' : 'Email Support'}</span>`;
code = code.replace(oldEmail, '<span>{faqHelp.emailSupport}</span>');

fs.writeFileSync('components/eracex/FaqSection.tsx', code, 'utf8');
console.log('Successfully updated FaqSection.tsx with 19 languages');
