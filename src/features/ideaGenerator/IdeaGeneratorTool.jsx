import { useState } from "react";
import { useIdeaGenerator } from "./useIdeaGenerator";
import Select from "../../components/common/Select/Select";
import Button from "../../components/common/Button/Button";
import styles from "../Features.module.css";
import BoxText from "../../components/common/BoxText/BoxText";
import HeroSection from "../../components/common/HeroSection/HeroSection";

const IdeaGeneratorTool = () => {
  const [topic, setTopic] = useState("");
  const [numberOfIdeas, setNumberOfIdeas] = useState("3");
  const [contentType, setContentType] = useState("artículos de blog");
  const options = [
    { value: "1", label: "1 Idea" },
    { value: "3", label: "3 Ideas" },
    { value: "5", label: "5 Ideas" },
    { value: "10", label: "10 Ideas" },
  ];

  const { ideas, isLoading, error, generateIdeas } = useIdeaGenerator();

  const handleIdeaGenerator = () => {
    generateIdeas(topic, parseInt(numberOfIdeas, 10), contentType);
  };

  return (
    <section className={styles.container}>
      <HeroSection
        titleGradientPart="Marketing"
        titlePart1="Tu Herramienta de IA para"
        description="Descubre cómo la inteligencia artificial puede revolucionar tu estrategia de marketing de contenidos."
      />
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
            <Select
              id="numberOfIdeas"
              value={numberOfIdeas}
              onChange={(e) => setNumberOfIdeas(e.target.value)}
              disabled={isLoading}
              option={options}
              label={"Cantidad de ideas: "}
            />
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
