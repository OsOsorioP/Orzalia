import { useState } from "react";
import { useRewriter } from "./useRewriter";
import Button from "../../components/common/Button/Button";
import Textarea from "../../components/common/Textarea/Textarea";
import BoxText from "../../components/common/BoxText/BoxText";
import styles from "../Features.module.css";

export const RewriterTool = () => {
  const [originalText, setOriginalText] = useState("");
  const [rewriteGoal, setRewriteGoal] = useState("Hacer más formal");

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

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Asistente de Reescritura</h1>
        <p>
          El Resumidor transforma textos extensos en un resumen de texto a tu
          tamaño deseado. ¡No esperes más, resume texto con solo un clic!
        </p>
      </div>
      <div className={styles.content}>
        <Textarea
          name="textAreaRewrite"
          id="textAreaRewrite"
          value={originalText}
          onChange={(e) => setOriginalText(e.target.value)}
          placeholder="Ingresa el texto que quieres reescribir aquí..."
          rows={8}
          disabled={isLoading}
        />
        <BoxText>
          {rewrittenText && !isLoading && <p>{rewrittenText}</p>}
        </BoxText>
      </div>
      <div className={styles.fromRewriter}>
        <select
          id="rewriterGoal"
          value={rewriteGoal}
          onChange={(e) => setRewriteGoal(e.target.value)}
          disabled={isLoading}
        >
          {rewriteOptions.map((option) => (
            <option key={option.id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <Button onClick={handleRewriteClick} disabled={isLoading}>
          Reescribir
        </Button>
      </div>
      {error && <p> Error: {error} </p>}
    </section>
  );
};

export default RewriterTool;
