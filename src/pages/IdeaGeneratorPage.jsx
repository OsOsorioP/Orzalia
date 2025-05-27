import Card from "../components/ui/Card/Card";
import IdeaGeneratorTool from "../features/ideaGenerator/IdeaGeneratorTool";
import { ClockIcon } from "@heroicons/react/24/outline";
import { BoltIcon } from "@heroicons/react/24/outline";
import { FireIcon } from "@heroicons/react/24/outline";
import { UsersIcon } from "@heroicons/react/24/outline";

const IdeageneratorPage = () => {
  const featuresIdeaGenerator = [
    {
      icon: <BoltIcon />,
      title: "Supera el Bloqueo Creativo",
      description:
        "¿Atascado sin ideas? Introduce un tema y deja que nuestra IA te proporcione múltiples ángulos y enfoques para tu próximo contenido.",
      iconBgColor: "bgBlue100",
      iconTextColor: "textBlue600",
    },
    {
      icon: <FireIcon />,
      title: "Variedad de Sugerencias",
      description:
        "Obtén desde títulos llamativos hasta conceptos más desarrollados, adaptados al tipo de contenido que necesitas.",
      iconBgColor: "bgOrange100",
      iconTextColor: "textOrange600",
    },
    {
      icon: <UsersIcon />,
      title: "Personaliza tu Búsqueda",
      description:
        "Especifica la cantidad de ideas y el tipo de contenido (blogs, videos, redes sociales) para resultados más afinados.",
      iconBgColor: "bgPurple100",
      iconTextColor: "textPurple600",
    },
    {
      icon: <ClockIcon />,
      title: "Enfócate en tu Audiencia",
      description:
        "Genera ideas que resuenen con tu público objetivo y aborden sus intereses y necesidades.",
      iconBgColor: "bgGreen100",
      iconTextColor: "textGreen600",
    },
  ];

  return (
    <main className="app-container">
      <IdeaGeneratorTool />
      <Card
        title={"¿Cómo te ayuda el Generador de Ideas?"}
        description={
          " Descubre todas las ventajas de nuestra herramienta potenciada por IA"
        }
        features={featuresIdeaGenerator}
      />
    </main>
  );
};

export default IdeageneratorPage;
