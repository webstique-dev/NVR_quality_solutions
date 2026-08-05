import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '../../animations/variants';
import { defaultViewport } from '../../animations/viewport';
import './Footer.css';

const FOOTER_LINKS = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Training Programs', to: '/training-programs' },
    { label: 'Contact', to: '/contact' },
  ],
  Resources: [
    { label: 'Privacy Policy', to: '/privacy-policy' },
    { label: 'Terms & Conditions', to: '/terms-conditions' },
  ],
};

const FOOTER_CONTACT = [
  {
    icon: LuPhone,
    label: 'Phone',
    href: 'tel:+918466040046',
    value: '+91 8466040046',
  },
  {
    icon: LuMail,
    label: 'Email',
    href: 'mailto:nvrqualitysolutions@gmail.com',
    value: 'nvrqualitysolutions@gmail.com',
  },
  {
    icon: LuMapPin,
    label: 'Address',
    href: 'https://maps.google.com/?q=Thadepalli,+Amaravathi,+Andhra+Pradesh',
    value: 'Thadepalli, Amaravathi, Andhra Pradesh',
    external: true,
  },
];

const Footer = () => {
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="footer">
      <div className="sunset-stripe-band" aria-hidden="true" />
      <div className="footer__inner">
        <motion.div
          className="footer__top"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
          viewport={defaultViewport}
          variants={fadeUp}
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
          <div className="footer__col">
            <h3 className="footer__col-heading">Company</h3>
            <ul className="footer__link-list">
              {FOOTER_LINKS.Company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link-item">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="footer__col-heading">Resources</h3>
            <ul className="footer__link-list">
              {FOOTER_LINKS.Resources.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link-item">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact-section">
            <h3 className="footer__col-heading">Contact Details</h3>
            <div className="footer__contact">
              {FOOTER_CONTACT.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="footer__contact-item"
                    {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  >
                    <Icon className="footer__contact-icon" aria-hidden="true" />
                    <span>{item.value}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Bottom Section */}
        <motion.div
          className="footer__bottom"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
          viewport={defaultViewport}
          variants={fadeUp}
          custom={0.15}
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
