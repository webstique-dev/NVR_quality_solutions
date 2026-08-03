import { motion } from 'framer-motion';
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuClock,
  LuMap,
  LuCheck,
  LuCircleCheckBig,
  LuHeadphones,
  LuShieldCheck,
  LuMessageSquare,
} from 'react-icons/lu';
import InquiryForm from '../components/Contact/InquiryForm';
import FAQAccordion from '../components/Common/FAQAccordion';
import './Contact.css';

/* ─── Animation helpers ────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d },
  }),
};

/* ─── Contact Info Items ────────────────────────────── */
const contactDetails = [
  {
    id: 'phone',
    icon: LuPhone,
    title: 'Phone',
    detail: 'Reach out to our expert team directly for immediate assistance and inquiries.',
  },
  {
    id: 'email',
    icon: LuMail,
    title: 'Email',
    detail: 'Send us an email and we will respond with full course or consultancy details.',
  },
  {
    id: 'address',
    icon: LuMapPin,
    title: 'Office Address',
    detail: 'Visit our training and consultancy headquarters.',
  },
  {
    id: 'hours',
    icon: LuClock,
    title: 'Business Hours',
    detail: 'Our team is available Monday through Saturday to assist you.',
  },
];

/* ─── How Can We Help Items ─────────────────────────── */
const helpItems = [
  { id: 'h1', label: 'Information about upcoming training programs' },
  { id: 'h2', label: 'Course enrollment guidance' },
  { id: 'h3', label: 'Healthcare quality consultancy inquiries' },
  { id: 'h4', label: 'Patient safety and accreditation training' },
  { id: 'h5', label: 'Corporate and hospital training programs' },
  { id: 'h6', label: 'General questions about our services' },
];

/* ─── Contact FAQs ──────────────────────────────────── */
const contactFaqs = [
  {
    question: 'Do you provide certifications?',
    answer:
      'No. NVR Quality Solutions is a training and consultancy firm. We prepare individuals and healthcare organizations for recognized standards such as NABH, JCI, and CAMHP, but we do not issue certifications.',
  },
  {
    question: 'Can hospitals request customized training programs?',
    answer:
      'Yes. We work with healthcare organizations to deliver customized training and consultancy based on their quality improvement goals, operational requirements, and accreditation readiness.',
  },
  {
    question: 'How soon can I expect a response?',
    answer:
      'Our team aims to respond to all inquiries as promptly as possible during our business hours. Expect a maximum of 24 hours turnaround time else give us a call for an immediate response.',
  },
];

