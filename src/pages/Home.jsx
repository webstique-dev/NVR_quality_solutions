import Hero from '../components/Home/Hero';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import OurExpertise from '../components/Home/OurExpertise';
import WhoWeWorkWith from '../components/Home/WhoWeWorkWith';
import LearningSection from '../components/Home/LearningSection';
import SectionTitle from '../components/Common/SectionTitle';
import FAQAccordion from '../components/Common/FAQAccordion';
import CTABanner from '../components/Layout/CTABanner';
import { faqs } from '../data/faqs';
import './Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Why Choose NVR Quality Solutions */}
      <WhyChooseUs />

      {/* Our Expertise — 4 Premium Cards */}
      <OurExpertise />

      {/* Who We Work With */}
      <WhoWeWorkWith />

      {/* Learning Section — Two Column with Illustration */}
      <LearningSection />

      {/* CTA Section — Full-Width Premium Banner */}
      <CTABanner
        eyebrow="Get In Touch"
        title="Begin Your Journey in Healthcare Quality"
        description="Expand your professional skills, prepare for accreditation-related roles, and support healthcare organizations through initiatives. NVR Quality Solutions provides the training and guidance to help you move forward with confidence."
        primaryLabel="View Training Programs"
        primaryTo="/training-programs"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />

      {/* FAQ Section — Modern Accordion */}
      <section className="section section--light">
        <div className="container">
          <SectionTitle
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about our training programs and consultancy services."
            align="center"
          />
          <div className="home-faq-wrap">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
