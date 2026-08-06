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

export const heroImageReveal = {
  hidden: {
    opacity: 0,
    x: isMobile ? 30 : 60,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.1,
      ease: EASE.smooth,
      delay: 0.15,
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

/* ─── Hero Section Animation System ─────────────────────────────── */

/* ─── Hero Sequence — Clean Sequential Fade-Up System ─────────────
   One shared stagger parent + one child variant keep the Hero entrance
   consistent and reusable. Only transform/opacity are animated.      */

export const heroStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

export const heroFadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: EASE.smooth,
    },
  },
};

export const heroGlow = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: EASE.smooth,
    },
  },
};

export const chipContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.35,
    },
  },
};

export const chipItem = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    y: 12,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
  hover: {
    y: -3,
    scale: 1.05,
    boxShadow: '0 8px 20px rgba(15, 63, 184, 0.18)',
    transition: {
      duration: 0.2,
      ease: EASE.smooth,
    },
  },
};

export const floatBadgeEntrance = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    y: 24,
    x: -12,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 22,
      delay: 0.45,
    },
  },
};

export const floatCardEntrance = {
  hidden: {
    opacity: 0,
    scale: 0.82,
    y: 28,
    x: -16,
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 280,
      damping: 20,
      delay: 0.65,
    },
  },
};

