import { motion } from 'framer-motion';
import {
  LuChartBar,
  LuShieldCheck,
  LuMedal,
  LuGlobe,
  LuAward,
  LuBookOpen,
  LuBriefcase,
  LuCheck,
  LuArrowRight,
  LuTarget,
  LuCircleCheckBig,
} from 'react-icons/lu';
import CTABanner from '../components/Layout/CTABanner';
import './Services.css';

/* ─── Animation variants ─────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
};

/* ─── Training service cards ─────────────────────────── */
const trainingServices = [
  {
    id: 'healthcare-quality-training',
    slug: 'healthcare-quality-training',
    icon: LuChartBar,
    number: '01',
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
    number: '02',
    title: 'Patient Safety Training',
    body: [
      'Our Patient Safety Training programs focus on developing a culture of safety by helping participants understand risk management. They also learn incident reporting, quality improvement, and preventive strategies that improve outcomes.',
    ],
  },
  {
    id: 'nabh-training',
    slug: 'nabh-training',
    icon: LuMedal,
    number: '03',
    title: 'NABH Training',
    body: [
      'Our NABH Training programs explore the principles, documentation requirements, quality indicators, and implementation processes associated with the National Accreditation Board for Hospitals & Healthcare Providers (NABH).',
    ],
  },
  {
    id: 'jci-training',
    slug: 'jci-training',
    icon: LuGlobe,
    number: '04',
    title: 'JCI Training',
    body: [
      'Our JCI Training programs introduce participants to internationally recognized healthcare quality and patient safety standards. Training includes quality management principles, patient-centered standards, documentation, and implementation practices that support organizational excellence.',
    ],
  },
  {
    id: 'camhp-training',
    slug: 'camhp-training',
    icon: LuAward,
    number: '05',
    title: 'CAMHP Training',
    body: [
      'Our CAMHP Training programs dissect the framework, requirements, and quality principles associated with CAMHP standards. The curriculum is designed to improve awareness and prepare participants for quality-focused roles.',
    ],
  },
];

/* ─── Consultancy list items ─────────────────────────── */
const consultancyItems = [
  { id: 'c1', label: 'Assess existing quality systems' },
  { id: 'c2', label: 'Identify compliance gaps' },
  { id: 'c3', label: 'Develop implementation strategies' },
  { id: 'c4', label: 'Improve documentation practices' },
  { id: 'c5', label: 'Prepare for accreditation assessments' },
  { id: 'c6', label: 'Build sustainable quality processes' },
];

/* ─── Why Choose list items ──────────────────────────── */
const whyItems = [
  { id: 'w1', label: 'Industry-focused learning' },
  { id: 'w2', label: 'Practical implementation strategies' },
  { id: 'w3', label: 'Experienced trainers and consultants' },
  { id: 'w4', label: 'Real-world healthcare applications' },
  { id: 'w5', label: 'Structured guidance for accreditation readiness' },
  { id: 'w6', label: 'Continuous professional development' },
];

