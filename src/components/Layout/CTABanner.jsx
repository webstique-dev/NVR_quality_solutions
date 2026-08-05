import { motion, useReducedMotion } from 'framer-motion';
import Button from '../Common/Button';
import { fadeScale, blurReveal, fadeUp } from '../../animations/variants';
import { homeViewport } from '../../animations/viewport';
import './CTABanner.css';

const CTABanner = ({
  eyebrow = 'Get Started',
  title,
  description,
  primaryLabel = 'Contact Us',
  primaryTo = '/contact',
  secondaryLabel,
  secondaryTo,
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="cta-banner">
      <div className="container">
        <motion.div
          className="cta-banner__inner"
          initial={shouldReduceMotion ? { opacity: 1, scale: 1 } : 'hidden'}
          whileInView={shouldReduceMotion ? { opacity: 1, scale: 1 } : 'show'}
          viewport={homeViewport}
          variants={fadeScale}
        >
          <div className="cta-banner__accent-bar" aria-hidden="true" />
          <motion.div
            className="cta-banner__content"
            variants={blurReveal}
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
            whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
            viewport={homeViewport}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && (
              <motion.h2 className="cta-banner__title" variants={fadeUp}>
                {title}
              </motion.h2>
            )}
            {description && <p className="cta-banner__description">{description}</p>}
          </motion.div>
          <div className="cta-banner__actions">
            <Button as="link" to={primaryTo} variant="dark" id="cta-primary-btn">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryTo && (
              <Button as="link" to={secondaryTo} variant="secondary" id="cta-secondary-btn">
                {secondaryLabel}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
