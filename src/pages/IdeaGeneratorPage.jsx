import IdeaGeneratorTool from "../features/ideaGenerator/IdeaGeneratorTool";
import Info from "../components/common/Info/Info";
import { ClockIcon } from "@heroicons/react/24/outline";

const IdeageneratorPage = () => {
  return (
    <main className="app-container">
      <IdeaGeneratorTool />
      <Info
      title={"¿Cómo te ayuda el Generador de Ideas?"}
        subtitle="Supera el Bloqueo Creativo"
        description="¿Atascado sin ideas? Introduce un tema y deja que nuestra IA te proporcione múltiples ángulos y enfoques para tu próximo contenido."
        icon={<ClockIcon />}
      />
      <Info
        subtitle="Variedad de Sugerencias"
        description="Obtén desde títulos llamativos hasta conceptos más desarrollados, adaptados al tipo de contenido que necesitas."
        icon={<ClockIcon />}
      />
      <Info
        subtitle="Personaliza tu Búsqueda"
        description="Especifica la cantidad de ideas y el tipo de contenido (blogs, videos, redes sociales) para resultados más afinados."
        icon={<ClockIcon />}
      />
      <Info
        subtitle="Enfócate en tu Audiencia"
        description="Genera ideas que resuenen con tu público objetivo y aborden sus intereses y necesidades."
        icon={<ClockIcon />}
      />
    </main>
  );
};

export default IdeageneratorPage;
