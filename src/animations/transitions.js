/* ===================================================================
   Hardware-Accelerated Easing & Transition Configuration (Framer Motion)
   =================================================================== */

// Premium Cubic-Bezier Curves inspired by Apple, Stripe, and Linear
export const EASE = {
  smooth: [0.16, 1, 0.3, 1],
  bounce: [0.34, 1.56, 0.64, 1],
  linear: [0, 0, 1, 1],
  out: [0, 0, 0.2, 1],
  inOut: [0.4, 0, 0.2, 1],
};

export const DURATION = {
  fast: 0.2,
  normal: 0.5,
  medium: 0.7,
  slow: 0.9,
};

// Default Framer Motion transition presets
export const transitions = {
  fast: {
    duration: DURATION.fast,
    ease: EASE.smooth,
  },
  normal: {
    duration: DURATION.normal,
    ease: EASE.smooth,
  },
  medium: {
    duration: DURATION.medium,
    ease: EASE.smooth,
  },
  slow: {
    duration: DURATION.slow,
    ease: EASE.smooth,
  },
  buttonHover: {
    duration: 0.2,
    ease: EASE.smooth,
  },
};
