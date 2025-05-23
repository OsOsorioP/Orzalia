import Navbar from "../Navbar/Navbar";
import logo from "../../../assets/react.svg";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.appHeader}>
      <Link to="/">
        <picture className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="" />
          <h1 className={styles.title}>Rexi Toolkit</h1>
        </picture>
      </Link>

      <Navbar />
    </header>
  );
};

export default Header;
