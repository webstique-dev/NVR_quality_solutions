import { motion } from 'framer-motion';
import { FiBookOpen } from 'react-icons/fi';
import Button from './Button';
import Magnetic from '../ui/Magnetic';
import './TrainingCard.css';

const TrainingCard = ({ title, slug, index = 0 }) => {
  return (
    <Magnetic strength={0.2} className="magnetic--card">
      <motion.div
        className="training-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
      >
        <div className="training-card__media" aria-hidden="true">
          <FiBookOpen />
        </div>
        <div className="training-card__body">
          <h3 className="training-card__title">{title}</h3>
          <p className="training-card__meta">Overview not yet provided in source documents</p>
          <Button as="link" to={`/training-programs/${slug}`} variant="secondary" className="btn--on-light">
            View Details
          </Button>
        </div>
      </motion.div>
    </Magnetic>
  );
};

export default TrainingCard;
