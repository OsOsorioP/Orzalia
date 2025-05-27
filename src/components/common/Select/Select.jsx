import styles from "./Select.module.css";

const Select = ({
  id,
  value,
  onChange,
  disabled,
  label,
  option = [],
  ...rest
}) => {
  const selectId =
    id || (label ? label.toLowerCase().replace(/\s+/g, "-") : undefined);

  return (
    <form action="" className={styles.formGroup}>
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
          {option.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default Select;
