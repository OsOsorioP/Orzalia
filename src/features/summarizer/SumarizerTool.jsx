import { useState } from "react";
import { useSummarizer } from "./useSummarizer";
import { Textarea } from "../../components/common/Textarea/Textarea";
import Button from "../../components/common/Button/Button";
import styles from "../Features.module.css";
import BoxText from "../../components/common/BoxText/BoxText";
import Select from "../../components/common/Select/Select";

const SummarizerTool = () => {
  const [originalText, setOriginalText] = useState("");
  const [summaryLength, setSummaryLength] = useState("medium");
  const options = [
    { value: "short", label: "Pequeño" },
    { value: "medium", label: "Mediano" },
    { value: "long", label: "Grande" },
  ];

  const { summary, isLoading, error, generateSummary } = useSummarizer();

  const handleSummarizerClick = () => {
    generateSummary(originalText, summaryLength);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Resumidor</h1>
        <p>
          El Resumidor transforma textos extensos en un resumen de texto a tu
          tamaño deseado. ¡No esperes más, resume texto con solo un clic!
        </p>
      </div>
      <div className={styles.content}>
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
      <div className={styles.form}>
        <Select
          id={"summaryLength"}
          disabled={isLoading}
          value={summaryLength}
          onChange={(e) => setSummaryLength(e.target.value)}
          option={options}
        />
        <Button onClick={handleSummarizerClick} disabled={isLoading}>
          Resumir
        </Button>
      </div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </section>
  );
};

export default SummarizerTool;
