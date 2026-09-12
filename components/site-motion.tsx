'use client';

import { useEffect } from 'react';

/** Progressive enhancement: content remains visible without JS or motion support. */
export function SiteMotion() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window) || !Element.prototype.animate) return;

    let observer: IntersectionObserver | undefined;
    const animations = new Set<Animation>();
    const seen = new WeakSet<Element>();
    const elements = document.querySelectorAll<HTMLElement>(
      '.section-heading, .service, .review-quote, .work-grid figure, .process li, ' +
      '.owner-copy, .quote-intro, .quote-card, .gallery-full figure, .page-hero',
    );

    function stop() {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    }

    function start() {
      stop();
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || seen.has(entry.target)) return;
          seen.add(entry.target);
          observer?.unobserve(entry.target);
          // Never animate a form or link away from someone using the keyboard.
          if (entry.target.contains(document.activeElement)) return;
          const siblings = Array.from(entry.target.parentElement?.children ?? []);
          const delay = Math.min(siblings.indexOf(entry.target), 2) * 65;
          const animation = entry.target.animate(
            [{ opacity: 0.35, transform: 'translateY(20px)' },
             { opacity: 1, transform: 'translateY(0)' }],
            { duration: 650, delay, easing: 'cubic-bezier(.22,1,.36,1)' },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.12 });
      elements.forEach(element => { if (!seen.has(element)) observer?.observe(element); });
    }

    function onFocus(event: FocusEvent) {
      animations.forEach(animation => {
        const target = (animation.effect as KeyframeEffect | null)?.target;
        if (target?.contains(event.target as Node)) animation.cancel();
      });
    }

    start();
    preference.addEventListener('change', start);
    document.addEventListener('focusin', onFocus);
    return () => {
      stop();
      preference.removeEventListener('change', start);
      document.removeEventListener('focusin', onFocus);
    };
  }, []);
  return null;
}
