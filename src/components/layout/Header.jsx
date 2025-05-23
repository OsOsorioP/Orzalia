import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Herramientas</h1>
      <Link to={"summarizer"}>Summarizer</Link>
      <Link to={"idea_generator"}>Idea Generator</Link>
      <Link to={"rewriter"}>Rewriter</Link>
    </header>
  );
};

export default Header;
