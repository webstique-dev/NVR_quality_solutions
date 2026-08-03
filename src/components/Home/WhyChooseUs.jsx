import { motion } from 'framer-motion';
import {
  LuTarget,
  LuGlobe,
  LuBuilding2,
  LuClipboardList,
  LuTrophy,
} from 'react-icons/lu';
import './WhyChooseUs.css';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const features = [
  {
    icon: LuTarget,
    title: 'Consultancy-Backed Curriculum',
    text: 'Our training is grounded in real healthcare consultancy experience — not generic content.',
  },
  {
    icon: LuGlobe,
    title: 'Globally Recognized Standards',
    text: 'Programs aligned to NABH, JCI, and CAMHP frameworks accepted across international healthcare systems.',
  },
  {
    icon: LuBuilding2,
    title: 'Real-World Application',
    text: 'Practical, case-based learning that bridges theory and on-the-ground implementation.',
  },
  {
    icon: LuClipboardList,
    title: 'Accreditation Support',
    text: 'End-to-end guidance for organizations preparing for accreditation assessments.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose section section--light">
      <div className="container why-choose__inner">
        {/* Left: Illustration */}
        <motion.div
          className="why-choose__visual"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="why-choose__img-wrap">
            <img
              src="/why-choose-illustration.png"
              alt="Healthcare professional learning quality skills with digital tools and certifications"
              className="why-choose__img"
              loading="lazy"
            />
            <div className="why-choose__img-badge">
              <span className="why-choose__badge-icon-wrap" aria-hidden="true">
                <LuTrophy className="why-choose__badge-icon" />
              </span>
              <div>
                <strong>Expert-Led</strong>
                <p>Industry practitioners teach every module</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <div className="why-choose__content">
          <motion.span
            className="eyebrow-light"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0}
          >
            Why Choose NVR Quality Solutions
          </motion.span>

          <motion.h2
            className="why-choose__heading"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            custom={0.1}
          >
            Learn the Skills That{' '}
            <span className="text-gradient-light">Modern Healthcare Demands</span>
          </motion.h2>

          <div className="why-choose__features">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  className="why-choose__feature"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={0.2 + i * 0.1}
                >
                  <div className="why-choose__feature-icon" aria-hidden="true">
                    <Icon className="why-choose__feature-icon-svg" />
                  </div>
                  <div>
                    <h3 className="why-choose__feature-title">{f.title}</h3>
                    <p className="why-choose__feature-text">{f.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
