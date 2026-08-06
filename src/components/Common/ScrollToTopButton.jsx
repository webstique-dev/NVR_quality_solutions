import { useEffect, useRef, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import Magnetic from '../ui/Magnetic';
import './ScrollToTopButton.css';

const THRESHOLD = 600;

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const shownRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        const next = window.scrollY > THRESHOLD;
        if (next !== shownRef.current) {
          shownRef.current = next;
          setVisible(next);
        }
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <Magnetic strength={0.3} className="magnetic--fixed">
      <button
        className="scroll-top glass"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <FiArrowUp />
      </button>
    </Magnetic>
  );
};

export default ScrollToTopButton;