import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import './Button.css';

/**
 * Reusable Button component.
 *
 * variant: 'primary' | 'secondary'
 * as: 'button' | 'link' (link uses React Router <Link>)
 * to: route path, required when as="link"
 * showIcon: shows the circular arrow icon container
 */
const Button = ({
  children,
  variant = 'primary',
  as = 'button',
  to = '/',
  href,
  type = 'button',
  onClick,
  showIcon = true,
  className = '',
  ...rest
}) => {
  const classes = `btn btn--${variant} ${!showIcon ? 'btn--no-icon' : ''} ${className}`.trim();

  const content = (
    <>
      <span className="btn__label">{children}</span>
      {showIcon && (
        <span className="btn__icon" aria-hidden="true">
          <FiArrowUpRight />
        </span>
      )}
    </>
  );

  if (as === 'link') {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (as === 'a') {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
};

export default Button;
