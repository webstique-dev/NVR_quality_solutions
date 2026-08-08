import { useEffect, useState } from 'react';
import AnimatedCursor from 'react-animated-cursor';

// Royal blue — `--color-brand-royal` / `--color-link` (#1E63E9), the site's
// primary interactive accent color used across links and CTAs.
const CURSOR_RGB = '30, 99, 233';

// Selectors that trigger the cursor hover expansion: links, buttons, form
// controls, and the shared card patterns used across all pages.
const CLICKABLES = [
  'a',
  'button',
  '[role="button"]',
  'input[type="text"]',
  'input[type="email"]',
  'input[type="tel"]',
  'input[type="search"]',
  'input[type="submit"]',
  'input[type="image"]',
  'label[for]',
  'select',
  'textarea',
  '.pillar-card',
  '.service-card',
  '.training-card',
];

const getCursorPrefs = () => {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return { enabled: false };
  }
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const hoverCapable = window.matchMedia('(hover: hover)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return { enabled: finePointer && hoverCapable && !reducedMotion };
};

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(getCursorPrefs);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setEnabled(getCursorPrefs());
    reducedMotion.addEventListener('change', sync);
    return () => reducedMotion.removeEventListener('change', sync);
  }, []);

  if (!enabled) return null;

  return (
    <AnimatedCursor
      aria-hidden="true"
      innerSize={7}
      outerSize={34}
      color={CURSOR_RGB}
      outerAlpha={0.16}
      trailingSpeed={7}
      innerScale={0.5}
      outerScale={1.7}
      clickables={CLICKABLES}
    />
  );
};

export default CustomCursor;