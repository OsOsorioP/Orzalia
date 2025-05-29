import { useState } from "react";
import { NavLink } from "react-router-dom";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", name: "Resumidor" },
    { to: "/idea_generator", name: "Generador de ideas" },
    { to: "/rewriter", name: "Reescritor" },
  ];

  const getNavLinkClass = ({ isActive }) => {
    return isActive ? `${styles.navLink} ${styles.active}` : styles.navLink;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
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
      <button
        className={styles.menu}
        onClick={toggleMenu}
        aria-label="Menu"
      >
        {isMenuOpen ? (
          <div className={styles.iconMenu}>
            <XMarkIcon className={styles.icon} />
          </div>
        ) : (
          <div className={styles.iconMenu}>
            <Bars3Icon className={styles.icon} />
          </div>
        )}
      </button>
      {isMenuOpen && (
        <nav className={styles.menuNav}>
          {navLinks.map((link, index) => (
            <NavLink key={index} to={link.to} className={getNavLinkClass} onClick={toggleMenu}>
              {link.name}
            </NavLink>
          ))}
        </nav>
      )}
    </>
  );
};

export default Navbar;
