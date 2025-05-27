import { useState } from "react";
import { useIdeaGenerator } from "./useIdeaGenerator";
import Button from "../../components/common/Button/Button";
import styles from "../Features.module.css";
import BoxText from "../../components/common/BoxText/BoxText";

const IdeaGeneratorTool = () => {
  const [topic, setTopic] = useState("");
  const [numberOfIdeas, setNumberOfIdeas] = useState("3");
  const [contentType, setContentType] = useState("artículos de blog");

  const { ideas, isLoading, error, generateIdeas } = useIdeaGenerator();

  const handleIdeaGenerator = () => {
    generateIdeas(topic, parseInt(numberOfIdeas, 10), contentType);
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1>Generador de Ideas para Contenido</h1>
        <p>
          El Resumidor transforma textos extensos en un resumen de texto a tu
          tamaño deseado. ¡No esperes más, resume texto con solo un clic!
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.formIdeaGenerator}>
          <label htmlFor="topic">Tema o palabra clave principal:</label>
          <input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            disabled={isLoading}
            placeholder="Inteligencia Artificial en la educación"
          />
          <div>
            <label htmlFor="numberOfIdeas">Cantidad de ideas:</label>
            <select
              id="numberOfIdeas"
              value={numberOfIdeas}
              onChange={(e) => setNumberOfIdeas(e.target.value)}
              disabled={isLoading}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <label htmlFor="contentType">Tipo de contenido:</label>
          <input
            type="text"
            name="contentType"
            id="contentType"
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            disabled={isLoading}
            placeholder="artículos de blog, videos de YouTube, tweets"
          />
          <Button onClick={handleIdeaGenerator} disabled={isLoading}>
            {isLoading ? "Generando Ideas..." : "Generar"}
          </Button>
        </div>
        <div>
          <BoxText>
            {ideas && !isLoading && ideas.length > 0 && (
              <div>
                <h3>Ideas Generadas:</h3>
                <ul>
                  {ideas?.map((idea, index) => (
                    <li key={index}>{idea}</li>
                  ))}
                </ul>
              </div>
            )}
          </BoxText>
        </div>
      </div>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </section>
  );
};

export default IdeaGeneratorTool;
