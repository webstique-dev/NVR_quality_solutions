import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  LuBriefcase,
  LuMapPin,
  LuClock,
  LuUsers,
  LuAward,
  LuBookOpen,
  LuHeartHandshake,
  LuTrendingUp,
  LuShieldCheck,
  LuSend,
} from 'react-icons/lu';
import SectionTitle from '../components/Common/SectionTitle';
import Button from '../components/Common/Button';
import Magnetic from '../components/ui/Magnetic';
import { usePreloader } from '../context/PreloaderContext';
import {
  fadeUp,
  cardReveal,
  blurReveal,
  staggerContainer,
  staggerItem,
} from '../animations/variants';
import { homeViewport } from '../animations/viewport';
import { useSEO } from '../hooks/useSEO';
import { ROUTE_META } from '../config/seo';
import './Careers.css';

/* ─── Culture Pillars Data ──────────────────────────── */
const culturePillars = [
  {
    id: 'mission',
    icon: LuHeartHandshake,
    tag: 'Our Purpose',
    title: 'Impactful Healthcare Mission',
    desc: 'Work directly on initiatives that elevate patient safety and hospital quality standards across healthcare systems.',
  },
  {
    id: 'growth',
    icon: LuTrendingUp,
    tag: 'Development',
    title: 'Continuous Learning & Growth',
    desc: 'Access ongoing professional accreditation training, expert workshops, and leadership development paths.',
  },
  {
    id: 'flexibility',
    icon: LuClock,
    tag: 'Flexibility',
    title: 'Hybrid & Remote Flexibility',
    desc: 'Enjoy balanced work options across on-site training sessions, remote consultancy, and flexible scheduling.',
  },
  {
    id: 'collaboration',
    icon: LuUsers,
    tag: 'Culture',
    title: 'Collaborative Expert Community',
    desc: 'Collaborate closely with veteran NABH, JCI, and quality experts dedicated to mentorship and excellence.',
  },
];

/* ─── Open Positions Data ───────────────────────────── */
const openPositions = [
  {
    id: 'quality-auditor',
    title: 'Healthcare Quality Trainer & Auditor',
    type: 'Full-time',
    location: 'Amaravathi, AP / Hybrid',
    experience: '3-5 Years Experience',
    tag: 'Quality & Compliance',
    description:
      'Lead interactive quality training sessions and assist hospitals with internal auditing and quality management system implementation.',
    responsibilities: [
      'Conduct practical training workshops on NABH and patient safety standards.',
      'Perform quality gap assessments and internal audits for healthcare facilities.',
      'Develop case studies, curriculum materials, and audit documentation templates.',
    ],
    requirements: [
      'Master’s degree in Healthcare Management (MHA) or Nursing / Clinical background.',
      'Certified NABH Internal Auditor or equivalent quality certification.',
      'Proven experience in hospital quality departments or accreditation training.',
    ],
  },
  {
    id: 'ipc-specialist',
    title: 'Infection Prevention & Control Specialist',
    type: 'Full-time',
    location: 'On-site / Regional',
    experience: '2-4 Years Experience',
    tag: 'Infection Control',
    description:
      'Design and deliver specialized IPCN / IPCO training programs and assist healthcare facilities in building robust infection surveillance systems.',
    responsibilities: [
      'Facilitate IPCN and IPCO training modules for clinical and nursing teams.',
      'Guide hospitals on infection surveillance, outbreak prevention, and hygiene protocols.',
      'Audit infection control documentation and compliance reports.',
    ],
    requirements: [
      'B.Sc / M.Sc Nursing or Diploma in Infection Control Management.',
      'Demonstrated hands-on experience in hospital infection control teams.',
      'Strong presentation skills and passion for healthcare education.',
    ],
  },
  {
    id: 'accreditation-consultant',
    title: 'NABH & JCI Accreditation Consultant',
    type: 'Contract / Project-based',
    location: 'Hybrid / Pan-India',
    experience: '5+ Years Experience',
    tag: 'Consultancy',
    description:
      'Provide strategic guidance, mock assessments, and policy framework development for hospitals seeking NABH or JCI accreditation.',
    responsibilities: [
      'Formulate tailored accreditation readiness roadmaps for partner hospitals.',
      'Conduct comprehensive mock surveys and staff interview preparation.',
      'Review SOPs, clinical indicator tracking, and quality manual documentation.',
    ],
    requirements: [
      'Proven track record leading successful hospital accreditation projects.',
      'Deep expertise in NABH 5th Edition and JCI hospital standards.',
      'Excellent strategic consulting and stakeholder communication skills.',
    ],
  },
  {
    id: 'curriculum-developer',
    title: 'Healthcare Quality Curriculum Developer',
    type: 'Full-time',
    location: 'Remote',
    experience: '2+ Years Experience',
    tag: 'Education',
    description:
      'Create engaging, practical case-based learning content and digital training modules for healthcare professionals.',
    responsibilities: [
      'Design slide decks, student workbooks, and interactive evaluation quizzes.',
      'Translate complex accreditation standards into clear, actionable learning units.',
      'Update course content continuously based on latest regulatory guidelines.',
    ],
    requirements: [
      'Background in healthcare education, medical writing, or instructional design.',
      'Familiarity with NABH, JCI, and international quality frameworks.',
      'Meticulous attention to detail and strong written communication.',
    ],
  },
];

