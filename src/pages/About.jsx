import { motion, useReducedMotion } from 'framer-motion';
import { LuTarget, LuEye } from 'react-icons/lu';
import { FiCheck } from 'react-icons/fi';
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
import { useSEO } from '../hooks/useSEO';
import { ROUTE_META } from '../config/seo';
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
  const { isPreloaderGone } = usePreloader();

  useSEO({
    title: ROUTE_META.about.title,
    description: ROUTE_META.about.description,
    keywords: ROUTE_META.about.keywords,
  });

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
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              className="about-hero__content"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={
                shouldReduceMotion ? { opacity: 1, y: 0 } : isPreloaderGone ? 'show' : 'hidden'
              }
              variants={staggerContainer}
            >
              <motion.span className="eyebrow" variants={staggerItem}>
                About Us
              </motion.span>

              <motion.h1 className="about-hero__headline" variants={staggerItem}>
                Empowering Healthcare Professionals Through{' '}
                <span className="hero__highlight">Expert Consultancy</span>
              </motion.h1>

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
          </Magnetic>
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

          <div className="about-mv__grid">
            {/* Mission */}
            <Magnetic strength={0.2} className="magnetic--card">
              <motion.article
                className="about-mv__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Magnetic strength={0.15} className="magnetic--chip">
                  <div className="about-mv__card-icon-wrap" aria-hidden="true">
                    <LuTarget className="about-mv__card-icon" />
                  </div>
                </Magnetic>
                <span className="about-mv__card-tag">Mission</span>
                <Magnetic strength={0.1} className="magnetic--block">
                  <h3 className="about-mv__card-title">Our Mission</h3>
                </Magnetic>
                <Magnetic strength={0.06} className="magnetic--block">
                  <p className="about-mv__card-body">
                    To empower healthcare professionals and organizations with practical education,
                    expert guidance, and quality-focused solutions.
                  </p>
                </Magnetic>
                <span className="about-mv__card-accent" aria-hidden="true" />
              </motion.article>
            </Magnetic>

            {/* Vision */}
            <Magnetic strength={0.2} className="magnetic--card">
              <motion.article
                className="about-mv__card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                <Magnetic strength={0.15} className="magnetic--chip">
                  <div className="about-mv__card-icon-wrap" aria-hidden="true">
                    <LuEye className="about-mv__card-icon" />
                  </div>
                </Magnetic>
                <span className="about-mv__card-tag">Vision</span>
                <Magnetic strength={0.1} className="magnetic--block">
                  <h3 className="about-mv__card-title">Our Vision</h3>
                </Magnetic>
                <Magnetic strength={0.06} className="magnetic--block">
                  <p className="about-mv__card-body">
                    To be a trusted partner in advancing healthcare quality by training professionals
                    and healthcare organizations to build sustainable quality systems.
                  </p>
                </Magnetic>
                <span className="about-mv__card-accent" aria-hidden="true" />
              </motion.article>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. WHAT WE DO
      ════════════════════════════════════════════════════════ */}
      <section id="wwd" className="about-section section--light">
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

      {/* ═══════════════════════════════════════════════════════
          4. CONSULTANCY SECTION
      ════════════════════════════════════════════════════════ */}
      <section id="consultancy" className="about-section about-consult">
        <div className="container">
          <div className="about-consult__grid">
            {/* Left Column: Intro */}
            <Magnetic strength={0.06} className="magnetic--block">
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
            </Magnetic>

            {/* Right Column: Numbered List */}
            <Magnetic strength={0.05} className="magnetic--block">
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
                    <Magnetic strength={0.12} className="magnetic--chip">
                      <span className="about-consult__num">{item.num}</span>
                    </Magnetic>
                    <Magnetic strength={0.1} className="magnetic--chip">
                      <span className="about-consult__label">{item.label}</span>
                    </Magnetic>
                  </motion.li>
                ))}
              </motion.ul>
            </Magnetic>
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
            <Magnetic strength={0.06} className="magnetic--block">
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
            </Magnetic>

            {/* Right Column: Visual */}
            <Magnetic strength={0.2} className="magnetic--block">
              <motion.div
                className="about-closing__visual"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
                viewport={homeViewport}
                variants={cardReveal}
              >
                <div className="closing-visual__inner">
                  <img
                    src="https://res.cloudinary.com/rlokioxu/image/upload/v1786013955/why-choose-illustration_pwyapa.jpg"
                    alt="Healthcare professionals reviewing quality standards and accreditation documents"
                    className="closing-visual__img"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="closing-visual__tag glass">
                    <LuTarget className="closing-visual__tag-icon" aria-hidden="true" />
                    <span>Accreditation Ready</span>
                  </div>
                </div>
              </motion.div>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Global CTA Banner */}
      <div className="about-cta-band">
        <CTABanner
          eyebrow="Get Started"
          title="Explore Our Training Programs"
          description="Build strong healthcare operational foundations and prepare for accreditation with expert-led training."
          primaryLabel="Explore Our Training Programs"
          primaryTo="/training-programs"
          secondaryLabel="Contact Us"
          secondaryTo="/contact"
        />
      </div>
    </>
  );
};

export default About;
