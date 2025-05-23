import "./App.css";
import { Route, Routes } from "react-router-dom";
import SummarizerTool from "./features/summarizer/SumarizerTool";
import IdeaGeneratorTool from "./features/ideaGenerator/IdeaGeneratorTool";
import RewriterTool from "./features/rewriter/RewriterTool";
import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <main className="app-container">
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="summarizer" element={<SummarizerTool />} />
          <Route path="idea_generator" element={<IdeaGeneratorTool />} />
          <Route path="rewriter" element={<RewriterTool />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
