import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navLinks = [
    { to: "/summarizer", name: "Summarizer" },
    { to: "/idea_generator", name: "Idea Generator" },
    { to: "/rewriter", name: "Rewriter" },
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
