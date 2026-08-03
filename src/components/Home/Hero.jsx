import { motion } from 'framer-motion';
import { LuCircleCheckBig, LuGraduationCap } from 'react-icons/lu';
import Button from '../Common/Button';
import './Hero.css';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay },
  }),
};

const Hero = () => {
  return (
    <section className="hero section--dark">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-word">QUALITY</div>
        <div className="hero__glow hero__glow--1" />
        <div className="hero__glow hero__glow--2" />
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
      </div>

      <div className="container hero__inner">
        {/* Left Content */}
        <div className="hero__content">
          <motion.div
            className="hero__badge"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
          >
            <span className="hero__badge-dot" aria-hidden="true" />
            Healthcare Quality Training &amp; Consultancy
          </motion.div>

          <motion.h1
            className="hero__heading"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.1}
          >
            Building Safer Healthcare Through{' '}
            <span className="text-gradient">Quality Excellence</span>
          </motion.h1>

          <motion.p
            className="hero__description"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.2}
          >
            At NVR Quality Solutions, we provide expert-led Healthcare Quality Training, Patient
            Safety Training, and professional consultancy. Every student that leaves us has the
            knowledge and practical skills needed to implement globally recognized quality standards.
          </motion.p>

          <motion.p
            className="hero__description hero__description--secondary"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.28}
          >
            Are you a student looking to build a rewarding career? Or a healthcare organization
            preparing for accreditation? Whatever your goal, our programs are designed to bridge
            the gap between theory and real-world practice.
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.36}
          >
            <Button as="link" to="/training-programs" variant="primary">
              Explore Trainings
            </Button>
            <Button as="link" to="/contact" variant="secondary">
              Talk to Our Experts
            </Button>
          </motion.div>

          <motion.p
            className="hero__note"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.44}
          >
            Gain internationally recognized standards such as{' '}
            <strong>NABH, JCI, and CAMHP</strong> through structured training and expert guidance.
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            className="hero__trust"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0.52}
          >
            <div className="hero__trust-item">
              <span className="hero__trust-value">NABH</span>
              <span className="hero__trust-label">Training</span>
            </div>
            <div className="hero__trust-divider" aria-hidden="true" />
            <div className="hero__trust-item">
              <span className="hero__trust-value">JCI</span>
              <span className="hero__trust-label">Training</span>
            </div>
            <div className="hero__trust-divider" aria-hidden="true" />
            <div className="hero__trust-item">
              <span className="hero__trust-value">CAMHP</span>
              <span className="hero__trust-label">Training</span>
            </div>
          </motion.div>
        </div>

        {/* Right Illustration */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 48, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="hero__visual-frame">
            <img
              src="/hero-illustration.png"
              alt="Healthcare professionals reviewing quality standards and accreditation documents"
              className="hero__illustration"
              loading="eager"
            />
            {/* Floating accent cards */}
            <div className="hero__float-card hero__float-card--top glass">
              <LuCircleCheckBig className="hero__float-icon" aria-hidden="true" />
              <span>Accreditation Ready</span>
            </div>
            <div className="hero__float-card hero__float-card--bottom glass">
              <LuGraduationCap className="hero__float-icon" aria-hidden="true" />
              <span>Expert-Led Training</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
