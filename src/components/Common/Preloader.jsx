import React, { useState, useEffect, useRef } from 'react';
import './Preloader.css';

const TAGLINES = [
  'Engineering Confidence',
  'Precision. Reliability. Excellence.',
  'Setting the Standard for Quality',
];

const MIN_DISPLAY_MS = 3000;   // Guaranteed 3.0 seconds display time on every refresh
const EXIT_DURATION_MS = 800;  // 800ms exit fade-out animation

export default function Preloader({ onFinish }) {
  const [phase, setPhase] = useState('cycling'); // cycling -> exiting
  const [progress, setProgress] = useState(0);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  const startTimeRef = useRef(null);
  const onFinishRef = useRef(onFinish);
  const exitTriggeredRef = useRef(false);

  useEffect(() => {
    onFinishRef.current = onFinish;
  }, [onFinish]);

  // Completely lock body & html scrolling while preloader is active
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.touchAction = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [visible]);

  // Rotate taglines every 1.1s while active
  useEffect(() => {
    if (phase === 'exiting') return;
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % TAGLINES.length);
    }, 1100);
    return () => clearInterval(interval);
  }, [phase]);

  // Deterministic 60 FPS RAF Progress animation strictly from 0% -> 100% over MIN_DISPLAY_MS (3000ms)
  useEffect(() => {
    let animationFrameId;

    const tick = (timestamp) => {
      // Set start time on the very first frame of component mount
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = Math.max(0, timestamp - startTimeRef.current);
      const progressRatio = Math.min(elapsed / MIN_DISPLAY_MS, 1);

      // Linear percentage progression mapped strictly to elapsed time
      const currentPct = Math.min(100, Math.floor(progressRatio * 100));
      setProgress(currentPct);

      if (elapsed < MIN_DISPLAY_MS) {
        animationFrameId = requestAnimationFrame(tick);
      } else {
        // 3.0s duration reached: finish progress and trigger smooth 800ms exit
        setProgress(100);
        if (!exitTriggeredRef.current) {
          exitTriggeredRef.current = true;
          setPhase('exiting');

          // Unlock scroll immediately when exit transition begins
          document.body.style.overflow = '';
          document.documentElement.style.overflow = '';
          document.body.style.touchAction = '';

          setTimeout(() => {
            setVisible(false);
            onFinishRef.current?.();
          }, EXIT_DURATION_MS);
        }
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={[
        'nvr-preloader',
        phase === 'exiting' && 'nvr-preloader--exiting',
      ]
        .filter(Boolean)
        .join(' ')}
      role="status"
      aria-live="polite"
      aria-label={`Loading NVR Quality Solutions - ${progress}%`}
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* Dynamic Background Mesh Aurora Blobs */}
      <div className="nvr-preloader__aurora nvr-preloader__aurora--1" />
      <div className="nvr-preloader__aurora nvr-preloader__aurora--2" />
      <div className="nvr-preloader__aurora nvr-preloader__aurora--3" />
      <div className="nvr-preloader__grid-pattern" />

      {/* Main Glass Center Card */}
      <div className="nvr-preloader__card">
        {/* Status Pill Badge */}
        <div className="nvr-preloader__badge">
          <span className="nvr-preloader__badge-dot" />
          <span className="nvr-preloader__badge-text">QUALITY ASSURANCE PLATFORM</span>
        </div>

        {/* Logo Container with Ambient Backlight Glow */}
        <div className="nvr-preloader__logo-container">
          <div className="nvr-preloader__logo-glow" />
          <div className="nvr-preloader__logo-wrap">
            <img
              src="/nvr-logo.png"
              alt="NVR Quality Solutions Logo"
              className="nvr-preloader__logo"
            />
            <div className="nvr-preloader__logo-shimmer" />
          </div>
        </div>

        {/* Dynamic Tagline Carousel */}
        <div className="nvr-preloader__tagline-viewport">
          {TAGLINES.map((text, index) => {
            const isActive = index === taglineIndex && phase !== 'exiting';
            return (
              <span
                key={text}
                className={[
                  'nvr-preloader__tagline',
                  isActive && 'nvr-preloader__tagline--active',
                  index < taglineIndex && 'nvr-preloader__tagline--prev',
                  index > taglineIndex && 'nvr-preloader__tagline--next',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {text}
              </span>
            );
          })}
        </div>

        {/* Progress System: Bar + Counter */}
        <div className="nvr-preloader__progress-section">
          <div className="nvr-preloader__track">
            <div
              className="nvr-preloader__bar"
              style={{ width: `${progress}%` }}
            >
              <div className="nvr-preloader__bar-glow" />
            </div>
          </div>

          <div className="nvr-preloader__meta">
            <span className="nvr-preloader__status-label">
              {progress < 100 ? 'Initializing resources...' : 'Ready'}
            </span>
            <span className="nvr-preloader__counter">
              {String(progress).padStart(2, '0')}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
