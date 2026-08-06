import { motion, useReducedMotion } from 'framer-motion';
import { LuTarget } from 'react-icons/lu';
import Magnetic from '../ui/Magnetic';
import { fadeUp, imageReveal, blurReveal, staggerContainer, staggerItem } from '../../animations/variants';
import { homeViewport } from '../../animations/viewport';
import './LearningSection.css';

const LearningSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="learning section section--light">
      <div className="learning__bg" aria-hidden="true">
        <div className="learning__glow" />
      </div>
      <div className="container">
        <div className="learning__inner">
          {/* Left: Content */}
          <Magnetic strength={0.06} className="magnetic--block">
          <motion.div
            className="learning__content"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
            variants={blurReveal}
          >
            <span className="eyebrow">Learning Section</span>

            <motion.h2 className="section-title learning__heading" variants={fadeUp}>
              Preparing Tomorrow&apos;s <span className="learning__heading-highlight">Leaders in Healthcare Quality</span>
            </motion.h2>

            <motion.h3
              className="learning__subheading"
              variants={fadeUp}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              custom={0.1}
            >
              Learning That Goes Beyond Theory
            </motion.h3>

            <motion.p
              className="learning__paragraph"
              variants={fadeUp}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              custom={0.2}
            >
              Participants gain exposure to healthcare scenarios, quality frameworks, patient safety concepts, documentation practices, and implementation strategies that can be applied within healthcare organizations.
            </motion.p>

            <motion.p
              className="learning__paragraph"
              variants={fadeUp}
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              custom={0.25}
            >
              Our objective is not simply to teach standards. It is to help learners understand how quality systems function in day-to-day healthcare operations.
            </motion.p>

            <motion.div
              className="learning__stats"
              variants={staggerContainer}
              initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1 } : 'show'}
              viewport={homeViewport}
            >
              <Magnetic strength={0.18} className="magnetic--stat">
                <motion.div className="learning__stat" variants={staggerItem}>
                  <span className="learning__stat-value">3</span>
                  <span className="learning__stat-label">Global Standards<br />(NABH, JCI, CAMHP)</span>
                </motion.div>
              </Magnetic>
              <div className="learning__stat-divider" aria-hidden="true" />
              <Magnetic strength={0.18} className="magnetic--stat">
                <motion.div className="learning__stat" variants={staggerItem}>
                  <span className="learning__stat-value">100%</span>
                  <span className="learning__stat-label">Practical,<br />Real-World Focus</span>
                </motion.div>
              </Magnetic>
              <div className="learning__stat-divider" aria-hidden="true" />
              <Magnetic strength={0.18} className="magnetic--stat">
                <motion.div className="learning__stat" variants={staggerItem}>
                  <span className="learning__stat-value">All</span>
                  <span className="learning__stat-label">Healthcare<br />Roles Covered</span>
                </motion.div>
              </Magnetic>
            </motion.div>
          </motion.div>
          </Magnetic>

          {/* Right: Visual Showcase */}
          <Magnetic strength={0.05} className="magnetic--block">
          <motion.div
            className="learning__visual"
            initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : 'show'}
            viewport={homeViewport}
            variants={imageReveal}
          >
            <div className="learning__img-wrap">
              <img
                src="https://res.cloudinary.com/rlokioxu/image/upload/v1786013954/learning-illustration_krryt4.jpg"
                alt="Healthcare quality education — mentor guiding professionals through accreditation frameworks"
                className="learning__img"
                width={1024}
                height={1024}
                loading="lazy"
                decoding="async"
              />
              <div className="learning__img-tag glass">
                <LuTarget className="learning__img-tag-icon" aria-hidden="true" />
                <span>Theory Meets Practice</span>
              </div>
            </div>
          </motion.div>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
