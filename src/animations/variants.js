/* ===================================================================
   Centralized Motion Animation Variants (Framer Motion)
   Hardware Accelerated — Transform & Opacity Only
   =================================================================== */

import { EASE, DURATION } from './transitions';

// Helper to check for mobile screens
const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
const yOffset = isMobile ? 20 : 40;
const xOffset = isMobile ? 20 : 40;

/* ─── Fade Up ───────────────────────────────────────────────────── */
export const fadeUp = {
  hidden: {
    opacity: 0,
    y: yOffset,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.medium,
      ease: EASE.smooth,
    },
  },
};

/* ─── Fade Down ─────────────────────────────────────────────────── */
export const fadeDown = {
  hidden: {
    opacity: 0,
    y: -yOffset,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.medium,
      ease: EASE.smooth,
    },
  },
};

/* ─── Fade Left (Slide from Right) ─────────────────────────────── */
export const fadeLeft = {
  hidden: {
    opacity: 0,
    x: xOffset,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.medium,
      ease: EASE.smooth,
    },
  },
};

/* ─── Fade Right (Slide from Left) ─────────────────────────────── */
export const fadeRight = {
  hidden: {
    opacity: 0,
    x: -xOffset,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION.medium,
      ease: EASE.smooth,
    },
  },
};

/* ─── Fade Scale ────────────────────────────────────────────────── */
export const fadeScale = {
  hidden: {
    opacity: 0,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.medium,
      ease: EASE.smooth,
    },
  },
};

/* ─── Blur Reveal (Heading Entrance Effect) ─────────────────────── */
export const blurReveal = {
  hidden: {
    opacity: 0,
    y: yOffset * 0.75,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.slow,
      ease: EASE.smooth,
    },
  },
};

/* ─── Stagger Container ─────────────────────────────────────────── */
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

/* ─── Stagger Item ──────────────────────────────────────────────── */
export const staggerItem = {
  hidden: {
    opacity: 0,
    y: yOffset * 0.6,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.normal,
      ease: EASE.smooth,
    },
  },
};

/* ─── Card Reveal ───────────────────────────────────────────────── */
export const cardReveal = {
  hidden: {
    opacity: 0,
    y: yOffset,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: DURATION.medium,
      ease: EASE.smooth,
    },
  },
  hover: {
    y: -4,
    scale: 1.01,
    transition: {
      duration: 0.25,
      ease: EASE.smooth,
    },
  },
};

/* ─── Image Reveal ──────────────────────────────────────────────── */
export const imageReveal = {
  hidden: {
    opacity: 0,
    scale: 1.06,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.slow,
      ease: EASE.smooth,
    },
  },
};

/* ─── Button Animations ─────────────────────────────────────────── */
export const buttonReveal = {
  hidden: {
    opacity: 0,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION.normal,
      ease: EASE.smooth,
    },
  },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.2,
      ease: EASE.smooth,
    },
  },
  tap: {
    scale: 0.97,
    transition: {
      duration: 0.15,
      ease: EASE.smooth,
    },
  },
};
