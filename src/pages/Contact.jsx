import { useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuClock,
  LuShieldCheck,
  LuHeadphones,
} from 'react-icons/lu';
import { FiArrowUpRight } from 'react-icons/fi';
import InquiryForm from '../components/Contact/InquiryForm';
import FAQAccordion from '../components/Common/FAQAccordion';
import SectionTitle from '../components/Common/SectionTitle';
import Magnetic from '../components/ui/Magnetic';
import { usePreloader } from '../context/PreloaderContext';
import {
  fadeUp,
  cardReveal,
  blurReveal,
  fadeLeft,
  fadeRight,
  staggerContainer,
  staggerItem,
} from '../animations/variants';
import { homeViewport } from '../animations/viewport';
import useSectionLenis from '../hooks/useSectionLenis';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';
import { generateWebPageSchema } from '../utils/structuredData';
import './Contact.css';

/* ─── Contact Info Items ────────────────────────────── */
const contactDetails = [
  {
    id: 'phone',
    icon: LuPhone,
    tag: 'Direct Phone',
    title: 'Phone Support',
    detail: '+91 8466040046',
    subtext: 'Speak directly with our consultancy & training team',
    actionText: 'Call Now',
    href: 'tel:+918466040046',
    accent: 'blue',
  },
  {
    id: 'email',
    icon: LuMail,
    tag: 'Email Inquiry',
    title: 'Email Support',
    detail: 'nvrqualitysolutions@gmail.com',
    subtext: 'Fast responses for training & course inquiries',
    actionText: 'Send Email',
    href: 'mailto:nvrqualitysolutions@gmail.com',
    accent: 'red',
  },
  {
    id: 'address',
    icon: LuMapPin,
    tag: 'Headquarters',
    title: 'Office Address',
    detail: 'Thadepalli, Amaravathi',
    subtext: 'Andhra Pradesh, India',
    actionText: 'Open Google Maps',
    href: 'https://maps.google.com/?q=Thadepalli,+Amaravathi,+Andhra+Pradesh',
    external: true,
    accent: 'blue',
  },
  {
    id: 'hours',
    icon: LuClock,
    tag: 'Availability',
    title: 'Working Hours',
    detail: '9:00 AM – 9:00 PM',
    subtext: 'Open 7 days a week (12 hours a day)',
    actionText: 'Open 7 Days',
    accent: 'green',
  },
];

/* ─── How Can We Help Items ─────────────────────────── */
const helpItems = [
  { num: '01', label: 'Information about upcoming training programs' },
  { num: '02', label: 'Course enrollment guidance' },
  { num: '03', label: 'Healthcare quality consultancy inquiries' },
  { num: '04', label: 'Patient safety and accreditation training' },
  { num: '05', label: 'Corporate and hospital training programs' },
  { num: '06', label: 'General questions about our services' },
];

