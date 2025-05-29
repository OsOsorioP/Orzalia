import FeatureItem from "../components/common/FeatureItem/FeatureItem";
import Card from "../components/ui/Card/Card";
import CardContent from "../components/ui/Card/CardContent";
import CardDescription from "../components/ui/Card/CardDescription";
import CardHeader from "../components/ui/Card/CardHeader";
import CardTitle from "../components/ui/Card/CardTitle";
import RewriterTool from "../features/rewriter/RewriterTool";
import { featuresRewriter } from "../utils/FeatureData";

const RewritePage = () => {
  return (
    <main className="app-container">
      <RewriterTool />
      <Card>
        <CardHeader className="textCenter">
          <CardTitle>¿Cómo te ayuda el Reescritor?</CardTitle>
          <CardDescription>
            Refina cada palabra y asegurar que tu mensaje resuene exactamente como lo deseas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="features-grid">
            {featuresRewriter.map((feature, index) => (
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

export default RewritePage;
