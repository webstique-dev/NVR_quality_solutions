import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import ContentPending from './ContentPending';
import './FAQAccordion.css';

const FAQAccordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div className="faq-item" key={item.question}>
            <button
              className="faq-item__trigger"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              id={`faq-trigger-${index}`}
            >
              <span>{item.question}</span>
              <span className={`faq-item__icon ${isOpen ? 'faq-item__icon--open' : ''}`}>
                <FiPlus />
              </span>
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
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="faq-item__panel"
                >
                  <div className="faq-item__panel-inner">
                    {item.answer ? (
                      <p>{item.answer}</p>
                    ) : (
                      <ContentPending label="Answer not yet provided in source documents" />
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
