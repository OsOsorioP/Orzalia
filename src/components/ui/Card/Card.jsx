import styles from "./Card.module.css";

const Card = ({ title, description, features = [] }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}> {title} </h2>

        <p className={styles.cardDescription}>{description}</p>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.featuresGrid}>
          {features &&
            features.map((feature) => (
              <div className={styles.featureItem}>
                <div
                  className={`${styles.iconContainer} ${
                    styles[feature.iconBgColor]
                  } ${styles[feature.iconTextColor]}`}
                >
                  {feature.icon}
                </div>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
