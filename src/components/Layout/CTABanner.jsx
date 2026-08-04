import { motion, useReducedMotion } from 'framer-motion';
import Button from '../Common/Button';
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
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          animate={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, -1.5, 0], scale: [1, 1.004, 1] }}
        >
          <div className="cta-banner__content">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="cta-banner__title">{title}</h2>
            {description && <p className="cta-banner__description">{description}</p>}
          </div>
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
