import { useState } from "react";
import { useSummarizer } from "./useSummarizer";
import { Textarea } from "../../components/common/Textarea/Textarea";
import Button from "../../components/common/Button/Button";
import styles from "../Features.module.css";
import Select from "../../components/common/Select/Select";
import HeroSection from "../../components/common/HeroSection/HeroSection";
import Card from "../../components/ui/Card/Card";
import CardContent from "../../components/ui/Card/CardContent";
import CardDescription from "../../components/ui/Card/CardDescription";
import CardHeader from "../../components/ui/Card/CardHeader";
import CardTitle from "../../components/ui/Card/CardTitle";
import {
  LightBulbIcon,
  DocumentTextIcon,
  DocumentDuplicateIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

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
      <HeroSection
        titleGradientPart="en Segundos"
        titlePart1="Extrae la Esencia,"
        description="Condensa artículos extensos y cualquier texto en resúmenes claros y concisos. Ahorra tiempo y llega al núcleo de la información al instante."
      />
      <div className={styles.content}>
        <Card>
          <CardHeader>
            <CardTitle className={styles.contentCopy}>
              <div className={styles.formTitle}>
                <DocumentTextIcon width={"1.5rem"} color="dodgerblue" />
                <span>Texto Original</span>
              </div>
              {originalText && (<div className={styles.flex}>
                <TrashIcon className={styles.iconDelete} />
              </div>)}
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <Textarea
              name="originalText"
              id="originalText"
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              placeholder="Pega aquí el texto que deseas resumir..."
              rows={10}
              disabled={isLoading}
            />
            <div className={styles.actions}>
              <Select
                id={"summaryLength"}
                disabled={isLoading}
                value={summaryLength}
                onChange={(e) => setSummaryLength(e.target.value)}
                options={options}
              />
              <Button
                onClick={handleSummarizerClick}
                disabled={isLoading || !originalText}
              >
                Resumir
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className={styles.contentCopy}>
              <div className={styles.formTitle}>
                <LightBulbIcon width={"1.5rem"} color="firebrick" />
                <span>Resumen Generado</span>
              </div>
              {summary && (<div className={styles.flex}>
                <DocumentDuplicateIcon className={styles.iconCopy} />
              </div>)}
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <Textarea
              placeholder="Las ideas generadas aparecerán aquí..."
              value={summary}
              readOnly
              className=""
            />
          </CardContent>
        </Card>
      </div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </section>
  );
};

export default SummarizerTool;
