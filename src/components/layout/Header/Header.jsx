import { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import Logo from "../../common/Logo/Logo";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.appHeader} ${
        isScrolled ? styles.isScroll : ""
      }`}
    >
      <div className={styles.navbar}>
        <Link to="/" className={styles.logoContainer}>
          <Logo />
        </Link>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
