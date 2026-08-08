import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './CustomCursor.css';

// Clickables that trigger the hover feedback: links, buttons, form controls
// and the shared interactive card patterns used across all pages.
const CLICKABLES = [
  'a',
  'button',
  '[role="button"]',
  'input',
  'textarea',
  'select',
  'label[for]',
  '.pillar-card',
  '.service-card',
  '.training-card',
];
const CLICKABLES_SELECTOR = CLICKABLES.join(',');

// Visual sizes / scales, matching the previous react-animated-cursor config:
// innerSize 7, outerSize 34, innerScale 0.5, outerScale 1.7. Pressing a
// clickable scales the two slightly further (×1.2 / ×1.4).
const OUTER_SIZE = 34;
const INNER_HOVER_SCALE = 0.5;
const OUTER_HOVER_SCALE = 1.7;
const INNER_PRESS_SCALE = INNER_HOVER_SCALE * 1.2;
const OUTER_PRESS_SCALE = OUTER_HOVER_SCALE * 1.4;

// Spring tunings. The outer ring trails the pointer (approximating the old
// `trailingSpeed`), while the inner dot stays glued to the cursor.
const TRAIL_SPRING = { stiffness: 90, damping: 18, mass: 1.2 };
const SCALE_SPRING = { stiffness: 320, damping: 28, mass: 0.6 };
const FADE_SPRING = { stiffness: 220, damping: 26, mass: 0.5 };

// Toggled on <html> so the native cursor is hidden while the custom cursor
// is active (matching how the previous cursor behaved on all clickables).
const CURSOR_ACTIVE_CLASS = 'custom-cursor-active';

const getCursorPrefs = () => {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return false;
  }
  const finePointer = window.matchMedia('(pointer: fine)').matches;
  const hoverCapable = window.matchMedia('(hover: hover)').matches;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  return finePointer && hoverCapable && !reducedMotion;
};

const CustomCursor = () => {
  const [enabled, setEnabled] = useState(getCursorPrefs);

  // Raw pointer coordinates.
  const mouseX = useMotionValue(-OUTER_SIZE / 2);
  const mouseY = useMotionValue(-OUTER_SIZE / 2);

  // The outer ring trails the pointer via a spring; the inner dot follows
  // the raw motion value directly.
  const outerX = useSpring(mouseX, TRAIL_SPRING);
  const outerY = useSpring(mouseY, TRAIL_SPRING);

  // Spring-driven targets for hover/press scaling and window fade.
  const innerScaleTarget = useMotionValue(1);
  const outerScaleTarget = useMotionValue(1);
  const opacityTarget = useMotionValue(1);

  const innerScale = useSpring(innerScaleTarget, SCALE_SPRING);
  const outerScale = useSpring(outerScaleTarget, SCALE_SPRING);
  const opacity = useSpring(opacityTarget, FADE_SPRING);

  useEffect(() => {
    if (!enabled) return undefined;

    let hovering = false;
    let pressed = false;

    const isElement = (node) =>
      typeof Element !== 'undefined' && node instanceof Element;

    const isClickable = (node) =>
      isElement(node) && Boolean(node.closest(CLICKABLES_SELECTOR));

    const applyHoverScale = () => {
      if (hovering && pressed) {
        innerScaleTarget.set(INNER_PRESS_SCALE);
        outerScaleTarget.set(OUTER_PRESS_SCALE);
      } else if (hovering) {
        innerScaleTarget.set(INNER_HOVER_SCALE);
        outerScaleTarget.set(OUTER_HOVER_SCALE);
      } else {
        innerScaleTarget.set(1);
        outerScaleTarget.set(1);
      }
    };

    const onMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      opacityTarget.set(1);
    };

    const onMouseOver = (event) => {
      const next = isClickable(event.target);
      if (next !== hovering) {
        hovering = next;
        applyHoverScale();
      }
    };

    const onMouseDown = () => {
      if (!hovering) return;
      pressed = true;
      applyHoverScale();
    };

    const onMouseUp = () => {
      if (!pressed) return;
      pressed = false;
      applyHoverScale();
    };

    const onPageEnter = () => opacityTarget.set(1);
    const onPageLeave = () => opacityTarget.set(0);

    document.documentElement.classList.add(CURSOR_ACTIVE_CLASS);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.documentElement.addEventListener('mouseenter', onPageEnter);
    document.documentElement.addEventListener('mouseleave', onPageLeave);

    return () => {
      document.documentElement.classList.remove(CURSOR_ACTIVE_CLASS);

      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.documentElement.removeEventListener('mouseenter', onPageEnter);
      document.documentElement.removeEventListener('mouseleave', onPageLeave);
    };
  }, [enabled, mouseX, mouseY, innerScaleTarget, outerScaleTarget, opacityTarget]);

  // Re-evaluate prefs when the reduced-motion preference changes.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined;
    }
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setEnabled(getCursorPrefs());
    reducedMotion.addEventListener('change', sync);
    return () => reducedMotion.removeEventListener('change', sync);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="custom-cursor__outer"
        aria-hidden="true"
        style={{ x: outerX, y: outerY, scale: outerScale, opacity }}
      />
      <motion.div
        className="custom-cursor__inner"
        aria-hidden="true"
        style={{ x: mouseX, y: mouseY, scale: innerScale, opacity }}
      />
    </>
  );
};

export default CustomCursor;