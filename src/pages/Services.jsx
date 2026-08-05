import { motion, useReducedMotion } from 'framer-motion';
import {
  LuChartBar,
  LuShieldCheck,
  LuMedal,
  LuGlobe,
  LuAward,
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
import './Services.css';

/* ─── Training service cards ─────────────────────────── */
const trainingServices = [
  {
    id: 'healthcare-quality-training',
    icon: LuChartBar,
    tag: 'Quality Practice',
    number: '01',
    title: 'Healthcare Quality Training',
    body: [
      'Our Healthcare Quality Training programs equip students and healthcare professionals. Every student leaves us with the knowledge and skills needed to understand healthcare quality systems, regulatory expectations, and quality improvement methodologies.',
      'Participants gain exposure to industry best practices, documentation processes, quality frameworks, and implementation strategies.',
    ],
  },
  {
    id: 'patient-safety-training',
    icon: LuShieldCheck,
    tag: 'Risk & Safety',
    number: '02',
    title: 'Patient Safety Training',
    body: [
      'Our Patient Safety Training programs focus on developing a culture of safety by helping participants understand risk management. They also learn incident reporting, quality improvement, and preventive strategies that improve outcomes.',
    ],
  },
  {
    id: 'nabh-training',
    icon: LuMedal,
    tag: 'Accreditation',
    number: '03',
    title: 'NABH Training',
    body: [
      'Our NABH Training programs explore the principles, documentation requirements, quality indicators, and implementation processes associated with the National Accreditation Board for Hospitals & Healthcare Providers (NABH).',
    ],
  },
  {
    id: 'jci-training',
    icon: LuGlobe,
    tag: 'Global Standards',
    number: '04',
    title: 'JCI Training',
    body: [
      'Our JCI Training programs introduce participants to internationally recognized healthcare quality and patient safety standards. Training includes quality management principles, patient-centered standards, and implementation practices.',
    ],
  },
  {
    id: 'camhp-training',
    icon: LuAward,
    tag: 'Compliance',
    number: '05',
    title: 'CAMHP Training',
    body: [
      'Our CAMHP Training programs dissect the framework, requirements, and quality principles associated with CAMHP standards. The curriculum is designed to improve awareness and prepare participants for quality-focused roles.',
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

  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. HERO / PAGE BANNER
      ════════════════════════════════════════════════ */}
      <section className="svc-hero">
        <div className="svc-hero__bg" aria-hidden="true">
          <div className="svc-hero__glow" />
          <div className="svc-hero__grid" />
        </div>

        <div className="container svc-hero__inner">
          <motion.div
            className="svc-hero__content"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            variants={staggerContainer}
          >
            <motion.span className="eyebrow" variants={staggerItem}>
              Our Services
            </motion.span>

            <SplitText
              tag="h1"
              text="Lasting Solutions for Accreditation Readiness"
              highlightText="Accreditation Readiness"
              highlightClass="hero__highlight"
              className="svc-hero__headline"
              delay={35}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />

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
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. TRAINING SERVICES
      ════════════════════════════════════════════════ */}
      <section className="svc-section section--light">
        <div className="container">
          <motion.div
            className="block-head"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
            variants={blurReveal}
          >
            <span className="eyebrow">Training Programs</span>

            <ScrollReveal
              as="h2"
              baseOpacity={0.15}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="section-title"
            >
              Our Training Services
            </ScrollReveal>

            <p className="block-head-desc">
              Structured education and practical training designed to prepare students and healthcare professionals for accreditation standards.
            </p>
          </motion.div>

          <div className="pillar-grid">
            {trainingServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <motion.article
                  key={svc.id}
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
            <p>Empowering healthcare institutions to transform compliance and accreditation standards into daily practice.</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. ACCREDITATION CONSULTANCY
      ════════════════════════════════════════════════ */}
      <section id="consultancy" className="svc-section about-consult">
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
              <span className="eyebrow eyebrow--light">Consultancy</span>
              <h2 className="about-consult__heading">
                Healthcare Accreditation Consultancy
              </h2>
              <p className="about-consult__para">
                Preparing for accreditation requires a well-designed quality management system
                supported by effective implementation. Our Healthcare Accreditation Training and
                consultancy services help healthcare organizations.
              </p>
              <p className="about-consult__para" style={{ marginTop: '14px', fontStyle: 'italic', opacity: 0.8 }}>
                Our consultants work alongside healthcare teams to strengthen organizational readiness.
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
              {consultancyItems.map((item) => (
                <motion.li
                  key={item.num}
                  className="about-consult__list-item"
                  variants={staggerItem}
                >
                  <span className="about-consult__num">{item.num}</span>
                  <span className="about-consult__label">{item.label}</span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. WHY CHOOSE NVR
      ════════════════════════════════════════════════ */}
      <section className="svc-section section--light">
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
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="section-title">Why Choose NVR Quality Solutions?</h2>
              <p className="block-head-desc">
                Healthcare quality is always changing, and professionals need practical knowledge
                that extends beyond textbooks. They need to always know and handle whatever is
                happening in the world right now. This is why our approach combines:
              </p>

              <div className="about-wwd__grid" style={{ marginTop: '24px' }}>
                {whyItems.map((item) => (
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
                Ready to build your healthcare quality career or strengthen your facility&apos;s quality systems?
              </p>
              <Button as="link" to="/training-programs" variant="primary" className="btn-solid">
                Explore Our Training Programs
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
        title="Ready to Build Your Healthcare Quality Career?"
        description="Explore our specialized training programs or talk to our experts to discuss custom consultancy for your institution."
        primaryLabel="Explore Our Training Programs"
        primaryTo="/training-programs"
        secondaryLabel="Contact Our Team"
        secondaryTo="/contact"
      />
    </>
  );
};

export default Services;
