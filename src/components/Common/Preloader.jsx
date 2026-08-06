import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './Preloader.css';

/* Prefer the modern `motion.create()` factory over the deprecated
   `motion(Component)` form. */
const MotionLogo = motion.create('img');

/* ===================================================================
   NVR Quality Solutions — Cinematic Preloader
   ----------------------------------------------------------------
   A single-element, GPU-only loading experience:
   blank -> logo grows into existence -> subtle settle -> confident
   hold -> logo zooms toward the camera while the site fades in.

   Design language: Apple / Framer / Linear. Pure white, no chrome,
   no progress, no text. Only transform + opacity are ever animated.
   =================================================================== */

/* ─── Phase Timing (ms) ──────────────────────────────────────────────
   150   idle    (empty screen — builds anticipation)
   900   reveal  (logo grows from nothing)
   250   settle  (imperceptible 1 -> 1.03 -> 1, adds life)
   700+  hold    (still, confident — extends until app is ready)
   700   exit    (zoom toward camera + fade)
   ---------------------------------------------------------------- */
const TIMING = {
  idle: 150,
  reveal: 900,
  settle: 250,
  holdMin: 700,
  exit: 700,
  // Hard safety: never trap the user behind the overlay if the network
  // stalls fonts/images. Proceed with the exit regardless. Kept short so
  // a slow connection can never hold a blank screen for long.
  maxWait: 2600,
};

/* The signature zoom: 1 -> 15 in 700ms with a calm easeInOut. */
const EXIT_EASE = [0.45, 0, 0.55, 1];
/* Elegant, near-critically-damped rise (~900ms) so the logo "grows"
   into existence rather than popping. */
const REVEAL_SPRING = { type: 'spring', stiffness: 60, damping: 15, mass: 1.6 };

/**
 * Resolves once the experience is truly ready:
 *  - Google fonts finished loading
 *  - The window `load` event fired (all images/hero assets ready)
 *  - Bounded by a max-wait safety timer
 */
function useAppReady() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let alive = true;

    const windowLoaded = new Promise((resolve) => {
      if (document.readyState === 'complete') resolve();
      else window.addEventListener('load', resolve, { once: true });
    });

    // `document.fonts.ready` never rejects and keeps the reveal honest,
    // so the headline typography is settled before the page appears.
    const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

    Promise.all([windowLoaded, fontsReady]).then(() => {
      if (alive) setReady(true);
    });

    const force = window.setTimeout(() => {
      if (alive) setReady(true);
    }, TIMING.maxWait);

    return () => {
      alive = false;
      window.clearTimeout(force);
    };
  }, []);

  return ready;
}

/* Freeze scrolling while the overlay is present (re-opened on exit). */
function lockScroll() {
  document.body.style.overflow = 'hidden';
  document.documentElement.style.overflow = 'hidden';
}
function unlockScroll() {
  document.body.style.overflow = '';
  document.documentElement.style.overflow = '';
}

/**
 * Maps a phase to its `animate` target + `transition`.
 * Phases are chained via state, so Framer Motion always tweens from the
 * current visual value — no abrupt resets, no blank frames.
 */
function getPhaseMotion(phase, reduceMotion) {
  switch (phase) {
    case 'reveal':
      return {
        target: { scale: 1, opacity: 1 },
        transition: {
          scale: REVEAL_SPRING,
          opacity: reduceMotion ? { duration: 0.01 } : { duration: 0.5, ease: 'easeOut' },
        },
      };
    case 'settle':
      return {
        // Keyframe array: a barely-visible overshoot then a soft landing.
        target: { scale: [1, 1.03, 1], opacity: 1 },
        transition: {
          scale: { duration: 0.25, ease: 'easeInOut' },
          opacity: { duration: 0.25 },
        },
      };
    case 'hold':
      // Pin the logo perfectly still — the longest, most confident beat.
      return { target: { scale: 1, opacity: 1 }, transition: { duration: 0.001 } };
    case 'exit':
      return {
        target: {
          scale: 15,
          // Keep the logo fully opaque during the initial zoom so it
          // stays crisp, then dissolve it as it swells past the frame.
          opacity: [1, 1, 0],
        },
        transition: {
          scale: {
            duration: reduceMotion ? 0.3 : TIMING.exit / 1000,
            ease: EXIT_EASE,
          },
          opacity: {
            duration: reduceMotion ? 0.3 : TIMING.exit / 1000,
            ease: 'easeInOut',
            times: [0, 0.35, 1],
          },
        },
      };
    default:
      // `idle` — Phase 1: the screen is intentionally empty.
      return { target: { scale: 0.15, opacity: 0 }, transition: { duration: 0.001 } };
  }
}

