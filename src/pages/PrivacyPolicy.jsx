import PageBanner from '../components/Layout/PageBanner';
import ContentPending from '../components/Common/ContentPending';
import { useSEO } from '../hooks/useSEO';
import { ROUTE_META } from '../config/seo';

const PrivacyPolicy = () => {
  useSEO({
    title: ROUTE_META.privacy.title,
    description: ROUTE_META.privacy.description,
  });

  return (
    <>
<PageBanner eyebrow="Legal" title="Privacy Policy" />
      <section className="section section--light">
        <div className="container" style={{ maxWidth: 800 }}>
          <ContentPending label="Privacy Policy content not yet provided in source documents. Legal text should be drafted or reviewed by qualified counsel before publishing." />
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
