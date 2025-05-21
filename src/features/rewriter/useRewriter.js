import { useState, useCallback } from "react";
import { postCohereChat } from "../../services/cohereAPI";

export const useRewriter = () => {
  const [rewrittenText, setRewrittenText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateRewrite = useCallback((originalText, rewriteGoal) => {
    if (!originalText || !originalText.trim || typeof originalText !== 'string') {
      setError("Por favor, ingresa texto para reescribir.");
      setRewrittenText("");
      return;
    }

    setIsLoading(true);
    setError(null);
    setRewrittenText("");

    let systemPrompt = "";

    switch (rewriteGoal) {
      case "Hacer más formal":
        systemPrompt ="Reescribe el siguiente texto para que tenga un tono más formal y profesional, manteniendo el significado original.";
        break;
      case "Hacer más informal/casual":
        systemPrompt = "Reescribe el siguiente texto para que suene más informal y casual, como si estuvieras hablando con un amigo.";
        break;
      case "Simplificar (más fácil de entender)":
        systemPrompt = "Simplifica el siguiente texto para que sea más fácil de entender para un público general, usando un lenguaje claro y directo.";
        break;
      case "Expandir (añadir más detalle)":
        systemPrompt = "Expande el siguiente texto añadiendo más detalles o ejemplos relevantes, manteniendo la idea principal.";
        break;
      case "Corregir gramática y estilo":
        systemPrompt = "Revisa y corrige la gramática y el estilo del siguiente texto para mejorar su claridad y profesionalismo.";
        break;
      case "Cambiar a voz activa/pasiva":
        systemPrompt = "Analiza el siguiente texto. Si está predominantemente en voz pasiva, reescríbelo en voz activa. Si está en voz activa, reescríbelo en voz pasiva, manteniendo el significado.";
        break;
      default:
        setError("Objetivo de reescritura no válido");
        setIsLoading(false);
        break;
    }

    const responseRewriter = postCohereChat(
      systemPrompt,
      originalText,
      setIsLoading,
      setError
    );

    setRewrittenText(responseRewriter);
  }, []);

  return { rewrittenText, isLoading, error, generateRewrite };
};
