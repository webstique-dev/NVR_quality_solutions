/* =====================================================================
   Centralized SEO Configuration for NVR Quality Solutions
   Single Source of Truth for Meta Tags, Canonical URLs, and Social Cards
   ===================================================================== */

export const SITE_SEO = {
  domain: 'https://nvrqualitysolutions.com',
  siteName: 'NVR Quality Solutions',
  defaultImage: 'https://res.cloudinary.com/rlokioxu/image/upload/v1786013954/hero-illustration_stlc4u.jpg',
  twitterHandle: '@nvrquality',
  brandDisclaimer:
    'NVR Quality Solutions provides healthcare quality training and accreditation consultancy to help organizations understand, implement, and prepare for NABH, JCI, and CAAM-HP standards. NVR Quality Solutions does not issue or award official accreditation certifications.',
};

export const seoConfig = {
  home: {
    title: 'Healthcare Quality Training & Patient Safety Consultancy | NVR Quality Solutions',
    description:
      'Empowering healthcare organizations with expert-led Healthcare Quality Training, Patient Safety Training, and accreditation consultancy for NABH, JCI, and CAAM HP standards.',
    canonical: '/',
    keywords: [
      'Healthcare Quality Training',
      'Healthcare Quality Consultant',
      'Patient Safety Training',
      'Healthcare Accreditation Training',
      'Hospital Quality Management',
      'NABH Training',
      'JCI Training',
    ],
  },

  about: {
    title: 'About Us | Healthcare Quality Experts & Consultancy Partner | NVR Quality Solutions',
    description:
      'Learn about NVR Quality Solutions — your trusted healthcare quality partner. We provide tailored training and consultancy to strengthen quality systems and accreditation readiness for healthcare organizations.',
    canonical: '/about',
    keywords: [
      'Healthcare quality consultancy',
      'Healthcare quality training',
      'Healthcare quality partner',
      'NABH accreditation consultant',
      'Hospital quality management partner',
    ],
  },

  services: {
    title: 'Healthcare Quality Consultancy & Accreditation Services | NVR Quality Solutions',
    description:
      'Comprehensive healthcare quality consultancy services including Healthcare Auditing, Pharmacy Audits, Mock Drill Preparation, Healthcare Compliance, and NABH/JCI accreditation readiness.',
    canonical: '/services',
    keywords: [
      'Healthcare Quality Consultant',
      'Hospital Quality Consultant',
      'NABH Consultant',
      'JCI Consultant',
      'Hospital Accreditation Consultant',
      'Healthcare Auditing',
      'Pharmacy Audits',
      'Mock Drill Preparation',
      'Healthcare Compliance',
      'Quality Improvement',
    ],
  },

  serviceDetail: (service) => {
    const name = service?.name || service?.title || 'Healthcare Quality Service';
    const slug = service?.slug || '';
    return {
      title: `${name} | Healthcare Quality Services | NVR Quality Solutions`,
      description: `${name} by NVR Quality Solutions — expert-led healthcare consultancy, auditing, and accreditation preparation for hospitals and healthcare organizations.`,
      canonical: `/services/${slug}`,
      keywords: [
        name,
        'Healthcare Quality Consultant',
        'Hospital Quality Management',
        'Accreditation Readiness',
      ],
    };
  },

  trainings: {
    title: 'Healthcare Quality Training Programs | NABH, JCI & IPCN Courses | NVR Quality Solutions',
    description:
      'Structured Healthcare Quality Training, Patient Safety Training, IPCN & IPCO Training, NABH Training, and JCI Training designed for healthcare professionals and organizations.',
    canonical: '/trainings',
    keywords: [
      'Healthcare Quality Training',
      'Patient Safety Training',
      'NABH Training',
      'JCI Training',
      'Healthcare Quality Courses',
      'Quality Management Training',
      'IPCN Training',
      'IPCO Training',
      'CAAM-HP Training',
    ],
  },

  trainingDetail: (program) => {
    const title = program?.title || program?.name || 'Healthcare Quality Training Program';
    const slug = program?.slug || '';
    return {
      title: `${title} | Healthcare Training Program | NVR Quality Solutions`,
      description: `Master ${title} with NVR Quality Solutions. Practical, expert-guided curriculum designed to strengthen quality management, patient safety, and accreditation readiness.`,
      canonical: `/trainings/${slug}`,
      keywords: [
        title,
        'Healthcare Quality Training',
        'Patient Safety Training',
        'NABH Training',
        'JCI Training',
        'CAAM-HP Training',
        'IPCN Training',
        'IPCO Training',
      ],
    };
  },

  careers: {
    title: 'Careers | Healthcare Quality Management Careers | NVR Quality Solutions',
    description:
      'Explore healthcare quality careers at NVR Quality Solutions. Join our expert team of healthcare quality consultants, trainers, and accreditation readiness specialists.',
    canonical: '/careers',
    keywords: [
      'Healthcare quality career',
      'Hospital quality management career',
      'Quality management career in healthcare',
      'NABH consultant jobs',
      'Healthcare trainer careers',
    ],
  },

  contact: {
    title: 'Contact Us | Connect with Healthcare Quality Consultants | NVR Quality Solutions',
    description:
      'Get in touch with NVR Quality Solutions for Healthcare Quality Training, hospital consultancy, pharmacy audits, mock drill preparations, and accreditation readiness support.',
    canonical: '/contact',
    keywords: [
      'Contact healthcare quality consultant',
      'Hospital quality consultant services',
      'Healthcare accreditation consultant in India',
      'Healthcare quality training institute',
    ],
  },

  faq: {
    title: 'Frequently Asked Questions | Healthcare Quality Training & Consultancy | NVR Quality Solutions',
    description:
      'Find answers to common questions about Healthcare Quality Training, Patient Safety Training, NABH and JCI accreditation readiness, and consultancy services.',
    canonical: '/faq',
    keywords: [
      'Healthcare quality training FAQ',
      'How to prepare for NABH accreditation',
      'Patient safety certification course',
      'NABH internal auditor training',
    ],
  },

  privacy: {
    title: 'Privacy Policy | NVR Quality Solutions',
    description:
      'Privacy Policy for NVR Quality Solutions — learn how we protect and handle user data across our website, training programs, and consultancy inquiries.',
    canonical: '/privacy-policy',
    keywords: ['Privacy Policy', 'NVR Quality Solutions'],
  },

  terms: {
    title: 'Terms & Conditions | NVR Quality Solutions',
    description:
      'Terms & Conditions governing the use of NVR Quality Solutions website, training courses, and healthcare quality consultancy services.',
    canonical: '/terms-conditions',
    keywords: ['Terms and Conditions', 'NVR Quality Solutions'],
  },

  notFound: {
    title: 'Page Not Found | NVR Quality Solutions',
    description:
      'The requested page could not be found. Explore healthcare quality training, patient safety training, and accreditation consultancy at NVR Quality Solutions.',
    canonical: '/404',
    keywords: ['Page Not Found', 'NVR Quality Solutions'],
  },
};
