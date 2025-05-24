import { useState } from "react";
import { postCohereChat } from "../../services/cohereAPI";
import { useCallback } from "react";

export const useSummarizer = () => {
  const [summary, setSummary] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const generateSummary = useCallback((originalText, length) => {
    if (!originalText || !originalText.trim || typeof originalText !== 'string') {
      setError("Por favor, ingresa texto para resumir.");
      setSummary("");
      return;
    }

    setIsLoading(true);
    setError(null);
    setSummary("");
    const system_prompt = `Resume el siguiente texto en una longitud ${length}. El resumen debe ser conciso y destacar los puntos clave.`;

    const responseText = postCohereChat(system_prompt, originalText, setIsLoading, setError);
    setSummary(responseText);
  }, []);

  return { summary, isLoading, error, generateSummary };
};
