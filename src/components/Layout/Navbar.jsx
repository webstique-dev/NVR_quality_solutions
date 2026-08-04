import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from '../Common/Button';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Training Programs', to: '/training-programs' },
  { label: 'Contact', to: '/contact' },
];

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

  // Handle Escape key and outside clicks to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
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
          <NavLink to="/" className="navbar__logo" onClick={closeMenu} aria-label="NVR Quality Solutions Home">
            <img src="/nvr-logo.png" alt="NVR Quality Solutions Logo" className="navbar__logo-img" />
          </NavLink>

          <nav className="navbar__links" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
              >
                {({ isActive }) => (
                  <span aria-current={isActive ? 'page' : undefined}>
                    {link.label}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="navbar__cta">
            <Button as="link" to="/contact" variant="dark" showIcon={false}>
              Get in Touch
            </Button>
          </div>

          <button
            className="navbar__toggle"
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu Drawer (Only active & visible on mobile/tablet breakpoints <= 1024px) */}
        <div
          className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}
          aria-hidden={!menuOpen}
        >
          <div className="navbar__mobile-inner">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                }
                onClick={closeMenu}
              >
                {({ isActive }) => (
                  <span aria-current={isActive ? 'page' : undefined}>
                    {link.label}
                  </span>
                )}
              </NavLink>
            ))}

            <div className="navbar__mobile-cta">
              <Button as="link" to="/contact" variant="primary" onClick={closeMenu}>
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