const Careers = () => {
  const shouldReduceMotion = useReducedMotion();
  const { isPreloaderGone } = usePreloader();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    linkedin: '',
    message: '',
  });

  useSEO({
    title: ROUTE_META.careers.title,
    description: ROUTE_META.careers.description,
    keywords: ROUTE_META.careers.keywords,
  });

  const handleApplyClick = (jobTitle) => {
    setSelectedRole(jobTitle);
    setFormData((prev) => ({ ...prev, role: jobTitle }));
    const formElement = document.getElementById('application-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        role: '',
        experience: '',
        linkedin: '',
        message: '',
      });
    }, 6000);
  };

  return (
    <>
      {/* ═══════════════════════════════════════════════
          1. HERO SECTION
      ════════════════════════════════════════════════ */}
      <section className="car-hero">
        <div className="car-hero__bg" aria-hidden="true">
          <div className="car-hero__glow" />
          <div className="car-hero__grid" />
        </div>

        <div className="container car-hero__inner">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              animate={
                shouldReduceMotion ? { opacity: 1, y: 0 } : isPreloaderGone ? 'show' : 'hidden'
              }
              variants={staggerContainer}
            >
              <motion.span className="eyebrow" variants={staggerItem}>
                Careers at NVR Quality Solutions
              </motion.span>

              <motion.h1 className="car-hero__headline" variants={staggerItem}>
                Shape the Future of <span className="hero__highlight">Healthcare Quality</span>
              </motion.h1>

              <motion.div className="car-hero__lede" variants={staggerItem}>
                <p>
                  Join our team of healthcare quality consultants, trainers, and specialists. Together,
                  we empower healthcare professionals and organizations to build safer, higher-quality
                  care environments through world-class training and consultancy.
                </p>
              </motion.div>

              <motion.div className="car-hero__chips" variants={staggerItem}>
                <span className="car-hero__chip">
                  <LuAward /> Expert-Led Team
                </span>
                <span className="car-hero__chip">
                  <LuClock /> Hybrid & Remote Work
                </span>
                <span className="car-hero__chip">
                  <LuBookOpen /> Continuous Growth
                </span>
              </motion.div>
            </motion.div>
          </Magnetic>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          2. CULTURE & BENEFITS SECTION
      ════════════════════════════════════════════════ */}
      <section className="section section--light">
        <div className="container">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={blurReveal}
            >
              <SectionTitle
                eyebrow="Why Work With Us"
                title="A Culture Built Around Excellence & Purpose"
                description="We believe that empowering our team with freedom, resources, and shared purpose drives extraordinary impact for healthcare organizations."
                align="center"
              />
            </motion.div>
          </Magnetic>

          <motion.div
            className="car-culture-grid"
            variants={staggerContainer}
            initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1 } : 'show'}
            viewport={homeViewport}
          >
            {culturePillars.map((item) => {
              const Icon = item.icon;
              return (
                <Magnetic key={item.id} strength={0.15} className="magnetic--card">
                  <motion.article
                    className="pillar-card car-culture-card"
                    variants={staggerItem}
                    whileHover={shouldReduceMotion ? undefined : cardReveal.hover}
                  >
                    <div className="pillar-icon" aria-hidden="true">
                      <Icon className="pillar-icon-svg" />
                    </div>
                    <span className="pillar-tag">{item.tag}</span>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </motion.article>
                </Magnetic>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          3. OPEN POSITIONS SECTION
      ════════════════════════════════════════════════ */}
      <section className="section section--slate">
        <div className="container">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={blurReveal}
            >
              <SectionTitle
                eyebrow="Current Openings"
                title="Explore Opportunities"
                description="Browse our open roles below and apply to be part of our mission to elevate healthcare quality standards."
                align="left"
              />
            </motion.div>
          </Magnetic>

          <div className="car-jobs-list">
            {openPositions.map((job) => (
              <Magnetic key={job.id} strength={0.08} className="magnetic--block">
                <motion.article
                  className="car-job-card"
                  initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
                  whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
                  viewport={homeViewport}
                  variants={fadeUp}
                >
                  <div className="car-job-card__header">
                    <div className="car-job-card__title-group">
                      <span className="pillar-tag">{job.tag}</span>
                      <h3>{job.title}</h3>
                      <div className="car-job-card__tags">
                        <span className="car-job-tag">
                          <LuBriefcase /> {job.type}
                        </span>
                        <span className="car-job-tag">
                          <LuMapPin /> {job.location}
                        </span>
                        <span className="car-job-tag">
                          <LuClock /> {job.experience}
                        </span>
                      </div>
                    </div>

                    <Button
                      variant="dark"
                      type="button"
                      onClick={() => handleApplyClick(job.title)}
                    >
                      Apply for this Role
                    </Button>
                  </div>

                  <p className="car-job-card__desc">{job.description}</p>

                  <div className="car-job-card__details">
                    <div className="car-job-card__list-group">
                      <h4>Key Responsibilities</h4>
                      <ul className="car-job-card__list">
                        {job.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="car-job-card__list-group">
                      <h4>Qualifications &amp; Requirements</h4>
                      <ul className="car-job-card__list">
                        {job.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              </Magnetic>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          4. APPLICATION / TALENT NETWORK FORM
      ════════════════════════════════════════════════ */}
      <section id="application-form" className="section section--light">
        <div className="container">
          <Magnetic strength={0.06} className="magnetic--block">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={blurReveal}
            >
              <SectionTitle
                eyebrow="Join Our Talent Network"
                title="Apply or Express Your Interest"
                description={
                  selectedRole
                    ? `Submitting application for: ${selectedRole}`
                    : 'Don’t see a direct match? Submit your profile below and we will contact you when relevant opportunities open up.'
                }
                align="center"
              />
            </motion.div>
          </Magnetic>

          <Magnetic strength={0.05} className="magnetic--block">
            <motion.div
              className="car-form-wrap"
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
              whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
              viewport={homeViewport}
              variants={fadeUp}
            >
              {formSubmitted ? (
                <div className="car-form__success">
                  <LuShieldCheck size={24} />
                  <div>
                    <strong>Application Received!</strong>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: '#15803d' }}>
                      Thank you for reaching out. Our recruitment team will review your application and get back to you soon.
                    </p>
                  </div>
                </div>
              ) : (
                <form className="car-form" onSubmit={handleSubmit}>
                  <div className="car-form__row">
                    <div className="car-field">
                      <label htmlFor="car-name">Full Name *</label>
                      <input
                        id="car-name"
                        type="text"
                        required
                        placeholder="Dr. / Mr. / Ms. Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="car-field">
                      <label htmlFor="car-email">Email Address *</label>
                      <input
                        id="car-email"
                        type="email"
                        required
                        placeholder="yourname@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="car-form__row">
                    <div className="car-field">
                      <label htmlFor="car-phone">Phone Number *</label>
                      <input
                        id="car-phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="car-field">
                      <label htmlFor="car-role">Position Interested In</label>
                      <select
                        id="car-role"
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      >
                        <option value="">Select a Role or General Inquiry</option>
                        {openPositions.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                        <option value="General Healthcare Quality Talent Network">
                          General Healthcare Quality Talent Network
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="car-form__row">
                    <div className="car-field">
                      <label htmlFor="car-exp">Years of Healthcare / Quality Experience</label>
                      <select
                        id="car-exp"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      >
                        <option value="">Select Experience Level</option>
                        <option value="0-2 years">0-2 years</option>
                        <option value="3-5 years">3-5 years</option>
                        <option value="5-10 years">5-10 years</option>
                        <option value="10+ years">10+ years</option>
                      </select>
                    </div>
                    <div className="car-field">
                      <label htmlFor="car-linkedin">LinkedIn / Resume Link</label>
                      <input
                        id="car-linkedin"
                        type="url"
                        placeholder="https://linkedin.com/in/yourprofile"
                        value={formData.linkedin}
                        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="car-field">
                    <label htmlFor="car-message">Cover Note / Brief Intro</label>
                    <textarea
                      id="car-message"
                      rows={4}
                      placeholder="Tell us briefly about your healthcare quality background, certifications, and what drives you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button variant="primary" type="submit">
                    Submit Application <LuSend style={{ marginLeft: '8px' }} />
                  </Button>
                </form>
              )}
            </motion.div>
          </Magnetic>
        </div>
      </section>
    </>
  );
};

export default Careers;
