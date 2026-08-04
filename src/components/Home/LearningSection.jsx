import { motion, useReducedMotion } from 'framer-motion';
import { LuTarget } from 'react-icons/lu';
import './LearningSection.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const LearningSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="learning section section--light">
      <div className="learning__bg" aria-hidden="true">
        <div className="learning__glow" />
      </div>
      <div className="container learning__inner">
        {/* Left: Content */}
        <div className="learning__content">
          <motion.span
            className="eyebrow-light"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
          >
            Learning Section
          </motion.span>

          <motion.h2
            className="learning__heading"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={{ once: true, amount: 0.4 }}
            custom={0.1}
          >
            Preparing Tomorrow&apos;s{' '}
            <span className="text-gradient-light">Leaders in Healthcare Quality</span>
          </motion.h2>

          <motion.h3
            className="learning__subheading"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={{ once: true, amount: 0.4 }}
            custom={0.18}
          >
            Learning That Goes Beyond Theory
          </motion.h3>

          <motion.p
            className="learning__paragraph"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={{ once: true, amount: 0.4 }}
            custom={0.26}
          >
            Participants gain exposure to healthcare scenarios, quality frameworks, patient safety concepts, documentation practices, and implementation strategies that can be applied within healthcare organizations.
          </motion.p>

          <motion.p
            className="learning__paragraph"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={{ once: true, amount: 0.4 }}
            custom={0.34}
          >
            Our objective is not simply to teach standards. It is to help learners understand how quality systems function in day-to-day healthcare operations.
          </motion.p>

          <motion.div
            className="learning__stats"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={{ once: true, amount: 0.4 }}
            custom={0.42}
          >
            <motion.div
              className="learning__stat"
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <span className="learning__stat-value">3</span>
              <span className="learning__stat-label">Global Standards<br />(NABH, JCI, CAMHP)</span>
            </motion.div>
            <div className="learning__stat-divider" aria-hidden="true" />
            <motion.div
              className="learning__stat"
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <span className="learning__stat-value">100%</span>
              <span className="learning__stat-label">Practical,<br />Real-World Focus</span>
            </motion.div>
            <div className="learning__stat-divider" aria-hidden="true" />
            <motion.div
              className="learning__stat"
              initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
              whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <span className="learning__stat-value">All</span>
              <span className="learning__stat-label">Healthcare<br />Roles Covered</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: Illustration */}
        <motion.div
          className="learning__visual"
          initial={{ opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="learning__img-wrap">
            <img
              src="/learning-illustration.png"
              alt="Healthcare quality education — mentor guiding professionals through accreditation frameworks"
              className="learning__img"
              loading="lazy"
            />
            <div className="learning__img-tag glass">
              <LuTarget className="learning__img-tag-icon" aria-hidden="true" />
              <span>Theory Meets Practice</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningSection;
