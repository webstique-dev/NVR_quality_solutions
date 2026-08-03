import './FormField.css';

const Textarea = ({ label, id, error, register, placeholder, rows = 5, ...rest }) => {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-field__label">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
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

export default Textarea;
