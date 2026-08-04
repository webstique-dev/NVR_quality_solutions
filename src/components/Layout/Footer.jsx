import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { motion, useReducedMotion } from 'framer-motion';
import './Footer.css';

const FOOTER_LINKS = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Training Programs', to: '/training-programs' },
    { label: 'Contact', to: '/contact' },
  ],
  Resources: [
    // { label: 'FAQ', to: '/faq' },
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-conditions' },
  ],
};

const Footer = () => {
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="footer">
      <div className="sunset-stripe-band" aria-hidden="true" />
      <div className="footer__inner">
        <motion.div
          className="footer__top"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
        >
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="NVR Quality Solutions Home">
              <img src="/nvr-logo.png" alt="NVR Quality Solutions" className="footer__logo-img" />
            </Link>
            <p className="footer__tagline">
              Empowering healthcare professionals to build safer, higher-quality
              healthcare systems through expert-led training and quality consultancy.
            </p>
            <Link to="/contact" className="footer__cta">
              <span>Start an inquiry</span>
              <FiArrowUpRight className="footer__cta-icon" aria-hidden="true" />
            </Link>
          </div>

          {/* Navigation Links Columns */}
          <div className="footer__links">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div className="footer__col" key={heading}>
                <h3 className="footer__col-heading">{heading}</h3>
                <ul className="footer__link-list">
                  {links.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="footer__link-item">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Divider */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Bottom Section */}
        <motion.div
          className="footer__bottom"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <p className="footer__copyright">&copy; {year} NVR Quality Solutions. All rights reserved.</p>
          <p className="footer__disclaimer">
            NVR Quality Solutions provides training and consultancy in preparation for
            healthcare quality standards such as NABH, JCI, and CAMHP. NVR Quality Solutions
            does not award these certifications.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
