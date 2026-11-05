/**
 * Keeps the concept pages monochrome: text is black or white, and nothing glows gold.
 *
 * The page styles come from many stylesheets, so instead of chasing every selector this tags, at runtime,
 * the elements whose computed text colour is gold (`ref-gold-text`) or whose shadows are gold-tinted
 * (`ref-gold-shadow`). ref-mono.css turns those tags into plain ink colour / no shadow. Dark text sitting
 * on a gold fill (buttons, the Funded column) is not gold, so it is left untouched.
 */

function parseRgb(value: string): [number, number, number, number] | null {
  const m = value.match(/rgba?\(\s*([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)(?:[ ,/]+([\d.]+%?))?\s*\)/);
  if (!m) return null;
  let a = 1;
  if (m[4] !== undefined) a = m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4]);
  return [parseFloat(m[1]), parseFloat(m[2]), parseFloat(m[3]), a];
}

function isGold(r: number, g: number, b: number): boolean {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max === 0) return false;
  const sat = (max - min) / max;
  const val = max / 255;
  if (sat < 0.4 || val < 0.4) return false;
  let hue: number;
  const d = max - min;
  if (max === r) hue = ((g - b) / d) % 6;
  else if (max === g) hue = (b - r) / d + 2;
  else hue = (r - g) / d + 4;
  hue = (hue * 60 + 360) % 360;
  return hue >= 30 && hue <= 62;
}

function hasGold(value: string): boolean {
  if (!value || value === 'none') return false;
  const colours = value.match(/rgba?\([^)]*\)/g);
  if (!colours) return false;
  return colours.some((c) => {
    const p = parseRgb(c);
    return !!p && p[3] > 0.02 && isGold(p[0], p[1], p[2]);
  });
}

export function applyMono(root: HTMLElement) {
  const els = root.querySelectorAll<HTMLElement>('*');
  els.forEach((el) => {
    if (el.tagName === 'SVG' || el.closest('svg')) return;
    const cs = getComputedStyle(el);

    const c = parseRgb(cs.color);
    const goldText = !!c && c[3] > 0.1 && isGold(c[0], c[1], c[2]);
    if (goldText !== el.classList.contains('ref-gold-text')) el.classList.toggle('ref-gold-text', goldText);

    const goldShadow = hasGold(cs.boxShadow) || hasGold(cs.textShadow) || hasGold(cs.filter);
    if (goldShadow !== el.classList.contains('ref-gold-shadow')) el.classList.toggle('ref-gold-shadow', goldShadow);
  });
}

/** Run once now, then again (debounced) whenever the page content or theme changes. Returns a stop function. */
export function watchMono(root: HTMLElement): () => void {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let running = false;
  const schedule = () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      if (running) return;
      running = true;
      try {
        applyMono(root);
      } finally {
        running = false;
      }
    }, 120);
  };

  // Class toggles done above must not retrigger the observer endlessly: watch content, not class changes.
  const mo = new MutationObserver((records) => {
    if (records.every((r) => r.type === 'attributes' && r.attributeName === 'class')) return;
    schedule();
  });
  mo.observe(root, { subtree: true, childList: true, attributes: true, attributeFilter: ['class', 'hidden', 'aria-pressed', 'open'] });

  const themeObserver = new MutationObserver(schedule);
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });

  schedule();
  return () => {
    if (timer) clearTimeout(timer);
    mo.disconnect();
    themeObserver.disconnect();
  };
}
