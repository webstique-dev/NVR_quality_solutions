/* ===================================================================
   Standardized Viewport Triggers (Framer Motion)
   =================================================================== */

/* Using `amount: 'some'` (any part visible) rather than a strict ratio
   guarantees scroll-reveal elements can never remain stuck hidden — a
   tall section taller than the viewport would otherwise never reach a
   fixed percentage threshold and would stay invisible on page refresh. */
export const defaultViewport = {
  once: true,
  amount: 'some',
};

export const homeViewport = {
  once: true,
  amount: 'some',
};

export const heroViewport = {
  once: true,
  amount: 'some',
};

export const cardViewport = {
  once: true,
  amount: 'some',
};

export const ctaViewport = {
  once: true,
  amount: 'some',
};
