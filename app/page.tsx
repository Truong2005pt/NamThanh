'use client';

import React from 'react';
import { HeroSection } from '@/components/eracex/HeroSection';
import { TrustAndBrandsSection } from '@/components/eracex/TrustAndBrandsSection';
import { GftNoRiskFeatureSection } from '@/components/eracex/GftNoRiskFeatureSection';
import { ChallengePricing } from '@/components/eracex/ChallengePricing';
import { ProcessSection } from '@/components/eracex/ProcessSection';
import { GftFeaturesSection } from '@/components/eracex/GftFeaturesSection';
import { GftWhyTradersLoveSection } from '@/components/eracex/GftWhyTradersLoveSection';
import { EracexPlatformShowcaseSection } from '@/components/eracex/EracexPlatformShowcaseSection';
import { GftTechnologyAndJourneySection } from '@/components/eracex/GftTechnologyAndJourneySection';
import { GftSupportAndAppSection } from '@/components/eracex/GftSupportAndAppSection';
import { ImageBand } from '@/components/eracex/ImageBand';
import { CryptoCurrencyGrid } from '@/components/eracex/CryptoCurrencyGrid';

export default function HomePage() {
  return (
    <div className="app-bg app-text min-h-screen gft-home">
      {/* 01. HM-HERO: TRADE LIKE THE GREATEST & MOBILE APP VISUAL */}
      <HeroSection />

      {/* 02. TRUST-AREA & HM-BRANDS: BACKED BY REAL RATINGS & GLOBAL MEDIA */}
      <TrustAndBrandsSection />

      {/* 03. DON'T RISK YOUR OWN MONEY: 3-CARD PROP ADVANTAGE (ROUNDED-3XL) */}
      <GftNoRiskFeatureSection />

      {/* 04. HM-ACCOUNTS: CHOOSE YOUR ACCOUNT (#get-funded) & PRICING MATRIX */}
      <ChallengePricing />
      <CryptoCurrencyGrid />


      {/* 04. SEC-HIW: HOW IT WORKS (UNLOCK CAPITAL, TRADE, EARN) */}
      <ProcessSection />

      {/* 05. SEC-FEATURE: TRADING WITH MORE CAPITAL & $30M+ PAYOUT GATEWAYS */}
      <GftFeaturesSection />
      <ImageBand caption="rules" variant="wide" images={[{ src: '/images/scaling-roadmap-3d.jpg', alt: 'ERACEX scaling roadmap' }]} />



      {/* 07. SEC-REASON: WHY TRADERS LOVE GFT (SCALE TO $2M, 8 KEY PILLARS) */}
      <GftWhyTradersLoveSection />

      {/* 08. ERACEX PROPRIETARY TRADING PLATFORM & MOBILE APP SHOWCASE */}
      <EracexPlatformShowcaseSection />

      {/* 09. SEC-OWN & SEC-JOURNEY: 100% OWN TECHNOLOGY & UNIFIED DASHBOARD */}
      <GftTechnologyAndJourneySection />



      {/* 11. SEC-SUPPORT, SEC-APP & SEC-CTA: 24/7 DESK, MOBILE APP & COMMUNITY */}
      <GftSupportAndAppSection />
    </div>
  );
}
