import { motion, useReducedMotion } from 'framer-motion';
import { LuTarget, LuEye } from 'react-icons/lu';
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
import './About.css';

/* ─── What We Do items ────────────────────────────────────── */
const whatWeDoItems = [
  'Healthcare Quality Training',
  'Patient Safety Training',
  'Healthcare Accreditation Training',
  'Hospital Quality Management',
  'Quality implementation support',
  'Accreditation readiness consultancy',
  'Healthcare process improvement',
  'Professional development programs',
];

/* ─── Consultancy items ───────────────────────────────────── */
const consultancyItems = [
  { num: '01', label: 'Build effective quality management systems' },
  { num: '02', label: 'Improve patient safety practices' },
  { num: '03', label: 'Strengthen operational processes' },
  { num: '04', label: 'Prepare for accreditation assessments' },
  { num: '05', label: 'Create a culture of continuous improvement' },
];

const About = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════════ */}
      <section className="about-hero">
        <div className="about-hero__bg" aria-hidden="true">
          <div className="about-hero__glow" />
          <div className="about-hero__grid" />
        </div>

        <div className="container about-hero__inner">
          <motion.div
            className="about-hero__content"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            animate={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            variants={staggerContainer}
          >
            <motion.span className="eyebrow" variants={staggerItem}>
              About Us
            </motion.span>

            <SplitText
              tag="h1"
              text="Empowering Healthcare Professionals Through Expert Consultancy"
              highlightText="Expert Consultancy"
              highlightClass="hero__highlight"
              className="about-hero__headline"
              delay={35}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />

            <motion.div className="about-hero__lede" variants={staggerItem}>
              <p>
                At NVR Quality Solutions, we believe that quality is the foundation of safe,
                effective, and patient-centered healthcare.
              </p>
              <p>
                As a trusted provider of Healthcare Quality Training and healthcare quality
                consultancy, we are committed to building the knowledge, skills, and systems
                required to meet quality standards.
              </p>
              <p>
                Our approach combines practical learning with real-world implementation. This way,
                our participants understand not only what quality standards require, but also how
                they are successfully applied within environments.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. MISSION & VISION
      ════════════════════════════════════════════════════════ */}
      <section id="mission" className="about-section section--light">
        <div className="container">
          <div className="block-head">
            <span className="eyebrow">Foundation &amp; Purpose</span>
            <h2 className="section-title">Our Mission &amp; Vision</h2>
          </div>

          <div className="pillar-grid">
            {/* Mission */}
            <motion.article
              className="pillar-card"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={cardReveal}
              whileHover={shouldReduceMotion ? undefined : cardReveal.hover}
            >
              <div className="pillar-icon" aria-hidden="true">
                <LuTarget className="pillar-icon-svg" />
              </div>
              <span className="pillar-tag">Mission</span>
              <h3>Our Mission</h3>
              <p>
                To empower healthcare professionals and organizations with practical education,
                expert guidance, and quality-focused solutions.
              </p>
            </motion.article>

            {/* Vision */}
            <motion.article
              className="pillar-card"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={cardReveal}
              whileHover={shouldReduceMotion ? undefined : cardReveal.hover}
            >
              <div className="pillar-icon" aria-hidden="true">
                <LuEye className="pillar-icon-svg" />
              </div>
              <span className="pillar-tag">Vision</span>
              <h3>Our Vision</h3>
              <p>
                To be a trusted partner in advancing healthcare quality by training professionals
                and healthcare organizations to build sustainable quality systems.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. WHAT WE DO
      ════════════════════════════════════════════════════════ */}
      <section id="wwd" className="about-section section--light">
        <div className="container">
          <motion.div
            className="block-head"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
            variants={blurReveal}
          >
            <span className="eyebrow">Services</span>

            <ScrollReveal
              as="h2"
              baseOpacity={0.15}
              enableBlur={true}
              baseRotation={2}
              blurStrength={6}
              textClassName="section-title"
            >
              What We Do
            </ScrollReveal>

            <p className="block-head-desc">
              NVR Quality Solutions offers a range of training and consultancy services focused on
              healthcare quality and patient safety. Our expertise includes:
            </p>
          </motion.div>

          <motion.div
            className="about-wwd__grid"
            variants={staggerContainer}
            initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1 } : 'show'}
            viewport={homeViewport}
          >
            {whatWeDoItems.map((item) => (
              <motion.div key={item} className="about-wwd__item" variants={staggerItem}>
                <span className="about-wwd__tick" aria-hidden="true" />
                <span className="about-wwd__txt">{item}</span>
              </motion.div>
            ))}
          </motion.div>

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
            <p>Every program is designed to provide practical, industry-relevant knowledge that participants can apply in real healthcare settings.</p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. CONSULTANCY SECTION
      ════════════════════════════════════════════════════════ */}
      <section id="consultancy" className="about-section about-consult">
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
                Consultancy That Supports Better Healthcare
              </h2>
              <p className="about-consult__para">
                Alongside training, NVR Quality Solutions provides expert Healthcare Quality
                Consultant services. They are ideal for hospitals and healthcare institutions
                seeking to strengthen quality systems and prepare for accreditation. Our
                consultancy services help organizations:
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

      {/* ═══════════════════════════════════════════════════════
          5. WHY CHOOSE / CLOSING CTA
      ════════════════════════════════════════════════════════ */}
      <section id="closing" className="about-section section--light">
        <div className="container">
          <div className="about-closing__grid">
            {/* Left Column: Copy */}
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
                Choosing the right training partner can make a big difference in your professional
                journey. We are committed to helping learners develop the confidence and knowledge
                needed to make a positive impact.
              </p>
              <p className="block-head-desc" style={{ marginTop: '14px' }}>
                Whether you are taking your first step into healthcare quality or strengthening an
                existing quality program, we are here to support you.
              </p>
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
                Take the first step toward a stronger quality program or a rewarding career in
                healthcare quality.
              </p>
              <Button as="link" to="/training-programs" variant="primary" className="btn-solid">
                Explore Our Training Programs
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global CTA Banner */}
      <CTABanner
        eyebrow="Get Started"
        title="Explore Our Training Programs"
        description="Build strong healthcare operational foundations and prepare for accreditation with expert-led training."
        primaryLabel="Explore Our Training Programs"
        primaryTo="/training-programs"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
};

export default About;
