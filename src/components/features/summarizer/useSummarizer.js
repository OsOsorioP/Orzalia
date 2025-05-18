import { useState } from "react";
import { postCohereChat } from "../../../services/cohereAPI";
import { useCallback } from "react";

export const useSummarizer = () => {
  const [summary, setSummary] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const generateSummary = useCallback((text, length) => {
    setIsLoading(true);
    setError(null);
    setSummary(null);
    const system_prompt = `Resume el siguiente texto en una longitud ${length}. El resumen debe ser conciso y destacar los puntos clave.`;

    const responseText = postCohereChat(system_prompt, text, setIsLoading, setError);
    setSummary(responseText);
  }, []);

  return { summary, isLoading, error, generateSummary };
};
