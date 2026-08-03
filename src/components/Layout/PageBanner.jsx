import { motion } from 'framer-motion';
import './PageBanner.css';

/**
 * Standard inner-page hero/banner.
 * breadcrumb: array of { label, to } — last item renders as current page
 */
const PageBanner = ({ eyebrow, title, description, breadcrumb = [] }) => {
  return (
    <section className="page-banner section--dark">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="page-banner__title">{title}</h1>
          {description && <p className="page-banner__description">{description}</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default PageBanner;
