import PageBanner from '../components/Layout/PageBanner';
import FAQAccordion from '../components/Common/FAQAccordion';
import CTABanner from '../components/Layout/CTABanner';
import { faqs } from '../data/faqs';

const FAQ = () => {
  return (
    <>
      <PageBanner
        eyebrow="FAQ"
        title="Frequently Asked Questions"
      />

      <section className="section section--light">
        <div className="container">
          <div className="home-faq-wrap">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      <CTABanner
        title="Still have questions?"
        description="Reach out and our team will be happy to help."
      />
    </>
  );
};

export default FAQ;
