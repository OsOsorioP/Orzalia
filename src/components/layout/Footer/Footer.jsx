import logo from "../../../assets/react.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.descriptionPlataform}>
        <div className={styles.sectionTools}>
          <ul>
            <li>Resumidor</li>
            <li>Reescritor</li>
            <li>Generador de Ideas</li>
          </ul>
        </div>
        <div className={styles.sectionLogo}>
          <picture className={styles.logo}>
            <img src={logo} alt="Logo de Rexi Toolkit" />
            <h1>Rexi Toolkit</h1>
          </picture>
          <p>
            Rexi Toolkit es una paltaforma web que orefece herramientas para
            crear y gestionar contenido textual, dirigida al publico en general.
            Incluye servicios para resumir, reescritura y generador de ideas.
          </p>
        </div>
      </div>
      <div className={styles.footerDown}>
        <p>Rexi Toolkit 2025</p>
        <div className={styles.socialNet}>
          <i>GitHub</i>
          <i>Linkedlin</i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
