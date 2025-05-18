import "./App.css";
import SummarizerTool from "./components/features/summarizer/SumarizerTool";
import IdeaGeneratorTool from "./components/features/ideaGenerator/IdeaGeneratorTool";
import RewriterTool from "./components/features/rewriter/RewriterTool"

function App() {
  return (
    <main className="app-container">
      <SummarizerTool />
      <IdeaGeneratorTool />
      <RewriterTool/>

    </main>
  );
}

export default App;
