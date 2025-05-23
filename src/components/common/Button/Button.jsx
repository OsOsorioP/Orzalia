import styles from "./Button.module.css";

export const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "medium",
  disabled = false,
  isLoading = false,
  className = "",
  iconLeft,
  iconRight,
  ...rest
}) => {
  const buttonClass = [
    styles.button,
    styles[variant],
    styles[size],
    isLoading ? styles.loading : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <span className={styles.loader}></span>
      ) : (
        <>
          {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
          {children}
          {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
        </>
      )}
    </button>
  );
};

export default Button;