/* ─── Component ────────────────────────────────────── */
const Contact = () => {
  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════ */}
      <section className="cnt-hero section--dark">
        <div className="cnt-hero__bg" aria-hidden="true">
          <div className="cnt-hero__glow cnt-hero__glow--1" />
          <div className="cnt-hero__glow cnt-hero__glow--2" />
          <div className="cnt-hero__grid" />
        </div>

        <div className="container cnt-hero__inner">
          {/* Content */}
          <div className="cnt-hero__content">
            <motion.span
              className="eyebrow"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.05}
            >
              Contact Us
            </motion.span>

            <motion.h1
              className="cnt-hero__heading"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.12}
            >
              Let&apos;s Start the{' '}
              <span className="text-gradient">Conversation</span>
            </motion.h1>

            <motion.p
              className="cnt-hero__para"
              variants={fadeUp}
              initial="hidden"
              animate="show"
              custom={0.2}
            >
              Whatever the nature of your query, our team is here to help. Reach out with your
              questions, and we&apos;ll guide you toward the right solution based on your learning or
              organizational needs.
            </motion.p>
          </div>

          {/* Visual */}
          <motion.div
            className="cnt-hero__visual"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          >
            <div className="cnt-hero__img-frame">
              <img
                src="/contact-hero-illustration.png"
                alt="Support team ready to assist with healthcare quality inquiries"
                className="cnt-hero__img"
                loading="eager"
              />
              <div className="cnt-hero__img-tag glass">
                <LuHeadphones className="cnt-hero__tag-icon" aria-hidden="true" />
                <span>24 Hour Turnaround</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. CONTACT DETAILS & MAP LOCATION
      ════════════════════════════════════════════════ */}
      <section className="section section--light cnt-details">
        <div className="container">
          <motion.div
            className="cnt-section-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow-light">Reach Out</span>
            <h2 className="cnt-section-heading">Contact Details &amp; Location</h2>
          </motion.div>

          <div className="cnt-details__grid">
            {/* Info Cards */}
            <div className="cnt-details__cards">
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    id={`cnt-detail-${item.id}`}
                    className="cnt-info-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                    whileHover={{ y: -4, transition: { duration: 0.22 } }}
                  >
                    <div className="cnt-info-card__icon-wrap" aria-hidden="true">
                      <Icon className="cnt-info-card__icon" />
                    </div>
                    <div className="cnt-info-card__content">
                      <h3 className="cnt-info-card__title">{item.title}</h3>
                      <p className="cnt-info-card__text">{item.detail}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Map Location Card */}
            <motion.div
              className="cnt-map-card"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <div className="cnt-map-card__header">
                <div className="cnt-map-card__icon-wrap" aria-hidden="true">
                  <LuMap className="cnt-map-card__icon" />
                </div>
                <h3 className="cnt-map-card__title">Map Location</h3>
              </div>

              <div className="cnt-map-card__body" role="img" aria-label="Map Location Visual">
                <div className="cnt-map-card__grid-pattern" aria-hidden="true" />
                <div className="cnt-map-card__pin-wrap">
                  <LuMapPin className="cnt-map-card__pin-icon" aria-hidden="true" />
                  <span className="cnt-map-card__pin-pulse" aria-hidden="true" />
                </div>
                <p className="cnt-map-card__label">Map Location</p>
                <span className="cnt-map-card__sublabel">NVR Quality Solutions Headquarters</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. HOW CAN WE HELP?
      ════════════════════════════════════════════════ */}
      <section className="section section--dark cnt-help">
        <div className="cnt-help__bg" aria-hidden="true">
          <div className="cnt-help__glow" />
        </div>
        <div className="container">
          <motion.div
            className="cnt-section-header cnt-section-header--dark"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">Our Support</span>
            <h2 className="cnt-section-heading cnt-section-heading--dark">
              How Can We Help?
            </h2>
            <p className="cnt-section-intro--dark">
              Our team can assist you with:
            </p>
          </motion.div>

          <div className="cnt-help__grid">
            {helpItems.map((item, i) => (
              <motion.div
                key={item.id}
                id={`help-${item.id}`}
                className="cnt-help__card glass"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
                whileHover={{ y: -4, transition: { duration: 0.22 } }}
              >
                <div className="cnt-help__card-check" aria-hidden="true">
                  <LuCheck className="cnt-help__check-icon" />
                </div>
                <p className="cnt-help__card-label">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. SEND US A MESSAGE
      ════════════════════════════════════════════════ */}
      <section className="section section--light cnt-form-section">
        <div className="container">
          <div className="cnt-form-two-col">
            {/* Main Form Column */}
            <motion.div
              className="cnt-form-col-main"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="cnt-form-header">
                <span className="eyebrow-light">Send an Inquiry</span>
                <h2 className="cnt-section-heading">Send Us a Message</h2>
                <p className="cnt-form-sub">
                  Complete the contact form, and a member of our team will get back to you as soon
                  as possible.
                </p>
              </div>

              <div className="cnt-form-card">
                <InquiryForm />
              </div>
            </motion.div>

            {/* Supporting Side Panel */}
            <motion.div
              className="cnt-form-col-side"
              initial={{ opacity: 0, x: 36 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <div className="cnt-side-card">
                <h3 className="cnt-side-card__title">Need Immediate Guidance?</h3>
                <p className="cnt-side-card__desc">
                  Whether you are inquiring about NABH, JCI, or CAMHP training, course enrollment, or hospital consultancy services, our team is ready to assist you.
                </p>

                <div className="cnt-side-features">
                  <div className="cnt-side-feature">
                    <div className="cnt-side-feature__icon-wrap" aria-hidden="true">
                      <LuClock className="cnt-side-feature__icon" />
                    </div>
                    <div>
                      <strong>Rapid Turnaround</strong>
                      <p>Expect a response within 24 hours</p>
                    </div>
                  </div>

                  <div className="cnt-side-feature">
                    <div className="cnt-side-feature__icon-wrap" aria-hidden="true">
                      <LuShieldCheck className="cnt-side-feature__icon" />
                    </div>
                    <div>
                      <strong>Expert Direct Guidance</strong>
                      <p>Connect with quality consultants</p>
                    </div>
                  </div>

                  <div className="cnt-side-feature">
                    <div className="cnt-side-feature__icon-wrap" aria-hidden="true">
                      <LuHeadphones className="cnt-side-feature__icon" />
                    </div>
                    <div>
                      <strong>Tailored Support</strong>
                      <p>Custom training for institutions</p>
                    </div>
                  </div>
                </div>

                <div className="cnt-side-badge">
                  <span className="cnt-side-badge__dot" aria-hidden="true" />
                  <span>Healthcare Quality &amp; Accreditation Consultancy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. FREQUENTLY ASKED QUESTIONS
      ════════════════════════════════════════════════ */}
      <section className="section section--dark cnt-faq">
        <div className="cnt-faq__bg" aria-hidden="true">
          <div className="cnt-faq__glow" />
        </div>
        <div className="container">
          <motion.div
            className="cnt-section-header cnt-section-header--dark text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="eyebrow">FAQ</span>
            <h2 className="cnt-section-heading cnt-section-heading--dark">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.div
            className="cnt-faq__wrap"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <FAQAccordion items={contactFaqs} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
