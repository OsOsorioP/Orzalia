import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/react.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <hr />
      <div className={styles.descriptionPlataform}>
        <div className={styles.sectionTools}>
          <h2>Herramientas</h2>
          <nav>
            <NavLink>Resumidor</NavLink>
            <NavLink>Reescritor</NavLink>
            <NavLink>Generador de Ideas</NavLink>
          </nav>
        </div>
        <div className={styles.sectionTools}>
          <h2>Redes</h2>
          <div>
            <Link>GitHub</Link>
            <Link>Linkedlin</Link>
          </div>
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
    </footer>
  );
};

export default Footer;
