import FeatureItem from "../components/common/FeatureItem/FeatureItem";
import Card from "../components/ui/Card/Card";
import CardContent from "../components/ui/Card/CardContent";
import CardDescription from "../components/ui/Card/CardDescription";
import CardHeader from "../components/ui/Card/CardHeader";
import CardTitle from "../components/ui/Card/CardTitle";
import IdeaGeneratorTool from "../features/ideaGenerator/IdeaGeneratorTool";
import { featuresIdeaGenerator } from "../utils/FeatureData";

const IdeageneratorPage = () => {
  return (
    <main className="appContainer">
      <IdeaGeneratorTool />
      <Card>
        <CardHeader className="textCenter">
          <CardTitle>¿Cómo te ayuda el Generador de Ideas?</CardTitle>
          <CardDescription>
            Descubre todas las ventajas de nuestra herramienta potenciada por IA
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="features-grid">
            {featuresIdeaGenerator.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconBgColor={feature.iconBgColor}
                iconTextColor={feature.iconTextColor}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default IdeageneratorPage;
