'use client';

import React from 'react';
import { useLanguage } from './LanguageContext';

const COINS: [string, string][] = [['tether','TetherUS'],['bitcoin','Bitcoin'],['ethereum','Ethereum'],['xrp','XRP'],['bnb','BNB'],['usdc','USDC'],['solana','Solana'],['litecoin','Litecoin'],['dogecoin','Dogecoin'],['tron','TRON'],['shiba-inu','SHIBA INU'],['chainlink','ChainLink'],['polygon','Polygon Ecosystem Token'],['hedera','Hedera Hashgraph'],['stellar','Stellar Lumens'],['bitcoin-cash','Bitcoin Cash'],['pepe','Pepe'],['arbitrum','Arbitrum'],['polkadot','Polkadot'],['avalanche','Avalanche'],['internet-computer','Internet Computer'],['compound','Compound'],['terra-classic','Terra Classic'],['gala','Gala'],['ondo','Ondo'],['1inch','1inch'],['singularitynet','SingularityNET Token'],['vechain','VeChain'],['arkham','Arkham'],['worldcoin','Worldcoin'],['verge','Verge'],['euro','Euro'],['trueusd','TrueUSD'],['brazilian-real','Brazilian Real'],['conflux','Conflux Network'],['amp','AMP'],['aptos','Aptos'],['algorand','Algorand'],['aster','Aster'],['cosmos','Cosmos'],['adventure-gold','Adventure Gold'],['auction','Auction']];

const TEXT: Record<string, { title: string; subtitle: string }> = {
  en: {
    title: 'Convert USDT (TetherUS) to other currencies',
    subtitle: 'Easily exchange your TetherUS for other currencies in a moment!',
  },
  vi: {
    title: 'Chuyển đổi USDT (TetherUS) sang các loại tiền tệ khác',
    subtitle: 'Dễ dàng hoán đổi TetherUS của bạn sang đồng tiền khác trong nháy mắt!',
  },
  zh: {
    title: '将 USDT (TetherUS) 兑换为其他货币',
    subtitle: '随时随地轻松将您的 TetherUS 兑换为其他数字货币！',
  },
  ja: {
    title: 'USDT (TetherUS) を他の通貨に両替',
    subtitle: 'TetherUS を瞬時に他の仮想通貨と交換できます！',
  },
  ko: {
    title: 'USDT (TetherUS)를 다른 통화로 환전',
    subtitle: 'TetherUS를 다른 다양한 통화로 빠르고 간편하게 교환하세요!',
  },
  es: {
    title: 'Convierte USDT (TetherUS) a otras monedas',
    subtitle: '¡Intercambia fácilmente tu TetherUS por otras monedas en un instante!',
  },
  pt: {
    title: 'Converta USDT (TetherUS) para outras moedas',
    subtitle: 'Troque facilmente seu TetherUS por outras moedas em um instante!',
  },
  fr: {
    title: "Convertir l'USDT (TetherUS) en d'autres devises",
    subtitle: "Échangez facilement vos TetherUS contre d'autres devises en un instant !",
  },
  de: {
    title: 'USDT (TetherUS) in andere Währungen umtauschen',
    subtitle: 'Tauschen Sie Ihre TetherUS im Handumdrehen in andere Währungen um!',
  },
  it: {
    title: 'Converti USDT (TetherUS) in altre valute',
    subtitle: 'Scambia facilmente i tuoi TetherUS con altre valute in un istante!',
  },
  pl: {
    title: 'Wymień USDT (TetherUS) na inne waluty',
    subtitle: 'Z łatwością wymieniaj swoje TetherUS na inne waluty w mgnieniu oka!',
  },
  tr: {
    title: "USDT'yi (TetherUS) diğer para birimlerine dönüştürün",
    subtitle: 'TetherUS varlıklarınızı anında diğer para birimleriyle kolayca takas edin!',
  },
  id: {
    title: 'Konversi USDT (TetherUS) ke mata uang lain',
    subtitle: 'Tukarkan TetherUS Anda ke mata uang lain dengan mudah dalam sekejap!',
  },
  th: {
    title: 'แปลง USDT (TetherUS) เป็นสกุลเงินอื่น',
    subtitle: 'แลกเปลี่ยน TetherUS ของคุณเป็นสกุลเงินอื่นได้อย่างง่ายดายในพริบตา!',
  },
  fil: {
    title: 'I-convert ang USDT (TetherUS) sa iba pang currency',
    subtitle: 'Madaling ipagpalit ang iyong TetherUS para sa iba pang mga pera sa isang iglap!',
  },
  hi: {
    title: 'USDT (TetherUS) को अन्य मुद्राओं में बदलें',
    subtitle: 'आसानी से अपने TetherUS को एक पल में अन्य मुद्राओं में एक्सचेंज करें!',
  },
  ru: {
    title: 'Конвертируйте USDT (TetherUS) в другие валюты',
    subtitle: 'Легко обменивайте свои TetherUS на другие валюты за считанные секунды!',
  },
  ar: {
    title: 'تحويل USDT (TetherUS) إلى عملات أخرى',
    subtitle: 'استبدل عملات TetherUS الخاصة بك بعملات أخرى بسهولة وفي لحظات!',
  },
  nl: {
    title: "Converteer USDT (TetherUS) naar andere valuta's",
    subtitle: 'Wissel uw TetherUS in een oogwenk eenvoudig om voor andere valuta\'s!',
  },
};

export const CryptoCurrencyGrid: React.FC<{ inline?: boolean; className?: string }> = ({ inline = false, className = '' }) => {
  const { currentLang } = useLanguage();
  const c = TEXT[currentLang] || TEXT.en;

  const body = (
    <div className="reveal-up">
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-xl sm:text-3xl font-extrabold app-text leading-tight">{c.title}</h3>
        <p className="mt-3 text-sm sm:text-base app-text-secondary">{c.subtitle}</p>
      </div>
      <ul className="mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-3 gap-y-8">
        {COINS.map(([slug, label]) => (
          <li key={slug} className="group flex flex-col items-center text-center gap-2.5 min-w-0">
            {}
            <img
              src={`/images/crypto/${slug}.png`}
              alt=""
              aria-hidden="true"
              loading="lazy"
              className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
            />
            <span className="text-xs sm:text-[13px] font-medium app-text-secondary leading-tight transition-colors group-hover:text-[#c68a00] dark:group-hover:text-[#f6bf4a]">
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );

  if (inline) return <div className={className}>{body}</div>;
  return (
    <section className={`py-10 sm:py-14 app-bg ${className}`}>
      <div className="w-full max-w-[1100px] mx-auto px-4 sm:px-8">{body}</div>
    </section>
  );
};
