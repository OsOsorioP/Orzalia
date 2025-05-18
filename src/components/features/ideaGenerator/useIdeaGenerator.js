import { useCallback } from "react";
import { useState } from "react";
import { postCohereChat } from "../../../services/cohereAPI";

export const useIdeaGenerator = () => {
  const [Ideas, setIdeas] = useState(null);
  const [isLoagind, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const generateIdeGenerator = useCallback(
    (topic, numberOfIdeas, contentType) => {
      setIsLoading(true);
      setError(null);
      setIdeas(null);
      const system_prompt = `Genera ${
        numberOfIdeas || 5
      } ideas creativas para ${
        contentType || "artículos de blog"
      } sobre el tema: "${topic}". Cada idea debe ser una frase concisa. Devuelve cada idea en una nueva línea.`;

      const responseIdeaGenerate = postCohereChat(
        system_prompt,
        topic,
        setIsLoading,
        setError
      );
      setIdeas(
        responseIdeaGenerate.split("\n").filter((idea) => idea.trim() !== "")
      );
    },
    []
  );

  return { Ideas, isLoagind, error, generateIdeGenerator };
};
