import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  showIcon,
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

  if (as === 'link') {
    return (
      <MotionLink to={to} className={classes} {...motionProps} {...rest}>
        {children}
      </MotionLink>
    );
  }

  if (as === 'a') {
    return (
      <motion.a href={href} className={classes} {...motionProps} {...rest}>
        {children}
      </motion.a>
    );
  }

  return (
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
};

export default Button;
