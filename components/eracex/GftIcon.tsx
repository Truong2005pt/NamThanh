'use client';

import React from 'react';
import {
  Check,
  CheckCircle2,
  ShieldCheck,
  BadgeCheck,
  Clock,
  Coins,
  CircleDollarSign,
  TrendingUp,
  TrendingDown,
  Target,
  Trophy,
  Shield,
  Zap,
  Code2,
  Banknote,
  Wallet,
  Users,
  PieChart,
  Percent,
  Calendar,
  Newspaper,
  Network,
  Globe2,
  AlertTriangle,
  ShieldAlert,
  FastForward,
  Sparkles,
  Star,
  Flame,
  Award,
  DollarSign,
  HelpCircle,
  LucideIcon,
} from 'lucide-react';

export interface GftIconProps {
  src?: string;
  name?: string;
  alt?: string;
  className?: string;
  strokeWidth?: number;
}

const ICON_MAP: Record<string, LucideIcon> = {

  'check': Check,
  'icon-check': Check,
  'icon-check.webp': Check,
  'verified': BadgeCheck,
  'icon-verified': BadgeCheck,
  'icon-verified.webp': BadgeCheck,
  'icon-verified-outline.webp': BadgeCheck,
  'shield-check': ShieldCheck,
  'icon-shield': ShieldCheck,
  'icon-shield.webp': ShieldCheck,

  'boost-up': TrendingUp,
  'icon-boost-up': TrendingUp,
  'icon-boost-up.webp': TrendingUp,
  'trending-up': TrendingUp,
  'loss': TrendingDown,
  'icon-loss': TrendingDown,
  'icon-loss.webp': TrendingDown,
  'loss-max': AlertTriangle,
  'icon-loss-maximum': AlertTriangle,
  'icon-loss-maximum.webp': AlertTriangle,

  'coins': Coins,
  'icon-coins': Coins,
  'icon-coins.webp': Coins,
  'coin': CircleDollarSign,
  'icon-coin-2': CircleDollarSign,
  'icon-coin-2.webp': CircleDollarSign,
  'money': Banknote,
  'icon-money-2': Banknote,
  'icon-money-2.webp': Banknote,
  'wallet': Wallet,
  'icon-walet': Wallet,
  'icon-walet.webp': Wallet,
  'split': Percent,
  'icon-split': Percent,
  'icon-split.webp': Percent,
  'dollar': DollarSign,

  'clock': Clock,
  'icon-clock': Clock,
  'icon-clock.webp': Clock,
  'calendar': Calendar,
  'icon-calendar': Calendar,
  'icon-calendar.webp': Calendar,

  'target': Target,
  'icon-target': Target,
  'icon-target.webp': Target,
  'trophy': Trophy,
  'icon-trophy': Trophy,
  'icon-trophy.webp': Trophy,
  'icon-thropy-outline.webp': Trophy,
  'award': Award,

  'lightning': Zap,
  'icon-lightning': Zap,
  'icon-lightning.webp': Zap,
  'icon-lightning-outline.webp': Zap,
  'code': Code2,
  'icon-code': Code2,
  'icon-code.webp': Code2,
  'network': Network,
  'icon-network': Network,
  'icon-network.webp': Network,
  'fast-forward': FastForward,
  'fast-foward-icon': FastForward,
  'fast-foward-icon.webp': FastForward,

  'people': Users,
  'icon-people': Users,
  'icon-people.webp': Users,
  'newspaper': Newspaper,
  'icon-newspaper': Newspaper,
  'icon-newspaper.webp': Newspaper,
  'stars': Sparkles,
  'icon-stars': Sparkles,
  'icon-stars.webp': Sparkles,
  'star': Star,
  'star.png': Star,
  'flame': Flame,
};

function resolveIcon(srcOrName: string): LucideIcon | null {
  if (!srcOrName) return null;
  const clean = srcOrName.toLowerCase().split('/').pop() || '';
  if (ICON_MAP[clean]) return ICON_MAP[clean];
  const withoutExt = clean.replace(/\.[^/.]+$/, '');
  if (ICON_MAP[withoutExt]) return ICON_MAP[withoutExt];
  return null;
}

export const GftIcon: React.FC<GftIconProps> = ({
  src,
  name,
  alt = '',
  className = 'w-5 h-5 text-current',
  strokeWidth = 2,
}) => {
  const iconKey = name || src || '';
  const IconComponent = resolveIcon(iconKey);

  if (IconComponent) {
    return (
      <IconComponent
        className={`shrink-0 inline-block transition-colors ${className}`}
        strokeWidth={strokeWidth}
        aria-label={alt}
      />
    );
  }

  // Fallback for real SVGs (like country flags or brand logos)
  if (src) {
    return (

      <img
        src={src}
        alt={alt}
        className={`shrink-0 inline-block object-contain ${className}`}
      />
    );
  }

  return <Sparkles className={`shrink-0 inline-block ${className}`} strokeWidth={strokeWidth} />;
};
