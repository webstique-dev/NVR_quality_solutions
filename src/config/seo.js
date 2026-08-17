/* =====================================================================
   SEO & Content Strategy (source: SEO & CONTENT STRATEGY BRIEF)
   Central config — single source of truth for on-page meta keywords.
   ===================================================================== */

export const SITE = {
  name: 'NVR Quality Solutions',
  shortName: 'NVR',
  corePosition:
    'Empowering Healthcare Organizations to build safer, higher-quality healthcare systems through expert-led training and quality consultancy.',
  brandPromise:
    'We help healthcare professionals understand, implement, and sustain internationally recognized healthcare quality standards through practical training and consulting.',
  uniquePositioning: [
    'Industry experience',
    'Real implementation expertise',
    'Practical case-based learning',
    'Consultancy-backed education',
  ],
  brandVoice: {
    professional:
      'Healthcare is built on trust. Every sentence feels credible.',
    educational:
      'Explain concepts clearly and avoid unnecessary jargon.',
    human:
      'Reflect responsibility and purpose without becoming emotional or dramatic.',
    aspirational:
      'Students should feel — "I can build a meaningful career in healthcare quality."',
  },
};

export const KEYWORDS = {
  primary: [
    'Healthcare Quality Training',
    'Patient Safety Training',
    'NABH Training',
    'JCI Training',
    'Healthcare Accreditation Training',
    'Hospital Quality Management',
    'Quality Management Training',
    'Healthcare Quality Consultant',
    'NABH Consultant',
    'JCI Consultant',
  ],
  secondary: [
    'Patient Safety Certification Training',
    'Hospital Accreditation Training',
    'Healthcare Quality Courses',
    'Quality Improvement in Healthcare',
    'Clinical Quality Training',
    'Healthcare Compliance Training',
    'Hospital Quality Consultant',
    'Quality Assurance in Healthcare',
    'Healthcare Risk Management',
    'Quality Improvement Training',
    'Healthcare Standards Training',
    'Healthcare Auditing',
    'Hospital Accreditation Consultant',
    'Quality Systems in Hospitals',
    'Healthcare Process Improvement',
  ],
  tertiary: [
    'How to prepare for NABH accreditation',
    'How to become a healthcare quality professional',
    'Patient safety certification course',
    'Hospital quality management career',
    'Healthcare quality training institute',
    'NABH internal auditor training',
    'JCI preparation training',
    'Healthcare accreditation consultant in India',
    'Hospital quality consultant services',
    'Healthcare quality education',
    'Quality management career in healthcare',
    'Learn hospital accreditation standards',
    'Patient safety and quality management course',
    'Healthcare quality improvement training',
    'NABH awareness program',
  ],
};

/* Route-level meta defaults. Detail routes compose their title/description
   from the specific service / program names at render time. */
export const ROUTE_META = {
  home: {
    title: 'Healthcare Quality Training & Patient Safety Training | NVR Quality Solutions',
    description:
      'Expert-led healthcare quality training, patient safety training and accreditation consultancy for NABH, JCI and CAAM HP standards. Build safer healthcare systems with NVR Quality Solutions.',
    keywords: [
      'Healthcare Quality Training',
      'Patient Safety Training',
      'Healthcare Accreditation Training',
      'Hospital Quality Management',
      'Healthcare Quality Consultant',
    ],
  },
  about: {
    title: 'About Us | Healthcare Quality Experts & Accreditation Consultants | NVR Quality Solutions',
    description:
      'NVR Quality Solutions combines industry experience, practical case-based learning, and consultancy-backed education. We prepare healthcare professionals for NABH, JCI and CAAM HP accreditation readiness.',
    keywords: [
      'Healthcare quality consultant',
      'NABH consultant',
      'JCI consultant',
      'Hospital quality management',
      'Healthcare quality education',
    ],
  },
  services: {
    title: 'Our Services | Healthcare Quality & Accreditation Consultancy | NVR Quality Solutions',
    description:
      'Healthcare quality training, patient safety training, NABH and JCI consultancy, and healthcare accreditation readiness — delivered by experts who know how quality works inside healthcare organizations.',
    keywords: [
      'Healthcare quality training',
      'Patient safety training',
      'NABH consultancy',
      'JCI consultancy',
      'Healthcare accreditation consultancy',
    ],
  },
  serviceDetail: {
    title: (name) => `${name} | Healthcare Quality Services | NVR Quality Solutions`,
    description: (name) =>
      `${name} at NVR Quality Solutions — expert-led, practical healthcare quality training and consultancy. Prepare for NABH, JCI and CAAM HP accreditation readiness.`,
  },
  trainingPrograms: {
    title: 'Training Programs | NABH Training, JCI Training & Healthcare Quality Courses',
    description:
      'Explore NVR Quality Solutions training programs: healthcare quality training, patient safety training, NABH internal auditor training, JCI preparation training, and more.',
    keywords: [
      'NABH training',
      'JCI training',
      'Healthcare quality courses',
      'Patient safety certification training',
      'Hospital accreditation training',
    ],
  },
  trainingDetail: {
    title: (name) => `${name} | Healthcare Training Institute | NVR Quality Solutions`,
    description: (name) =>
      `Enroll in ${name} at NVR Quality Solutions — practical, expert-led healthcare quality training. Start or advance your healthcare quality management career.`,
  },
  contact: {
    title: 'Contact Us | Talk to a Healthcare Quality Consultant | NVR Quality Solutions',
    description:
      'Contact NVR Quality Solutions for healthcare quality training, patient safety training, hospital quality consultancy and NABH / JCI accreditation readiness support.',
    keywords: [
      'Hospital quality consultant services',
      'Healthcare accreditation consultant in India',
      'Healthcare quality training institute',
    ],
  },
  careers: {
    title: 'Careers | Join NVR Quality Solutions Team',
    description:
      'Explore career opportunities at NVR Quality Solutions. Join our team of healthcare quality consultants, trainers, and specialists building safer healthcare systems.',
    keywords: [
      'Healthcare quality jobs',
      'NABH consultant careers',
      'Healthcare trainer jobs',
      'Patient safety consultant careers',
    ],
  },
  faq: {
    title: 'FAQ | Healthcare Quality & Patient Safety Training Questions | NVR Quality Solutions',
    description:
      'Answers to common questions about healthcare quality training, NABH and JCI preparation, accreditation readiness, and how to become a healthcare quality professional.',
    keywords: [
      'How to prepare for NABH accreditation',
      'Patient safety certification course',
      'NABH internal auditor training',
      'How to become a healthcare quality professional',
    ],
  },
  privacy: {
    title: 'Privacy Policy | NVR Quality Solutions',
    description:
      'Read the NVR Quality Solutions Privacy Policy explaining how we handle your personal data when you use our healthcare quality training and consultancy services.',
  },
  terms: {
    title: 'Terms & Conditions | NVR Quality Solutions',
    description:
      'Review the Terms & Conditions governing use of NVR Quality Solutions website, healthcare quality training programs and consultancy services.',
  },
  notFound: {
    title: 'Page Not Found | NVR Quality Solutions',
    description:
      'The page you are looking for could not be found. Explore healthcare quality training, patient safety training and accreditation consultancy at NVR Quality Solutions.',
  },
};