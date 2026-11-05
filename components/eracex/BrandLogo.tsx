'use client';

import React from 'react';
import { useTheme } from './ThemeContext';
import { useLanguage } from './LanguageContext';
import { getUiStr } from './ui-strings';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  useImgFallback?: boolean;
  forceWhiteText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  useImgFallback = false,
  forceWhiteText = false,
}) => {
  const { theme } = useTheme();
  const { currentLang } = useLanguage();
  const isDark = forceWhiteText || theme === 'dark';

  const dimensions = {
    sm: { height: 28, text: 'text-lg', iconW: 32 },
    md: { height: 38, text: 'text-2xl', iconW: 44 },
    lg: { height: 48, text: 'text-3xl', iconW: 56 },
    xl: { height: 60, text: 'text-4xl', iconW: 70 },
  }[size];

  const goldColor = '#FFC501';
  const textColor = forceWhiteText ? '#FFFFFF' : (theme === 'light' ? '#09090d' : '#FFFFFF');
  const subTextColor = forceWhiteText ? '#9CA3AF' : (theme === 'light' ? '#64748b' : '#9CA3AF');

  if (useImgFallback) {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {}
        <img
          src={isDark ? '/brand/logo5.jpg' : '/brand/logo1.jpg'}
          alt="ERACEX Logo"
          style={{ height: dimensions.height, width: 'auto', objectFit: 'contain' }}
          className="transition-all duration-300"
        />
      </div>
    );
  }

  const textH = { sm: 15, md: 20, lg: 26, xl: 34 }[size];
  const markH = Math.round(textH * 1.38);
  const wordColor = forceWhiteText || theme !== 'light' ? '#FFFFFF' : '#09090D';
  const wordW = Math.round(textH * (1459 / 247));

  return (
    <div
      className={`inline-flex items-center select-none transition-all duration-300 shrink-0 whitespace-nowrap ${className}`}
      style={{ gap: Math.round(textH * 0.5) }}
      title={getUiStr(currentLang).brand}
      role="img"
      aria-label="ERACEX"
    >
      {}
      <img src="/brand/eracex-mark.png" alt="" style={{ height: markH, width: 'auto' }} className="shrink-0" />
      {showText && (
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            height: textH,
            width: wordW,
            backgroundColor: wordColor,
            WebkitMaskImage: 'url(/brand/eracex-wordmark.png)',
            maskImage: 'url(/brand/eracex-wordmark.png)',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }}
        />
      )}
    </div>
  );
};
