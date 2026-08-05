import { motion, useReducedMotion } from 'framer-motion';
import { LuBuilding2, LuTrendingUp, LuShieldCheck } from 'react-icons/lu';
import { fadeUp, cardReveal, blurReveal } from '../../animations/variants';
import { homeViewport } from '../../animations/viewport';
import './WhyChooseUs.css';

const pillars = [
  {
    id: 'foundation',
    tag: 'Foundation',
    title: 'Hospital Quality Management',
    description:
      'A strong operational foundation — from policy and process design to the daily practices that keep patient care safe and consistent.',
    icon: LuBuilding2,
  },
  {
    id: 'application',
    tag: 'Application',
    title: 'Quality Improvement in Healthcare',
    description:
      'Practical tools and methods to identify gaps, measure outcomes, and drive continuous improvement across departments.',
    icon: LuTrendingUp,
  },
  {
    id: 'readiness',
    tag: 'Readiness',
    title: 'Healthcare Accreditation Training',
    description:
      'Structured preparation for accreditation surveys, so your team and facility walk in ready — not just compliant on paper.',
    icon: LuShieldCheck,
  },
];

const WhyChooseUs = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="why-section section section--light">
      <div className="container">
        {/* Header Block */}
        <motion.div
          className="block-head"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
          viewport={homeViewport}
          variants={blurReveal}
        >
          <span className="eyebrow">Why NVR Quality Solutions</span>

          <motion.h2 className="section-title why-choose__heading" variants={fadeUp}>
            Why choose NVR Quality Solutions?
          </motion.h2>

          <motion.p
            className="block-head-desc"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
            custom={0.15}
          >
            Healthcare quality demands more than classroom learning. It requires practical understanding, industry insight, and the ability to apply standards in real healthcare environments. Our training programs are designed to help you develop quality improvement skills across hospitals and healthcare institutions.
          </motion.p>
        </motion.div>

        {/* 3 Pillar Cards Grid */}
        <div className="pillar-grid">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.id}
                id={`pillar-${pillar.id}`}
                className="pillar-card"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
                viewport={homeViewport}
                variants={cardReveal}
                custom={i * 0.12}
                whileHover={shouldReduceMotion ? undefined : cardReveal.hover}
              >
                <div className="pillar-icon" aria-hidden="true">
                  <Icon className="pillar-icon-svg" />
                </div>
                <span className="pillar-tag">{pillar.tag}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.article>
            );
          })}
        </div>

        {/* Vital Heartbeat Waveform Line Divider */}
        <motion.div
          className="vital-wrap"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          viewport={homeViewport}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden="true"
        >
          <svg className="vital" viewBox="0 0 1200 26" preserveAspectRatio="none">
            <path d="M0,13 L520,13 L538,3 L556,23 L574,13 L626,13 L644,4 L662,22 L680,13 L1200,13" />
            <circle cx="556" cy="23" r="3" />
            <circle cx="662" cy="22" r="3" />
          </svg>
        </motion.div>

        {/* Footline Banner */}
        <motion.div
          className="why-footline"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
          viewport={homeViewport}
          variants={fadeUp}
          custom={0.2}
        >
          <span className="bar" aria-hidden="true" />
          <p>With a strong foundation across these areas, we focus on building professionals who feel prepared.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
