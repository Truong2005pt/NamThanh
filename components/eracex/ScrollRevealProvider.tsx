'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const MANUAL = '.reveal-up, .reveal-down, .reveal-left, .reveal-right, .reveal-scale, [data-reveal]';
const REVEAL_CLASSES = ['reveal-up', 'reveal-left', 'reveal-right', 'reveal-scale', 'is-revealed'];

// Elements that already move on their own (3D, floating, hover lifts, positioned overlays) are left alone.
const SKIP_CLASS = /(^|\s)(reveal-|animate-|hover-float|scale-|rotate-|-?translate-|sticky|fixed|absolute)/;
const SKIP_ANCESTOR = 'nav, footer, header, [role="dialog"], [data-no-reveal], canvas, .fixed';

/** Selectors that get an entrance animation automatically, with the effect to use. */
type Effect = 'reveal-up' | 'reveal-left' | 'reveal-right' | 'reveal-scale';
const AUTO: Array<{ selector: string; effect: Effect; stagger?: boolean }> = [
  { selector: 'h1, h2', effect: 'reveal-up' },
  { selector: 'h1 + p, h2 + p', effect: 'reveal-up' },
  { selector: '.grid > *', effect: 'reveal-up', stagger: true },
  { selector: '.card-surface, .app-surface.rounded-3xl, .app-surface.rounded-2xl, .app-surface.rounded-xl', effect: 'reveal-up' },
  { selector: 'section img, main img', effect: 'reveal-scale' },
  { selector: 'table', effect: 'reveal-up' },
];

function tagElements(root: ParentNode): HTMLElement[] {
  const tagged: HTMLElement[] = [];
  for (const { selector, effect, stagger } of AUTO) {
    root.querySelectorAll<HTMLElement>(selector).forEach((el) => {
      if (el.dataset.auto) return;
      if (SKIP_CLASS.test(el.className?.toString() || '')) return;
      if (el.closest(SKIP_ANCESTOR)) return;
      if (el.style.transform || el.style.opacity) return;
      // Never nest: if an ancestor already animates, the child rides along with it.
      const parent = el.parentElement;
      if (parent && parent.closest(`[data-auto], ${MANUAL}`)) return;
      const rect = el.getBoundingClientRect();
      if (effect === 'reveal-scale' && rect.width < 240) return;
      if (rect.height < 24 && effect !== 'reveal-up') return;

      let chosen: Effect = effect;
      let index = 0;
      if (stagger) {
        const siblings = Array.from(el.parentElement?.children ?? []);
        index = Math.max(siblings.indexOf(el), 0);
        // Two-column rows slide in from their own side; wider grids rise one after another.
        const columns = el.parentElement
          ? getComputedStyle(el.parentElement).gridTemplateColumns.split(' ').filter(Boolean).length
          : 0;
        if (columns === 2) chosen = index % 2 === 0 ? 'reveal-left' : 'reveal-right';
      }

      el.dataset.auto = '1';
      el.classList.add(chosen);
      if (stagger) el.style.transitionDelay = `${Math.min(index, 8) * 120}ms`;
      tagged.push(el);
    });
  }
  return tagged;
}

export const ScrollRevealProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // The entrance animations are a short fade and slide, so they stay on even when the OS reports
    // "reduce motion" (Windows VMs and remote desktops switch that on by default and the site would look static).
    // ?motion=off turns them off for anyone who wants a still page.
    const motionOff = new URLSearchParams(window.location.search).get('motion') === 'off';
    if (!motionOff) document.documentElement.setAttribute('data-motion', 'on');
    const prefersReducedMotion = motionOff;
    if (prefersReducedMotion) {
      document.querySelectorAll(MANUAL).forEach((el) => el.classList.add('is-revealed'));
      return;
    }

    const settle = (el: HTMLElement) => {
      // After the entrance finishes hand the element back to its own hover/transform styles.
      if (!el.dataset.auto) return;
      window.setTimeout(() => {
        el.classList.remove(...REVEAL_CLASSES);
        el.style.transitionDelay = '';
      }, 2400);
    };

    const reveal = (el: Element) => {
      el.classList.add('is-revealed');
      settle(el as HTMLElement);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Very tall blocks can never be 18% visible, so for them the first sliver on screen is enough.
          const tall = entry.boundingClientRect.height * 0.18 > window.innerHeight * 0.85;
          if (entry.isIntersecting && (entry.intersectionRatio >= 0.18 || tall)) {
            reveal(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      // Play only once the element is clearly on screen: it must be 18% visible and clear the bottom 12% of the viewport.
      { root: null, rootMargin: '0px 0px -12% 0px', threshold: [0, 0.18] }
    );

    const watched = new WeakSet<Element>();
    const observeElements = () => {
      tagElements(document.body);
      document.querySelectorAll(MANUAL).forEach((el) => {
        if (watched.has(el) || el.classList.contains('is-revealed')) return;
        watched.add(el);
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          window.setTimeout(() => reveal(el), 250);
        } else {
          observer.observe(el);
        }
      });
    };

    // Blocks at the very end of the page can never clear the "bottom 12%" margin, so once the reader
    // has reached the bottom, whatever is on screen plays.
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        const atEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 6;
        if (!atEnd) return;
        document.querySelectorAll(MANUAL).forEach((el) => {
          if (el.classList.contains('is-revealed')) return;
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            observer.unobserve(el);
            reveal(el);
          }
        });
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const timer = window.setTimeout(observeElements, 100);

    // Content that appears later (tabs, accordions, language switch) animates in too.
    let pending: number | undefined;
    const mutations = new MutationObserver(() => {
      window.clearTimeout(pending);
      pending = window.setTimeout(observeElements, 160);
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(pending);
      observer.disconnect();
      mutations.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [pathname]);

  return <>{children}</>;
};
