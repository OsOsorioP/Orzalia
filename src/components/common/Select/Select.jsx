import styles from "./Select.module.css";

const Select = ({
  id,
  value,
  onChange,
  disabled,
  label,
  options = [],
  ...rest
}) => {
  const selectId =
    id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <div className={styles.formGroup}>
      {label && (
        <label htmlFor={selectId} className={styles.label}>
          {label}{" "}
        </label>
      )}
      <div className={styles.customSelectWrapper}>
        <select
          id={id}
          onChange={onChange}
          disabled={disabled}
          value={value}
          {...rest}
          className={styles.customSelect}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Select;
