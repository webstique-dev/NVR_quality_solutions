import { motion } from 'framer-motion';
import './SectionTitle.css';

/**
 * Reusable section heading block.
 * eyebrow: small label above the heading (e.g. "OUR EXPERTISE")
 * title: main heading text (string or JSX for partial gradient emphasis)
 * description: optional supporting paragraph
 * align: 'left' | 'center'
 */
const SectionTitle = ({ eyebrow, title, description, align = 'left', className = '' }) => {
  return (
    <motion.div
      className={`section-title section-title--${align} ${className}`.trim()}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title__heading">{title}</h2>
      {description && <p className="section-title__description">{description}</p>}
    </motion.div>
  );
};

export default SectionTitle;
