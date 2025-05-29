import { useCallback } from "react";
import { useState } from "react";
import { postCohereChat } from "../../services/cohereAPI";

export const useIdeaGenerator = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateIdeas = useCallback(
    async (topic, numberOfIdeas, contentType) => {
      if (!topic || !topic.trim()) {
        setError("Por favor, ingresa un tema o palabra clave.");
        setIdeas([]);
        return;
      }

      setIsLoading(true);
      setError(null);
      setIdeas([]);

      const systemPrompt = `Genera ${numberOfIdeas} ideas creativas para ${contentType} sobre el tema: "${topic}". Cada idea debe ser una frase concisa. Devuelve cada idea en una nueva línea.`;

      const responseIdeaGenerate = await postCohereChat(
        systemPrompt,
        topic,
        setIsLoading,
        setError
      );
      console.log(responseIdeaGenerate)
      setIdeas(
        responseIdeaGenerate
      );
    },
    []
  );

  return { ideas, isLoading, error, generateIdeas };
};
