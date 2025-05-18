import { useCallback } from "react";
import { useState } from "react";
import { postCohereChat } from "../../../services/cohereAPI";

export const useIdeaGenerator = () => {
  const [ideas, setIdeas] = useState([]);
  const [isLoagind, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const generateIdeas = useCallback((topic, numberOfIdeas, contentType) => {
    if (!topic || !topic.trim) {
      setError("Por favor, ingresa un tema o palabra clave.");
      setIdeas([]);
      return;
    }

    setIsLoading(true);
    setError(null);
    setIdeas([]);

    const system_prompt = `Genera ${numberOfIdeas} ideas creativas para ${contentType} sobre el tema: "${topic}". Cada idea debe ser una frase concisa. Devuelve cada idea en una nueva línea.`;

    const responseIdeaGenerate = postCohereChat(
      system_prompt,
      topic,
      setIsLoading,
      setError
    );
    setIdeas(
      responseIdeaGenerate.split("\n").filter((idea) => idea.trim() !== "")
    );
  }, []);

  return { ideas, isLoagind, error, generateIdeas };
};
