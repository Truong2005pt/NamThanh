/**
 * In-place DOM update for the concept page scripts.
 *
 * The scripts re-render by assigning a fresh HTML string to `#subMain` (every size change, every tab).
 * Replacing the whole subtree makes the page flash, reloads images and drops focus and transitions.
 * `install()` turns that assignment into a reconcile: nodes that are unchanged are kept, attributes and
 * text are patched, and only genuinely different branches are replaced. Elements whose text changed get
 * a short `ref-flash` class so the new value fades in instead of snapping.
 */

import { applyNoLabel } from './nolabel';

// Added at runtime by the site's own scroll-reveal provider; never strip them while patching.
const KEEP_CLASS = /^(reveal-|is-revealed|ref-gold-)/;
const KEEP_ATTR = new Set(['data-auto', 'style']);

function syncClass(live: Element, next: Element) {
  const want = new Set((next.getAttribute('class') || '').split(/\s+/).filter(Boolean));
  (live.getAttribute('class') || '')
    .split(/\s+/)
    .filter((c) => KEEP_CLASS.test(c))
    .forEach((c) => want.add(c));
  const value = Array.from(want).join(' ');
  if (value !== (live.getAttribute('class') || '')) {
    if (value) live.setAttribute('class', value);
    else live.removeAttribute('class');
  }
}

function syncAttributes(live: Element, next: Element) {
  for (const attr of Array.from(next.attributes)) {
    if (attr.name === 'class') continue;
    if (live.getAttribute(attr.name) !== attr.value) live.setAttribute(attr.name, attr.value);
  }
  for (const attr of Array.from(live.attributes)) {
    if (attr.name === 'class' || KEEP_ATTR.has(attr.name)) continue;
    if (!next.hasAttribute(attr.name)) live.removeAttribute(attr.name);
  }
  syncClass(live, next);

  // Form controls keep their state in properties, not attributes.
  if (live instanceof HTMLInputElement && next instanceof HTMLInputElement) {
    if (live.type === 'checkbox' || live.type === 'radio') live.checked = next.checked;
    else if (document.activeElement !== live) live.value = next.value;
  }
}

function flash(el: Element | null) {
  if (!el || !(el instanceof HTMLElement) || el.classList.contains('ref-flash')) return;
  el.classList.add('ref-flash');
  el.addEventListener('animationend', () => el.classList.remove('ref-flash'), { once: true });
}

function morphChildren(live: Node, next: Node) {
  const nextNodes = Array.from(next.childNodes);

  nextNodes.forEach((n, i) => {
    const current = live.childNodes[i];
    if (!current) {
      live.appendChild(n);
      return;
    }
    if (current.nodeType !== n.nodeType || current.nodeName !== n.nodeName) {
      live.replaceChild(n, current);
      return;
    }
    if (n.nodeType === Node.TEXT_NODE || n.nodeType === Node.COMMENT_NODE) {
      if (current.nodeValue !== n.nodeValue) {
        current.nodeValue = n.nodeValue;
        if (n.nodeType === Node.TEXT_NODE && (n.nodeValue || '').trim()) flash(current.parentElement);
      }
      return;
    }
    syncAttributes(current as Element, n as Element);
    morphChildren(current, n);
  });

  while (live.childNodes.length > nextNodes.length) live.removeChild(live.lastChild as Node);
}

/** Route `el.innerHTML = html` through the reconcile. Returns an uninstall function. */
export function installMorph(el: HTMLElement): () => void {
  const proto = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML');
  if (!proto || !proto.get || !proto.set) return () => undefined;

  Object.defineProperty(el, 'innerHTML', {
    configurable: true,
    get() {
      return proto.get!.call(el);
    },
    set(html: string) {
      const tpl = document.createElement('template');
      tpl.innerHTML = html;
      // Clean the incoming markup first so the live text never flips back and forth.
      applyNoLabel(tpl.content);
      morphChildren(el, tpl.content);
    },
  });

  return () => {
    delete (el as unknown as Record<string, unknown>).innerHTML;
  };
}
