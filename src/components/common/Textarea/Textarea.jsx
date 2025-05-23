//import PropsTypes from "prop-types";
import styles from "./Textarea.module.css";

export const Textarea = ({
  name,
  id,
  value,
  onChange,
  placeholder,
  rows = 10,
  disabled = false,
  className = "",
  label,
  error,
  ...rest
}) => {
  const textareaClass = `${styles.appTextarea} ${className} ${
    error ? styles.errorInput : ""
  }`;

  return (
    <div className={styles.textareaWrapper}>
      {label && (
        <label htmlFor={id || name} className={styles.label}>
          {label}
        </label>
      )}
      <textarea
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        disabled={disabled}
        className={textareaClass}
        aria-invalid={!!error}
        aria-describedby={error ? `${id || name}-error` : undefined}
        {...rest}
      />
      {error && (
        <p
          id={`${id || name}-error`}
          className={styles.errorMessage}
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Textarea;
