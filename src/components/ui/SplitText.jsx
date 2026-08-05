import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * SplitText component — React Bits exact specification
 * Animates text characters or words on scroll using GSAP & ScrollTrigger.
 */
const SplitText = ({
  text = '',
  tag: Tag = 'p',
  className = '',
  delay = 40,
  duration = 0.8,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0 },
  threshold = 0.15,
  rootMargin = '-40px',
  textAlign = 'left',
  highlightText = '',
  highlightClass = '',
  onLetterAnimationComplete,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const targets = el.querySelectorAll('.split-item');
    if (!targets || targets.length === 0) return;

    if (prefersReducedMotion) {
      gsap.set(targets, { opacity: 1, y: 0, x: 0 });
      return;
    }

    // Convert delay ms to seconds stagger
    const staggerDelay = delay > 1 ? delay / 1000 : delay;

    const ctx = gsap.context(() => {
      // Check if element is already within viewport on page load/refresh
      const rect = el.getBoundingClientRect();
      const isAboveFold = rect.top < window.innerHeight * 0.9;

      if (isAboveFold) {
        // Immediate smooth load animation for Hero & top-of-page text
        gsap.fromTo(
          targets,
          { ...from },
          {
            ...to,
            duration,
            ease,
            stagger: staggerDelay,
            onComplete: () => {
              if (typeof onLetterAnimationComplete === 'function') {
                onLetterAnimationComplete();
              }
            },
          }
        );
      } else {
        // Scroll-triggered animation for below-the-fold content
        gsap.fromTo(
          targets,
          { ...from },
          {
            ...to,
            duration,
            ease,
            stagger: staggerDelay,
            scrollTrigger: {
              trigger: el,
              start: `top ${100 - threshold * 100}%`,
              toggleActions: 'play none none none',
              once: true,
            },
            onComplete: () => {
              if (typeof onLetterAnimationComplete === 'function') {
                onLetterAnimationComplete();
              }
            },
          }
        );
      }
    }, el);

    return () => {
      ctx.revert();
    };
  }, [text, delay, duration, ease, splitType, from, to, threshold, onLetterAnimationComplete]);

  // Determine if a character position or word falls within the highlighted phrase
  const isIndexHighlighted = (charIndex) => {
    if (!highlightText || !text) return false;
    const highlightStart = text.indexOf(highlightText);
    if (highlightStart === -1) return false;
    const highlightEnd = highlightStart + highlightText.length;
    return charIndex >= highlightStart && charIndex < highlightEnd;
  };

  const renderSplitContent = () => {
    if (!text || typeof text !== 'string') return text;

    if (splitType === 'words') {
      const words = text.split(' ');
      let currentStringPos = 0;

      return words.map((word, wordIdx) => {
        const wordStartPos = currentStringPos;
        const isHighlighted =
          highlightText &&
          text.indexOf(highlightText) !== -1 &&
          wordStartPos >= text.indexOf(highlightText) &&
          wordStartPos < text.indexOf(highlightText) + highlightText.length;

        currentStringPos += word.length + 1; // +1 space

        return (
          <span
            key={`word-${wordIdx}`}
            className={`split-item split-word ${isHighlighted ? highlightClass : ''}`.trim()}
            style={{
              display: 'inline-block',
              whiteSpace: 'nowrap',
              marginRight: wordIdx < words.length - 1 ? '0.25em' : '0',
              willChange: 'transform, opacity',
            }}
          >
            {word}
          </span>
        );
      });
    }

    // Default 'chars' split
    const words = text.split(' ');
    let globalCharCount = 0;

    return words.map((word, wordIdx) => {
      const wordChars = word.split('');
      const wordNodes = wordChars.map((char, charIdx) => {
        const charGlobalIndex = globalCharCount;
        globalCharCount += 1;
        const isHighlighted = isIndexHighlighted(charGlobalIndex);

        return (
          <span
            key={`char-${wordIdx}-${charIdx}`}
            className={`split-item split-char ${isHighlighted ? highlightClass : ''}`.trim()}
            style={{
              display: 'inline-block',
              willChange: 'transform, opacity',
            }}
          >
            {char}
          </span>
        );
      });

      globalCharCount += 1; // +1 space between words

      return (
        <span
          key={`word-wrap-${wordIdx}`}
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            marginRight: wordIdx < words.length - 1 ? '0.25em' : '0',
          }}
        >
          {wordNodes}
        </span>
      );
    });
  };

  return (
    <Tag
      ref={containerRef}
      className={`split-text ${className}`.trim()}
      style={{ textAlign }}
    >
      {renderSplitContent()}
    </Tag>
  );
};

export default SplitText;
