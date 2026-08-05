import { motion, useReducedMotion } from 'framer-motion';
import {
  LuChartBar,
  LuShieldCheck,
  LuMedal,
  LuGlobe,
  LuAward,
  LuCheck,
} from 'react-icons/lu';
import Button from '../components/Common/Button';
import CTABanner from '../components/Layout/CTABanner';
import SplitText from '../components/ui/SplitText';
import ScrollReveal from '../components/ui/ScrollReveal';
import {
  fadeUp,
  cardReveal,
  blurReveal,
  fadeRight,
  staggerContainer,
  staggerItem,
} from '../animations/variants';
import { homeViewport } from '../animations/viewport';
import './TrainingPrograms.css';

/* ─── Training programs data ───────────────────────── */
const programs = [
  {
    id: 'healthcare-quality-training',
    icon: LuChartBar,
    tag: 'Quality Practice',
    number: '01',
    title: 'Healthcare Quality Training',
    description:
      'Build a strong understanding of the principles that drive quality in healthcare.',
    areas: [
      'Fundamentals of healthcare quality',
      'Quality management systems',
      'Documentation and compliance',
      'Performance indicators',
      'Continuous improvement methodologies',
    ],
  },
  {
    id: 'patient-safety-training',
    icon: LuShieldCheck,
    tag: 'Risk & Safety',
    number: '02',
    title: 'Patient Safety Training',
    description:
      'This program explores the systems, processes, and practices that help reduce risk, improve patient outcomes, and create safer healthcare environments.',
    areas: [
      'Patient safety principles',
      'Risk identification and prevention',
      'Incident reporting',
      'Root cause analysis',
      'Safety culture',
    ],
  },
  {
    id: 'nabh-training',
    icon: LuMedal,
    tag: 'Accreditation',
    number: '03',
    title: 'NABH Training',
    description:
      'Designed for professionals looking to understand the National Accreditation Board for Hospitals & Healthcare Providers (NABH) framework.',
    areas: [
      'NABH standards',
      'Quality documentation',
      'Department-specific requirements',
      'Internal assessments',
      'Accreditation preparedness',
    ],
  },
  {
    id: 'jci-training',
    icon: LuGlobe,
    tag: 'Global Standards',
    number: '04',
    title: 'JCI Training',
    description:
      'Gain insights into internationally recognized healthcare quality standards followed by leading healthcare institutions around the world.',
    areas: [
      'JCI standards',
      'Patient-centered care',
      'Performance improvement',
      'Leadership and governance',
      'Quality measurement',
    ],
  },
  {
    id: 'camhp-training',
    icon: LuAward,
    tag: 'Compliance',
    number: '05',
    title: 'CAMHP Training',
    description:
      'Develop an understanding of CAMHP standards and their role in strengthening healthcare quality and patient safety.',
    areas: [
      'CAMHP framework',
      'Compliance requirements',
      'Documentation practices',
      'Process improvement',
      'Quality implementation',
    ],
  },
];

/* ─── Who can join items ───────────────────────────── */
const whoItems = [
  { num: '01', label: 'Students interested in healthcare quality' },
  { num: '02', label: 'Doctors and nurses' },
  { num: '03', label: 'Allied healthcare professionals' },
  { num: '04', label: 'Hospital administrators' },
  { num: '05', label: 'Quality executives' },
  { num: '06', label: 'Clinical and non-clinical staff' },
  { num: '07', label: 'Professionals transitioning into quality roles' },
];

/* ─── What makes us different items ───────────────── */
const differentItems = [
  'Expert-led instruction',
  'Real-world case discussions',
  'Interactive learning',
  'Industry-relevant examples',
  'Implementation-focused guidance',
];

