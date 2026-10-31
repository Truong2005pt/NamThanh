const fs = require('fs');

const uiDict = {
  vi: {
    vipBadge: 'ĐỐI TÁC LÀ VIP',
    title: 'Thưởng Cột Mốc',
    subtitle: 'Phần thưởng lớn dành cho mọi đối tác.',
    milestone: 'CỘT MỐC',
    reward: 'Phần thưởng',
    estValue: 'Giá trị ước tính',
    target: 'Mục tiêu doanh thu',
    faqTitle: 'Câu Hỏi Thường Gặp Về Đối Tác',
  },
  en: {
    vipBadge: 'AT ERACEX YOU ARE A VIP',
    title: 'Milestone Bonuses',
    subtitle: 'Massive rewards available for every affiliate.',
    milestone: 'MILESTONE',
    reward: 'Reward',
    estValue: 'Estimated value',
    target: 'Target volume',
    faqTitle: 'Affiliate Frequently Asked Questions',
  },
  zh: {
    vipBadge: '在 ERACEX 您尊享 VIP 礼遇',
    title: '阶段里程碑大奖',
    subtitle: '为每一位达成阶梯业绩的合作伙伴准备的丰厚专属实物奖励。',
    milestone: '里程碑',
    reward: '奖励内容',
    estValue: '预估价值',
    target: '目标考核规模',
    faqTitle: '合伙人计划常见疑问',
  },
  ja: {
    vipBadge: 'ERACEX ではパートナー様全員が VIP です',
    title: 'マイルストーンボーナス',
    subtitle: 'すべての提携パートナー様に豪華な実績報酬をご用意。',
    milestone: 'マイルストーン',
    reward: '特典報酬',
    estValue: '推定価値',
    target: '目標達成高',
    faqTitle: 'アフィリエイトに関するよくある質問',
  },
  es: {
    vipBadge: 'EN ERACEX ERES UN VIP',
    title: 'Bonos por Hitos Alcanzados',
    subtitle: 'Grandes recompensas exclusivas para cada afiliado.',
    milestone: 'HITO',
    reward: 'Recompensa',
    estValue: 'Valor estimado',
    target: 'Volumen objetivo',
    faqTitle: 'Preguntas Frecuentes de Afiliados',
  },
  pt: {
    vipBadge: 'NA ERACEX VOCÊ É UM VIP',
    title: 'Bônus por Metas Batidas',
    subtitle: 'Recompensas exclusivas para cada parceiro de sucesso.',
    milestone: 'META',
    reward: 'Recompensa',
    estValue: 'Valor estimado',
    target: 'Meta de volume',
    faqTitle: 'Perguntas Frequentes de Afiliados',
  },
  fr: {
    vipBadge: 'CHEZ ERACEX, VOUS ÊTES UN VIP',
    title: 'Bonus de Paliers de Réussite',
    subtitle: 'De superbes récompenses physiques pour tous nos partenaires.',
    milestone: 'PALIER',
    reward: 'Récompense',
    estValue: 'Valeur estimée',
    target: 'Volume cible',
    faqTitle: 'Foire Aux Questions Affiliation',
  },
  de: {
    vipBadge: 'BEI ERACEX SIND SIE EIN VIP',
    title: 'Meilenstein-Prämien',
    subtitle: 'Attraktive Sachprämien für jeden erfolgreichen Partner.',
    milestone: 'MEILENSTEIN',
    reward: 'Prämie',
    estValue: 'Geschätzter Wert',
    target: 'Umsatzziel',
    faqTitle: 'Häufig Gestellte Fragen zum Partnerprogramm',
  },
  it: {
    vipBadge: 'SU ERACEX SEI UN VIP',
    title: 'Bonus per Obiettivi Raggiunti',
    subtitle: 'Premi esclusivi dedicati a tutti i nostri partner affiliati.',
    milestone: 'TRAGUARDO',
    reward: 'Premio',
    estValue: 'Valore stimato',
    target: 'Obiettivo volume',
    faqTitle: 'Domande Frequenti per Affiliati',
  },
  pl: {
    vipBadge: 'W ERACEX JESTEŚ VIP-EM',
    title: 'Premie za Kamienie Milowe',
    subtitle: 'Ekskluzywne nagrody rzeczowe dla każdego aktywnego partnera.',
    milestone: 'KAMIEŃ',
    reward: 'Nagroda',
    estValue: 'Szacunkowa wartość',
    target: 'Cel obrotu',
    faqTitle: 'Często Zadawane Pytania o Program Partnerski',
  },
  tr: {
    vipBadge: 'ERACEX’TE BİR VIP’SİNİZ',
    title: 'Başarı Kademesi Primleri',
    subtitle: 'Her iş ortağı için ayrılmış prestijli ödüller.',
    milestone: 'AŞAMA',
    reward: 'Ödül',
    estValue: 'Tahmini değer',
    target: 'Hedef hacim',
    faqTitle: 'Ortaklık Programı SSS',
  },
  id: {
    vipBadge: 'DI ERACEX ANDA ADALAH VIP',
    title: 'Bonus Pencapaian Milestone',
    subtitle: 'Hadiah istimewa yang siap diraih oleh setiap mitra.',
    milestone: 'MILESTONE',
    reward: 'Hadiah',
    estValue: 'Perkiraan nilai',
    target: 'Target omzet',
    faqTitle: 'Pertanyaan Umum Program Afiliasi',
  },
  th: {
    vipBadge: 'ที่ ERACEX คุณคือคนสำคัญระดับ VIP',
    title: 'โบนัสพิชิตเป้าหมายยอดขาย',
    subtitle: 'รางวัลสุดพิเศษสำหรับพันธมิตรที่สร้างยอดขายได้ตามเป้าหมาย',
    milestone: 'เป้าหมายที่',
    reward: 'ของรางวัล',
    estValue: 'มูลค่าประเมิน',
    target: 'ยอดขายเป้าหมาย',
    faqTitle: 'คำถามที่พบบ่อยเกี่ยวกับระบบพันธมิตร',
  },
  fil: {
    vipBadge: 'SA ERACEX IKAW AY ISANG VIP',
    title: 'Mga Bonus sa Milestone',
    subtitle: 'Napakalaking premyo para sa bawat kasosyo.',
    milestone: 'MILESTONE',
    reward: 'Gantimpala',
    estValue: 'Tantiyang halaga',
    target: 'Target na dami',
    faqTitle: 'Mga Madalas Itanong sa Affiliate',
  },
  hi: {
    vipBadge: 'ERACEX में आप एक VIP हैं',
    title: 'मील का पत्थर बोनस',
    subtitle: 'प्रत्येक सहयोगी साथी के लिए शानदार पुरस्कार उपलब्ध हैं।',
    milestone: 'मील का पत्थर',
    reward: 'पुरस्कार',
    estValue: 'अनुमानित मूल्य',
    target: 'लक्ष्य मात्रा',
    faqTitle: 'सहबद्ध कार्यक्रम अक्सर पूछे जाने वाले प्रश्न',
  },
  ko: {
    vipBadge: 'ERACEX에서 파트너는 언제나 VIP입니다',
    title: '목표 달성 마일스톤 보너스',
    subtitle: '목표 실적을 달성한 모든 파트너를 위한 최고급 실물 리워드 지원.',
    milestone: '마일스톤',
    reward: '지급 리워드',
    estValue: '추정 가치',
    target: '목표 매출 규모',
    faqTitle: '공식 파트너십 제휴 FAQ',
  },
  ru: {
    vipBadge: 'В ERACEX ВЫ НАСТОЯЩИЙ VIP',
    title: 'Бонусы за достижение целей',
    subtitle: 'Ценные награды для каждого успешного партнера.',
    milestone: 'ЭТАП',
    reward: 'Награда',
    estValue: 'Примерная стоимость',
    target: 'Целевой объем',
    faqTitle: 'Часто задаваемые вопросы по партнерству',
  },
  ar: {
    vipBadge: 'في ERACEX أنت عميل VIP مميز',
    title: 'مكافآت تحقيق الأهداف الكبرى',
    subtitle: 'جوائز مادية قيمة متاحة لكل شريك مميز.',
    milestone: 'المرحلة',
    reward: 'الجائزة',
    estValue: 'القيمة التقديرية',
    target: 'الهدف المطلوب',
    faqTitle: 'الأسئلة الشائعة حول برنامج الشركاء',
  },
  nl: {
    vipBadge: 'BIJ ERACEX BENT U EEN VIP',
    title: 'Mijlpaalbonussen',
    subtitle: 'Grote exclusieve beloningen voor elke actieve partner.',
    milestone: 'MIJLPAAL',
    reward: 'Beloning',
    estValue: 'Geschatte waarde',
    target: 'Doelvolume',
    faqTitle: 'Veelgestelde Vragen Partnerprogramma',
  },
};

