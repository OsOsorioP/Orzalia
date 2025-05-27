import Info from "../components/common/Info/Info";
import SummarizerTool from "../features/summarizer/SumarizerTool";
import { ClockIcon } from "@heroicons/react/24/outline";

const SummarizerPage = () => {
  return (
    <main className="app-container">
      <SummarizerTool />
      <Info
        title={"¿Por qué usar nuestro Resumidor?"}
        subtitle={"Ahorra Tiempo Precioso"}
        description={
          "Obtén la esencia de textos largos en segundos, ideal para investigadores, estudiantes y profesionales ocupados."
        }
        icon={<ClockIcon />}
      />
      <Info
        subtitle="Resúmenes Flexibles"
        description="Elige entre resúmenes cortos, medios o largos para adaptar la información a tus necesidades específicas."
        icon={<ClockIcon />}
      />
      <Info
        subtitle="Claridad y Precisión"
        description="Nuestra IA está entrenada para extraer los puntos clave y presentarlos de manera coherente y fácil de entender."
        icon={<ClockIcon />}
      />
      <Info
        subtitle="Soporte Multilingüe"
        description="Capaz de procesar y resumir textos en diversos idiomas."
        icon={<ClockIcon />}
      />
    </main>
  );
};

export default SummarizerPage;
