import { useState } from "react";
import { useSummarizer } from "./useSummarizer";
import { Textarea } from "../../components/common/Textarea/Textarea";

const SummarizerTool = () => {
  const [text, setText] = useState("");
  const [summaryLength, setSummaryLength] = useState("medium");

  const { summary, isLoading, error, generateSummary } = useSummarizer();

  const handleSummarizerClick = () => {
    generateSummary(text, summaryLength);
  };

  return (
    <main>
      <Textarea
        name="textArea"
        id="textArea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Pega aquí el texto que deseas resumir..."
        rows={10}
        disabled={isLoading}
        label="Resumidor"
      />
      <div>
        <label htmlFor="summaryLength">Longitud del resumen:</label>
        <select
          id="summaryLength"
          value={summaryLength}
          onChange={(e) => setSummaryLength(e.target.value)}
          disabled={isLoading}
        >
          <option value="short">Pequeño</option>
          <option value="medium">Mediano</option>
          <option value="long">Grande</option>
        </select>
      </div>
      <button onClick={handleSummarizerClick} disabled={isLoading}>
        {isLoading ? "Resumiendo..." : "Resumir"}
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
