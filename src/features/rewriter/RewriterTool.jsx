import { useState } from "react";
import { useRewriter } from "./useRewriter";
import Button from "../../components/common/Button/Button";
import Textarea from "../../components/common/Textarea/Textarea";
import styles from "../Features.module.css";
import Select from "../../components/common/Select/Select";
import HeroSection from "../../components/common/HeroSection/HeroSection";
import Card from "../../components/ui/Card/Card";
import CardContent from "../../components/ui/Card/CardContent";
import CardDescription from "../../components/ui/Card/CardDescription";
import CardHeader from "../../components/ui/Card/CardHeader";
import CardTitle from "../../components/ui/Card/CardTitle";
import {
  SparklesIcon,
  PencilIcon,
  DocumentDuplicateIcon,
  TrashIcon,
  ClipboardDocumentListIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";
import { copyToClipboard } from "../../services/clipboardAPI";

const EXAMPLE_TEXT =
  "El informe fue entregado por el gerente ayer. Se indicaron varios puntos importantes que deben ser considerados por el equipo para la siguiente fase del proyecto.";

export const RewriterTool = () => {
  const [originalText, setOriginalText] = useState("");
  const [rewriteGoal, setRewriteGoal] = useState("Hacer más formal");
  const [isCopied, setIsCopied] = useState(false);

  const { rewrittenText, isLoading, error, generateRewrite } = useRewriter();

  const rewriteOptions = [
    { value: "Hacer más formal", label: "Hacer más formal", id: "formal" },
    {
      value: "Hacer más informal/casual",
      label: "Hacer más informal/casual",
      id: "informal",
    },
    {
      value: "Simplificar (más fácil de entender)",
      label: "Simplificar (más fácil de entender)",
      id: "simplify",
    },
    {
      value: "Expandir (añadir más detalle)",
      label: "Expandir (añadir más detalle)",
      id: "expand",
    },
    {
      value: "Corregir gramática y estilo",
      label: "Corregir gramática y estilo",
      id: "correct",
    },
    {
      value: "Cambiar a voz activa/pasiva",
      label: "Cambiar a voz activa/pasiva",
      id: "voice",
    },
  ];

  const handleRewriteClick = () => {
    generateRewrite(originalText, rewriteGoal);
  };

  const handleTextDelete = () => {
    setOriginalText("");
  };

  const handlePasteExample = () => {
    setOriginalText(EXAMPLE_TEXT);
  };

  const handleCopyRewriter = async () => {
    if (!rewrittenText) return;

    await copyToClipboard(rewrittenText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className={styles.container}>
      <HeroSection
        titleGradientPart="Perfecciona tu Mensaje"
        titlePart1="Transforma tus Palabras, "
        description="Nuestro Asistente de Reescritura con IA te ayuda a refinar tu texto, mejorar la claridad, ajustar el tono y corregir errores para una comunicación impecable y efectiva."
      />
      <div className={styles.content}>
        <Card>
          <CardHeader>
            <CardTitle className={styles.contentCopy}>
              <div className={styles.formTitle}>
                <PencilIcon width={"1.5rem"} color="dodgerblue" />
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
              name="textAreaRewrite"
              id="textAreaRewrite"
              value={originalText}
              onChange={(e) => setOriginalText(e.target.value)}
              placeholder="Ingresa el texto que quieres reescribir aquí..."
              rows={8}
              disabled={isLoading}
            />
            <div className={styles.actions}>
              <Select
                id="rewriterGoal"
                value={rewriteGoal}
                onChange={(e) => setRewriteGoal(e.target.value)}
                disabled={isLoading}
                options={rewriteOptions}
              />
              <Button
                onClick={handleRewriteClick}
                disabled={isLoading || !originalText}
              >
                Reescribir
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className={styles.contentCopy}>
              <div className={styles.formTitle}>
                <SparklesIcon width={"1.5rem"} color="purple" />
                <span>Texto Mejorado</span>
              </div>
              {rewrittenText && !isLoading && (
                <button
                  className={styles.buttonDelete}
                  onClick={handleCopyRewriter}
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
              id="rewriteText"
              placeholder="Lo reescrito aparecerá aquí..."
              value={rewrittenText}
              readOnly
              className=""
            />
          </CardContent>
        </Card>
      </div>
      {error && <p> Error: {error} </p>}
    </section>
  );
};

export default RewriterTool;
