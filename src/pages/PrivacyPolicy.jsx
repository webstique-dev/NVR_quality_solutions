import PageBanner from '../components/Layout/PageBanner';
import ContentPending from '../components/Common/ContentPending';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';

const PrivacyPolicy = () => {
  return (
    <>
      <SEO {...seoConfig.privacy} />
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
