import styles from "./Card.module.css";

const CardTitle = ({ children, className = "" }) => {
  return <div className={`${styles.cardTitle} ${className}`}>{children}</div>;
};

export default CardTitle;
