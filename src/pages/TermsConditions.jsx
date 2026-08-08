import PageBanner from '../components/Layout/PageBanner';
import ContentPending from '../components/Common/ContentPending';
import { useSEO } from '../hooks/useSEO';
import { ROUTE_META } from '../config/seo';

const TermsConditions = () => {
  useSEO({
    title: ROUTE_META.terms.title,
    description: ROUTE_META.terms.description,
  });

  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Terms & Conditions"
      />
      <section className="section section--light">
        <div className="container" style={{ maxWidth: 800 }}>
          <ContentPending label="Terms & Conditions content not yet provided in source documents. Legal text should be drafted or reviewed by qualified counsel before publishing." />
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
