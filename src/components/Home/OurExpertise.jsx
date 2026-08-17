import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  LuChartBar,
  LuShieldCheck,
  LuMedal,
  LuHandshake,
} from 'react-icons/lu';
import Magnetic from '../ui/Magnetic';
import { fadeUp, cardReveal, blurReveal } from '../../animations/variants';
import { homeViewport } from '../../animations/viewport';
import './OurExpertise.css';

const expertiseCards = [
  {
    id: 'healthcare-quality-training',
    icon: LuChartBar,
    number: '01',
    tag: 'Quality Practice',
    title: 'Healthcare Quality Training',
    description:
      'Gain a complete understanding of healthcare quality principles, compliance needs, and improvement practices used across modern healthcare organizations.',
  },
  {
    id: 'patient-safety-training',
    icon: LuShieldCheck,
    number: '02',
    tag: 'Risk & Safety',
    title: 'Patient Safety Training',
    description:
      'Develop the knowledge and approach required to improve patient safety, reduce risks, strengthen reporting systems, and support a culture of safe healthcare delivery.',
  },
  {
    id: 'healthcare-accreditation-training',
    icon: LuMedal,
    number: '03',
    tag: 'Accreditation',
    title: 'Healthcare Accreditation Training',
    description:
      'Learn the frameworks, processes, documentation, and implementation strategies behind internationally recognized accreditation standards, including NABH Training, JCI Training, and CAAM HP awareness programs.',
  },
  {
    id: 'healthcare-quality-consultancy',
    icon: LuHandshake,
    number: '04',
    tag: 'Consultancy',
    title: 'Healthcare Quality Consultancy',
    description:
      'We partner with healthcare organizations by providing expert Healthcare Quality Consultant services. We help institutions strengthen quality systems, improve operational processes, and prepare for accreditation assessments through structured implementation support.',
  },
];

const OurExpertise = () => {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="expertise section section--light" ref={containerRef}>
      <div className="expertise__bg" aria-hidden="true">
        <div className="expertise__glow" />
      </div>
      <div className="container">
        {/* Header Block */}
        <Magnetic strength={0.06} className="magnetic--block">
        <motion.div
          className="expertise__header block-head"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
          viewport={homeViewport}
          variants={blurReveal}
        >
          <span className="eyebrow">Our Expertise</span>
          <motion.h2 className="section-title expertise__heading" variants={fadeUp}>
            Comprehensive Training &amp; <span className="expertise__heading-highlight">Consultancy Services</span>
          </motion.h2>
          <motion.p
            className="block-head-desc"
            variants={fadeUp}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
            custom={0.15}
          >
            We deliver specialized training programs and strategic quality consultancy to build strong healthcare operational foundations, ensure accreditation readiness, and improve patient safety.
          </motion.p>
        </motion.div>
        </Magnetic>

        {/* Pillar Card Grid */}
        <div className="expertise__grid pillar-grid">
          {expertiseCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Magnetic key={card.id} strength={0.2} className="magnetic--card">
                <motion.article
                  id={`expertise-card-${card.id}`}
                  className="expertise__card pillar-card"
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
                  whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
                  viewport={homeViewport}
                  variants={cardReveal}
                  custom={i * 0.1}
                  whileHover={shouldReduceMotion ? undefined : cardReveal.hover}
                >
                  <div className="expertise__card-header">
                    <div className="pillar-icon" aria-hidden="true">
                      <Icon className="pillar-icon-svg" />
                    </div>
                    <span className="expertise__card-number" aria-hidden="true">
                      {card.number}
                    </span>
                  </div>
                  <span className="pillar-tag">{card.tag}</span>
                  <h3 className="expertise__card-title">{card.title}</h3>
                  <p className="expertise__card-description">{card.description}</p>
                  <div className="expertise__card-accent" aria-hidden="true" />
                </motion.article>
              </Magnetic>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
