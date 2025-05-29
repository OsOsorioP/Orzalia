import styles from "./FeatureItem.module.css";

const FeatureItem = ({
  icon,
  title,
  description,
  iconBgColor = "bg-blue-100",
  iconTextColor = "text-blue-600",
}) => {
  const iconContainerClasses = `${styles.iconContainer} ${styles[iconBgColor]} ${styles[iconTextColor]}`;

  return (
    <div className={styles.featureItem}>
      <div className={iconContainerClasses}>{icon}</div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
};

export default FeatureItem;
