const fs = require('fs');

const filePath = 'components/eracex/CompetitionBanner.tsx';

const newCode = `'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';
import { GftIcon } from './GftIcon';
import { ArrowRight, Medal } from 'lucide-react';

const COMPETITION_BANNER_DICT: Record<string, {
  titlePrefix: string;
  titleHighlight: string;
  desc: string;
  countdownTitle: string;
  days: string;
  hours: string;
  mins: string;
  secs: string;
  rank1: string;
  rank1Prize: string;
  rank2: string;
  rank2Prize: string;
  rank3: string;
  rank3Prize: string;
  btnJoin: string;
  btnRules: string;
  badgeParticipants: string;
}> = {
  "vi": {
    "titlePrefix": "Cuộc Thi Giao Dịch ",
    "titleHighlight": "Tháng Miễn Phí",
    "desc": "Tranh tài cùng hàng ngàn trader toàn cầu, khẳng định kỹ năng quản lý rủi ro và nhận tài khoản cấp vốn lên đến $100,000 cùng tiền mặt rút trực tiếp về tài khoản.",
    "countdownTitle": "Thời Gian Còn Lại Để Đăng Ký",
    "days": "Ngày",
    "hours": "Giờ",
    "mins": "Phút",
    "secs": "Giây",
    "rank1": "Hạng Nhất",
    "rank1Prize": "$100K Vốn + $3,000",
    "rank2": "Hạng Nhì",
    "rank2Prize": "$50K Vốn + $1,500",
    "rank3": "Hạng Ba",
    "rank3Prize": "$25K Vốn + $500",
    "btnJoin": "Đăng Ký Tham Gia Miễn Phí",
    "btnRules": "Xem Quy Tắc Thi Đấu",
    "badgeParticipants": "4,820+ Trader Đã Tham Gia"
  },
  "en": {
    "titlePrefix": "Monthly Trading ",
    "titleHighlight": "Competition",
    "desc": "Compete against thousands of global traders, showcase your risk management skills, and win up to a $100,000 Funded Account plus direct withdrawable cash rewards.",
    "countdownTitle": "Time Remaining to Register",
    "days": "Days",
    "hours": "Hours",
    "mins": "Mins",
    "secs": "Secs",
    "rank1": "1st Place",
    "rank1Prize": "$100K Funded + $3,000",
    "rank2": "2nd Place",
    "rank2Prize": "$50K Funded + $1,500",
    "rank3": "3rd Place",
    "rank3Prize": "$25K Funded + $500",
    "btnJoin": "Join Competition for Free",
    "btnRules": "Competition Rules",
    "badgeParticipants": "4,820+ Traders Joined"
  },
  "zh": {
    "titlePrefix": "月度自营交易 ",
    "titleHighlight": "免费锦标赛",
    "desc": "与全球数千名交易员同台竞技，展现卓越的风控能力，赢取高达 $100,000 规模的资助实盘账户以及可直接提取的现金大奖。",
    "countdownTitle": "本期赛季报名倒计时",
    "days": "天",
    "hours": "时",
    "mins": "分",
    "secs": "秒",
    "rank1": "冠军",
    "rank1Prize": "$100K 资助 + $3,000",
    "rank2": "亚军",
    "rank2Prize": "$50K 资助 + $1,500",
    "rank3": "季军",
    "rank3Prize": "$25K 资助 + $500",
    "btnJoin": "免费报名参赛",
    "btnRules": "比赛风控规则",
    "badgeParticipants": "4,820+ 交易员已参赛"
  },
  "ja": {
    "titlePrefix": "月間トレード ",
    "titleHighlight": "無料大会",
    "desc": "世界中のトレーダーと腕を競い、優れたリスク管理スキルを発揮して、最大 $100,000 の資金口座と即時出金可能な賞金を獲得しましょう。",
    "countdownTitle": "大会エントリー締め切りまで",
    "days": "日",
    "hours": "時間",
    "mins": "分",
    "secs": "秒",
    "rank1": "優勝",
    "rank1Prize": "$100K 資金 + $3,000",
    "rank2": "準優勝",
    "rank2Prize": "$50K 資金 + $1,500",
    "rank3": "第3位",
    "rank3Prize": "$25K 資金 + $500",
    "btnJoin": "無料でエントリー",
    "btnRules": "大会ルールを見る",
    "badgeParticipants": "4,820名以上のトレーダーが参加"
  },
  "ko": {
    "titlePrefix": "월간 글로벌 트레이딩 ",
    "titleHighlight": "무료 챔피언십",
    "desc": "전 세계 수천 명의 트레이더들과 경쟁하고 정교한 리스크 관리를 입증하여 최대 $100,000 펀딩 계정과 즉시 인출 가능한 상금을 획득하세요.",
    "countdownTitle": "이번 시즌 참가 신청 마감까지",
    "days": "일",
    "hours": "시간",
    "mins": "분",
    "secs": "초",
    "rank1": "1위 (우승)",
    "rank1Prize": "$100K 펀딩 + $3,000",
    "rank2": "2위 (준우승)",
    "rank2Prize": "$50K 펀딩 + $1,500",
    "rank3": "3위",
    "rank3Prize": "$25K 펀딩 + $500",
    "btnJoin": "무료 참가 신청하기",
    "btnRules": "대회 규정 및 규칙",
    "badgeParticipants": "4,820+ 트레이더 참가 중"
  },
  "es": {
    "titlePrefix": "Competición Mensual de Trading ",
    "titleHighlight": "100% Gratuita",
    "desc": "Compite con miles de traders globales, demuestra tu maestría en gestión de riesgo y gana hasta una cuenta financiada de $100,000 más premios en efectivo directo.",
    "countdownTitle": "Tiempo Restante para Inscribirse",
    "days": "Días",
    "hours": "Horas",
    "mins": "Min",
    "secs": "Seg",
    "rank1": "1.er Lugar",
    "rank1Prize": "$100K Fondeada + $3,000",
    "rank2": "2.º Lugar",
    "rank2Prize": "$50K Fondeada + $1,500",
    "rank3": "3.er Lugar",
    "rank3Prize": "$25K Fondeada + $500",
    "btnJoin": "Inscribirme Gratis",
    "btnRules": "Reglas del Torneo",
    "badgeParticipants": "4,820+ Traders Inscritos"
  },
  "pt": {
    "titlePrefix": "Competição Mensal de Trading ",
    "titleHighlight": "100% Gratuita",
    "desc": "Dispute com milhares de traders do mundo todo, comprove sua gestão de risco e conquiste até uma conta financiada de $100.000 mais prêmios em dinheiro líquido.",
    "countdownTitle": "Tempo Restante para Inscrição",
    "days": "Dias",
    "hours": "Horas",
    "mins": "Min",
    "secs": "Seg",
    "rank1": "1º Lugar",
    "rank1Prize": "$100K Financiada + $3.000",
    "rank2": "2º Lugar",
    "rank2Prize": "$50K Financiada + $1.500",
    "rank3": "3º Lugar",
    "rank3Prize": "$25K Financiada + $500",
    "btnJoin": "Participar Gratuitamente",
    "btnRules": "Regras da Competição",
    "badgeParticipants": "4.820+ Traders Inscritos"
  },
  "fr": {
    "titlePrefix": "Compétition Mensuelle de Trading ",
    "titleHighlight": "100% Gratuite",
    "desc": "Affrontez des milliers de traders du monde entier, démontrez votre gestion du risque et remportez un compte financé de $100,000 plus des récompenses en cash.",
    "countdownTitle": "Temps Restant pour S'inscrire",
    "days": "Jours",
    "hours": "Heures",
    "mins": "Min",
    "secs": "Sec",
    "rank1": "1ère Place",
    "rank1Prize": "$100K Financé + $3,000",
    "rank2": "2ème Place",
    "rank2Prize": "$50K Financé + $1,500",
    "rank3": "3ème Place",
    "rank3Prize": "$25K Financé + $500",
    "btnJoin": "Rejoindre Gratuitement",
    "btnRules": "Règles du Concours",
    "badgeParticipants": "4 820+ Traders Inscrits"
  },
  "de": {
    "titlePrefix": "Monatlicher Trading-",
    "titleHighlight": "Wettbewerb (Kostenlos)",
    "desc": "Messen Sie sich mit tausenden globalen Tradern, beweisen Sie exzellentes Risikomanagement und gewinnen Sie bis zu ein $100.000 Funded-Konto plus direkte Geldpreise.",
    "countdownTitle": "Verbleibende Zeit zur Registrierung",
    "days": "Tage",
    "hours": "Std",
    "mins": "Min",
    "secs": "Sek",
    "rank1": "1. Platz",
    "rank1Prize": "$100K Funded + $3.000",
    "rank2": "2. Platz",
    "rank2Prize": "$50K Funded + $1.500",
    "rank3": "3. Platz",
    "rank3Prize": "$25K Funded + $500",
    "btnJoin": "Kostenlos Teilnehmen",
    "btnRules": "Turnierregeln",
    "badgeParticipants": "4.820+ Trader Registriert"
  },
  "ru": {
    "titlePrefix": "Ежемесячный Торговый ",
    "titleHighlight": "Турнир (Бесплатно)",
    "desc": "Соревнуйтесь с тысячами трейдеров со всего мира, продемонстрируйте мастерство риск-менеджмента и выиграйте счет на $100,000 плюс денежные призы.",
    "countdownTitle": "Осталось времени до конца регистрации",
    "days": "Дней",
    "hours": "Часов",
    "mins": "Мин",
    "secs": "Сек",
    "rank1": "1-е Место",
    "rank1Prize": "$100K Счет + $3,000",
    "rank2": "2-е Место",
    "rank2Prize": "$50K Счет + $1,500",
    "rank3": "3-е Место",
    "rank3Prize": "$25K Счет + $500",
    "btnJoin": "Участвовать Бесплатно",
    "btnRules": "Правила Турнира",
    "badgeParticipants": "4,820+ Трейдеров в Игре"
  },
  "it": {
    "titlePrefix": "Competizione Mensile di Trading ",
    "titleHighlight": "100% Gratuita",
    "desc": "Competi contro migliaia di trader globali, dimostra le tue doti di gestione del rischio e vinci un conto finanziato fino a $100.000 oltre a premi in denaro reale.",
    "countdownTitle": "Tempo Rimanente per Iscriversi",
    "days": "Giorni",
    "hours": "Ore",
    "mins": "Min",
    "secs": "Sec",
    "rank1": "1° Posto",
    "rank1Prize": "$100K Finanziato + $3.000",
    "rank2": "2° Posto",
    "rank2Prize": "$50K Finanziato + $1.500",
    "rank3": "3° Posto",
    "rank3Prize": "$25K Finanziato + $500",
    "btnJoin": "Iscriviti Gratis",
    "btnRules": "Regolamento Torneo",
    "badgeParticipants": "4.820+ Trader Iscritti"
  },
  "ar": {
    "titlePrefix": "مسابقة التداول الشهرية ",
    "titleHighlight": "المجانية بالكامل",
    "desc": "تنافس ضد آلاف المتداولين حول العالم، وأثبت مهاراتك في إدارة المخاطر واربح حساباً ممولاً يصل إلى $100,000 بالإضافة إلى جوائز نقدية قابلة للسحب المباشر.",
    "countdownTitle": "الوقت المتبقي للتسجيل في المسابقة",
    "days": "أيام",
    "hours": "ساعات",
    "mins": "دقائق",
    "secs": "ثواني",
    "rank1": "المركز الأول",
    "rank1Prize": "حساب $100K + $3,000",
    "rank2": "المركز الثاني",
    "rank2Prize": "حساب $50K + $1,500",
    "rank3": "المركز الثالث",
    "rank3Prize": "حساب $25K + $500",
    "btnJoin": "التسجيل في المسابقة مجاناً",
    "btnRules": "قواعد وشروط المسابقة",
    "badgeParticipants": "4,820+ متداول انضموا بالفعل"
  },
  "tr": {
    "titlePrefix": "Aylık Fonlu İşlem ",
    "titleHighlight": "Ücretsiz Yarışması",
    "desc": "Dünya genelinde binlerce yatırımcıyla yarışın, risk yönetimi yeteneğinizi kanıtlayın ve $100.000'a kadar Fonlu Hesap ile anında çekilebilir nakit ödüller kazanın.",
    "countdownTitle": "Kayıt İçin Kalan Süre",
    "days": "Gün",
    "hours": "Saat",
    "mins": "Dak",
    "secs": "San",
    "rank1": "1.lik Ödülü",
    "rank1Prize": "$100K Fon + $3.000",
    "rank2": "2.lik Ödülü",
    "rank2Prize": "$50K Fon + $1.500",
    "rank3": "3.lük Ödülü",
    "rank3Prize": "$25K Fon + $500",
    "btnJoin": "Ücretsiz Kaydol ve Yarış",
    "btnRules": "Yarışma Kuralları",
    "badgeParticipants": "4.820+ Yatırımcı Katıldı"
  },
  "th": {
    "titlePrefix": "การแข่งขันเทรดประจำเดือน ",
    "titleHighlight": "เข้าร่วมฟรี 100%",
    "desc": "ประลองฝีมือกับเทรดเดอร์ระดับโลกนับพันคน แสดงทักษะการบริหารความเสี่ยงระดับเซียน และลุ้นรับพอร์ตทุนสูงสุด $100,000 พร้อมเงินสดถอนได้ทันที",
    "countdownTitle": "เวลานับถอยหลังปิดรับสมัคร",
    "days": "วัน",
    "hours": "ชั่วโมง",
    "mins": "นาที",
    "secs": "วินาที",
    "rank1": "อันดับ 1",
    "rank1Prize": "พอร์ต $100K + เงินสด $3,000",
    "rank2": "อันดับ 2",
    "rank2Prize": "พอร์ต $50K + เงินสด $1,500",
    "rank3": "อันดับ 3",
    "rank3Prize": "พอร์ต $25K + เงินสด $500",
    "btnJoin": "สมัครเข้าร่วมแข่งขันฟรี",
    "btnRules": "ดูกฎกติกาการแข่งขัน",
    "badgeParticipants": "เทรดเดอร์เข้าร่วมแล้ว 4,820+ คน"
  },
  "id": {
    "titlePrefix": "Kompetisi Trading Bulanan ",
    "titleHighlight": "100% Gratis",
    "desc": "Bersaing dengan ribuan trader global, tunjukkan keahlian manajemen risiko Anda, dan menangkan Akun Funded hingga $100.000 plus hadiah uang tunai langsung.",
    "countdownTitle": "Waktu Tersisa untuk Mendaftar",
    "days": "Hari",
    "hours": "Jam",
    "mins": "Menit",
    "secs": "Detik",
    "rank1": "Juara 1",
    "rank1Prize": "Akun $100K + $3.000",
    "rank2": "Juara 2",
    "rank2Prize": "Akun $50K + $1.500",
    "rank3": "Juara 3",
    "rank3Prize": "Akun $25K + $500",
    "btnJoin": "Daftar Kompetisi Gratis",
    "btnRules": "Aturan Kompetisi",
    "badgeParticipants": "4.820+ Trader Bergabung"
  },
  "hi": {
    "titlePrefix": "मासिक ट्रेडिंग ",
    "titleHighlight": "मुफ्त प्रतियोगिता",
    "desc": "हजारों वैश्विक ट्रेडर्स के साथ प्रतिस्पर्धा करें, अपने जोखिम प्रबंधन कौशल का प्रदर्शन करें और $100,000 तक का फंडेड खाता और नकद पुरस्कार जीतें।",
    "countdownTitle": "पंजीकरण के लिए शेष समय",
    "days": "दिन",
    "hours": "घंटे",
    "mins": "मिनट",
    "secs": "सेकंड",
    "rank1": "प्रथम स्थान",
    "rank1Prize": "$100K फंडेड + $3,000",
    "rank2": "द्वितीय स्थान",
    "rank2Prize": "$50K फंडेड + $1,500",
    "rank3": "तृतीय स्थान",
    "rank3Prize": "$25K फंडेड + $500",
    "btnJoin": "मुफ्त में भाग लें",
    "btnRules": "प्रतियोगिता नियम",
    "badgeParticipants": "4,820+ ट्रेडर्स जुड़े"
  },
  "pl": {
    "titlePrefix": "Miesięczny Turniej Tradingowy ",
    "titleHighlight": "Całkowicie Bezpłatny",
    "desc": "Rywalizuj z tysiącami traderów z całego świata, wykaż się mistrzowskim zarządzaniem ryzykiem i wygraj konto ufundowane do $100.000 oraz nagrody gotówkowe.",
    "countdownTitle": "Czas Pozostały do Końca Rejestracji",
    "days": "Dni",
    "hours": "Godz",
    "mins": "Min",
    "secs": "Sek",
    "rank1": "1. Miejsce",
    "rank1Prize": "$100K Konto + $3.000",
    "rank2": "2. Miejsce",
    "rank2Prize": "$50K Konto + $1.500",
    "rank3": "3. Miejsce",
    "rank3Prize": "$25K Konto + $500",
    "btnJoin": "Dołącz Bezpłatnie",
    "btnRules": "Regulamin Turnieju",
    "badgeParticipants": "4.820+ Uczestników w Grze"
  },
  "nl": {
    "titlePrefix": "Maandelijkse Handelscompetitie ",
    "titleHighlight": "100% Gratis",
    "desc": "Neem het op tegen duizenden wereldwijde traders, toon je risicobeheer en win tot wel $100.000 aan Funded Accounts plus directe contante geldprijzen.",
    "countdownTitle": "Resterende Tijd om In te Schrijven",
    "days": "Dagen",
    "hours": "Uur",
    "mins": "Min",
    "secs": "Sec",
    "rank1": "1e Plaats",
    "rank1Prize": "$100K Funded + $3.000",
    "rank2": "2e Plaats",
    "rank2Prize": "$50K Funded + $1.500",
    "rank3": "3e Plaats",
    "rank3Prize": "$25K Funded + $500",
    "btnJoin": "Gratis Deelnemen",
    "btnRules": "Competitieregels",
    "badgeParticipants": "4.820+ Traders Aangemeld"
  },
  "fil": {
    "titlePrefix": "Buwanang Paligsahan sa Trading ",
    "titleHighlight": "Libre para sa Lahat",
    "desc": "Makipagpaligsahan sa libo-libong pandaigdigang trader, patunayan ang galing sa risk management, at manalo ng hanggang $100,000 Funded Account kasama ang cash prize.",
    "countdownTitle": "Natitirang Oras para Magparehistro",
    "days": "Araw",
    "hours": "Oras",
    "mins": "Min",
    "secs": "Seg",
    "rank1": "Unang Gantimpala",
    "rank1Prize": "$100K Puhunan + $3,000",
    "rank2": "Pangalawang Gantimpala",
    "rank2Prize": "$50K Puhunan + $1,500",
    "rank3": "Pangatlong Gantimpala",
    "rank3Prize": "$25K Puhunan + $500",
    "btnJoin": "Sumali nang Libre",
    "btnRules": "Mga Alituntunin",
    "badgeParticipants": "4,820+ Traders ang Sumali"
  }
};

export const CompetitionBanner: React.FC = () => {
  const { currentLang } = useLanguage();
  const d = COMPETITION_BANNER_DICT[currentLang] || COMPETITION_BANNER_DICT['en'];

  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 18,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden app-bg border-t app-border" id="competition">
      <div className="w-full max-w-[1760px] 2xl:max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        
        {/* MAIN COMPETITION CARD CONTAINER */}
        <div className="relative rounded-3xl border-2 border-[#f6bf4a]/40 dark:border-[#ffc501]/50 app-surface overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-12">
            
            {/* LEFT COLUMN: COMPETITION DETAILS (7 COLS) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* HEADLINE */}
              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black tracking-normal app-text mb-4 leading-tight">
                <span>{d.titlePrefix}</span>
                <span className="text-[#c68a00] dark:text-[#ffc501] font-mono">
                  {d.titleHighlight}
                </span>
              </h2>

              <p className="text-base sm:text-lg app-text-secondary leading-relaxed mb-8 max-w-2xl">
                {d.desc}
              </p>

              {/* COUNTDOWN TIMER STRIP */}
              <div className="mb-8 p-4 sm:p-5 rounded-2xl app-subtle border app-border">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider app-text-muted font-bold mb-3">
                  <GftIcon src="/icons/gft/icon-clock.webp" className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                  <span>{d.countdownTitle}</span>
                </div>

                <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md">
                  <div className="text-center p-2.5 sm:p-3 rounded-xl app-surface border app-border">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#c68a00] dark:text-[#ffc501]">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <span className="block text-[10px] sm:text-xs font-mono app-text-muted mt-1 uppercase">
                      {d.days}
                    </span>
                  </div>

                  <div className="text-center p-2.5 sm:p-3 rounded-xl app-surface border app-border">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#c68a00] dark:text-[#ffc501]">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="block text-[10px] sm:text-xs font-mono app-text-muted mt-1 uppercase">
                      {d.hours}
                    </span>
                  </div>

                  <div className="text-center p-2.5 sm:p-3 rounded-xl app-surface border app-border">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#c68a00] dark:text-[#ffc501]">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="block text-[10px] sm:text-xs font-mono app-text-muted mt-1 uppercase">
                      {d.mins}
                    </span>
                  </div>

                  <div className="text-center p-2.5 sm:p-3 rounded-xl app-surface border app-border">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-[#c68a00] dark:text-[#ffc501]">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="block text-[10px] sm:text-xs font-mono app-text-muted mt-1 uppercase">
                      {d.secs}
                    </span>
                  </div>
                </div>
              </div>

              {/* PRIZE POOL BREAKDOWN (REAL RANK ICONS) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                <div className="p-4 rounded-xl border border-[#f6bf4a]/40 bg-[#f6bf4a]/10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#ffc501] p-1 flex items-center justify-center shadow">
                    <Medal className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase app-text-muted">{d.rank1}</div>
                    <div className="text-sm font-black font-mono app-text">{d.rank1Prize}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border app-border app-surface flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-200 dark:bg-neutral-700 p-1 flex items-center justify-center shadow">
                    <Medal className="w-6 h-6 text-neutral-600 dark:text-neutral-200" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase app-text-muted">{d.rank2}</div>
                    <div className="text-sm font-black font-mono app-text">{d.rank2Prize}</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border app-border app-surface flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#c68a00]/20 p-1 flex items-center justify-center shadow">
                    <Medal className="w-6 h-6 text-[#c68a00]" />
                  </div>
                  <div>
                    <div className="text-xs font-mono font-bold uppercase app-text-muted">{d.rank3}</div>
                    <div className="text-sm font-black font-mono app-text">{d.rank3Prize}</div>
                  </div>
                </div>
              </div>

              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/competition"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-extrabold btn-gold shadow-xl hover:scale-105 transition-all text-black"
                >
                  <GftIcon src="/icons/gft/icon-trophy.webp" className="w-5 h-5 text-black shrink-0" />
                  <span>{d.btnJoin}</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <a
                  href="#objectives"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold btn-outline-gold"
                >
                  <GftIcon src="/icons/gft/icon-shield.webp" className="w-4 h-4 text-[#f6bf4a] shrink-0" />
                  <span>{d.btnRules}</span>
                </a>
              </div>

            </div>

            {/* RIGHT COLUMN: GFT COMPETITION ARTWORK (5 COLS) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-[#f6bf4a]/30 dark:border-[#ffc501]/40 shadow-2xl bg-black/60 group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/gft-trading-competition.png"
                  alt="ERACEX Monthly Trading Competition"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />

                {/* OVERLAY BADGE */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono font-bold text-[#ffc501] flex items-center gap-1.5 shadow-lg">
                  <GftIcon src="/icons/gft/icon-people.webp" className="w-4 h-4 text-[#ffc501] shrink-0" />
                  <span>{d.badgeParticipants}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
`;

fs.writeFileSync(filePath, newCode, 'utf8');
console.log('Successfully updated CompetitionBanner.tsx with all 19 languages');
