import styles from "./Card.module.css";

const CardHeader = ({ children, className = "" }) => {
  return <div className={`${styles.cardHeader} ${className}`}>{children}</div>;
};

export default CardHeader;
