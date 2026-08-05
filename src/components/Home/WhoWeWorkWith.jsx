import { motion, useReducedMotion } from 'framer-motion';
import {
  LuGraduationCap,
  LuStethoscope,
  LuBuilding2,
  LuUsers,
  LuClipboardCheck,
  LuChartBarBig,
} from 'react-icons/lu';
import { fadeUp, cardReveal, blurReveal } from '../../animations/variants';
import { homeViewport } from '../../animations/viewport';
import './WhoWeWorkWith.css';

const audiences = [
  {
    id: 'career-aspiring-students',
    icon: LuGraduationCap,
    tag: 'Aspiring Professionals',
    label: 'Students aspiring to build careers in healthcare quality',
  },
  {
    id: 'healthcare-professionals',
    icon: LuStethoscope,
    tag: 'Clinical Experts',
    label: 'Healthcare professionals seeking specialized quality knowledge',
  },
  {
    id: 'hospital-administrators',
    icon: LuBuilding2,
    tag: 'Leadership',
    label: 'Hospital administrators and quality teams',
  },
  {
    id: 'clinical-non-clinical-staff',
    icon: LuUsers,
    tag: 'Care Teams',
    label: 'Clinical and non-clinical staff',
  },
  {
    id: 'accreditation-organizations',
    icon: LuClipboardCheck,
    tag: 'Institutions',
    label: 'Healthcare organizations pursuing accreditation',
  },
  {
    id: 'quality-management-professionals',
    icon: LuChartBarBig,
    tag: 'Compliance',
    label: 'Professionals interested in Quality Management Training and healthcare compliance',
  },
];

const WhoWeWorkWith = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="who-work section section--light">
      <div className="container">
        {/* Block Head */}
        <motion.div
          className="who-work__header block-head"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
          viewport={homeViewport}
          variants={blurReveal}
        >
          <span className="eyebrow">Who We Work With</span>
          <motion.h2 className="section-title who-work__heading" variants={fadeUp}>
            Programs Designed for <span className="who-work__heading-highlight">Every Healthcare Role</span>
          </motion.h2>
        </motion.div>

        {/* Pillar Cards Grid */}
        <div className="who-work__grid pillar-grid">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                id={`audience-${item.id}`}
                className="who-work__card pillar-card"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
                viewport={homeViewport}
                variants={cardReveal}
                custom={i * 0.08}
                whileHover={shouldReduceMotion ? undefined : cardReveal.hover}
              >
                <div className="who-work__card-top">
                  <div className="pillar-icon" aria-hidden="true">
                    <Icon className="pillar-icon-svg" />
                  </div>
                  <span className="pillar-tag">{item.tag}</span>
                </div>
                <p className="who-work__card-label">{item.label}</p>
                <div className="who-work__card-accent" aria-hidden="true" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