/* ─── Component ──────────────────────────────────────── */
const Services = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. HERO / PAGE BANNER
      ════════════════════════════════════════════════ */}
      <section className="svc-hero section--dark">
        <div className="svc-hero__bg" aria-hidden="true">
          <div className="svc-hero__glow svc-hero__glow--1" />
          <div className="svc-hero__glow svc-hero__glow--2" />
          <div className="svc-hero__grid" />
        </div>

        <div className="container svc-hero__inner">
          {/* Content */}
          <div className="svc-hero__content">
            <motion.span
              className="eyebrow"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.05}
            >
              Our Services
            </motion.span>

            <motion.h1
              className="svc-hero__heading"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.12}
            >
              Lasting Solutions for{' '}
              <span className="text-gradient">Accreditation Readiness</span>
            </motion.h1>

            <motion.p
              className="svc-hero__para"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
            >
              We provide specialized training and consultancy services that help healthcare
              professionals build successful careers. We also enable healthcare organizations
              to strengthen quality systems.
            </motion.p>

            <motion.p
              className="svc-hero__para"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.28}
            >
              Our programs are designed to simplify healthcare standards, promote patient safety,
              and support quality improvement. We ensure this through practical, industry-focused
              learning and implementation guidance.
            </motion.p>
          </div>

          {/* Illustration */}
          <motion.div
            className="svc-hero__visual"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          >
            <div className="svc-hero__img-frame">
              <img
                src="/services-hero-illustration.png"
                alt="Healthcare quality training and consultancy services overview"
                className="svc-hero__img"
                loading="eager"
              />
              <div className="svc-hero__img-tag glass">
                <LuCircleCheckBig className="svc-hero__tag-icon" aria-hidden="true" />
                <span>Accreditation Ready</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. TRAINING SERVICES
      ════════════════════════════════════════════════ */}
      <section className="section section--light svc-training">
        <div className="container">
          <motion.div
            className="svc-section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Training Programs</span>
            <h2 className="svc-section-heading">Our Training Services</h2>
          </motion.div>

          <div className="svc-training__list">
            {trainingServices.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <motion.article
                  key={svc.id}
                  id={`svc-${svc.id}`}
                  className="svc-card"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                >
                  <div className="svc-card__left">
                    <div className="svc-card__icon-wrap" aria-hidden="true">
                      <Icon className="svc-card__icon" />
                    </div>
                    <span className="svc-card__number" aria-hidden="true">{svc.number}</span>
                  </div>

                  <div className="svc-card__body">
                    <h3 className="svc-card__title">{svc.title}</h3>
                    {svc.body.map((para, j) => (
                      <p key={j} className="svc-card__para">{para}</p>
                    ))}
                    {/* <Link
                      to={`/services/${svc.slug}`}
                      className="svc-card__link"
                      id={`svc-link-${svc.id}`}
                    >
                      Learn more
                      <LuArrowRight className="svc-card__link-icon" aria-hidden="true" />
                    </Link> */}
                  </div>

                  <div className="svc-card__accent" aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. ACCREDITATION CONSULTANCY
      ════════════════════════════════════════════════ */}
      <section className="section section--dark svc-consult">
        <div className="svc-consult__bg" aria-hidden="true">
          <div className="svc-consult__glow" />
        </div>
        <div className="container">
          <motion.div
            className="svc-section-header svc-section-header--dark"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Consultancy</span>
            <h2 className="svc-section-heading svc-section-heading--dark">
              Healthcare Accreditation Consultancy
            </h2>
          </motion.div>

          <div className="svc-consult__inner">
            {/* Intro text */}
            <motion.div
              className="svc-consult__text"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              <p className="svc-consult__intro">
                Preparing for accreditation requires a well-designed quality management system
                supported by effective implementation. Our Healthcare Accreditation Training and
                consultancy services help healthcare organizations:
              </p>

              <div className="svc-consult__checklist">
                {consultancyItems.map((item, i) => (
                  <motion.div
                    key={item.id}
                    id={`consult-${item.id}`}
                    className="svc-consult__check-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  >
                    <div className="svc-consult__check-icon-wrap" aria-hidden="true">
                      <LuCheck className="svc-consult__check-icon" />
                    </div>
                    <span className="svc-consult__check-label">{item.label}</span>
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="svc-consult__closing"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                Our consultants work alongside healthcare teams to strengthen organizational
                readiness.
              </motion.p>
            </motion.div>

            {/* Consultancy card panel */}
            <motion.div
              className="svc-consult__panel glass"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <div className="svc-consult__panel-icon-wrap" aria-hidden="true">
                <LuBriefcase className="svc-consult__panel-icon" />
              </div>
              <h3 className="svc-consult__panel-title">Expert Consultancy</h3>
              <p className="svc-consult__panel-desc">
                Our team of experienced Healthcare Quality Consultants provides structured,
                end-to-end support for accreditation preparation and quality system development.
              </p>
              <div className="svc-consult__panel-tags">
                <span className="svc-consult__tag">NABH</span>
                <span className="svc-consult__tag">JCI</span>
                <span className="svc-consult__tag">CAMHP</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. WHY CHOOSE NVR
      ════════════════════════════════════════════════ */}
      <section className="section section--light svc-why">
        <div className="container">
          <motion.div
            className="svc-section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Why Choose Us</span>
            <h2 className="svc-section-heading">Why Choose NVR Quality Solutions?</h2>
          </motion.div>

          <div className="svc-why__inner">
            {/* Paragraphs */}
            <motion.div
              className="svc-why__text"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
            >
              <p className="svc-why__para">
                Healthcare quality is always changing, and professionals need practical knowledge
                that extends beyond textbooks. They need to always know and handle whatever is
                happening in the world right now. This is why our approach combines:
              </p>
            </motion.div>

            {/* Why items grid */}
            <div className="svc-why__grid">
              {whyItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  id={`why-${item.id}`}
                  className="svc-why__item"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  whileHover={{ y: -3, transition: { duration: 0.22 } }}
                >
                  <div className="svc-why__item-dot" aria-hidden="true">
                    <LuCheck className="svc-why__check-icon" />
                  </div>
                  <span className="svc-why__item-label">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. CTA BANNER
      ════════════════════════════════════════════════ */}
      <CTABanner
        eyebrow="Get Started"
        title="Ready to Build Your Healthcare Quality Career?"
        description=""
        primaryLabel="Explore Our Training Programs"
        primaryTo="/training-programs"
        secondaryLabel="Contact Our Team"
        secondaryTo="/contact"
      />
    </>
  );
};

export default Services;
