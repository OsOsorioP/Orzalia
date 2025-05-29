import FeatureItem from "../components/common/FeatureItem/FeatureItem";
import Card from "../components/ui/Card/Card";
import CardContent from "../components/ui/Card/CardContent";
import CardDescription from "../components/ui/Card/CardDescription";
import CardHeader from "../components/ui/Card/CardHeader";
import CardTitle from "../components/ui/Card/CardTitle";
import SummarizerTool from "../features/summarizer/SumarizerTool";
import { featuresSummarizer } from "../utils/FeatureData";

const SummarizerPage = () => {
  return (
    <main className="app-container">
      <SummarizerTool />
      <Card>
        <CardHeader className="textCenter">
          <CardTitle>¿Cómo te ayuda el Resumidor de Text?</CardTitle>
          <CardDescription>
            Nuestro Resumidor de Texto Inteligente no es solo una herramienta, es tu aliado para procesar información de manera eficiente.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="features-grid">
            {featuresSummarizer.map((feature, index) => (
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

export default SummarizerPage;
