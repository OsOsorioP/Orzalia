import styles from "./Info.module.css";

export const Info = ({ title, subtitle, description, icon }) => {
  return (
    <section className={styles.container}>
      {title && <h1 className={styles.title}>{title}</h1>}
      <div className={styles.content}>
        <div>
          <h2>{subtitle}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.icon}>
          <i>{icon}</i>
        </div>
      </div>
    </section>
  );
};

export default Info;
