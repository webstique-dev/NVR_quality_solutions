import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
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

  return (
    <footer className="footer section--dark">
      <div className="footer__bg" aria-hidden="true">
        <div className="footer__glow" />
      </div>

      <div className="container footer__inner">
        <div className="footer__top">
          {/* Brand Column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo" aria-label="NVR Quality Solutions Home">
              NVR <span>Quality Solutions</span>
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
        </div>

        {/* Clean Divider */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">&copy; {year} NVR Quality Solutions. All rights reserved.</p>
          <p className="footer__disclaimer">
            NVR Quality Solutions provides training and consultancy in preparation for
            healthcare quality standards such as NABH, JCI, and CAMHP. NVR Quality Solutions
            does not award these certifications.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
