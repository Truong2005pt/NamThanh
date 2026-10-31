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
};

/** Grid of supported currencies with their logos. `inline` renders it without its own section wrapper. */
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
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
