import { useState } from "react";
import { useSummarizer } from "./useSummarizer";

const SummarizerTool = () => {
  const [text, setText] = useState("");
  const [summaryLength, setSummaryLength] = useState("medium");

  const { summary, isLoading, error, generateSummary } = useSummarizer(text);

  const handleSummarizerClick = () => {
    generateSummary(text, summaryLength);
  };

  return (
    <main>
      <h2>Resumirdor de Texto</h2>
      <textarea
        name="textArea"
        id="textArea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pega aquí el texto que deseas resumir..."
        rows={10}
        disabled={isLoading}
      />
      <div>
        <label htmlFor="summaryLength">Longitud del resumen:</label>
        <select
          id="summaryLength"
          value={summaryLength}
          onChange={(e) => setSummaryLength(e.target.value)}
          disabled={isLoading}
        >
          <option value="short">corta</option>
          <option value="medium">media</option>
          <option value="long">larga</option>
        </select>
      </div>
      <button onClick={handleSummarizerClick} disabled={isLoading}>
        {isLoading ? "Resumiendo..." : "Resumir Texto"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {summary && !isLoading && (
        <div>
          <h3>Resumen Generado:</h3>
          <pre>{summary}</pre>
        </div>
      )}
    </main>
  );
};

export default SummarizerTool;
