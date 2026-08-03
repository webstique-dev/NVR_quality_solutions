import { motion } from 'framer-motion';
import {
  LuChartBar,
  LuShieldCheck,
  LuMedal,
  LuGlobe,
  LuAward,
  LuCheck,
  LuCircleCheckBig,
  LuUsers,
  LuBookOpen,
  LuLightbulb,
  LuBrainCircuit,
  LuGraduationCap,
  LuStethoscope,
} from 'react-icons/lu';
import CTABanner from '../components/Layout/CTABanner';
import './TrainingPrograms.css';

/* ─── Animation helpers ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
};

/* ─── Training programs data ───────────────────────── */
const programs = [
  {
    id: 'healthcare-quality-training',
    icon: LuChartBar,
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
  { id: 'w1', icon: LuGraduationCap, label: 'Students interested in healthcare quality' },
  { id: 'w2', icon: LuStethoscope,   label: 'Doctors and nurses' },
  { id: 'w3', icon: LuUsers,         label: 'Allied healthcare professionals' },
  { id: 'w4', icon: LuBookOpen,      label: 'Hospital administrators' },
  { id: 'w5', icon: LuChartBar,      label: 'Quality executives' },
  { id: 'w6', icon: LuUsers,         label: 'Clinical and non-clinical staff' },
  { id: 'w7', icon: LuBrainCircuit,  label: 'Professionals transitioning into quality roles' },
];

/* ─── What makes us different items ───────────────── */
const differentItems = [
  { id: 'd1', icon: LuLightbulb,     label: 'Expert-led instruction' },
  { id: 'd2', icon: LuBrainCircuit,  label: 'Real-world case discussions' },
  { id: 'd3', icon: LuUsers,         label: 'Interactive learning' },
  { id: 'd4', icon: LuChartBar,      label: 'Industry-relevant examples' },
  { id: 'd5', icon: LuCircleCheckBig,label: 'Implementation-focused guidance' },
];

/* ─── Component ────────────────────────────────────── */
const TrainingPrograms = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════ */}
      <section className="tp-hero section--dark">
        <div className="tp-hero__bg" aria-hidden="true">
          <div className="tp-hero__glow tp-hero__glow--1" />
          <div className="tp-hero__glow tp-hero__glow--2" />
          <div className="tp-hero__grid" />
        </div>

        <div className="container tp-hero__inner">
          {/* Content */}
          <div className="tp-hero__content">
            <motion.span
              className="eyebrow"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.05}
            >
              Training Programs
            </motion.span>

            <motion.h1
              className="tp-hero__heading"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.12}
            >
              Learn Quality Standards from{' '}
              <span className="text-gradient">Industry Experts</span>
            </motion.h1>

            <motion.p
              className="tp-hero__para"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
            >
              Healthcare quality is a constantly changing discipline. It requires technical
              knowledge, critical thinking, and an understanding of how healthcare systems
              operate.
            </motion.p>

            <motion.p
              className="tp-hero__para"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.28}
            >
              This is why we have structured training programs that prepare students and
              healthcare professionals to learn nationally and internationally recognized
              quality standards. Every program is designed with one goal — to help you become
              job-ready for quality-focused roles in healthcare.
            </motion.p>
          </div>

          {/* Illustration */}
          <motion.div
            className="tp-hero__visual"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          >
            <div className="tp-hero__img-frame">
              <img
                src="/training-hero-illustration.png"
                alt="Healthcare quality training programs with industry experts"
                className="tp-hero__img"
                loading="eager"
              />
              <div className="tp-hero__img-tag glass">
                <LuCircleCheckBig className="tp-hero__tag-icon" aria-hidden="true" />
                <span>Job-Ready Training</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. EXPLORE OUR TRAINING PROGRAMS
      ════════════════════════════════════════════════ */}
      <section className="section section--light tp-programs">
        <div className="container">
          <motion.div
            className="tp-section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Programs</span>
            <h2 className="tp-section-heading">Explore Our Training Programs</h2>
            <p className="tp-section-sub">Our top programs include:</p>
          </motion.div>

          <div className="tp-programs__grid">
            {programs.map((prog, i) => {
              const Icon = prog.icon;
              return (
                <motion.article
                  key={prog.id}
                  id={`tp-${prog.id}`}
                  className="tp-card"
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                >
                  {/* Card header */}
                  <div className="tp-card__header">
                    <div className="tp-card__icon-wrap" aria-hidden="true">
                      <Icon className="tp-card__icon" />
                    </div>
                    <span className="tp-card__number" aria-hidden="true">{prog.number}</span>
                  </div>

                  <h3 className="tp-card__title">{prog.title}</h3>
                  <p className="tp-card__desc">{prog.description}</p>

                  {/* Key Learning Areas */}
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

                  {/* Bottom accent */}
                  <div className="tp-card__accent" aria-hidden="true" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. WHO CAN JOIN
      ════════════════════════════════════════════════ */}
      <section className="section section--dark tp-who">
        <div className="tp-who__bg" aria-hidden="true">
          <div className="tp-who__glow" />
        </div>
        <div className="container">
          <motion.div
            className="tp-section-header tp-section-header--dark"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Audience</span>
            <h2 className="tp-section-heading tp-section-heading--dark">Who Can Join?</h2>
            <p className="tp-section-intro--dark">
              Our training programs are suitable for students at different stages of their
              professional journey, including:
            </p>
          </motion.div>

          <div className="tp-who__grid">
            {whoItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  id={`who-${item.id}`}
                  className="tp-who__card glass"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                  whileHover={{ y: -4, transition: { duration: 0.22 } }}
                >
                  <div className="tp-who__card-icon" aria-hidden="true">
                    <Icon className="tp-who__card-icon-svg" />
                  </div>
                  <p className="tp-who__card-label">{item.label}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            className="tp-who__closing"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          >
            Whether you're entering the field or expanding your expertise, we can help. Our
            programs provide knowledge that supports long-term career growth.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. WHAT MAKES OUR TRAINING DIFFERENT
      ════════════════════════════════════════════════ */}
      <section className="section section--light tp-different">
        <div className="container tp-different__inner">
          {/* Left: Text */}
          <motion.div
            className="tp-different__content"
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Our Approach</span>
            <h2 className="tp-different__heading">
              What Makes Our Training{' '}
              <span className="text-gradient-light">Different?</span>
            </h2>
            <p className="tp-different__para">
              Learning healthcare quality goes beyond understanding standards. It requires
              knowing how those standards are applied in real healthcare settings. Every session
              is designed to combine theory with practical context through:
            </p>

            <div className="tp-different__items">
              {differentItems.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    id={`diff-${item.id}`}
                    className="tp-different__item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  >
                    <div className="tp-different__item-icon" aria-hidden="true">
                      <Icon className="tp-different__item-icon-svg" />
                    </div>
                    <span className="tp-different__item-label">{item.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              className="tp-different__closing"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              The result is a learning experience that prepares participants to contribute
              with confidence from day one.
            </motion.p>
          </motion.div>

          {/* Right: Visual summary card */}
          <motion.div
            className="tp-different__panel"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <div className="tp-different__stat-card">
              <div className="tp-different__stat">
                <span className="tp-different__stat-val">5</span>
                <span className="tp-different__stat-label">Specialized<br />Programs</span>
              </div>
              <div className="tp-different__stat-divider" aria-hidden="true" />
              <div className="tp-different__stat">
                <span className="tp-different__stat-val">3</span>
                <span className="tp-different__stat-label">Global<br />Standards</span>
              </div>
              <div className="tp-different__stat-divider" aria-hidden="true" />
              <div className="tp-different__stat">
                <span className="tp-different__stat-val">100%</span>
                <span className="tp-different__stat-label">Practical<br />Focus</span>
              </div>
            </div>

            <div className="tp-different__badge-list">
              {['NABH', 'JCI', 'CAMHP'].map(badge => (
                <span key={badge} className="tp-different__badge">{badge}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. TAKE THE NEXT STEP
      ════════════════════════════════════════════════ */}
      <section className="section section--dark tp-nextstep">
        <div className="tp-nextstep__bg" aria-hidden="true">
          <div className="tp-nextstep__glow" />
        </div>
        <div className="container">
          <motion.div
            className="tp-nextstep__inner"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Next Steps</span>
            <h2 className="tp-nextstep__heading">Take the Next Step</h2>
            <p className="tp-nextstep__para">
              Whether you're looking to strengthen your professional profile, transition into
              healthcare quality, or gain accreditations, our training programs are ideal. We
              provide the knowledge and confidence to help you move forward.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          6. CTA BANNER
      ════════════════════════════════════════════════ */}
      <CTABanner
        eyebrow="Get Started"
        title="Ready to Begin Your Healthcare Quality Journey?"
        description=""
        primaryLabel="View Upcoming Programs"
        primaryTo="/training-programs"
        secondaryLabel="Get in Touch"
        secondaryTo="/contact"
      />
    </>
  );
};

export default TrainingPrograms;
