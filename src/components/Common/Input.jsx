import './FormField.css';

const Input = ({ label, id, error, register, type = 'text', placeholder, ...rest }) => {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`form-field__control ${error ? 'form-field__control--error' : ''}`}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        {...(register || {})}
        {...rest}
      />
      {error && (
        <span id={`${id}-error`} className="form-field__error" role="alert">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default Input;
