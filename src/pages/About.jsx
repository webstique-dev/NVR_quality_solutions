import { motion } from 'framer-motion';
import {
  LuCircleCheckBig,
  LuTarget,
  LuEye,
  LuStethoscope,
  LuShieldCheck,
  LuMedal,
  LuBuilding2,
  LuSettings,
  LuClipboardCheck,
  LuTrendingUp,
  LuUsers,
  LuCheck,
} from 'react-icons/lu';
import SectionTitle from '../components/Common/SectionTitle';
import FAQAccordion from '../components/Common/FAQAccordion';
import { faqs } from '../data/faqs';
import Button from '../components/Common/Button';
import CTABanner from '../components/Layout/CTABanner';
import './About.css';

/* ─── Animation variants ──────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
};

/* ─── What We Do items ────────────────────────────────────── */
const whatWeDoItems = [
  { id: 'hqt', icon: LuStethoscope, label: 'Healthcare Quality Training' },
  { id: 'pst', icon: LuShieldCheck, label: 'Patient Safety Training' },
  { id: 'hat', icon: LuMedal, label: 'Healthcare Accreditation Training' },
  { id: 'hqm', icon: LuBuilding2, label: 'Hospital Quality Management' },
  { id: 'qis', icon: LuSettings, label: 'Quality implementation support' },
  { id: 'arc', icon: LuClipboardCheck, label: 'Accreditation readiness consultancy' },
  { id: 'hpi', icon: LuTrendingUp, label: 'Healthcare process improvement' },
  { id: 'pdp', icon: LuUsers, label: 'Professional development programs' },
];

/* ─── Consultancy items ───────────────────────────────────── */
const consultancyItems = [
  { id: 'c1', label: 'Build effective quality management systems' },
  { id: 'c2', label: 'Improve patient safety practices' },
  { id: 'c3', label: 'Strengthen operational processes' },
  { id: 'c4', label: 'Prepare for accreditation assessments' },
  { id: 'c5', label: 'Create a culture of continuous improvement' },
];

