import { useLocation } from 'react-router-dom';
import './SunsetStripeBand.css';

/**
 * SunsetStripeBand — NVR Brand Signature Element.
 *
 * Full-width red-to-blue gradient band placed at the bottom of pages, above the footer.
 * Automatically hidden on /contact page per user request.
 */
const SunsetStripeBand = () => {
  const location = useLocation();

  if (location.pathname === '/contact') {
    return null;
  }

  return <div className="sunset-stripe" aria-hidden="true" />;
};

export default SunsetStripeBand;
