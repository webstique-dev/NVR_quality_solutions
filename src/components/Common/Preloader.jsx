import React, { useState, useEffect, useRef } from 'react';
import './Preloader.css';

const TAGLINES = [
  'Engineering Confidence',
  'Precision. Reliability. Excellence.',
  'Setting the Standard for Quality',
];

const MIN_DISPLAY_MS = 3000;   // minimum time the preloader remains visible
const EXIT_DURATION_MS = 800;  // must match the transition time in Preloader.css

export default function Preloader({ onFinish }) {
  const [phase, setPhase] = useState('entering'); // entering -> cycling -> exiting
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const reducedMotion = useRef(
    typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  const onFinishRef = useRef(onFinish);
  const loadedRef = useRef(false);
  const minTimeRef = useRef(false);
  const requestedExitRef = useRef(false);
  const entryTimeout = useRef(null);
  const cycleInterval = useRef(null);
  const minTimeout = useRef(null);
  const exitTimeout = useRef(null);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  const triggerExit = () => {
    if (requestedExitRef.current) return;
    requestedExitRef.current = true;
    setPhase('exiting');
    exitTimeout.current = window.setTimeout(() => {
      setVisible(false);
      onFinishRef.current?.();
    }, reducedMotion.current ? 250 : EXIT_DURATION_MS);
  };

  // Logo wipe-in, then start cycling taglines
  useEffect(() => {
    entryTimeout.current = window.setTimeout(
      () => setPhase('cycling'),
      reducedMotion.current ? 120 : 650
    );
    return () => {
      window.clearTimeout(entryTimeout.current);
    };
  }, []);

  // Cycle taglines while in 'cycling' phase
  useEffect(() => {
    if (phase !== 'cycling') return undefined;
    cycleInterval.current = window.setInterval(() => {
      setTaglineIndex((i) => (i + 1) % TAGLINES.length);
    }, 950);
    return () => {
      window.clearInterval(cycleInterval.current);
    };
  }, [phase]);

  // Start minimum display timer and wait for page load before exiting
  useEffect(() => {
    const markLoaded = () => {
      loadedRef.current = true;
      if (minTimeRef.current) {
        triggerExit();
      }
    };

    minTimeout.current = window.setTimeout(() => {
      minTimeRef.current = true;
      if (loadedRef.current) {
        triggerExit();
      }
    }, reducedMotion.current ? 1500 : MIN_DISPLAY_MS);

    if (document.readyState === 'complete') {
      markLoaded();
    } else {
      window.addEventListener('load', markLoaded);
    }

    return () => {
      window.removeEventListener('load', markLoaded);
      window.clearTimeout(minTimeout.current);
      window.clearTimeout(exitTimeout.current);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={[
        'nvr-preloader',
        phase === 'exiting' && 'nvr-preloader--exiting',
        reducedMotion.current && 'nvr-preloader--reduced',
      ]
        .filter(Boolean)
        .join(' ')}
      role="status"
      aria-live="polite"
      aria-label="Loading NVR Quality Solutions"
    >
      <div className="nvr-preloader__blob nvr-preloader__blob--red" />
      <div className="nvr-preloader__blob nvr-preloader__blob--blue" />

      <div className="nvr-preloader__content">
        <div
          className={[
            'nvr-preloader__logo-wrap',
            phase !== 'entering' && 'nvr-preloader__logo-wrap--revealed',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <img
            src="/nvr-logo.png"
            alt="NVR Quality Solutions"
            className="nvr-preloader__logo"
          />
        </div>

        <div className="nvr-preloader__tagline-wrap">
          {TAGLINES.map((text, i) => (
            <span
              key={text}
              className={[
                'nvr-preloader__tagline',
                i === taglineIndex &&
                  phase === 'cycling' &&
                  'nvr-preloader__tagline--active',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
