import { useState } from "react";
import { useIdeaGenerator } from "./useIdeaGenerator";
import Select from "../../components/common/Select/Select";
import Button from "../../components/common/Button/Button";
import styles from "../Features.module.css";
import TextArea from "../../components/common/Textarea/Textarea";
import HeroSection from "../../components/common/HeroSection/HeroSection";
import Card from "../../components/ui/Card/Card";
import CardContent from "../../components/ui/Card/CardContent";
import CardDescription from "../../components/ui/Card/CardDescription";
import CardHeader from "../../components/ui/Card/CardHeader";
import CardTitle from "../../components/ui/Card/CardTitle";
import {
  Cog6ToothIcon,
  DocumentTextIcon,
  DocumentDuplicateIcon,
  TrashIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { copyToClipboard } from "../../services/clipboardAPI";

const EXAMPLE_DATA = {
  topic: "Marketing de Contenidos para Pequeñas Empresas",
  numberOfIdeas: "5",
  contentType: "artículos de blog",
};

const IdeaGeneratorTool = () => {
  const [topic, setTopic] = useState("");
  const [numberOfIdeas, setNumberOfIdeas] = useState("3");
  const [contentType, setContentType] = useState("artículos de blog");
  const [isCopied, setIsCopied] = useState(false);

  const options = [
    { value: "1", label: "1 Idea" },
    { value: "3", label: "3 Ideas" },
    { value: "5", label: "5 Ideas" },
    { value: "10", label: "10 Ideas" },
  ];

  const { ideas, isLoading, error, generateIdeas } = useIdeaGenerator();

  const handleIdeaGenerator = () => {
    generateIdeas(topic, parseInt(numberOfIdeas, 10), contentType);
  };

  const handleUseExample = () => {
    setTopic(EXAMPLE_DATA.topic);
    setNumberOfIdeas(EXAMPLE_DATA.numberOfIdeas);
    setContentType(EXAMPLE_DATA.contentType);
  };

  const handleClearForm = () => {
    setTopic("");
    setNumberOfIdeas("3");
    setContentType("artículos de blog");
  };

  const handleCopyIdeas = async () => {
    if (!ideas) return;

    await copyToClipboard(ideas);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className={styles.container}>
      <HeroSection
        titleGradientPart="Marketing"
        titlePart1="Tu Herramienta de IA para"
        description="Descubre cómo la inteligencia artificial puede revolucionar tu estrategia de marketing de contenidos."
      />
      <div className={styles.content}>
        <Card>
          <CardHeader>
            <CardTitle className={styles.contentCopy}>
              <div className={styles.formTitle}>
                <Cog6ToothIcon width={"1.5rem"} color="dodgerblue" />
                <span>Configuración</span>
              </div>
              {topic && (
                <button
                  className={styles.buttonDelete}
                  onClick={handleClearForm}
                  aria-label="Borrar texto original"
                >
                  <TrashIcon className={styles.iconDelete} />
                  <span>Borrar</span>
                </button>
              )}
              {!topic && (
                <button
                  className={styles.buttonDelete}
                  onClick={handleUseExample}
                  aria-label="Pegar texto de ejemplo"
                >
                  <ClipboardDocumentListIcon className={styles.iconDelete} />
                  <span>Ejemplo</span>
                </button>
              )}
            </CardTitle>
            <CardDescription>
              Personaliza tu generación de ideas según tus necesidades
            </CardDescription>
          </CardHeader>
          <CardContent className={styles.featureContent}>
            <div className={styles.flexColum}>
              <label htmlFor="topic" className={styles.label}>
                Tema o palabra clave principal:
              </label>
              <input
                type="text"
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                disabled={isLoading}
                placeholder="Inteligencia Artificial en la educación"
                className={styles.input}
              />
            </div>
            <div className={styles.grid}>
              <Select
                id="numberOfIdeas"
                value={numberOfIdeas}
                onChange={(e) => setNumberOfIdeas(e.target.value)}
                disabled={isLoading}
                options={options}
                label={"Cantidad de ideas: "}
              />
              <div>
                <label htmlFor="contentType" className={styles.label}>
                  Tipo de contenido:
                </label>
                <input
                  type="text"
                  name="contentType"
                  id="contentType"
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  disabled={isLoading}
                  placeholder="artículos de blog, videos de YouTube, tweets"
                  className={styles.input}
                />
              </div>
            </div>
            <Button
              onClick={handleIdeaGenerator}
              disabled={isLoading || !topic || !contentType}
            >
              {isLoading ? "Generando Ideas..." : "Generar"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={styles.contentCopy}>
              <div className={styles.formTitle}>
                <DocumentTextIcon width={"1.5rem"} color="green" />
                <span>Ideas Generadas</span>
              </div>
              {ideas.length > 0 && !isLoading && (
                <button
                  className={styles.buttonDelete}
                  onClick={handleCopyIdeas}
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
            <TextArea
              placeholder="Las ideas generadas aparecerán aquí..."
              value={ideas}
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

export default IdeaGeneratorTool;
