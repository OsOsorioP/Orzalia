import { useState } from "react";
import { useRewriter } from "./useRewriter";

export const RewriterTool = () => {
  const [originalText, setOriginalText] = useState("");
  const [rewriteGoal, setRewriteGoal] = useState("Hacer más formal");

  const { rewrittenText, isLoading, error, generateRewrite } = useRewriter();

  const handleRewriteClick = () => {
    generateRewrite(originalText, rewriteGoal);
  };

  return (
    <section>
      <h2>Asistente de Reescritura</h2>
      <textarea
        name=""
        id=""
        value={originalText}
        onChange={(e) => setOriginalText(e.target.value)}
      ></textarea>

      <fieldset>
        <legend>Objetivo de la reescritura</legend>
        <div>
          <label htmlFor="rewriteGoal">Hacer más formal</label>
          <input
            type="radio"
            name="rewriteGoal"
            id="rewriteGoal1"
            checked={rewriteGoal}
            disabled={isLoading}
            value="Hacer más formal"
            onChange={(e) => setRewriteGoal(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rewriteGoal">Hacer más informal/casual</label>
          <input
            type="radio"
            name="rewriteGoal"
            id="rewriteGoal2"
            checked={rewriteGoal}
            disabled={isLoading}
            value="Hacer más informal/casual"
            onChange={(e) => setRewriteGoal(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rewriteGoal">
            Simplificar (más fácil de entender)
          </label>
          <input
            type="radio"
            name="rewriteGoal"
            id="rewriteGoal3"
            checked={rewriteGoal}
            disabled={isLoading}
            value="Simplificar (más fácil de entender)"
            onChange={(e) => setRewriteGoal(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rewriteGoal">"Expandir (añadir más detalle)</label>
          <input
            type="radio"
            name="rewriteGoal"
            id="rewriteGoal4"
            checked={rewriteGoal}
            disabled={isLoading}
            value="Expandir (añadir más detalle)"
            onChange={(e) => setRewriteGoal(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rewriteGoal">Corregir gramática y estilo</label>
          <input
            type="radio"
            name="rewriteGoal"
            id="rewriteGoal5"
            checked={rewriteGoal}
            disabled={isLoading}
            value="Corregir gramática y estilo"
            onChange={(e) => setRewriteGoal(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rewriteGoal">Cambiar a voz activa/pasiva</label>
          <input
            type="radio"
            name="rewriteGoal"
            id="rewriteGoal6"
            checked={rewriteGoal}
            disabled={isLoading}
            value="Cambiar a voz activa/pasiva"
            onChange={(e) => setRewriteGoal(e.target.value)}
          />
        </div>
      </fieldset>
      <button onClick={handleRewriteClick} disabled={isLoading}>
        {isLoading ? "Reescribiendo..." : "Reescribir"}
      </button>
      {error && <p> Error: {error} </p>}
      {rewrittenText && !isLoading && (
        <div>
          <h3>Texto Reescrito:</h3>
          <p>{rewrittenText}</p>
        </div>
      )}
    </section>
  );
};

export default RewriterTool;
