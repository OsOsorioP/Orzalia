import { useState } from "react";
import { useSummarizer } from "./useSummarizer";
import { Textarea } from "../../components/common/Textarea/Textarea";
import Button from "../../components/common/Button/Button";
import styles from "./Summarizer.module.css";
import BoxText from "../../components/common/BoxText/BoxText";

const SummarizerTool = () => {
  const [originalText, setOriginalText] = useState("");
  const [summaryLength, setSummaryLength] = useState("medium");

  const { summary, isLoading, error, generateSummary } = useSummarizer();

  const handleSummarizerClick = () => {
    generateSummary(originalText, summaryLength);
  };

  return (
    <section>
      <h2>Resumidor</h2>
      <div className={styles.summarizer}>
        <Textarea
          name="originalText"
          id="originalText"
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
          placeholder="Pega aquí el texto que deseas resumir..."
          rows={10}
          disabled={isLoading}
        />
        <BoxText>{summary && !isLoading && <p>{summary}</p>}</BoxText>
      </div>
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
      <Button onClick={handleSummarizerClick} disabled={isLoading}>
        Resumir
      </Button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </section>
  );
};

export default SummarizerTool;
