import "./App.css";
import { Route, Routes } from "react-router-dom";
import IdeaGeneratorTool from "./features/ideaGenerator/IdeaGeneratorTool";
import RewriterTool from "./features/rewriter/RewriterTool";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";
import SummarizerPage from "./pages/SummarizerPage";
import IdeageneratorPage from "./pages/IdeaGeneratorPage";
import RewritePage from "./pages/RewriterPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<SummarizerPage />} />
        <Route path="idea_generator" element={<IdeageneratorPage />} />
        <Route path="rewriter" element={<RewritePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
