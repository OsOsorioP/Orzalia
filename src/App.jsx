import "./App.css";
import SummarizerTool from "./components/features/summarizer/SumarizerTool";
import IdeaGeneratorTool from "./components/features/ideaGenerator/IdeaGeneratorTool";

function App() {
  return (
    <main className="app-container">
      <SummarizerTool />
      <IdeaGeneratorTool />
    </main>
  );
}

export default App;
