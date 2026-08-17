import { useParams, Link } from 'react-router-dom';
import PageBanner from '../components/Layout/PageBanner';
import SectionTitle from '../components/Common/SectionTitle';
import ContentPending from '../components/Common/ContentPending';
import CTABanner from '../components/Layout/CTABanner';
import { trainingPrograms } from '../data/trainingPrograms';
import SEO from '../components/Common/SEO';
import { seoConfig } from '../config/seoConfig';
import { generateCourseSchema, generateBreadcrumbSchema } from '../utils/structuredData';

const TrainingDetail = () => {
  const { slug } = useParams();
  const program = trainingPrograms.find((p) => p.slug === slug);

  const detailSEO = program
    ? seoConfig.trainingDetail(program)
    : seoConfig.notFound;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Trainings', url: '/trainings' },
    { name: program ? program.title : 'Training Detail', url: `/trainings/${slug}` },
  ];

  const schemas = [
    generateBreadcrumbSchema(breadcrumbs),
    ...(program
      ? [
        generateCourseSchema({
          title: program.title,
          description: detailSEO.description,
          url: detailSEO.canonical,
        }),
      ]
      : []),
  ];

  if (!program) {
    return (
      <section className="section section--light">
        <div className="container" style={{ paddingTop: 160, textAlign: 'center' }}>
          <h1>Training program not found</h1>
          <p style={{ marginTop: 16 }}>
            <Link to="/training-programs">Back to Training Programs</Link>
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
        eyebrow="Training Program"
        title={program.title}
      />

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Overview" title="Program Overview" />
          <ContentPending label={`Overview for "${program.title}" not yet provided in source documents`} />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Curriculum" title="Learning Areas" />
          <ContentPending label="Learning areas not yet provided in source documents" />
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <SectionTitle eyebrow="Outcomes" title="Benefits" />
          <ContentPending label="Benefits not yet provided in source documents" />
        </div>
      </section>

      <CTABanner
        title={`Interested in ${program.title}?`}
        description="Reach out and our team will get back to you with enrollment details."
      />
    </>
  );
};

export default TrainingDetail;
