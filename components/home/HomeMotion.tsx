'use client';

import { useEffect } from 'react';

/**
 * One consistent entrance system for the home page: a short fade and rise, siblings staggered,
 * played once when the block is clearly on screen. The hero uses CSS keyframes instead (it is
 * already visible on first paint). The site-wide reveal provider is switched off for `.home`
 * through `data-no-reveal`, so nothing animates twice.
 *
 * Add `?motion=off` to the URL for a still page.
 */
const TARGETS = [
  'section h2',
  'section .sk-sub',
  'section .sk-intro',
  'section .sk-lead2',
  '.sk-tabs',
  '.sk-toggle',
  '.sk-card',
  '.sk-pcard',
  '.sk-mini > div',
  '.sk-feat',
  '.sk-rows a',
  '.sk-crit li',
  '.sk-support .list a',
  '.sk-addons button',
  '.sk-acc',
  '.sk-desk',
  '.sk-cta',
  '.sk-why-banner',
  '.sk-slides',
].join(',');

const STEP_MS = 70;
const MAX_STEPS = 6;

export function HomeMotion() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>('.home');
    if (!root || new URLSearchParams(window.location.search).get('motion') === 'off') return;

    const sameKind = (a: Element, b: Element) => a.tagName === b.tagName && a.className.toString().split(' ')[0] === b.className.toString().split(' ')[0];
    const staged: HTMLElement[] = [];

    root.querySelectorAll<HTMLElement>(TARGETS).forEach((el) => {
      if (el.closest('.sk-hero') || el.parentElement?.closest('.rv')) return; // children ride with their parent
      const peers = Array.from(el.parentElement?.children ?? []).filter((c) => sameKind(c, el));
      const step = Math.min(Math.max(peers.indexOf(el), 0), MAX_STEPS);
      el.style.setProperty('--rv-i', String(step));
      el.classList.add('rv');
      staged.push(el);
    });

    const settle = (el: HTMLElement, step: number) =>
      window.setTimeout(() => {
        el.classList.remove('rv'); // hand the element back to its own hover/transform styles
        el.style.removeProperty('--rv-i');
      }, 800 + step * STEP_MS);

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.setAttribute('data-seen', '');
          settle(el, Number(el.style.getPropertyValue('--rv-i')) || 0);
          io.unobserve(el);
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );
    staged.forEach((el) => io.observe(el));

    // progress bars fill when they come into view
    const fills = root.querySelectorAll<HTMLElement>('.sk-reward-total');
    const fio = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.setAttribute('data-seen', ''); fio.unobserve(e.target); } }), { threshold: 0.6 });
    fills.forEach((el) => fio.observe(el));

    return () => {
      io.disconnect();
      fio.disconnect();
      staged.forEach((el) => { el.classList.remove('rv'); el.style.removeProperty('--rv-i'); });
    };
  }, []);

  return null;
}
