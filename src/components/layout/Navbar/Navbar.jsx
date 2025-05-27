import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navLinks = [
    { to: "/", name: "Resumidor" },
    { to: "/idea_generator", name: "Generador de ideas" },
    { to: "/rewriter", name: "Reescritor" },
  ];

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  return (
    <nav className={styles.appNavbar}>
      <ul className={styles.navList}>
        {navLinks.map((link, index) => (
          <li key={index} className={styles.navItem}>
            <NavLink to={link.to} className={getNavLinkClass}>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
