import PageBanner from '../components/Layout/PageBanner';
import FAQAccordion from '../components/Common/FAQAccordion';
import CTABanner from '../components/Layout/CTABanner';
import { faqs } from '../data/faqs';
import { useSEO } from '../hooks/useSEO';
import { ROUTE_META } from '../config/seo';

const FAQ = () => {
  useSEO({
    title: ROUTE_META.faq.title,
    description: ROUTE_META.faq.description,
    keywords: ROUTE_META.faq.keywords,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  });

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
