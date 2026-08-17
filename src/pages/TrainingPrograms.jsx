import { motion, useReducedMotion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import {
  LuChartBar,
  LuShieldCheck,
  LuMedal,
  LuGlobe,
  LuAward,
  LuCheck,
} from 'react-icons/lu';
import Magnetic from '../components/ui/Magnetic';
import CTABanner from '../components/Layout/CTABanner';
import { usePreloader } from '../context/PreloaderContext';
import {
  fadeUp,
  cardReveal,
  blurReveal,
  fadeRight,
  staggerContainer,
  staggerItem,
} from '../animations/variants';
import { homeViewport } from '../animations/viewport';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';
import { generateCourseSchema, generateWebPageSchema } from '../utils/structuredData';
import './TrainingPrograms.css';

/* ─── Training programs data ───────────────────────── */
// const programs = [
//   {
//     id: 'healthcare-quality-training',
//     icon: LuChartBar,
//     tag: 'Quality Practice',
//     number: '01',
//     title: 'Healthcare Quality Training',
//     description:
//       'Build a strong understanding of the principles that drive quality in healthcare.',
//     areas: [
//       'Fundamentals of healthcare quality',
//       'Quality management systems',
//       'Documentation and compliance',
//       'Performance indicators',
//       'Continuous improvement methodologies',
//     ],
//   },
//   {
//     id: 'patient-safety-training',
//     icon: LuShieldCheck,
//     tag: 'Risk & Safety',
//     number: '02',
//     title: 'Patient Safety Training',
//     description:
//       'This program explores the systems, processes, and practices that help reduce risk, improve patient outcomes, and create safer healthcare environments.',
//     areas: [
//       'Patient safety principles',
//       'Risk identification and prevention',
//       'Incident reporting',
//       'Root cause analysis',
//       'Safety culture',
//     ],
//   },
//   {
//     id: 'nabh-training',
//     icon: LuMedal,
//     tag: 'Accreditation',
//     number: '03',
//     title: 'NABH Training',
//     description:
//       'Designed for professionals looking to understand the National Accreditation Board for Hospitals & Healthcare Providers (NABH) framework.',
//     areas: [
//       'NABH standards',
//       'Quality documentation',
//       'Department-specific requirements',
//       'Internal assessments',
//       'Accreditation preparedness',
//     ],
//   },
//   // {
//   //   id: 'jci-training',
//   //   icon: LuGlobe,
//   //   tag: 'Global Standards',
//   //   number: '04',
//   //   title: 'JCI Training',
//   //   description:
//   //     'Gain insights into internationally recognized healthcare quality standards followed by leading healthcare institutions around the world.',
//   //   areas: [
//   //     'JCI standards',
//   //     'Patient-centered care',
//   //     'Performance improvement',
//   //     'Leadership and governance',
//   //     'Quality measurement',
//   //   ],
//   // },
//   // {
//   //   id: 'caam-hp-training',
//   //   icon: LuAward,
//   //   tag: 'Compliance',
//   //   number: '05',
//   //   title: 'CAAM HP Training',
//   //   description:
//   //     'Develop an understanding of CAAM HP standards and their role in strengthening healthcare quality and patient safety.',
//   //   areas: [
//   //     'CAAM HP framework',
//   //     'Compliance requirements',
//   //     'Documentation practices',
//   //     'Process improvement',
//   //     'Quality implementation',
//   //   ],
//   // },
// ];

const programs = [
  {
    id: 'ipcn-training',
    icon: LuShieldCheck,
    tag: 'Infection Prevention',
    number: '01',
    title: 'IPCN Training',
    description:
      'Develop the knowledge and practical skills required to strengthen infection prevention and control practices across healthcare settings.',
    areas: [
      'Infection prevention principles',
      'Standard and transmission-based precautions',
      'Hand hygiene and infection prevention practices',
      'Healthcare-associated infection prevention',
      'Infection surveillance and reporting',
    ],
  },
  {
    id: 'ipco-training',
    icon: LuShieldCheck,
    tag: 'Infection Control',
    number: '02',
    title: 'IPCO Training',
    description:
      'Build practical expertise in planning, implementing, monitoring, and improving infection prevention and control systems within healthcare organizations.',
    areas: [
      'Infection control systems',
      'Infection surveillance',
      'Policies and procedures',
      'Monitoring and compliance',
      'Infection control documentation',
    ],
  },
  {
    id: 'patient-safety-training',
    icon: LuShieldCheck,
    tag: 'Risk & Safety',
    number: '03',
    title: 'Patient Safety Training',
    description:
      'Explore the systems, processes, and practices that help reduce risk, improve patient outcomes, and create safer healthcare environments.',
    areas: [
      'Patient safety principles',
      'Risk identification and prevention',
      'Incident reporting',
      'Root cause analysis',
      'Safety culture',
    ],
  },
  {
    id: 'healthcare-quality-training',
    icon: LuChartBar,
    tag: 'Quality Practice',
    number: '04',
    title: 'Healthcare Quality Training',
    description:
      'Build a strong understanding of the principles, systems, and methodologies that drive continuous quality improvement in healthcare.',
    areas: [
      'Fundamentals of healthcare quality',
      'Quality management systems',
      'Documentation and compliance',
      'Performance indicators',
      'Continuous improvement methodologies',
    ],
  },
  {
    id: 'nabh-training',
    icon: LuMedal,
    tag: 'Accreditation',
    number: '05',
    title: 'NABH Training',
    description:
      'Develop an understanding of the National Accreditation Board for Hospitals & Healthcare Providers (NABH) framework and its role in healthcare quality and accreditation.',
    areas: [
      'NABH standards',
      'Quality documentation',
      'Department-specific requirements',
      'Internal assessments',
      'Accreditation preparedness',
    ],
  },

  // {
  //   id: 'jci-training',
  //   icon: LuGlobe,
  //   tag: 'Global Standards',
  //   number: '06',
  //   title: 'JCI Training',
  //   description:
  //     'Gain insights into internationally recognized healthcare quality and patient safety standards followed by leading healthcare institutions around the world.',
  //   areas: [
  //     'JCI standards',
  //     'Patient-centered care',
  //     'Performance improvement',
  //     'Leadership and governance',
  //     'Quality measurement',
  //   ],
  // },

  // {
  //   id: 'caam-hp-training',
  //   icon: LuAward,
  //   tag: 'Compliance',
  //   number: '07',
  //   title: 'CAAM HP Training',
  //   description:
  //     'Develop an understanding of CAAM HP standards and their role in strengthening healthcare quality, compliance, and patient safety.',
  //   areas: [
  //     'CAAM HP framework',
  //     'Compliance requirements',
  //     'Documentation practices',
  //     'Process improvement',
  //     'Quality implementation',
  //   ],
  // },
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
  const { isPreloaderGone } = usePreloader();

  return (
    <>
      <SEO
        {...seoConfig.trainings}
        structuredData={[
          generateWebPageSchema({
            title: seoConfig.trainings.title,
            description: seoConfig.trainings.description,
            url: seoConfig.trainings.canonical,
          }),
          generateCourseSchema({
            title: 'Healthcare Quality & Accreditation Training Programs',
            description: seoConfig.trainings.description,
            url: seoConfig.trainings.canonical,
          }),
        ]}
      />
      {/* ═══════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════ */}
      <section className="tp-hero">
        <div className="tp-hero__bg" aria-hidden="true">
          <div className="tp-hero__glow" />
          <div className="tp-hero__grid" />
        </div>

        <div className="container tp-hero__inner">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              className="tp-hero__content"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={
                shouldReduceMotion ? { opacity: 1, y: 0 } : isPreloaderGone ? 'show' : 'hidden'
              }
              variants={staggerContainer}
            >
              <motion.span className="eyebrow" variants={staggerItem}>
                Training Programs
              </motion.span>

              <motion.h1 className="tp-hero__headline" variants={staggerItem}>
                Learn Quality Standards from{' '}
                <span className="hero__highlight">Industry Experts</span>
              </motion.h1>

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
          </Magnetic>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. EXPLORE OUR TRAINING PROGRAMS
      ════════════════════════════════════════════════ */}
      <section className="tp-section section--light">
        <div className="container">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              className="block-head"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={blurReveal}
            >
              <span className="eyebrow">Programs</span>

              <motion.h2 className="section-title" variants={fadeUp}>
                Explore Our Training Programs
              </motion.h2>

              <p className="block-head-desc">Our top specialized programs include:</p>
            </motion.div>
          </Magnetic>

          <div className="pillar-grid">
            {programs.map((prog) => {
              const Icon = prog.icon;
              return (
                <Magnetic key={prog.id} strength={0.2} className="magnetic--card">
                  <motion.article
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
                </Magnetic>
              );
            })}
          </div>

          {/* Vital Waveform Line Divider */}
          <Magnetic strength={0.05} className="magnetic--block">
            <div className="vital-wrap" aria-hidden="true">
              <svg className="vital" viewBox="0 0 1200 26" preserveAspectRatio="none">
                <path d="M0,13 L520,13 L538,3 L556,23 L574,13 L626,13 L644,4 L662,22 L680,13 L1200,13" />
                <circle cx="556" cy="23" r="3" />
                <circle cx="662" cy="22" r="3" />
              </svg>
            </div>
          </Magnetic>

          <Magnetic strength={0.05} className="magnetic--block">
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
          </Magnetic>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. WHO CAN JOIN
      ════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════
          3. WHO CAN JOIN
      ════════════════════════════════════════════════ */}
      <section className="tp-section tp-who">
        <div className="container">
          <div className="tp-who__grid">
            {/* Left Column: Intro */}
            <Magnetic strength={0.06} className="magnetic--block">
              <motion.div
                className="tp-who__intro"
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : 'show'}
                viewport={homeViewport}
                variants={fadeRight}
              >
                <span className="eyebrow">Audience</span>
                <h2 className="tp-who__heading">Who Can Join?</h2>
                <p className="tp-who__para">
                  Our training programs are suitable for students and professionals at different
                  stages of their career journey.
                </p>
                <p className="tp-who__closing">
                  Whether you&apos;re entering the field or expanding your expertise, our programs provide knowledge that supports long-term career growth.
                </p>
              </motion.div>
            </Magnetic>

            {/* Right Column: Numbered List */}
            <Magnetic strength={0.05} className="magnetic--block">
              <motion.ul
                className="tp-who__list"
                variants={staggerContainer}
                initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1 } : 'show'}
                viewport={homeViewport}
              >
                {whoItems.map((item) => (
                  <motion.li key={item.num} className="tp-who__list-item" variants={staggerItem}>
                    <Magnetic strength={0.12} className="magnetic--chip">
                      <span className="tp-who__num">{item.num}</span>
                    </Magnetic>
                    <Magnetic strength={0.1} className="magnetic--chip">
                      <span className="tp-who__label">{item.label}</span>
                    </Magnetic>
                  </motion.li>
                ))}
              </motion.ul>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. WHAT MAKES OUR TRAINING DIFFERENT
      ════════════════════════════════════════════════ */}
      <section className="tp-section section--light">
        <div className="container">
          <div className="tp-closing__grid">
            {/* Left Column: Copy & Grid */}
            <Magnetic strength={0.06} className="magnetic--block">
              <motion.div
                className="tp-closing__copy"
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : 'show'}
                viewport={homeViewport}
                variants={fadeRight}
              >
                <span className="eyebrow">Our Approach</span>
                <h2 className="tp-closing__heading">What Makes Our Training Different?</h2>
                <p className="tp-closing__para">
                  Learning healthcare quality goes beyond understanding standards. It requires knowing
                  how those standards are applied in real healthcare settings. Every session is
                  designed to combine theory with practical context through:
                </p>

                <div className="about-wwd__grid" style={{ marginTop: '28px' }}>
                  {differentItems.map((item, i) => (
                    <Magnetic key={item} strength={0.2} className="magnetic--card">
                      <motion.div
                        className="about-wwd__item"
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        viewport={homeViewport}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                      >
                        <span className="about-wwd__tick" aria-hidden="true">
                          <FiCheck />
                        </span>
                        <span className="about-wwd__txt">{item}</span>
                      </motion.div>
                    </Magnetic>
                  ))}
                </div>
              </motion.div>
            </Magnetic>

            {/* Right Column: Visual */}
            <Magnetic strength={0.2} className="magnetic--block">
              <motion.div
                className="tp-closing__visual"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
                viewport={homeViewport}
                variants={cardReveal}
              >
                <div className="closing-visual__inner">
                  <img
                    src="https://res.cloudinary.com/rlokioxu/image/upload/v1786013954/about-hero-illustration_a0bjsn.jpg"
                    alt="Healthcare quality education — mentor guiding professionals through accreditation frameworks"
                    className="closing-visual__img"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="closing-visual__tag glass">
                    <LuMedal className="closing-visual__tag-icon" aria-hidden="true" />
                    <span>Mentor-Guided Learning</span>
                  </div>
                </div>
              </motion.div>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. CTA BANNER
      ════════════════════════════════════════════════ */}
      <div className="tp-cta-band">
        <CTABanner
          eyebrow="Get Started"
          title="Ready to Begin Your Healthcare Quality Journey?"
          description="Build strong healthcare operational foundations and prepare for accreditation with expert-led training."
          primaryLabel="Contact Our Team"
          primaryTo="/contact"
          secondaryLabel="Explore Services"
          secondaryTo="/services"
        />
      </div>
    </>
  );
};

export default TrainingPrograms;
