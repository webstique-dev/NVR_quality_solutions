import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { LuCheck, LuShieldCheck, LuArrowRight } from 'react-icons/lu';
import SplitText from '../ui/SplitText';
import Button from '../Common/Button';
import { fadeUp, imageReveal, cardReveal } from '../../animations/variants';
import './Hero.css';

const Hero = () => {
  const [activeMode, setActiveMode] = useState('student');
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
      </div>

      <div className="container hero__inner">
        {/* Left Column: Content */}
        <div className="text-col">
          <motion.span
            className="eyebrow"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
          >
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
          />

          {/* Action Buttons */}
          <motion.div
            className="cta-row"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
          >
            <Button as="link" to="/training-programs" variant="primary" className="btn-solid">
              Explore Trainings <LuArrowRight className="btn-arrow" aria-hidden="true" />
            </Button>
            <Button as="link" to="/contact" variant="secondary" className="btn-ghost">
              Talk to Our Experts
            </Button>
          </motion.div>

          {/* Recognized Worldwide Standards Chips */}
          <motion.div
            className="credential-line"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
          >
            <span className="credential-label">Gain standards recognized worldwide:</span>
            <div className="chip-row">
              <span className="chip">NABH</span>
              <span className="chip">JCI</span>
              <span className="chip">CAMHP</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Media Frame */}
        <motion.div
          className="media-col"
          variants={imageReveal}
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : 'hidden'}
          animate={shouldReduceMotion ? { opacity: 1, scale: 1 } : 'show'}
        >
          <div className="media-frame">
            <img
              src="/hero-illustration.png"
              alt="Healthcare professionals reviewing quality standards and accreditation documents"
              className="media-fill"
              loading="eager"
            />

            <motion.div
              className="float-badge"
              variants={cardReveal}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            >
              <span className="icon">
                <LuCheck className="icon-svg" aria-hidden="true" />
              </span>
              <span className="float-badge-text">
                <b>Structured training</b>Expert-guided programs
              </span>
            </motion.div>

            <motion.div
              className="float-card"
              variants={cardReveal}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            >
              <span className="ring">
                <LuShieldCheck className="ring-icon" aria-hidden="true" />
              </span>
              <span className="float-card-text">
                <b>Theory + practice</b>Bridging the gap to real-world care
              </span>
            </motion.div>
          </div>

          <div className="scroll-cue" aria-hidden="true">
            <span>Explore</span> <span className="arrow">↓</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
