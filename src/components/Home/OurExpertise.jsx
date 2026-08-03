import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  LuChartBar,
  LuShieldCheck,
  LuMedal,
  LuHandshake,
} from 'react-icons/lu';
import './OurExpertise.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const expertiseCards = [
  {
    id: 'healthcare-quality-training',
    icon: LuChartBar,
    number: '01',
    title: 'Healthcare Quality Training',
    description:
      'Gain a complete understanding of healthcare quality principles, compliance needs, and improvement practices used across modern healthcare organizations.',
  },
  {
    id: 'patient-safety-training',
    icon: LuShieldCheck,
    number: '02',
    title: 'Patient Safety Training',
    description:
      'Develop the knowledge and approach required to improve patient safety, reduce risks, strengthen reporting systems, and support a culture of safe healthcare delivery.',
  },
  {
    id: 'healthcare-accreditation-training',
    icon: LuMedal,
    number: '03',
    title: 'Healthcare Accreditation Training',
    description:
      'Learn the frameworks, processes, documentation, and implementation strategies behind internationally recognized accreditation standards, including NABH Training, JCI Training, and CAMHP awareness programs.',
  },
  {
    id: 'healthcare-quality-consultancy',
    icon: LuHandshake,
    number: '04',
    title: 'Healthcare Quality Consultancy',
    description:
      'We partner with healthcare organizations by providing expert Healthcare Quality Consultant services. We help institutions strengthen quality systems, improve operational processes, and prepare for accreditation assessments through structured implementation support.',
  },
];

const OurExpertise = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduce) return;

      gsap.from('.expertise__header', {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.expertise__header',
          start: 'top 85%',
        },
      });

      gsap.from('.expertise__card', {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.expertise__grid',
          start: 'top 80%',
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="expertise section section--dark" ref={containerRef}>
      <div className="expertise__bg" aria-hidden="true">
        <div className="expertise__glow" />
      </div>
      <div className="container">
        <div className="expertise__header">
          <span className="eyebrow">Our Expertise</span>
          <h2 className="expertise__heading">
            Comprehensive Training &amp;{' '}
            <span className="text-gradient">Consultancy Services</span>
          </h2>
        </div>

        <div className="expertise__grid">
          {expertiseCards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                id={`expertise-card-${card.id}`}
                className="expertise__card glass"
              >
                <div className="expertise__card-header">
                  <span className="expertise__card-number" aria-hidden="true">
                    {card.number}
                  </span>
                  <span className="expertise__card-icon" aria-hidden="true">
                    <Icon className="expertise__card-icon-svg" />
                  </span>
                </div>
                <h3 className="expertise__card-title">{card.title}</h3>
                <p className="expertise__card-description">{card.description}</p>
                <div className="expertise__card-accent" aria-hidden="true" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