/* ─── Contact FAQs ──────────────────────────────────── */
const contactFaqs = [
  {
    question: 'Do you provide certifications?',
    answer:
      'No. NVR Quality Solutions is a training and consultancy firm. We prepare individuals and healthcare organizations for recognized standards such as NABH, JCI, and CAAM HP, but we do not issue certifications.',
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

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const { isPreloaderGone } = usePreloader();
  const formSectionRef = useRef(null);
  useSectionLenis(formSectionRef);

  return (
    <>
      <SEO
        {...seoConfig.contact}
        structuredData={generateWebPageSchema({
          title: seoConfig.contact.title,
          description: seoConfig.contact.description,
          url: seoConfig.contact.canonical,
        })}
      />
      {/* ═══════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════ */}
      <section className="cnt-hero">
        <div className="cnt-hero__bg" aria-hidden="true">
          <div className="cnt-hero__glow" />
          <div className="cnt-hero__grid" />
        </div>

        <div className="container cnt-hero__inner">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              className="cnt-hero__content"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={
                shouldReduceMotion ? { opacity: 1, y: 0 } : isPreloaderGone ? 'show' : 'hidden'
              }
              variants={staggerContainer}
            >
              <motion.span className="eyebrow" variants={staggerItem}>
                Contact Us
              </motion.span>

              <motion.h1 className="cnt-hero__headline" variants={staggerItem}>
                Let&apos;s Start the <span className="hero__highlight">Conversation</span>
              </motion.h1>

              <motion.div className="cnt-hero__lede" variants={staggerItem}>
                <p>
                  Whatever the nature of your query, our team is here to help. Reach out with your
                  questions, and we&apos;ll guide you toward the right solution based on your learning or
                  organizational needs.
                </p>
              </motion.div>
            </motion.div>
          </Magnetic>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. CONTACT DETAILS
      ════════════════════════════════════════════════ */}
      <section className="cnt-section section--light cnt-details-section">
        <div className="container">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              className="block-head"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={blurReveal}
            >
              <span className="eyebrow">Reach Out</span>

              <motion.h2 className="section-title" variants={fadeUp}>
                Contact Details
              </motion.h2>
              <p className="block-head-desc">
                Connect with NVR Quality Solutions through any of our direct channels below. Our team is available 7 days a week to support your inquiries.
              </p>
            </motion.div>
          </Magnetic>

          <motion.div
            className="cnt-cards-grid"
            variants={staggerContainer}
            initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1 } : 'show'}
            viewport={homeViewport}
          >
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <Magnetic key={item.id} strength={0.15} className="magnetic--card">
                  <motion.article
                    className={`cnt-card cnt-card--${item.accent}`}
                    variants={staggerItem}
                    whileHover={shouldReduceMotion ? undefined : { y: -6, transition: { duration: 0.25 } }}
                  >
                    <div className="cnt-card__top">
                      <div className="cnt-card__icon-wrap">
                        <Icon className="cnt-card__icon" />
                      </div>
                      <span className="cnt-card__tag">{item.tag}</span>
                    </div>

                    <div className="cnt-card__body">
                      <h3 className="cnt-card__title">{item.title}</h3>
                      <div className="cnt-card__detail-wrap">
                        {item.href ? (
                          <a
                            href={item.href}
                            className="cnt-card__detail-link"
                            {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                          >
                            {item.detail}
                          </a>
                        ) : (
                          <span className="cnt-card__detail-text">{item.detail}</span>
                        )}
                      </div>
                      <p className="cnt-card__subtext">{item.subtext}</p>
                    </div>

                    <div className="cnt-card__footer">
                      {item.href ? (
                        <a
                          href={item.href}
                          className="cnt-card__action-btn"
                          {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                        >
                          <span>{item.actionText}</span>
                          <FiArrowUpRight className="cnt-card__action-icon" />
                        </a>
                      ) : (
                        <span className="cnt-card__action-badge">
                          <span className="cnt-card__pulse-dot" />
                          <span>{item.actionText}</span>
                        </span>
                      )}
                    </div>
                  </motion.article>
                </Magnetic>
              );
            })}
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

          {/* <Magnetic strength={0.05} className="magnetic--block">
          <motion.div
            className="why-footline"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
            variants={fadeUp}
          >
            <span className="bar" aria-hidden="true" />
            <p>Our expert support team aims to answer all inquiries within 24 business hours.</p>
          </motion.div>
          </Magnetic> */}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. HOW CAN WE HELP DARK BAND
      ════════════════════════════════════════════════ */}
      {/* ═══════════════════════════════════════════════
          3. HOW CAN WE HELP DARK BAND
      ════════════════════════════════════════════════ */}
      <section className="cnt-section cnt-help">
        <div className="container">
          <div className="cnt-help__grid">
            {/* Left Column: Intro */}
            <Magnetic strength={0.06} className="magnetic--block">
              <motion.div
                className="cnt-help__intro"
                initial={shouldReduceMotion ? { opacity: 1, x: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : 'show'}
                viewport={homeViewport}
                variants={fadeRight}
              >
                <span className="eyebrow">Our Support</span>
                <h2 className="cnt-help__heading">How Can We Help?</h2>
                <p className="cnt-help__para">
                  Our team is ready to assist you with tailored guidance based on your learning or
                  organizational requirements.
                </p>
              </motion.div>
            </Magnetic>

            {/* Right Column: Numbered List */}
            <Magnetic strength={0.05} className="magnetic--block">
              <motion.ul
                className="cnt-help__list"
                variants={staggerContainer}
                initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1 } : 'show'}
                viewport={homeViewport}
              >
                {helpItems.map((item) => (
                  <motion.li key={item.num} className="cnt-help__list-item" variants={staggerItem}>
                    <Magnetic strength={0.12} className="magnetic--chip">
                      <span className="cnt-help__num">{item.num}</span>
                    </Magnetic>
                    <Magnetic strength={0.1} className="magnetic--chip">
                      <span className="cnt-help__label">{item.label}</span>
                    </Magnetic>
                  </motion.li>
                ))}
              </motion.ul>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. SEND US A MESSAGE
      ════════════════════════════════════════════════ */}
      <section ref={formSectionRef} className="cnt-section section--light">
        <div className="container">
          <div className="cnt-form-grid">
            {/* Main Form Column */}
            <motion.div
              className="cnt-form-main"
              initial={shouldReduceMotion ? { opacity: 1, x: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, x: 0 } : 'show'}
              viewport={homeViewport}
              variants={fadeRight}
            >
              <Magnetic strength={0.1} className="magnetic--block">
                <span className="eyebrow">Send an Inquiry</span>
                <h2 className="section-title">Send Us a Message</h2>
              </Magnetic>
              <Magnetic strength={0.06} className="magnetic--block">
                <p className="block-head-desc" style={{ marginBottom: '24px' }}>
                  Complete the contact form, and a member of our team will get back to you as soon
                  as possible.
                </p>
              </Magnetic>

              <Magnetic strength={0.05} className="magnetic--block">
                <div className="cnt-form-card">
                  <InquiryForm />
                </div>
              </Magnetic>
            </motion.div>

            {/* Side Panel Column */}
            <Magnetic strength={0.2} className="magnetic--block">
              <motion.div
                className="cnt-side-card"
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
                whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
                viewport={homeViewport}
                variants={cardReveal}
              >
                <span className="eyebrow">Rapid Support</span>
                <h3 className="cnt-side-title">Need Immediate Guidance?</h3>
                <p className="cnt-side-desc">
                  Whether you are inquiring about NABH, JCI, or CAAM HP training, course enrollment, or
                  hospital consultancy services, our team is ready to assist you.
                </p>

                <div className="cnt-side-features">
                  <div className="cnt-side-feature">
                    <div className="pillar-icon cnt-small-icon" aria-hidden="true">
                      <LuClock className="pillar-icon-svg" />
                    </div>
                    <div>
                      <strong>Rapid Turnaround</strong>
                      <p>Expect a response within 24 hours</p>
                    </div>
                  </div>

                  <div className="cnt-side-feature">
                    <div className="pillar-icon cnt-small-icon" aria-hidden="true">
                      <LuShieldCheck className="pillar-icon-svg" />
                    </div>
                    <div>
                      <strong>Expert Direct Guidance</strong>
                      <p>Connect with quality consultants</p>
                    </div>
                  </div>

                  <div className="cnt-side-feature">
                    <div className="pillar-icon cnt-small-icon" aria-hidden="true">
                      <LuHeadphones className="pillar-icon-svg" />
                    </div>
                    <div>
                      <strong>Tailored Support</strong>
                      <p>Custom training for institutions</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          5. FREQUENTLY ASKED QUESTIONS — EXACT HOME PAGE ACCORDION
      ════════════════════════════════════════════════ */}
      <section className="section section--light cnt-faq-section">
        <div className="container">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
            variants={fadeUp}
          >
            <SectionTitle
              eyebrow="FAQ"
              title="Frequently Asked Questions"
              description="Everything you need to know about contacting our support team, training inquiries, and consultancy services."
              align="center"
            />
          </motion.div>

          <motion.div
            className="home-faq-wrap"
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
            variants={fadeUp}
            custom={0.15}
          >
            <FAQAccordion items={contactFaqs} />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
