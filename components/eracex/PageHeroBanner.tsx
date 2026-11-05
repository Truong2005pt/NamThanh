'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Sparkles } from 'lucide-react';

export interface PageHeroBannerProps {
  badgeText: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle: string;
  breadcrumbs: { label: string; href?: string }[];
  primaryCta?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  secondaryCta?: {
    label: string;
    href: string;
    icon?: React.ReactNode;
  };
  features?: {
    icon: React.ReactNode;
    text: string;
  }[];
  imageSrc: string;
  imageAlt: string;
  bgImageSrc?: string;
  bgVideoSrc?: string;
  floatingBadge1?: {
    tag: string;
    value: string;
    icon?: React.ReactNode;
    highlightColor?: string;
  };
  floatingBadge2?: {
    tag: string;
    value: string;
    icon?: React.ReactNode;
    highlightColor?: string;
  };
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  badgeText,
  badgeIcon,
  title,
  subtitle,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  features,
  imageSrc,
  imageAlt,
  bgImageSrc,
  bgVideoSrc,
  floatingBadge1,
  floatingBadge2,
}) => {
  return (
    <section className="relative flex flex-col justify-center pt-28 pb-14 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20 overflow-hidden bg-neutral-50 dark:bg-[#060709] border-b border-neutral-200/80 dark:border-white/10 text-neutral-900 dark:text-white w-full transition-colors duration-300">
      {}
      <div aria-hidden className="hero-bg" />

      <div className="w-full max-w-[1344px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10 flex-1 flex flex-col justify-center">

        {}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-16 items-center my-auto">

          {}
          <div className="lg:col-span-7 text-center lg:text-left reveal-left">
            {}
            <h1 className="gft-title text-[28px] sm:text-4xl lg:text-5xl font-black leading-[1.1] mb-6 text-neutral-900 dark:text-white drop-shadow-sm">
              {title}
            </h1>

            {}
            <p className="text-base sm:text-xl font-normal leading-relaxed text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto lg:mx-0 mb-8 sm:mb-10">
              {subtitle}
            </p>

            {}
            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-5 mb-8">
                {primaryCta && (
                  <a
                    href={primaryCta.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl text-base sm:text-lg font-extrabold btn-gold shadow-xl hover-float btn-shimmer transition-all text-[#0a0a0a]"
                  >
                    {primaryCta.icon}
                    <span>{primaryCta.label}</span>
                    <ArrowRight className="w-5 h-5 ml-0.5" />
                  </a>
                )}

                {secondaryCta && (
                  <a
                    href={secondaryCta.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl text-base sm:text-lg font-bold border-2 border-neutral-300 bg-white/90 text-neutral-900 hover:border-[#b47a00] hover:bg-white dark:border-white/20 dark:bg-black/50 dark:text-white dark:hover:border-[#ffc501] dark:hover:bg-white/10 hover-float transition-all shadow-xl backdrop-blur-md"
                  >
                    {secondaryCta.icon}
                    <span>{secondaryCta.label}</span>
                  </a>
                )}
              </div>
            )}

            {}
            {features && features.length > 0 && (
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                {features.map((feat, idx) => (
                  <div
                    key={idx}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-black/60 border border-neutral-200/90 dark:border-white/15 text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 shadow-sm backdrop-blur-md hover-float reveal-up stagger-${idx + 1}`}
                  >
                    <span className="text-[#b47a00] dark:text-[#ffc501]">{feat.icon}</span>
                    <span>{feat.text}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {}
          <div className="lg:col-span-5 relative scale-100 lg:scale-105 xl:scale-110 origin-center reveal-right">
            <div className="relative mx-auto max-w-lg lg:max-w-none w-full">

              {}
              <div className="hero-image-frame relative rounded-3xl p-2 sm:p-2.5 group hover-float reveal-scale">
                <div className="relative rounded-2xl overflow-hidden bg-[#0b0b0d] aspect-[4/3] sm:aspect-[16/11]">
                  {}
                  <img
                    src={imageSrc}
                    alt={imageAlt}
                    className="gold-tone absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_60px_rgba(0,0,0,0.55)]" aria-hidden="true" />
                </div>
              </div>

              {}
              {floatingBadge1 && (
                <div className="absolute -top-5 -left-5 hidden sm:flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-black/85 border-2 border-[#f6bf4a]/40 dark:border-[#ffc501]/50 backdrop-blur-xl shadow-xl hover-float transition-all text-neutral-900 dark:text-white animate-float-slow">
                  {floatingBadge1.icon && (
                    <div className="w-10 h-10 rounded-xl bg-[#f6bf4a]/15 text-[#b47a00] dark:text-[#ffc501] flex items-center justify-center font-black flex-shrink-0">
                      {floatingBadge1.icon}
                    </div>
                  )}
                  <div>
                    <div className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400 font-bold tracking-wider">
                      {floatingBadge1.tag}
                    </div>
                    <div className={`text-lg sm:text-xl font-black font-mono ${floatingBadge1.highlightColor || 'text-[#b47a00] dark:text-[#ffc501]'}`}>
                      {floatingBadge1.value}
                    </div>
                  </div>
                </div>
              )}

              {}
              {floatingBadge2 && (
                <div className="absolute -bottom-5 -right-5 hidden sm:flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-white/95 dark:bg-black/85 border-2 border-[#f6bf4a]/40 dark:border-[#f6bf4a]/50 backdrop-blur-xl shadow-xl hover-float transition-all text-neutral-900 dark:text-white animate-float-slow">
                  {floatingBadge2.icon && (
                    <div className="w-10 h-10 rounded-xl bg-[#f6bf4a]/15 text-[#c68a00] dark:text-[#f6bf4a] flex items-center justify-center font-black flex-shrink-0">
                      {floatingBadge2.icon}
                    </div>
                  )}
                  <div>
                    <div className="text-[11px] font-mono uppercase text-neutral-500 dark:text-neutral-400 font-bold tracking-wider">
                      {floatingBadge2.tag}
                    </div>
                    <div className={`text-lg sm:text-xl font-black font-mono ${floatingBadge2.highlightColor || 'text-[#c68a00] dark:text-[#f6bf4a]'}`}>
                      {floatingBadge2.value}
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
