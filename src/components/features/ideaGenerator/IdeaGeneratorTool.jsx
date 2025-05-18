import { useState } from "react";
import { useIdeaGenerator } from "./useIdeaGenerator";

const IdeaGeneratorTool = () => {
  const [topic, setTopic] = useState("");
  const [numberOfIdeas, setNumberOfIdeas] = useState(null);
  const [contentType, setContentType] = useState(null);

  const { ideas, isLoading, error, generateIdeaGenerator } = useIdeaGenerator();

  const handleIdeaGenerator = () => {
    generateIdeaGenerator(topic, numberOfIdeas, contentType);
  };

  return (
    <section>
      <h2>Generador de Ideas para Contenido</h2>
      <label htmlFor="topic">tema o palabra clave principal</label>
      <input
        type="text"
        id="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        disabled={isLoading}
      />
      <label htmlFor="">cantidad de ideas</label>
      <select
        id="numberOfIdeas"
        value={numberOfIdeas}
        onChange={(e) => setNumberOfIdeas(e.target.value)}
        disabled={isLoading}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>
      <label htmlFor="contentType">tipo de contenido</label>
      <input
        type="text"
        name="contentType"
        id="contentType"
        value={contentType}
        onChange={(e) => setContentType(e.target.value)}
        disabled={isLoading}
      />
      <button onClick={handleIdeaGenerator} disabled={isLoading}>
        {isLoading ? "Generando..." : "Generar"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <ul>
        {ideas?.map((idea, index) => (
          <li id={idea} key={index}>
            idea
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IdeaGeneratorTool;
