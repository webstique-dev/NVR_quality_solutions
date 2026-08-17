import { useRef } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LuCheck, LuShieldCheck, LuArrowRight } from 'react-icons/lu';
import Button from '../Common/Button';
import Magnetic from '../ui/Magnetic';
import { usePreloader } from '../../context/PreloaderContext';
import {
  heroStagger,
  heroFadeUp,
  heroGlow,
  chipContainer,
  chipItem,
  floatBadgeEntrance,
  floatCardEntrance,
  heroImageReveal,
} from '../../animations/variants';
import { EASE } from '../../animations/transitions';
import './Hero.css';

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  const { isPreloaderGone } = usePreloader();

  // Mouse Parallax Motion Values (transform-only, GPU friendly)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const bgX = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);
  const bgY = useTransform(smoothMouseY, [-0.5, 0.5], [-14, 14]);

  const contentX = useTransform(smoothMouseX, [-0.5, 0.5], [-5, 5]);
  const contentY = useTransform(smoothMouseY, [-0.5, 0.5], [-5, 5]);

  const mediaX = useTransform(smoothMouseX, [-0.5, 0.5], [8, -8]);
  const mediaY = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);

  const badgeX = useTransform(smoothMouseX, [-0.5, 0.5], [16, -16]);
  const badgeY = useTransform(smoothMouseY, [-0.5, 0.5], [16, -16]);

  const cardX = useTransform(smoothMouseX, [-0.5, 0.5], [22, -22]);
  const cardY = useTransform(smoothMouseY, [-0.5, 0.5], [22, -22]);

  const heroRectRef = useRef(null);

  const handleMouseEnter = (e) => {
    if (shouldReduceMotion || (typeof window !== 'undefined' && window.innerWidth < 768)) return;
    heroRectRef.current = e.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || (typeof window !== 'undefined' && window.innerWidth < 768)) return;
    if (!heroRectRef.current) {
      heroRectRef.current = e.currentTarget.getBoundingClientRect();
    }
    const rect = heroRectRef.current;
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    heroRectRef.current = null;
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      className="hero"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ opacity: isPreloaderGone ? 1 : 0 }}
    >
      {/* Background Atmosphere Glows & Decorative Grid */}
      <div className="hero__bg" aria-hidden="true">
        <motion.div
          className="hero__glow hero__glow--1"
          style={shouldReduceMotion ? {} : { x: bgX, y: bgY }}
          variants={heroGlow}
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : 'hidden'}
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : isPreloaderGone
              ? {
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.12, 1],
                }
              : 'hidden'
          }
          transition={{
            opacity: { duration: 7, ease: 'easeInOut', repeat: Infinity },
            scale: { duration: 9, ease: 'easeInOut', repeat: Infinity },
          }}
        />

        {/* Ambient Decorative Dot Matrix Overlay */}
        <motion.div
          className="hero__grid-pattern"
          initial={{ opacity: 0 }}
          animate={{ opacity: isPreloaderGone ? 0.35 : 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

      {/* Content — clean sequential staggered fade-in after preloader */}
      <motion.div
        className="container hero__inner"
        variants={heroStagger}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? 'show' : isPreloaderGone ? 'show' : 'hidden'}
      >
        {/* Left Column: Content */}
        <motion.div
          className="text-col"
          style={shouldReduceMotion ? {} : { x: contentX, y: contentY }}
        >
          <motion.span className="eyebrow" variants={heroFadeUp}>
            Healthcare Quality &amp; Patient Safety Training
          </motion.span>

          <motion.h1 className="hero__heading" variants={heroFadeUp}>
            Building safer healthcare through{' '}
            <span className="hero__highlight">quality excellence</span>
          </motion.h1>

          <motion.p className="lede" variants={heroFadeUp}>
            At NVR Quality Solutions, we provide expert-led Healthcare Quality Training,
            Patient Safety Training, and professional consultancy. Every student that leaves
            us has the knowledge and practical skills needed to implement globally recognized
            quality standards.
          </motion.p>

          {/* Action Buttons — Magnetic CTA */}
          <motion.div className="cta-row" variants={heroFadeUp}>
            <Button as="link" to="/training-programs" variant="primary" className="btn-solid">
              Explore Trainings <LuArrowRight className="btn-arrow" aria-hidden="true" />
            </Button>

            <Button as="link" to="/contact" variant="secondary" className="btn-ghost">
              Talk to Our Experts
            </Button>
          </motion.div>

          {/* Recognized Worldwide Standards Chips */}
          <motion.div className="credential-line" variants={heroFadeUp}>
            <span className="credential-label">Gain standards recognized worldwide:</span>
            <motion.div
              className="chip-row"
              variants={chipContainer}
              initial={shouldReduceMotion ? false : 'hidden'}
              animate={isPreloaderGone ? 'show' : 'hidden'}
            >
              {['NABH', 'JCI', 'CAAM HP'].map((label) => (
                <Magnetic key={label} strength={0.25} className="magnetic--chip">
                  <motion.span className="chip" variants={chipItem}>
                    {label}
                  </motion.span>
                </Magnetic>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Column: Media Frame */}
        <motion.div
          className="media-col"
          style={shouldReduceMotion ? {} : { x: mediaX, y: mediaY }}
        >
          <motion.div
            variants={heroImageReveal}
            initial={shouldReduceMotion ? { opacity: 1, scale: 1, x: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, scale: 1, x: 0 } : isPreloaderGone ? 'show' : 'hidden'}
          >
            <div className="media-frame">
              <motion.img
                src="https://res.cloudinary.com/rlokioxu/image/upload/v1786013954/hero-illustration_stlc4u.jpg"
                alt="Healthcare professionals reviewing quality standards and accreditation documents"
                className="media-fill"
                width={1024}
                height={1024}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.06 }}
                animate={isPreloaderGone ? { scale: 1 } : { scale: 1.06 }}
                transition={{ duration: 1.2, ease: EASE.smooth }}
              />

              {/* Floating Glass Badge (Top Left) */}
              <motion.div
                className="float-badge"
                style={shouldReduceMotion ? {} : { x: badgeX, y: badgeY }}
                variants={floatBadgeEntrance}
                initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
                animate={shouldReduceMotion ? { opacity: 1 } : isPreloaderGone ? 'show' : 'hidden'}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { scale: 1.05, boxShadow: '0 20px 40px -10px rgba(15, 63, 184, 0.3)' }
                }
              >
                <motion.div
                  className="float-badge-inner"
                  animate={
                    shouldReduceMotion || !isPreloaderGone
                      ? {}
                      : {
                          y: [0, -9, 0],
                          rotate: [0, 1.2, 0],
                        }
                  }
                  transition={{
                    duration: 4.8,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                >
                  <span className="icon">
                    <LuCheck className="icon-svg" aria-hidden="true" />
                  </span>
                  <span className="float-badge-text">
                    <b>Structured training</b>Expert-guided programs
                  </span>
                </motion.div>
              </motion.div>

              {/* Floating Card (Bottom Left) */}
              <motion.div
                className="float-card"
                style={shouldReduceMotion ? {} : { x: cardX, y: cardY }}
                variants={floatCardEntrance}
                initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
                animate={shouldReduceMotion ? { opacity: 1 } : isPreloaderGone ? 'show' : 'hidden'}
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : { scale: 1.04, boxShadow: '0 24px 48px -12px rgba(15, 23, 42, 0.28)' }
                }
              >
                <motion.div
                  className="float-card-inner"
                  animate={
                    shouldReduceMotion || !isPreloaderGone
                      ? {}
                      : {
                          y: [0, 9, 0],
                          rotate: [0, -1.2, 0],
                        }
                  }
                  transition={{
                    duration: 5.4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                    delay: 0.6,
                  }}
                >
                  <span className="ring">
                    <LuShieldCheck className="ring-icon" aria-hidden="true" />
                  </span>
                  <span className="float-card-text">
                    <b>Theory + practice</b>Bridging the gap to real-world care
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="scroll-cue"
            aria-hidden="true"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            animate={isPreloaderGone ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ delay: 1.1, duration: 0.6, ease: EASE.smooth }}
          >
            <span>Explore</span> <span className="arrow">↓</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
