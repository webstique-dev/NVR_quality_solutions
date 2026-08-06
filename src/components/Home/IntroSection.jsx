import { motion, useReducedMotion } from 'framer-motion';
import { LuShieldCheck, LuAward, LuBookOpen, LuCheck } from 'react-icons/lu';
import Button from '../Common/Button';
import Magnetic from '../ui/Magnetic';
import { fadeRight, fadeLeft } from '../../animations/variants';
import { homeViewport } from '../../animations/viewport';
import './IntroSection.css';

const IntroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="intro-section section section--light">
      <div className="intro-section__bg" aria-hidden="true">
        <div className="intro-section__glow" />
      </div>

      <div className="container">
        <div className="intro-section__grid">
          {/* Left Column: Copy & CTAs */}
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              className="intro-section__content"
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : 'show'}
              viewport={homeViewport}
              variants={fadeRight}
            >
              <div className="intro-section__head">
                <span className="eyebrow">Who We Are</span>
                <h2 className="section-title intro-section__heading">
                  Transform Your Future with{' '}
                  <span className="hero__highlight">Industry-Focused Healthcare Training</span>
                </h2>
              </div>

              <div className="intro-section__body">
                <p className="intro-section__para">
                  Whether you&apos;re a student looking to build a rewarding career or a healthcare
                  organization preparing for accreditation, NVR Quality Solutions provides the
                  knowledge, guidance, and practical skills you need to succeed.
                </p>

                <p className="intro-section__para">
                  Our industry-focused training programs bridge the gap between academic learning and
                  real-world healthcare practice, helping individuals and organizations achieve
                  excellence with confidence.
                </p>

                <p className="intro-section__para">
                  Gain expertise in internationally recognized healthcare standards, including{' '}
                  <strong className="intro-section__highlight">NABH</strong>,{' '}
                  <strong className="intro-section__highlight">JCI</strong>, and{' '}
                  <strong className="intro-section__highlight">CAMHP</strong>, through structured
                  training, hands-on learning, and guidance from experienced professionals.
                </p>
              </div>

              {/* Key Highlights Row */}
              <div className="intro-section__chips">
                <div className="intro-chip">
                  <LuShieldCheck className="intro-chip__icon" aria-hidden="true" />
                  <span>NABH, JCI &amp; CAMHP Standards</span>
                </div>
                <div className="intro-chip">
                  <LuAward className="intro-chip__icon" aria-hidden="true" />
                  <span>Practical Skills Focus</span>
                </div>
                <div className="intro-chip">
                  <LuBookOpen className="intro-chip__icon" aria-hidden="true" />
                  <span>Expert Guidance</span>
                </div>
              </div>

              {/* Action Buttons */}
              {/* <div className="intro-section__actions">
                <Button as="link" to="/training-programs" variant="primary" className="btn-solid">
                  Explore Training Programs
                </Button>
                <Button as="link" to="/about" variant="secondary" className="btn-outline">
                  About Our Mission
                </Button>
              </div> */}
            </motion.div>
          </Magnetic>

          {/* Right Column: Visual Showcase */}
          <Magnetic strength={0.08} className="magnetic--block">
            <motion.div
              className="intro-section__visual"
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : 'show'}
              viewport={homeViewport}
              variants={fadeLeft}
            >
              <div className="intro-visual__card">
                <div className="intro-visual__img-wrap">
                  <img
                    src="/intro-illustration.png"
                    alt="Industry-Focused Healthcare Quality Training"
                    className="intro-visual__img"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                  <div className="intro-visual__overlay" aria-hidden="true" />
                </div>

                {/* Floating Metric Badges */}
                <motion.div
                  className="intro-float-badge intro-float-badge--top"
                  initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88, y: 15 }}
                  whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: 0 }}
                  viewport={homeViewport}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="intro-float-badge__icon" aria-hidden="true">
                    <LuCheck />
                  </div>
                  <div className="intro-float-badge__text">
                    <strong>Accreditation Ready</strong>
                    <span>Practical Quality Systems</span>
                  </div>
                </motion.div>

                <motion.div
                  className="intro-float-badge intro-float-badge--bottom"
                  initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88, y: -15 }}
                  whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: 0 }}
                  viewport={homeViewport}
                  transition={{ duration: 0.5, delay: 0.35 }}
                >
                  <div className="intro-float-badge__icon intro-float-badge__icon--blue" aria-hidden="true">
                    <LuAward />
                  </div>
                  <div className="intro-float-badge__text">
                    <strong>Industry Standards</strong>
                    <span>NABH • JCI • CAMHP</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;