import { useCallback, useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Common/Button';
import Magnetic from '../ui/Magnetic';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Training Programs', to: '/training-programs' },
  { label: 'Contact', to: '/contact' },
];

const drawerLinkVariants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const drawerListVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Handle scroll effect for glass header blur
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 30);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Lock body scroll when mobile drawer is open, auto-close on resize to desktop
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const handleResize = () => {
      if (window.innerWidth > 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  // Handle Escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={[
          'navbar',
          scrolled && 'navbar--scrolled',
          menuOpen && 'navbar--open',
        ]
          .filter(Boolean)
          .join(' ')}
        ref={navRef}
      >
        <div className="navbar__container">
          <div
            className={[
              'navbar__shell',
              scrolled && 'navbar__shell--scrolled',
              menuOpen && 'navbar__shell--open',
            ]
              .filter(Boolean)
              .join(' ')}
          >
            <div className="navbar__inner">
              <div className="navbar__logo-wrapper">
                <Magnetic strength={0.15} className="magnetic--chip">
                  <NavLink to="/" className="navbar__logo" onClick={closeMenu} aria-label="NVR Quality Solutions Home">
                    <img src="https://res.cloudinary.com/rlokioxu/image/upload/v1786013954/nvr-logo_vadrpc.png" alt="NVR Quality Solutions Logo" width={443} height={268} className="navbar__logo-img" loading="eager" decoding="async" />
                  </NavLink>
                </Magnetic>
              </div>

              <div className="navbar__pill-wrapper">
                <nav className="navbar__pill" aria-label="Primary navigation">
                  {NAV_LINKS.map((link) => (
                    <Magnetic key={link.to} strength={0.15} className="magnetic--chip">
                      <NavLink
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) =>
                          `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                        }
                      >
                        {({ isActive }) => (
                          <span className="navbar__link-text" aria-current={isActive ? 'page' : undefined}>
                            {link.label}
                          </span>
                        )}
                      </NavLink>
                    </Magnetic>
                  ))}
                </nav>
              </div>

              <div className="navbar__cta-wrapper">
                <div className="navbar__cta">
                  <Button as="link" to="/contact" variant="dark">
                    Get in Touch
                  </Button>
                </div>

                <Magnetic strength={0.15} className="magnetic--chip">
                  <button
                    className="navbar__toggle"
                    type="button"
                    onClick={() => setMenuOpen((value) => !value)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                  >
                    {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                  </button>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Premium Full-Screen Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="navbar__backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={closeMenu}
              aria-hidden="true"
            />

            <motion.aside
              className="navbar__drawer"
              role="dialog"
              aria-modal="true"
              aria-label="Menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="navbar__drawer-head">
                <img
                  src="https://res.cloudinary.com/rlokioxu/image/upload/v1786013954/nvr-logo_vadrpc.png"
                  alt="NVR Quality Solutions"
                  width={443}
                  height={268}
                  className="navbar__drawer-logo"
                  decoding="async"
                />
              </div>

              {/* <button
                type="button"
                className="navbar__drawer-close"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <FiX size={20} />
              </button> */}

              <motion.nav
                className="navbar__drawer-links"
                variants={drawerListVariants}
                initial="hidden"
                animate="show"
              >
                {NAV_LINKS.map((link, i) => (
                  <motion.div key={link.to} variants={drawerLinkVariants}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      onClick={closeMenu}
                      className={({ isActive }) =>
                        `navbar__drawer-link ${isActive ? 'navbar__drawer-link--active' : ''}`
                      }
                    >
                      {() => (
                        <span className="navbar__drawer-link-row">
                          <span className="navbar__drawer-link-index" aria-hidden="true">
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span className="navbar__drawer-link-text">{link.label}</span>
                          <span className="navbar__drawer-link-arrow" aria-hidden="true">
                            <FiArrowUpRight />
                          </span>
                        </span>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </motion.nav>

              <motion.div
                className="navbar__drawer-foot"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4, ease: 'easeOut' }}
              >
                <Button as="link" to="/contact" variant="primary" onClick={closeMenu}>
                  Get in Touch
                </Button>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
