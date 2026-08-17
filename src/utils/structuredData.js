/**
 * Reusable Structured Data (JSON-LD) Generators for NVR Quality Solutions
 * Site domain: https://nvrqualitysolutions.com
 */

const BASE_URL = 'https://nvrqualitysolutions.com';
const LOGO_URL = 'https://res.cloudinary.com/rlokioxu/image/upload/v1786013954/nvr-logo_vadrpc.png';

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NVR Quality Solutions',
  legalName: 'NVR Quality Solutions',
  url: BASE_URL,
  logo: LOGO_URL,
  description:
    'Empowering Healthcare Organizations to build safer, higher-quality healthcare systems through expert-led training and quality consultancy for NABH, JCI, and CAAM HP standards.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Thadepalli, Amaravathi',
    addressRegion: 'Andhra Pradesh',
    addressCountry: 'IN',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8466040046',
    contactType: 'customer support',
    email: 'nvrqualitysolutions@gmail.com',
    availableLanguage: ['English', 'Hindi', 'Telugu'],
  },
  sameAs: [],
});

export const generateWebSiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NVR Quality Solutions',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/trainings?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
});

export const generateWebPageSchema = ({ title, description, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'NVR Quality Solutions',
    url: BASE_URL,
  },
  provider: generateOrganizationSchema(),
});

export const generateBreadcrumbSchema = (items = []) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${BASE_URL}${item.url}`,
  })),
});

export const generateCourseSchema = ({ name, title, description, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: name || title,
  description,
  url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
  provider: {
    '@type': 'Organization',
    name: 'NVR Quality Solutions',
    sameAs: BASE_URL,
  },
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'Blended',
    courseWorkload: 'PT10H',
  },
});

export const generateServiceSchema = ({ name, description, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: name,
  name,
  description,
  url: url.startsWith('http') ? url : `${BASE_URL}${url}`,
  provider: {
    '@type': 'Organization',
    name: 'NVR Quality Solutions',
    url: BASE_URL,
  },
  areaServed: {
    '@type': 'Country',
    name: 'India',
  },
});

export const generateFAQSchema = (faqs = []) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});
