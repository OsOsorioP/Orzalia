import styles from "./Input.module.css";

const Input = (type) => {
  return <input className={styles.myInput} type={type} />;
};

export default Input;
