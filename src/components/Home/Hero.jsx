import { useState } from 'react';
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { LuCheck, LuShieldCheck, LuArrowRight } from 'react-icons/lu';
import SplitText from '../ui/SplitText';
import Button from '../Common/Button';
import { usePreloader } from '../../context/PreloaderContext';
import {
  heroContainer,
  heroGlow,
  heroChildFadeUp,
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
  const { isReady } = usePreloader();

  // Mouse Parallax Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Depth Parallax Layers
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

  const handleMouseMove = (e) => {
    if (shouldReduceMotion || (typeof window !== 'undefined' && window.innerWidth < 768)) return;
    const { currentTarget, clientX, clientY } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="hero" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
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
              : isReady
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
        <motion.div
          className="hero__glow hero__glow--2"
          style={shouldReduceMotion ? {} : { x: bgX, y: bgY }}
          variants={heroGlow}
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : 'hidden'}
          animate={
            shouldReduceMotion
              ? { opacity: 1, scale: 1 }
              : isReady
              ? {
                  opacity: [0.6, 0.9, 0.6],
                  scale: [1, 1.15, 1],
                }
              : 'hidden'
          }
          transition={{
            opacity: { duration: 8, ease: 'easeInOut', repeat: Infinity, delay: 1 },
            scale: { duration: 10, ease: 'easeInOut', repeat: Infinity, delay: 1 },
          }}
        />

        {/* Ambient Decorative Dot Matrix Overlay */}
        <motion.div
          className="hero__grid-pattern"
          initial={{ opacity: 0 }}
          animate={{ opacity: isReady ? 0.35 : 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </div>

      <motion.div
        className="container hero__inner"
        variants={heroContainer}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={isReady ? 'show' : 'hidden'}
      >
        {/* Left Column: Content */}
        <motion.div
          className="text-col"
          style={shouldReduceMotion ? {} : { x: contentX, y: contentY }}
        >
          <motion.span className="eyebrow" variants={heroChildFadeUp}>
            Healthcare Quality &amp; Patient Safety Training
          </motion.span>

          <SplitText
            tag="h1"
            text="Building safer healthcare through quality excellence"
            highlightText="quality excellence"
            highlightClass="hero__highlight"
            className="hero__heading"
            delay={35}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="left"
            ready={isReady}
          />

          <SplitText
            tag="p"
            text="At NVR Quality Solutions, we provide expert-led Healthcare Quality Training, Patient Safety Training, and professional consultancy. Every student that leaves us has the knowledge and practical skills needed to implement globally recognized quality standards."
            className="lede"
            delay={18}
            duration={0.7}
            splitType="words"
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
            ready={isReady}
          />

          {/* Action Buttons with Spring Interactions */}
          <motion.div className="cta-row" variants={heroChildFadeUp}>
            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 450, damping: 22 }}
            >
              <Button as="link" to="/training-programs" variant="primary" className="btn-solid">
                Explore Trainings <LuArrowRight className="btn-arrow" aria-hidden="true" />
              </Button>
            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : { scale: 1.04, y: -2 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 450, damping: 22 }}
            >
              <Button as="link" to="/contact" variant="secondary" className="btn-ghost">
                Talk to Our Experts
              </Button>
            </motion.div>
          </motion.div>

          {/* Recognized Worldwide Standards Chips with Staggered Entrance */}
          <motion.div className="credential-line" variants={heroChildFadeUp}>
            <span className="credential-label">Gain standards recognized worldwide:</span>
            <motion.div
              className="chip-row"
              variants={chipContainer}
              initial={shouldReduceMotion ? false : 'hidden'}
              animate={isReady ? 'show' : 'hidden'}
            >
              <motion.span
                className="chip"
                variants={chipItem}
                whileHover={shouldReduceMotion ? {} : 'hover'}
              >
                NABH
              </motion.span>
              <motion.span
                className="chip"
                variants={chipItem}
                whileHover={shouldReduceMotion ? {} : 'hover'}
              >
                JCI
              </motion.span>
              <motion.span
                className="chip"
                variants={chipItem}
                whileHover={shouldReduceMotion ? {} : 'hover'}
              >
                CAMHP
              </motion.span>
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
            animate={shouldReduceMotion ? { opacity: 1, scale: 1, x: 0 } : isReady ? 'show' : 'hidden'}
          >
            <div className="media-frame">
              <motion.img
                src="/hero-illustration.png"
                alt="Healthcare professionals reviewing quality standards and accreditation documents"
                className="media-fill"
                loading="eager"
                initial={shouldReduceMotion ? { scale: 1 } : { scale: 1.06 }}
                animate={isReady ? { scale: 1 } : { scale: 1.06 }}
                transition={{ duration: 1.2, ease: EASE.smooth }}
              />

            {/* Floating Glass Badge (Top Left) with Continuous Floating */}
            <motion.div
              className="float-badge"
              style={shouldReduceMotion ? {} : { x: badgeX, y: badgeY }}
              variants={floatBadgeEntrance}
              initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
              animate={shouldReduceMotion ? { opacity: 1 } : isReady ? 'show' : 'hidden'}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { scale: 1.05, boxShadow: '0 20px 40px -10px rgba(15, 63, 184, 0.3)' }
              }
            >
              <motion.div
                className="float-badge-inner"
                animate={
                  shouldReduceMotion || !isReady
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

            {/* Floating Card (Bottom Left) with Counter-Phase Floating */}
            <motion.div
              className="float-card"
              style={shouldReduceMotion ? {} : { x: cardX, y: cardY }}
              variants={floatCardEntrance}
              initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
              animate={shouldReduceMotion ? { opacity: 1 } : isReady ? 'show' : 'hidden'}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : { scale: 1.04, boxShadow: '0 24px 48px -12px rgba(15, 23, 42, 0.28)' }
              }
            >
              <motion.div
                className="float-card-inner"
                animate={
                  shouldReduceMotion || !isReady
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
            animate={isReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
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


