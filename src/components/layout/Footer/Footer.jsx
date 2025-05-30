import { Link, NavLink } from "react-router-dom";
import styles from "./Footer.module.css";
import Logo from "../../common/Logo/Logo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.descriptionPlataform}>
        <div className={styles.sectionTools}>
          <h2>Herramientas</h2>
          <nav>
            <NavLink to="/" onClick={scrollToTop}>
              Resumidor
            </NavLink>
            <NavLink to="/rewriter" onClick={scrollToTop}>
              Reescritor
            </NavLink>
            <NavLink to="/idea_generator" onClick={scrollToTop}>
              Generador de Ideas
            </NavLink>
          </nav>
        </div>
        <div className={styles.sectionTools}>
          <h2>Redes</h2>
          <Link>Youtube</Link>
          <Link>Instagram</Link>
          <Link>X</Link>
        </div>
        <div className={styles.sectionLogo}>
          <Logo className={styles.logo} />
          <p>
            Orzalia es una plataforma web diseñada con herramientas que
            facilitan la creación y gestión de contenido textual, dirigida al
            público en general. Entre sus servicios se incluyen funciones para
            resumir, reescribir y generar ideas, lo que la convierte en una
            herramienta versátil para diversos usuarios.
          </p>
        </div>
      </div>
      <div className={styles.contentSocial}>
        <div className={styles.ownerSocial}>
          <Link to={"https://oscarosorio-dev.vercel.app/"} target="_blank">
            @OsOsorioP
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
