import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/Layout/PageBanner';
import SectionTitle from '../components/Common/SectionTitle';
import ContentPending from '../components/Common/ContentPending';
import CTABanner from '../components/Layout/CTABanner';
import { services } from '../data/services';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';
import { generateServiceSchema, generateBreadcrumbSchema } from '../utils/structuredData';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  const detailSEO = service
    ? seoConfig.serviceDetail(service)
    : seoConfig.notFound;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service ? service.name : 'Service Detail', url: `/services/${slug}` },
  ];

  const schemas = [
    generateBreadcrumbSchema(breadcrumbs),
    ...(service
      ? [
          generateServiceSchema({
            name: service.name,
            description: detailSEO.description,
            url: detailSEO.canonical,
          }),
        ]
      : []),
  ];

  if (!service) {
    return (
      <section className="section section--light">
        <div className="container" style={{ paddingTop: 160, textAlign: 'center' }}>
          <h1>Service not found</h1>
          <p style={{ marginTop: 16 }}>
            <Link to="/services">Back to Services</Link>
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEO
        {...detailSEO}
        structuredData={schemas}
      />
      <PageBanner
        eyebrow="Service"
        title={service.name}
      />

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Overview" title="Description" />
          <ContentPending label={`Description for "${service.name}" not yet provided in source documents`} />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Benefits" title="Why this matters" />
          <ContentPending label="Benefits not yet provided in source documents" />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Features" title="What's included" />
          <ContentPending label="Features not yet provided in source documents" />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Process" title="How it works" />
          <ContentPending label="Process steps not yet provided in source documents" />
        </div>
      </section>

      <CTABanner
        title={`Interested in ${service.name}?`}
        description="Reach out and our team will get back to you."
      />
    </>
  );
};

export default ServiceDetail;
