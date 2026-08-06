import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Magnetic from '../ui/Magnetic';
import './Button.css';

const MotionLink = motion.create(Link);

const Button = ({
  children,
  variant = 'primary',
  as = 'button',
  to = '/',
  href,
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  magnetic = true,
  magneticStrength = 0.3,
  ...rest
}) => {
  const shouldReduceMotion = useReducedMotion();

  const classes = [
    'btn',
    `btn--${variant}`,
    disabled ? 'btn--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const motionProps = shouldReduceMotion
    ? {}
    : {
        whileHover: { scale: 1.03 },
        whileTap: { scale: 0.97 },
        transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] },
      };

  let element;
  if (as === 'link') {
    element = (
      <MotionLink to={to} className={classes} {...motionProps} {...rest}>
        {children}
      </MotionLink>
    );
  } else if (as === 'a') {
    element = (
      <motion.a href={href} className={classes} {...motionProps} {...rest}>
        {children}
      </motion.a>
    );
  } else {
    element = (
      <motion.button
        type={type}
        className={classes}
        onClick={onClick}
        disabled={disabled}
        {...motionProps}
        {...rest}
      >
        {children}
      </motion.button>
    );
  }

  if (!magnetic) {
    return element;
  }

  return <Magnetic strength={magneticStrength}>{element}</Magnetic>;
};

export default Button;
