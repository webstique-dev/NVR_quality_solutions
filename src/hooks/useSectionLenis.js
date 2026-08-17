import { useEffect } from 'react';
import Lenis from 'lenis';

export default function useSectionLenis(sectionRef, { lerp = 0.085 } = {}) {
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;
    if (typeof window === 'undefined') return undefined;
    const isTouch = window.matchMedia?.('(pointer: coarse), (hover: none)').matches;
    const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return undefined;

    const lenis = new Lenis({
      lerp,
      wheelMultiplier: 1,
      smoothWheel: false,
      syncTouch: false,
      autoRaf: true,
      respectReducedMotion: true,
    });

    let active = false;
    const observer = new IntersectionObserver(
      (entries) => {
        const nowActive = entries.some((entry) => entry.isIntersecting);
        if (nowActive !== active) {
          active = nowActive;
          lenis.options.smoothWheel = active;
        }
      },
      { rootMargin: '-10% 0px -10% 0px', threshold: 0 }
    );
    observer.observe(section);

    return () => {
      observer.disconnect();
      lenis.destroy();
    };
  }, [sectionRef, lerp]);
}