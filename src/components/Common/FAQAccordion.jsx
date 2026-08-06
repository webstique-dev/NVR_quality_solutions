import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import Magnetic from '../ui/Magnetic';
import ContentPending from './ContentPending';
import './FAQAccordion.css';

const listVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const FAQAccordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <motion.div
      className="faq-accordion"
      variants={listVariants}
      initial="hidden"
      whileInView="show"
        viewport={{ once: true, amount: 'some' }}
    >
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const openClass = isOpen ? 'faq-item--open' : '';
        return (
          <Magnetic key={item.question} strength={0.15} className="magnetic--card">
            <motion.div
              className={`faq-item ${openClass}`.trim()}
              variants={itemVariants}
            >
              <button
                type="button"
                className="faq-item__trigger"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
              >
                <span className="faq-item__question">{item.question}</span>
                <Magnetic strength={0.2} className="magnetic--chip">
                  <motion.span
                    className="faq-item__icon"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <FiChevronDown />
                  </motion.span>
                </Magnetic>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-trigger-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="faq-item__panel"
                  >
                    <div className="faq-item__panel-inner">
                      {item.answer ? (
                        <Magnetic strength={0.05} className="magnetic--block">
                          <p>{item.answer}</p>
                        </Magnetic>
                      ) : (
                        <ContentPending label="Answer not yet provided in source documents" />
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </Magnetic>
        );
      })}
    </motion.div>
  );
};

export default FAQAccordion;