/* ─── Component ───────────────────────────────────────────── */
const About = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════════════ */}
      <section className="about-hero section--dark">
        <div className="about-hero__bg" aria-hidden="true">
          <div className="about-hero__glow about-hero__glow--1" />
          <div className="about-hero__glow about-hero__glow--2" />
          <div className="about-hero__grid" />
        </div>

        <div className="container about-hero__inner">
          {/* Content */}
          <div className="about-hero__content">

            <motion.span
              className="eyebrow"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0}
            >
              About Us
            </motion.span>

            <motion.h1
              className="about-hero__heading"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.1}
            >
              Empowering Healthcare Professionals Through{' '}
              <span className="text-gradient">Expert Consultancy</span>
            </motion.h1>

            <motion.p
              className="about-hero__para"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
            >
              At NVR Quality Solutions, we believe that quality is the foundation of safe,
              effective, and patient-centered healthcare.
            </motion.p>

            <motion.p
              className="about-hero__para"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.28}
            >
              As a trusted provider of Healthcare Quality Training and healthcare quality
              consultancy, we are committed to building the knowledge, skills, and systems
              required to meet quality standards.
            </motion.p>

            <motion.p
              className="about-hero__para"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.36}
            >
              Our approach combines practical learning with real-world implementation. This way,
              our participants understand not only what quality standards require, but also how
              they are successfully applied within environments.
            </motion.p>


          </div>

          {/* Illustration */}
          <motion.div
            className="about-hero__visual"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="about-hero__img-frame">
              <img
                src="/about-hero-illustration.png"
                alt="Healthcare quality professional reviewing quality standards and accreditation documents"
                className="about-hero__img"
                loading="eager"
              />
              <div className="about-hero__img-tag glass">
                <LuCircleCheckBig className="about-hero__tag-icon" aria-hidden="true" />
                <span>Trusted Consultancy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. MISSION & VISION
      ════════════════════════════════════════════════════════ */}
      <section className="section section--light">
        <div className="container">
          <div className="about-mv-grid">
            {/* Mission */}
            <motion.div
              className="about-mv-card"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0 }}
            >
              <div className="about-mv-card__icon-wrap" aria-hidden="true">
                <LuTarget className="about-mv-card__icon" />
              </div>
              <span className="about-mv-card__eyebrow">Mission</span>
              <h2 className="about-mv-card__title">Our Mission</h2>
              <p className="about-mv-card__body">
                To empower healthcare professionals and organizations with practical education,
                expert guidance, and quality-focused solutions.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              className="about-mv-card about-mv-card--vision"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <div className="about-mv-card__icon-wrap about-mv-card__icon-wrap--vision" aria-hidden="true">
                <LuEye className="about-mv-card__icon" />
              </div>
              <span className="about-mv-card__eyebrow">Vision</span>
              <h2 className="about-mv-card__title">Our Vision</h2>
              <p className="about-mv-card__body">
                To be a trusted partner in advancing healthcare quality by training professionals
                and healthcare organizations to build sustainable quality systems.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. WHAT WE DO
      ════════════════════════════════════════════════════════ */}
      <section className="section section--dark about-wwd">
        <div className="about-wwd__bg" aria-hidden="true">
          <div className="about-wwd__glow" />
        </div>
        <div className="container">
          <motion.div
            className="about-wwd__header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Our Services</span>
            <h2 className="about-wwd__heading">What We Do</h2>
            <p className="about-wwd__intro">
              NVR Quality Solutions offers a range of training and consultancy services focused
              on healthcare quality and patient safety.
            </p>
            <p className="about-wwd__sub-label">Our expertise includes:</p>
          </motion.div>

          <div className="about-wwd__grid">
            {whatWeDoItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  id={`wwd-${item.id}`}
                  className="about-wwd__card glass"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                >
                  <div className="about-wwd__card-icon" aria-hidden="true">
                    <Icon className="about-wwd__card-icon-svg" />
                  </div>
                  <p className="about-wwd__card-label">{item.label}</p>
                  <div className="about-wwd__card-accent" aria-hidden="true" />
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="about-wwd__closing"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            Every program is designed to provide practical, industry-relevant knowledge. Ones
            that participants can confidently apply in real healthcare settings.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          4. CONSULTANCY SECTION
      ════════════════════════════════════════════════════════ */}
      <section className="section section--light about-consult">
        <div className="container">
          <motion.div
            className="about-consult__header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Consultancy</span>
            <h2 className="about-consult__heading">
              Consultancy That Supports{' '}
              <span className="text-gradient-light">Better Healthcare</span>
            </h2>
            <p className="about-consult__intro">
              Alongside training, NVR Quality Solutions provides expert Healthcare Quality
              Consultant services. They are ideal for hospitals and healthcare institutions
              seeking to strengthen quality systems and prepare for accreditation. Our
              consultancy services help organizations:
            </p>
          </motion.div>

          <div className="about-consult__items">
            {consultancyItems.map((item, i) => (
              <motion.div
                key={item.id}
                id={`consult-${item.id}`}
                className="about-consult__item"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.09 }}
              >
                <div className="about-consult__item-check" aria-hidden="true">
                  <LuCheck className="about-consult__check-icon" />
                </div>
                <p className="about-consult__item-label">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          5. WHY CHOOSE NVR
      ════════════════════════════════════════════════════════ */}
      <section className="section section--dark about-why">
        <div className="about-why__bg" aria-hidden="true">
          <div className="about-why__glow" />
        </div>
        <div className="container about-why__inner">
          {/* Left: Content */}
          <div className="about-why__content">
            <motion.span
              className="eyebrow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              className="about-why__heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              Why Choose{' '}
              <span className="text-gradient">NVR Quality Solutions?</span>
            </motion.h2>

            <motion.p
              className="about-why__para"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              Choosing the right training partner can make a big difference in your professional
              journey. We are committed to helping learners develop the confidence and knowledge
              needed to make a positive impact.
            </motion.p>

            <motion.p
              className="about-why__para"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
            >
              Whether you are taking your first step into healthcare quality or strengthening an
              existing quality program, we are here to support you.
            </motion.p>
          </div>

          {/* Right: Illustration */}
          <motion.div
            className="about-why__visual"
            initial={{ opacity: 0, x: 44 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="about-why__img-frame">
              <img
                src="/about-whychoose-illustration.png"
                alt="Healthcare professionals collaborating on quality improvement"
                className="about-why__img"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          6. FREQUENTLY ASKED QUESTIONS
      ════════════════════════════════════════════════════════ */}
      <section className="section section--light about-faq-section">
        <div className="container">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our healthcare quality training and consultancy services."
            align="center"
          />
          <div className="about-faq-wrap">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          7. CTA SECTION
      ════════════════════════════════════════════════════════ */}
      <CTABanner
        eyebrow="Get Started"
        title="Explore Our Training Programs"
        description=""
        primaryLabel="Explore Our Training Programs"
        primaryTo="/training-programs"
      />
    </>
  );
};

export default About;