const TrainingPrograms = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════ */}
      <section className="tp-hero">
        <div className="tp-hero__bg" aria-hidden="true">
          <div className="tp-hero__glow" />
          <div className="tp-hero__grid" />
        </div>

        <div className="container tp-hero__inner">
          <motion.div
            className="tp-hero__content"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            variants={staggerContainer}
          >
            <motion.span className="eyebrow" variants={staggerItem}>
              Training Programs
            </motion.span>

            <SplitText
              tag="h1"
              text="Learn Quality Standards from Industry Experts"
              highlightText="Industry Experts"
              highlightClass="hero__highlight"
              className="tp-hero__headline"
              delay={35}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />

            <motion.div className="tp-hero__lede" variants={staggerItem}>
              <p>
                Healthcare quality is a constantly changing discipline. It requires technical
                knowledge, critical thinking, and an understanding of how healthcare systems
                operate.
              </p>
              <p>
                This is why we have structured training programs that prepare students and
                healthcare professionals to learn nationally and internationally recognized
                quality standards. Every program is designed with one goal — to help you become
                job-ready for quality-focused roles in healthcare.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. EXPLORE OUR TRAINING PROGRAMS
      ════════════════════════════════════════════════ */}
      <section className="tp-section section--light">
        <div className="container">
          <motion.div
            className="block-head"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
            variants={blurReveal}
          >
            <span className="eyebrow">Programs</span>

            <ScrollReveal
              as="h2"
              baseOpacity={0.15}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="section-title"
            >
              Explore Our Training Programs
            </ScrollReveal>

            <p className="block-head-desc">Our top specialized programs include:</p>
          </motion.div>

          <div className="pillar-grid">
            {programs.map((prog) => {
              const Icon = prog.icon;
              return (
                <motion.article
                  key={prog.id}
                  id={`tp-${prog.id}`}
                  className="pillar-card"
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
                  whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
                  viewport={homeViewport}
                  variants={cardReveal}
                  whileHover={shouldReduceMotion ? undefined : cardReveal.hover}
                >
                  <div className="pillar-icon" aria-hidden="true">
                    <Icon className="pillar-icon-svg" />
                  </div>
                  <span className="pillar-tag">{prog.tag}</span>
                  <h3>{prog.title}</h3>
                  <p>{prog.description}</p>

                  <div className="tp-card__areas">
                    <p className="tp-card__areas-label">Key Learning Areas</p>
                    <ul className="tp-card__areas-list">
                      {prog.areas.map((area, j) => (
                        <li key={j} className="tp-card__area-item">
                          <LuCheck className="tp-card__area-check" aria-hidden="true" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Vital Waveform Line Divider */}
          <div className="vital-wrap" aria-hidden="true">
            <svg className="vital" viewBox="0 0 1200 26" preserveAspectRatio="none">
              <path d="M0,13 L520,13 L538,3 L556,23 L574,13 L626,13 L644,4 L662,22 L680,13 L1200,13" />
              <circle cx="556" cy="23" r="3" />
              <circle cx="662" cy="22" r="3" />
            </svg>
          </div>

          <motion.div
            className="why-footline"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
            variants={fadeUp}
          >
            <span className="bar" aria-hidden="true" />
            <p>Empowering healthcare leaders and students with job-ready skills and global accreditation knowledge.</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. WHO CAN JOIN
      ════════════════════════════════════════════════ */}
      <section className="tp-section about-consult">
        <div className="container">
          <div className="about-consult__grid">
            {/* Left Column: Intro */}
            <motion.div
              className="about-consult__intro"
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : 'show'}
              viewport={homeViewport}
              variants={fadeRight}
            >
              <span className="eyebrow eyebrow--light">Audience</span>
              <h2 className="about-consult__heading">Who Can Join?</h2>
              <p className="about-consult__para">
                Our training programs are suitable for students and professionals at different
                stages of their career journey.
              </p>
              <p className="about-consult__para" style={{ marginTop: '14px', fontStyle: 'italic', opacity: 0.8 }}>
                Whether you&apos;re entering the field or expanding your expertise, our programs provide knowledge that supports long-term career growth.
              </p>
            </motion.div>

            {/* Right Column: Numbered List */}
            <motion.ul
              className="about-consult__list"
              variants={staggerContainer}
              initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1 } : 'show'}
              viewport={homeViewport}
            >
              {whoItems.map((item) => (
                <motion.li key={item.num} className="about-consult__list-item" variants={staggerItem}>
                  <span className="about-consult__num">{item.num}</span>
                  <span className="about-consult__label">{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. WHAT MAKES OUR TRAINING DIFFERENT
      ════════════════════════════════════════════════ */}
      <section className="tp-section section--light">
        <div className="container">
          <div className="about-closing__grid">
            {/* Left Column: Copy & Grid */}
            <motion.div
              className="about-closing__copy"
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : 'show'}
              viewport={homeViewport}
              variants={fadeRight}
            >
              <span className="eyebrow">Our Approach</span>
              <h2 className="section-title">What Makes Our Training Different?</h2>
              <p className="block-head-desc">
                Learning healthcare quality goes beyond understanding standards. It requires knowing
                how those standards are applied in real healthcare settings. Every session is
                designed to combine theory with practical context through:
              </p>

              <div className="about-wwd__grid" style={{ marginTop: '24px' }}>
                {differentItems.map((item) => (
                  <div key={item} className="about-wwd__item">
                    <span className="about-wwd__tick" aria-hidden="true" />
                    <span className="about-wwd__txt">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: CTA Box */}
            <motion.div
              className="about-closing__cta-box"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={cardReveal}
            >
              <span className="eyebrow">Next Step</span>
              <p className="about-closing__cta-text">
                Ready to take the next step toward a rewarding career in healthcare quality?
              </p>
              <Button as="link" to="/contact" variant="primary" className="btn-solid">
                Enroll or Contact Our Team
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. CTA BANNER
      ════════════════════════════════════════════════ */}
      <CTABanner
        eyebrow="Get Started"
        title="Ready to Begin Your Healthcare Quality Journey?"
        description="Build strong healthcare operational foundations and prepare for accreditation with expert-led training."
        primaryLabel="Contact Our Team"
        primaryTo="/contact"
        secondaryLabel="Explore Services"
        secondaryTo="/services"
      />
    </>
  );
};

export default TrainingPrograms;
