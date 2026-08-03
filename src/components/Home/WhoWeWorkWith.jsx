import { motion } from 'framer-motion';
import {
  LuGraduationCap,
  LuStethoscope,
  LuBuilding2,
  LuUsers,
  LuClipboardCheck,
  LuChartBarBig,
  LuCheck,
} from 'react-icons/lu';
import './WhoWeWorkWith.css';

const audiences = [
  {
    id: 'career-aspiring-students',
    icon: LuGraduationCap,
    label: 'Students aspiring to build careers in healthcare quality',
  },
  {
    id: 'healthcare-professionals',
    icon: LuStethoscope,
    label: 'Healthcare professionals seeking specialized quality knowledge',
  },
  {
    id: 'hospital-administrators',
    icon: LuBuilding2,
    label: 'Hospital administrators and quality teams',
  },
  {
    id: 'clinical-non-clinical-staff',
    icon: LuUsers,
    label: 'Clinical and non-clinical staff',
  },
  {
    id: 'accreditation-organizations',
    icon: LuClipboardCheck,
    label: 'Healthcare organizations pursuing accreditation',
  },
  {
    id: 'quality-management-professionals',
    icon: LuChartBarBig,
    label: 'Professionals interested in Quality Management Training and healthcare compliance',
  },
];

const WhoWeWorkWith = () => {
  return (
    <section className="who-work section section--light">
      <div className="container">
        <motion.div
          className="who-work__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="eyebrow-light">Who We Work With</span>
          <h2 className="who-work__heading">
            Programs Designed for{' '}
            <span className="text-gradient-light">Every Healthcare Role</span>
          </h2>
        </motion.div>

        <div className="who-work__grid">
          {audiences.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                id={`audience-${item.id}`}
                className="who-work__card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.08,
                }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <span className="who-work__card-icon-wrap" aria-hidden="true">
                  <Icon className="who-work__card-icon" />
                </span>
                <p className="who-work__card-label">{item.label}</p>
                <div className="who-work__card-check" aria-hidden="true">
                  <LuCheck className="who-work__check-icon" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
