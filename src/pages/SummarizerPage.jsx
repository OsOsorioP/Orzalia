import FeatureSection from "../components/common/feactureSection/FeactureSection";
import HeroSection from "../components/common/heroSection/HeroSection";
import SummarizerTool from "../features/summarizer/SumarizerTool";

const SummarizerPage = () => {
  return (
    <main className="app-container">
      <SummarizerTool />
      <HeroSection
        title={"Resumir textos con Parafrasist. ¿Qué beneficios tiene?"}
        subtitle={"El Resumen de textos te ahorra tiempo"}
        description={
          "Parafrasist le permite a los usuarios hacer el resumen de un texto rápidamente, condensando textos largos en resúmenes breves y manejables, ahorrando horas de lectura y análisis."
        }
        icon={"clock"}
      />
      <FeatureSection
        title={"Generador de resúmenes de distintos tamaños e idiomas"}
        description={
          "Además de hacer el resumen de un texto corto, parafrasist es un excelente resumidor de libros, ya que utiliza IA (inteligencia artificial). Además puedes resumir textos en inglés, español, portugués, francés, italiano, indonesio, aleman y holandes."
        }
        icon={"analitic"}
      />
    </main>
  );
};

export default SummarizerPage;
