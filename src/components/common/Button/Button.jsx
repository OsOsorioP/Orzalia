import styles from './Button.module.css'

const Button = (name) => {
  return <button className={styles.myButton}>{name}</button>;
};

export default Button;