export default function Preloader({ onStartExit, onFinish }) {
  const reduceMotion = useReducedMotion();
  const appReady = useAppReady();
  const [phase, setPhase] = useState('idle');

  const onStartExitRef = useRef(onStartExit);
  const onFinishRef = useRef(onFinish);
  const holdStartedRef = useRef(0);

  // Keep latest callbacks without re-registering effects.
  useEffect(() => {
    onStartExitRef.current = onStartExit;
    onFinishRef.current = onFinish;
  }, [onStartExit, onFinish]);

  /* Freeze scrolling while the overlay is on screen. */
  useEffect(() => {
    lockScroll();
    return unlockScroll;
  }, []);

  /* ─── Phases 1-3: idle -> reveal -> settle, driven by time ──────── */
  useEffect(() => {
    if (reduceMotion) {
      setPhase('hold');
      return undefined;
    }

    const t = window.setTimeout(() => setPhase('reveal'), TIMING.idle);
    const r = window.setTimeout(() => setPhase('settle'), TIMING.idle + TIMING.reveal);
    const s = window.setTimeout(
      () => setPhase('hold'),
      TIMING.idle + TIMING.reveal + TIMING.settle
    );
    return () => {
      window.clearTimeout(t);
      window.clearTimeout(r);
      window.clearTimeout(s);
    };
  }, [reduceMotion]);

  /* ─── Phase 4 -> 5: hold for a beat, then exit once the app is
         ready (fonts + images + React). NOT a blind timeout. ──────── */
  useEffect(() => {
    if (phase !== 'hold') return undefined;

    if (holdStartedRef.current === 0) holdStartedRef.current = Date.now();
    const elapsed = Date.now() - holdStartedRef.current;
    const minimum = reduceMotion ? 100 : TIMING.holdMin;
    const remaining = Math.max(0, minimum - elapsed);

    // Wait for the "ready" signal; enforce the minimum hold time first.
    const wait = window.setTimeout(() => {
      if (appReady) setPhase('exit');
    }, remaining);

    return () => window.clearTimeout(wait);
  }, [phase, appReady, reduceMotion]);

  /* ─── Phase 5: start exit, reveal the site underneath, clean up ─── */
  useEffect(() => {
    if (phase !== 'exit') return undefined;

    // Kick off the page transition behind the zoom immediately.
    onStartExitRef.current?.();
    unlockScroll();

    const done = window.setTimeout(() => onFinishRef.current?.(), TIMING.exit);
    return () => window.clearTimeout(done);
  }, [phase]);

  const { target, transition } = getPhaseMotion(phase, reduceMotion);

  return (
    <div
      className={['nvr-preloader', phase === 'exit' && 'nvr-preloader--exiting']
        .filter(Boolean)
        .join(' ')}
      role="status"
      aria-label="Preparing NVR Quality Solutions"
    >
      <MotionLogo
        src="https://res.cloudinary.com/rlokioxu/image/upload/v1786013954/nvr-logo_vadrpc.png"
        alt="NVR Quality Solutions"
        className="nvr-preloader__logo"
        width={443}
        height={268}
        loading="eager"
        decoding="async"
        fetchPriority="high"
        initial={false}
        animate={target}
        transition={transition}
      />
    </div>
  );
}
