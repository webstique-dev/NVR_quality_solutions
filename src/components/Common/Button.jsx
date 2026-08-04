import { Link } from 'react-router-dom';
import './Button.css';

/**
 * Reusable Button component — Mistral AI Design System
 *
 * variant: 'primary' | 'secondary' | 'dark' | 'cream' | 'on-cream' | 'link'
 * as:      'button' | 'link' (React Router <Link>) | 'a' (external anchor)
 * to:      route path, required when as="link"
 * href:    URL, required when as="a"
 */
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
  ...rest
}) => {
  const classes = [
    'btn',
    `btn--${variant}`,
    disabled ? 'btn--disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (as === 'link') {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (as === 'a') {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
