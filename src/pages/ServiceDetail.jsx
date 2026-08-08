import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/Layout/PageBanner';
import SectionTitle from '../components/Common/SectionTitle';
import ContentPending from '../components/Common/ContentPending';
import CTABanner from '../components/Layout/CTABanner';
import { services } from '../data/services';
import { useSEO } from '../hooks/useSEO';
import { ROUTE_META } from '../config/seo';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  useSEO({
    title: service ? ROUTE_META.serviceDetail.title(service.name) : ROUTE_META.notFound.title,
    description: service
      ? ROUTE_META.serviceDetail.description(service.name)
      : ROUTE_META.notFound.description,
    keywords: [
      ...ROUTE_META.services.keywords,
      ...(service ? [service.name.toLowerCase()] : []),
    ],
  });

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
