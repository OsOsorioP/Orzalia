import Navbar from "../Navbar/Navbar";
import logo from "../../../assets/logo.png";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <Link to="/" className={styles.logoContainer}>
        <picture>
          <img className={styles.logo} src={logo} alt="" />
          <h1 className={styles.title}>Orzalia</h1>
        </picture>
      </Link>

      <Navbar />
    </header>
  );
};

export default Header;
