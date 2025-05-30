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
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { copyToClipboard } from "../../services/clipboardAPI";

const SummarizerTool = () => {
  const [originalText, setOriginalText] = useState("");
  const [summaryLength, setSummaryLength] = useState("medium");
  const [isCopied, setIsCopied] = useState(false);

  const options = [
    { value: "short", label: "Pequeño" },
    { value: "medium", label: "Mediano" },
    { value: "long", label: "Grande" },
  ];

  const { summary, isLoading, error, generateSummary } = useSummarizer();

  const handleSummarizerClick = () => {
    generateSummary(originalText, summaryLength);
  };

  const handleTextDelete = () => {
    setOriginalText("");
  };

  const handlePasteExample = () => {
    setOriginalText(
      "La inteligencia artificial (IA) está transformando rápidamente nuestro mundo, desde cómo interactuamos con la tecnología hasta cómo operan las industrias. Los modelos de lenguaje grandes (LLMs), un subcampo de la IA, han demostrado capacidades asombrosas en la comprensión y generación de texto similar al humano, abriendo nuevas posibilidades en áreas como la creación de contenido, la traducción, el resumen automático y los asistentes virtuales. A medida que estas tecnologías continúan evolucionando, es crucial considerar tanto sus beneficios potenciales como los desafíos éticos y sociales que presentan, incluyendo el sesgo en los datos de entrenamiento, el impacto en el empleo y la necesidad de una regulación adecuada para asegurar un desarrollo responsable y equitativo. La investigación y el desarrollo en IA progresan a un ritmo sin precedentes, prometiendo innovaciones que podrían redefinir muchos aspectos de nuestra vida cotidiana en los próximos años."
    );
  };

  const handleCopySummary = async () => {
    if (!summary) return;

    await copyToClipboard(summary);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
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
              <div>
                {originalText && (
                  <button
                    className={styles.buttonDelete}
                    onClick={handleTextDelete}
                    aria-label="Borrar texto original"
                  >
                    <TrashIcon className={styles.iconDelete} />
                    <span>Borrar</span>
                  </button>
                )}
                {!originalText && (
                  <button
                    className={styles.buttonDelete}
                    onClick={handlePasteExample}
                    aria-label="Pegar texto de ejemplo"
                  >
                    <ClipboardDocumentListIcon className={styles.iconDelete} />
                    <span>Ejemplo</span>
                  </button>
                )}
              </div>
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
                id="summaryLengthSummarizer"
                disabled={isLoading}
                value={summaryLength}
                onChange={(e) => setSummaryLength(e.target.value)}
                options={options}
              />
              <Button
                onClick={handleSummarizerClick}
                disabled={isLoading || !originalText.trim()}
              >
                {isLoading ? "Resumiendo..." : "Resumir"}
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
              {summary && !isLoading && (
                <button
                  className={styles.buttonDelete}
                  onClick={handleCopySummary}
                  aria-label="Copiar resumen"
                >
                  {isCopied ? (
                    <>
                      <ClipboardDocumentCheckIcon
                        className={styles.iconDelete}
                      />
                      <span>Copiado!</span>
                    </>
                  ) : (
                    <>
                      <DocumentDuplicateIcon className={styles.iconDelete} />
                      <span>Copiar</span>
                    </>
                  )}
                </button>
              )}
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className={styles.cardContent}>
            <Textarea
              id="Ideas"
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
