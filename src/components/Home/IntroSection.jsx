import { motion, useReducedMotion } from 'framer-motion';
import Magnetic from '../ui/Magnetic';
import { homeViewport } from '../../animations/viewport';
import { EASE, DURATION } from '../../animations/transitions';
import './IntroSection.css';

const IntroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const baseAnim = {
    initial: shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: homeViewport,
    transition: { duration: DURATION.medium, ease: EASE.smooth },
  };

  return (
    <section className="intro-section section section--light">
      <div className="container">
        <div className="intro-section__inner">
          <Magnetic strength={0.1} className="magnetic--block">
            <motion.div
              {...baseAnim}
              className="intro-section__head"
            >
              <span className="eyebrow">Who We Are</span>
              <h2 className="intro-section__heading">
                Transform Your Future with Industry-Focused Healthcare Training
              </h2>
            </motion.div>
          </Magnetic>

          {/* Description */}
          <div className="intro-section__body">
            <Magnetic strength={0.06} className="magnetic--block">
              <motion.p
                className="intro-section__para"
                {...baseAnim}
                transition={{ duration: DURATION.medium, ease: EASE.smooth, delay: 0.1 }}
              >
                Whether you&apos;re a student looking to build a rewarding career or a healthcare
                organization preparing for accreditation, NVR Quality Solutions provides the
                knowledge, guidance, and practical skills you need to succeed.
              </motion.p>
            </Magnetic>

            <Magnetic strength={0.06} className="magnetic--block">
              <motion.p
                className="intro-section__para"
                {...baseAnim}
                transition={{ duration: DURATION.medium, ease: EASE.smooth, delay: 0.1 }}
              >
                Our industry-focused training programs bridge the gap between academic learning and
                real-world healthcare practice, helping individuals and organizations achieve
                excellence with confidence.
              </motion.p>
            </Magnetic>

            <Magnetic strength={0.06} className="magnetic--block">
              <motion.p
                className="intro-section__para"
                {...baseAnim}
                transition={{ duration: DURATION.medium, ease: EASE.smooth, delay: 0.1 }}
              >
                Gain expertise in internationally recognized healthcare standards, including{' '}
                <strong className="intro-section__highlight">NABH</strong>,{' '}
                <strong className="intro-section__highlight">JCI</strong>, and{' '}
                <strong className="intro-section__highlight">CAMHP</strong>, through structured
                training, hands-on learning, and guidance from experienced professionals.
              </motion.p>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;