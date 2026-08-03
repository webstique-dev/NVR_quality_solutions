import { motion } from 'framer-motion';
import Button from '../components/Common/Button';
import './NotFound.css';

const NotFound = () => {
  return (
    <section className="not-found section--dark">
      <div className="container not-found__inner">
        <motion.span
          className="not-found__code"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          404
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Page not found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          The page you're looking for doesn't exist or may have moved.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <Button as="link" to="/" variant="primary">
            Back to Home
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default NotFound;
