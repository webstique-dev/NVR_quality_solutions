import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import './ScrollToTopButton.css';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="scroll-top glass"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Scroll to top"
    >
      <FiArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
