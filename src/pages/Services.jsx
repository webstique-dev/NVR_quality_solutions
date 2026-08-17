import { motion, useReducedMotion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import {
  LuChartBar,
  LuShieldCheck,
  LuMedal,
  LuGlobe,
  LuAward,
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
import { generateServiceSchema, generateWebPageSchema } from '../utils/structuredData';
import './Services.css';

/* ─── What We Do items ────────────────────────────────────── */
const whatWeDoItems = [
  'Healthcare Quality Training',
  'Patient Safety Training',
  'Healthcare Accreditation Training',
  'Hospital Quality Management',
  'Quality implementation support',
  'Accreditation readiness consultancy',
  'Healthcare process improvement',
  'Train-the-Trainer Programs',
  'Pharmacy Audits',
  'Mock Drill Preparations',
];

/* ─── Training service cards ─────────────────────────── */
// const trainingServices = [
//   {
//     id: 'healthcare-quality-training',
//     icon: LuChartBar,
//     tag: 'Quality Practice',
//     number: '01',
//     title: 'Healthcare Quality Training',
//     body: [
//       'Our Healthcare Quality Training programs equip students and healthcare professionals. Every student leaves us with the knowledge and skills needed to understand healthcare quality systems, regulatory expectations, and quality improvement methodologies.',
//       'Participants gain exposure to industry best practices, documentation processes, quality frameworks, and implementation strategies.',
//     ],
//   },
//   {
//     id: 'patient-safety-training',
//     icon: LuShieldCheck,
//     tag: 'Risk & Safety',
//     number: '02',
//     title: 'Patient Safety Training',
//     body: [
//       'Our Patient Safety Training programs focus on developing a culture of safety by helping participants understand risk management. They also learn incident reporting, quality improvement, and preventive strategies that improve outcomes.',
//     ],
//   },
//   {
//     id: 'nabh-training',
//     icon: LuMedal,
//     tag: 'Accreditation',
//     number: '03',
//     title: 'NABH Training',
//     body: [
//       'Our NABH Training programs explore the principles, documentation requirements, quality indicators, and implementation processes associated with the National Accreditation Board for Hospitals & Healthcare Providers (NABH).',
//     ],
//   },
//   {
//     id: 'jci-training',
//     icon: LuGlobe,
//     tag: 'Global Standards',
//     number: '04',
//     title: 'JCI Training',
//     body: [
//       'Our JCI Training programs introduce participants to internationally recognized healthcare quality and patient safety standards. Training includes quality management principles, patient-centered standards, and implementation practices.',
//     ],
//   },
//   {
//     id: 'caam-hp-training',
//     icon: LuAward,
//     tag: 'Compliance',
//     number: '05',
//     title: 'CAAM HP Training',
//     body: [
//       'Our CAAM HP Training programs dissect the framework, requirements, and quality principles associated with CAAM HP standards. The curriculum is designed to improve awareness and prepare participants for quality-focused roles.',
//     ],
//   },
// ];

// const trainingServices = [
//   {
//     id: 'ipcn-training',
//     slug: 'ipcn-training',
//     icon: LuShieldCheck,
//     number: '01',
//     title: 'IPCN Training',
//     body: [
//       'Our IPCN Training programs equip healthcare professionals with the knowledge and practical skills required to strengthen infection prevention and control practices across healthcare settings.',
//       'Participants gain an understanding of infection prevention principles, surveillance, standard precautions, hand hygiene, healthcare-associated infections, and effective infection control practices.',
//     ],
//   },
//   {
//     id: 'ipco-training',
//     slug: 'ipco-training',
//     icon: LuShieldCheck,
//     number: '02',
//     title: 'IPCO Training',
//     body: [
//       'Our IPCO Training programs focus on developing practical expertise in planning, implementing, monitoring, and improving infection prevention and control systems within healthcare organizations.',
//       'Participants learn about infection control policies, surveillance, monitoring, compliance, documentation, and strategies for maintaining a safe healthcare environment.',
//     ],
//   },
//   {
//     id: 'patient-safety-training',
//     slug: 'patient-safety-training',
//     icon: LuShieldCheck,
//     number: '03',
//     title: 'Patient Safety Training',
//     body: [
//       'Our Patient Safety Training programs focus on developing a strong culture of safety by helping participants understand risk management, incident reporting, quality improvement, and preventive strategies that improve patient outcomes.',
//     ],
//   },
//   {
//     id: 'healthcare-quality-training',
//     slug: 'healthcare-quality-training',
//     icon: LuChartBar,
//     number: '04',
//     title: 'Healthcare Quality Training',
//     body: [
//       'Our Healthcare Quality Training programs equip students and healthcare professionals with the knowledge and skills needed to understand healthcare quality systems, regulatory expectations, and quality improvement methodologies.',
//       'Participants gain exposure to industry best practices, documentation processes, quality frameworks, performance indicators, and implementation strategies.',
//     ],
//   },
//   {
//     id: 'nabh-training',
//     slug: 'nabh-training',
//     icon: LuMedal,
//     number: '05',
//     title: 'NABH Training',
//     body: [
//       'Our NABH Training programs explore the principles, documentation requirements, quality indicators, and implementation processes associated with the National Accreditation Board for Hospitals & Healthcare Providers (NABH).',
//       'The program helps participants understand accreditation requirements and prepare healthcare organizations for effective implementation and continuous quality improvement.',
//     ],
//   },
//   // {
//   //   id: 'jci-training',
//   //   slug: 'jci-training',
//   //   icon: LuGlobe,
//   //   number: '06',
//   //   title: 'JCI Training',
//   //   body: [
//   //     'Our JCI Training programs introduce participants to internationally recognized healthcare quality and patient safety standards. Training includes quality management principles, patient-centered standards, documentation, and implementation practices that support organizational excellence.',
//   //   ],
//   // },
//   // {
//   //   id: 'caam-hp-training',
//   //   slug: 'caam-hp-training',
//   //   icon: LuAward,
//   //   number: '07',
//   //   title: 'CAAM-HP Training',
//   //   body: [
//   //     'Our CAAM-HP Training programs explore the framework, requirements, and quality principles associated with CAAM-HP standards. The curriculum is designed to improve awareness and prepare participants for quality-focused roles.',
//   //   ],
//   // },
// ];

const trainingServices = [
  // {
  //   id: 'ipcn-training',
  //   slug: 'ipcn-training',
  //   icon: LuShieldCheck,
  //   number: '01',
  //   title: 'IPCN Training',
  //   body: [
  //     'Our IPCN Training programs equip healthcare professionals with the knowledge and practical skills required to strengthen infection prevention and control practices across healthcare settings.',
  //     'Participants gain an understanding of infection prevention principles, surveillance, standard precautions, hand hygiene, healthcare-associated infections, and effective infection control practices.',
  //   ],
  // },
  // {
  //   id: 'ipco-training',
  //   slug: 'ipco-training',
  //   icon: LuShieldCheck,
  //   number: '02',
  //   title: 'IPCO Training',
  //   body: [
  //     'Our IPCO Training programs focus on developing practical expertise in planning, implementing, monitoring, and improving infection prevention and control systems within healthcare organizations.',
  //     'Participants learn about infection control policies, surveillance, monitoring, compliance, documentation, and strategies for maintaining a safe healthcare environment.',
  //   ],
  // },
  {
    id: 'healthcare-quality-training',
    slug: 'healthcare-quality-training',
    icon: LuChartBar,
    number: '04',
    title: 'Healthcare Quality Training',
    body: [
      'Our Healthcare Quality Training programs equip students and healthcare professionals. Every student leaves us with the knowledge and skills needed to understand healthcare quality systems, regulatory expectations, and quality improvement methodologies.',
      'Participants gain exposure to industry best practices, documentation processes, quality frameworks, and implementation strategies. They can then contribute confidently to quality initiatives within hospitals and healthcare institutions.',
    ],
  },
  {
    id: 'patient-safety-training',
    slug: 'patient-safety-training',
    icon: LuShieldCheck,
    number: '03',
    title: 'Patient Safety Training',
    body: [
      'Our Patient Safety Training programs focus on developing a culture of safety by helping participants understand risk management. They also learn incident reporting, quality improvement, and preventive strategies that improve outcomes.',
    ],
  },

  {
    id: 'nabh-training',
    slug: 'nabh-training',
    icon: LuMedal,
    number: '05',
    title: 'NABH Training',
    body: [
      'Our NABH Training programs explore the principles, documentation requirements, quality indicators, and implementation processes associated with the National Accreditation Board for Hospitals & Healthcare Providers (NABH).',
    ],
  },
  {
    id: 'jci-training',
    slug: 'jci-training',
    icon: LuGlobe,
    number: '06',
    title: 'JCI Training',
    body: [
      'Our JCI Training programs introduce participants to internationally recognized healthcare quality and patient safety standards. Training includes quality management principles, patient-centered standards, documentation, and implementation practices that support organizational excellence.',
    ],
  },
  {
    id: 'caam-hp-training',
    slug: 'caam-hp-training',
    icon: LuAward,
    number: '07',
    title: 'CAAM-HP Training',
    body: [
      'Our CAAM-HP Training programs dissect the framework, requirements, and quality principles associated with CAAM-HP standards. The curriculum is designed to improve awareness and prepare participants for quality-focused roles.',
    ],
  },
];

/* ─── Consultancy list items ─────────────────────────── */
const consultancyItems = [
  { num: '01', label: 'Assess existing quality systems' },
  { num: '02', label: 'Identify compliance gaps' },
  { num: '03', label: 'Develop implementation strategies' },
  { num: '04', label: 'Improve documentation practices' },
  { num: '05', label: 'Prepare for accreditation assessments' },
  { num: '06', label: 'Build sustainable quality processes' },
];

/* ─── Why Choose list items ──────────────────────────── */
const whyItems = [
  'Industry-focused learning',
  'Practical implementation strategies',
  'Experienced trainers and consultants',
  'Real-world healthcare applications',
  'Structured guidance for accreditation readiness',
  'Continuous professional development',
];

const Services = () => {
  const shouldReduceMotion = useReducedMotion();
  const { isPreloaderGone } = usePreloader();

  return (
    <>
      <SEO
        {...seoConfig.services}
        structuredData={[
          generateWebPageSchema({
            title: seoConfig.services.title,
            description: seoConfig.services.description,
            url: seoConfig.services.canonical,
          }),
          generateServiceSchema({
            name: 'Healthcare Quality Consultancy',
            description: seoConfig.services.description,
            url: seoConfig.services.canonical,
          }),
        ]}
      />
      {/* ═══════════════════════════════════════════════
          1. HERO / PAGE BANNER
      ════════════════════════════════════════════════ */}
      <section className="svc-hero">
        <div className="svc-hero__bg" aria-hidden="true">
          <div className="svc-hero__glow" />
          <div className="svc-hero__grid" />
        </div>

        <div className="container svc-hero__inner">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              className="svc-hero__content"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={
                shouldReduceMotion ? { opacity: 1, y: 0 } : isPreloaderGone ? 'show' : 'hidden'
              }
              variants={staggerContainer}
            >
              <motion.span className="eyebrow" variants={staggerItem}>
                Our Services
              </motion.span>

              <motion.h1 className="svc-hero__headline" variants={staggerItem}>
                Lasting Solutions for <span className="hero__highlight">Accreditation Readiness</span>
              </motion.h1>

              <motion.div className="svc-hero__lede" variants={staggerItem}>
                <p>
                  We provide specialized training and consultancy services that help healthcare
                  professionals build successful careers. We also enable healthcare organizations
                  to strengthen quality systems.
                </p>
                <p>
                  Our programs are designed to simplify healthcare standards, promote patient safety,
                  and support quality improvement through practical, industry-focused learning.
                </p>
              </motion.div>
            </motion.div>
          </Magnetic>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. WHAT WE DO
      ════════════════════════════════════════════════ */}
      <section id="wwd" className="svc-section section--light">
        <div className="container">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              className="block-head"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={blurReveal}
            >
              <span className="eyebrow">Services</span>

              <motion.h2 className="section-title" variants={fadeUp}>
                What We Do
              </motion.h2>

              <p className="block-head-desc">
                NVR Quality Solutions offers a range of training and consultancy services focused on
                healthcare quality and patient safety. Our expertise includes:
              </p>
            </motion.div>
          </Magnetic>

          <motion.div
            className="about-wwd__grid"
            initial={shouldReduceMotion ? 'hidden' : 'hidden'}
            whileInView={shouldReduceMotion ? 'show' : 'show'}
            viewport={homeViewport}
            variants={staggerContainer}
          >
            {whatWeDoItems.map((item) => (
              <Magnetic key={item} strength={0.2} className="magnetic--card">
                <motion.div
                  className="about-wwd__item"
                  variants={staggerItem}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="about-wwd__tick" aria-hidden="true">
                    <FiCheck />
                  </span>
                  <span className="about-wwd__txt">{item}</span>
                </motion.div>
              </Magnetic>
            ))}
          </motion.div>

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
              <p>Every program is designed to provide practical, industry-relevant knowledge that participants can apply in real healthcare settings.</p>
            </motion.div>
          </Magnetic>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. TRAINING SERVICES
      ════════════════════════════════════════════════ */}
      <section id="svc-training" className="svc-section section--light">
        <div className="container">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              className="block-head"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={blurReveal}
            >
              <span className="eyebrow">Training Programs</span>

              <motion.h2 className="section-title" variants={fadeUp}>
                Our Training Services
              </motion.h2>

              <p className="block-head-desc">
                Structured education and practical training designed to prepare students and healthcare professionals for accreditation standards.
              </p>
            </motion.div>
          </Magnetic>

          <div className="pillar-grid">
            {trainingServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Magnetic key={svc.id} strength={0.2} className="magnetic--card">
                  <motion.article
                    id={`svc-${svc.id}`}
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
                    <span className="pillar-tag">{svc.tag}</span>
                    <h3>{svc.title}</h3>
                    {svc.body.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
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
              <p>Empowering healthcare institutions to transform compliance and accreditation standards into daily practice.</p>
            </motion.div>
          </Magnetic>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. ACCREDITATION CONSULTANCY
      ════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════
          3. ACCREDITATION CONSULTANCY
      ════════════════════════════════════════════════ */}
      <section id="consultancy" className="svc-section svc-consult">
        <div className="container">
          <div className="svc-consult__grid">
            {/* Left Column: Intro */}
            <Magnetic strength={0.06} className="magnetic--block">
              <motion.div
                className="svc-consult__intro"
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : 'show'}
                viewport={homeViewport}
                variants={fadeRight}
              >
                <span className="eyebrow">Consultancy</span>
                <h2 className="svc-consult__heading">
                  Healthcare Accreditation Consultancy
                </h2>
                <p className="svc-consult__para">
                  Preparing for accreditation requires a well-designed quality management system
                  supported by effective implementation. Our Healthcare Accreditation Training and
                  consultancy services help healthcare organizations.
                </p>
                <p className="svc-consult__closing">
                  Our consultants work alongside healthcare teams to strengthen organizational readiness.
                </p>
              </motion.div>
            </Magnetic>

            {/* Right Column: Numbered List */}
            <Magnetic strength={0.05} className="magnetic--block">
              <motion.ul
                className="svc-consult__list"
                variants={staggerContainer}
                initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1 } : 'show'}
                viewport={homeViewport}
              >
                {consultancyItems.map((item) => (
                  <motion.li
                    key={item.num}
                    className="svc-consult__list-item"
                    variants={staggerItem}
                  >
                    <Magnetic strength={0.12} className="magnetic--chip">
                      <span className="svc-consult__num">{item.num}</span>
                    </Magnetic>
                    <Magnetic strength={0.1} className="magnetic--chip">
                      <span className="svc-consult__label">{item.label}</span>
                    </Magnetic>
                  </motion.li>
                ))}
              </motion.ul>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. WHY CHOOSE NVR
      ════════════════════════════════════════════════ */}
      <section className="svc-section section--light">
        <div className="container">
          <div className="svc-closing__grid">
            {/* Left Column: Copy & Grid */}
            <Magnetic strength={0.06} className="magnetic--block">
              <motion.div
                className="svc-closing__copy"
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : 'show'}
                viewport={homeViewport}
                variants={fadeRight}
              >
                <span className="eyebrow">Why Choose Us</span>
                <h2 className="svc-closing__heading">Why Choose NVR Quality Solutions?</h2>
                <p className="svc-closing__para">
                  Healthcare quality is always changing, and professionals need practical knowledge
                  that extends beyond textbooks. They need to always know and handle whatever is
                  happening in the world right now. This is why our approach combines:
                </p>

                <div className="about-wwd__grid" style={{ marginTop: '28px' }}>
                  {whyItems.map((item, i) => (
                    <Magnetic key={item} strength={0.15} className="magnetic--card">
                      <motion.div
                        className="about-wwd__item"
                        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                        viewport={homeViewport}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
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
                className="svc-closing__visual"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
                viewport={homeViewport}
                variants={cardReveal}
              >
                <div className="closing-visual__inner">
                  <img
                    src="https://res.cloudinary.com/rlokioxu/image/upload/v1786013955/training-hero-illustration_mrljj2.jpg"
                    alt="Industry-focused healthcare quality training"
                    className="closing-visual__img"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="closing-visual__tag glass">
                    <LuMedal className="closing-visual__tag-icon" aria-hidden="true" />
                    <span>Industry-Focused Training</span>
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
      <div className="svc-cta-band">
        <CTABanner
          eyebrow="Get Started"
          title="Ready to Build Your Healthcare Quality Career?"
          description="Explore our specialized training programs or talk to our experts to discuss custom consultancy for your institution."
          primaryLabel="Explore Our Training Programs"
          primaryTo="/training-programs"
          secondaryLabel="Contact Our Team"
          secondaryTo="/contact"
        />
      </div>
    </>
  );
};

export default Services;
