import { motion } from 'framer-motion';
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
  return (
    <section className="cta-banner section--dark">
      <div className="cta-banner__bg" aria-hidden="true">
        <div className="cta-banner__glow cta-banner__glow--left" />
        <div className="cta-banner__glow cta-banner__glow--right" />
        <div className="cta-banner__grid-lines" />
      </div>
      <div className="container">
        <motion.div
          className="cta-banner__inner"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cta-banner__content">
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2 className="cta-banner__title">{title}</h2>
            {description && <p className="cta-banner__description">{description}</p>}
          </div>
          <div className="cta-banner__actions">
            <Button as="link" to={primaryTo} variant="primary" id="cta-primary-btn">
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
