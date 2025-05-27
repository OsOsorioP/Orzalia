import styles from "./HeroSection.module.css";
import { SparklesIcon } from "@heroicons/react/24/outline";

const HeroSection = ({
  badgeText = "Potenciado por IA",

  titlePart1 = "Generador de Ideas para",
  titleGradientPart = "Contenido",
  description = "Transforma tus conceptos en ideas brillantes para contenido. Genera múltiples perspectivas y enfoques únicos en segundos.",
  className = "",
}) => {
  return (
    <div className={`${styles.heroContainer} ${className}`}>
      {badgeText && (
        <div className={styles.aiBadge}>
          <SparklesIcon className={styles.badgeIcon} />
          <span>{badgeText}</span>
        </div>
      )}
      <h1 className={styles.heroTitle}>
        {titlePart1}
        <span className={styles.gradientText}> {titleGradientPart}</span>
      </h1>
      <p className={styles.heroDescription}>{description}</p>
    </div>
  );
};

export default HeroSection;
