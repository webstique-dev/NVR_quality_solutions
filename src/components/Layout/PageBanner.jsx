import { memo } from 'react';
import { motion } from 'framer-motion';
import Magnetic from '../ui/Magnetic';
import './PageBanner.css';

/**
 * Standard inner-page hero/banner.
 */
const PageBanner = memo(function PageBanner({ eyebrow, title, description }) {
  return (
    <section className="page-banner section--dark">
      <div className="container">
        <Magnetic strength={0.08} className="magnetic--block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h1 className="page-banner__title">{title}</h1>
            {description && <p className="page-banner__description">{description}</p>}
          </motion.div>
        </Magnetic>
      </div>
    </section>
  );
});

export default PageBanner;
