import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import SummarizerTool from "./components/features/summarizer/SumarizerTool";
import IdeaGeneratorTool from "./components/features/ideaGenerator/IdeaGeneratorTool";
import RewriterTool from "./components/features/rewriter/RewriterTool";

function App() {
  return (
    <main className="app-container">
      <Routes>
        <Route index element={<Navigate to={"/summarizer"} replace />} />
        <Route path="summarizer" element={<SummarizerTool />} />
        <Route path="idea_generator" element={<IdeaGeneratorTool />} />
        <Route path="rewriter" element={<RewriterTool />} />
      </Routes>
    </main>
  );
}

export default App;
