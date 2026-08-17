import { memo, useMemo, useRef } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import './Magnetic.css';

/**
 * Magnetic — premium cursor-attraction wrapper (React Bits inspired).
 *
 * The child gently "sticks" to the pointer via springs, giving UI an
 * Apple / Framer feel. Implementation notes:
 *
 *  - Only `transform` is animated (motion values + springs), so it stays
 *    on the GPU compositor thread at 60fps — zero React re-renders.
 *  - `useReducedMotion` disables the effect for accessibility.
 *  - A coarse-pointer / touch detection disables it on touch devices so
 *    it never interferes with taps or scrolling.
 *
 * `strength` controls how far the element travels toward the cursor
 * (0 = none, ~0.35 = subtle premium, 0.5 = strong).
 */
const Magnetic = memo(function Magnetic({
  children,
  strength = 0.35,
  className = '',
  spring = { stiffness: 150, damping: 15, mass: 0.1 },
  ...props
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Resolve coarse-pointer once — not on every pointer move.
  const isCoarsePointer = useMemo(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia?.('(hover: none), (pointer: coarse)').matches,
    []
  );

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring);
  const springY = useSpring(y, spring);

  const rectRef = useRef(null);

  const handleMouseEnter = () => {
    if (shouldReduceMotion || isCoarsePointer) return;
    const el = ref.current;
    if (el) {
      rectRef.current = el.getBoundingClientRect();
    }
  };

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || isCoarsePointer) return;
    if (!rectRef.current) {
      const el = ref.current;
      if (!el) return;
      rectRef.current = el.getBoundingClientRect();
    }
    const rect = rectRef.current;
    const middleX = e.clientX - (rect.left + rect.width / 2);
    const middleY = e.clientY - (rect.top + rect.height / 2);
    x.set(middleX * strength);
    y.set(middleY * strength);
  };

  const reset = () => {
    rectRef.current = null;
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`magnetic ${className}`.trim()}
      style={{ x: springX, y: springY }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      {...props}
    >
      {children}
    </motion.div>
  );
});

export default Magnetic;
