import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import Magnetic from '../ui/Magnetic';
import './ServiceCard.css';

const ServiceCard = ({ name, slug, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 'some' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: index * 0.08 }}
    >
      <Magnetic strength={0.15} className="magnetic--block">
        <Link to={`/services/${slug}`} className="service-card">
          <span className="service-card__index">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="service-card__title">{name}</h3>
          <span className="service-card__arrow" aria-hidden="true">
            <FiArrowUpRight />
          </span>
        </Link>
      </Magnetic>
    </motion.div>
  );
};

export default ServiceCard;