let code = fs.readFileSync('components/eracex/AffiliateMilestonesFaq.tsx', 'utf8').replace(/\r\n/g, '\n');

// Add UI dict
const dictCode = `const UI_DICT: Record<string, typeof uiDict.en> = ${JSON.stringify(uiDict, null, 2)};\n\n`;
code = code.replace('export const AffiliateMilestonesFaq: React.FC', dictCode + 'export const AffiliateMilestonesFaq: React.FC');

// Replace inner component logic
const oldInner = `  const { currentLang } = useLanguage();
  const vi = currentLang === 'vi';
  const [open, setOpen] = useState<number | null>(0);
  const faq = vi ? FAQ.vi : FAQ.en;`;

const newInner = `  const { currentLang } = useLanguage();
  const vi = currentLang === 'vi';
  const [open, setOpen] = useState<number | null>(0);
  const faq = vi ? FAQ.vi : FAQ.en;
  const ui = UI_DICT[currentLang] || UI_DICT['en'];`;

code = code.replace(oldInner, newInner);

// Replace UI labels
code = code.replace("{vi ? 'ĐỐI TÁC LÀ VIP' : 'AT ERACEX YOU ARE A VIP'}", '{ui.vipBadge}');
code = code.replace("{vi ? 'Thưởng Cột Mốc' : 'Milestone Bonuses'}", '{ui.title}');
code = code.replace("{vi ? 'Phần thưởng lớn dành cho mọi đối tác.' : 'Massive rewards available for every affiliate.'}", '{ui.subtitle}');
code = code.replace("{vi ? 'CỘT MỐC' : 'MILESTONE'} {i + 1}", '{ui.milestone} {i + 1}');
code = code.replace("{vi ? 'Phần thưởng' : 'Reward'}: {reward}", '{ui.reward}: {reward}');
code = code.replace("{vi ? 'Giá trị ước tính' : 'Estimated value'}:", '{ui.estValue}:');
code = code.replace("{vi ? 'Mục tiêu doanh thu' : 'Target'}:", '{ui.target}:');
code = code.replace("{vi ? 'Câu Hỏi Thường Gặp Về Đối Tác' : 'Affiliate Frequently Asked Questions'}", '{ui.faqTitle}');

fs.writeFileSync('components/eracex/AffiliateMilestonesFaq.tsx', code, 'utf8');
console.log('Successfully updated AffiliateMilestonesFaq.tsx with 19 languages');
