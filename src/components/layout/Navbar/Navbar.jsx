import { Link } from "react-router-dom";
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.appNavbar}>
      <Link to={"summarizer"}>Summarizer</Link>
      <Link to={"idea_generator"}>Idea Generator</Link>
      <Link to={"rewriter"}>Rewriter</Link>
    </nav>
  );
};

export default Navbar;
