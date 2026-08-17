import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import { LuPhone, LuMail, LuMapPin } from 'react-icons/lu';
import { motion, useReducedMotion } from 'framer-motion';
import Magnetic from '../ui/Magnetic';
import { staggerContainer, staggerItem } from '../../animations/variants';
import { defaultViewport } from '../../animations/viewport';
import './Footer.css';

const FOOTER_LINKS = {
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Services', to: '/services' },
    { label: 'Trainings', to: '/trainings' },
    { label: 'Careers', to: '/careers' },
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
      <div className="footer__inner">
        <motion.div
          className="footer__top"
          initial={shouldReduceMotion ? { opacity: 1 } : 'hidden'}
          whileInView={shouldReduceMotion ? { opacity: 1 } : 'show'}
          viewport={defaultViewport}
          variants={staggerContainer}
        >
          {/* Brand Column */}
          <motion.div className="footer__brand" variants={shouldReduceMotion ? undefined : staggerItem}>
            <Magnetic strength={0.15} className="magnetic--chip">
              <Link to="/" className="footer__logo" aria-label="NVR Quality Solutions Home">
                <img src="https://res.cloudinary.com/rlokioxu/image/upload/v1786013954/nvr-logo_vadrpc.png" alt="NVR Quality Solutions" width={443} height={268} loading="lazy" decoding="async" className="footer__logo-img" />
              </Link>
            </Magnetic>
            <Magnetic strength={0.06} className="magnetic--block">
              <p className="footer__tagline">
                Empowering Healthcare Organizations to build safer, higher-quality
                healthcare systems through expert-led training and quality consultancy.
              </p>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link to="/contact" className="footer__cta">
                <span>Start an inquiry</span>
                <FiArrowUpRight className="footer__cta-icon" aria-hidden="true" />
              </Link>
            </Magnetic>
          </motion.div>

          {/* Navigation Links Columns */}
          <motion.div className="footer__col" variants={shouldReduceMotion ? undefined : staggerItem}>
            <Magnetic strength={0.1} className="magnetic--block">
              <h3 className="footer__col-heading">Company</h3>
            </Magnetic>
            <ul className="footer__link-list">
              {FOOTER_LINKS.Company.map((link) => (
                <li key={link.to}>
                  <Magnetic strength={0.12} className="magnetic--chip">
                    <Link to={link.to} className="footer__link-item">
                      {link.label}
                    </Link>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className="footer__col" variants={shouldReduceMotion ? undefined : staggerItem}>
            <Magnetic strength={0.1} className="magnetic--block">
              <h3 className="footer__col-heading">Resources</h3>
            </Magnetic>
            <ul className="footer__link-list">
              {FOOTER_LINKS.Resources.map((link) => (
                <li key={link.to}>
                  <Magnetic strength={0.12} className="magnetic--chip">
                    <Link to={link.to} className="footer__link-item">
                      {link.label}
                    </Link>
                  </Magnetic>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer__contact-section"
            variants={shouldReduceMotion ? undefined : staggerItem}
          >
            <Magnetic strength={0.1} className="magnetic--block">
              <h3 className="footer__col-heading">Contact Details</h3>
            </Magnetic>
            <div className="footer__contact">
              {FOOTER_CONTACT.map((item) => {
                const Icon = item.icon;
                return (
                  <Magnetic key={item.label} strength={0.15}>
                    <a
                      href={item.href}
                      className="footer__contact-item"
                      {...(item.external ? { target: '_blank', rel: 'noreferrer' } : {})}
                    >
                      <span className="footer__contact-icon-wrap" aria-hidden="true">
                        <Icon className="footer__contact-icon" />
                      </span>
                      <span className="footer__contact-text">{item.value}</span>
                    </a>
                  </Magnetic>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Bottom Section */}
        <motion.div
          className="footer__bottom"
          initial={shouldReduceMotion ? { opacity: 1, y: 0 } : 'hidden'}
          whileInView={shouldReduceMotion ? { opacity: 1, y: 0 } : 'show'}
          viewport={defaultViewport}
          variants={{
            hidden: { opacity: 0, y: 16 },
            show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
          }}
        >
          <p className="footer__copyright">&copy; {year} NVR Quality Solutions. All rights reserved.</p>
          <p className="footer__disclaimer">
            NVR Quality Solutions provides training and consultancy in preparation for
            healthcare quality standards such as NABH, JCI, and CAAM HP. NVR Quality Solutions
            does not award these certifications.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;