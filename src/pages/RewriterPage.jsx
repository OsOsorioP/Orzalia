import Info from "../components/common/Info/Info";
import RewriterTool from "../features/rewriter/RewriterTool";
import { ClockIcon } from "@heroicons/react/24/outline";

const RewritePage = () => {
  return (
    <main className="app-container">
      <RewriterTool />
      <Info
        title={"Perfecciona tu Escritura con el Asistente de Reescritura"}
        subtitle="Claridad y Concisión Mejoradas"
        description="Transforma frases complejas o verbosas en expresiones claras, directas y fáciles de entender para tu audiencia."
        icon={<ClockIcon />} // Ícono relacionado con escritura/edición
        titleAs="h4"
      />
      <Info
        subtitle="Adapta el Tono y Estilo"
        description="Ajusta fácilmente el tono de tu texto: formal, informal, persuasivo, etc., para que se adecúe perfectamente a tu propósito y público."
        icon={<ClockIcon />} // Ícono que sugiere cambio/transformación
        titleAs="h4"
      />
      <Info
        subtitle="Corrección Gramatical y Estilística"
        description="Pule tus textos eliminando errores gramaticales, mejorando la puntuación y refinando el estilo general para una comunicación impecable."
        icon={<ClockIcon />} // Ícono de corrección ortográfica/gramatical
        titleAs="h4"
      />
      <Info
        subtitle="Expande o Simplifica Ideas"
        description="¿Necesitas más detalle o, por el contrario, ser más breve? Nuestra IA te ayuda a expandir tus ideas o a condensarlas sin perder la esencia."
        icon={<ClockIcon />} // Ícono que puede representar expansión o estudio
        titleAs="h4"
      />
      <Info
        subtitle="Aumenta tu Confianza al Escribir"
        description="Obtén sugerencias y mejoras que te ayudarán a comunicarte de manera más efectiva y con mayor seguridad en cualquier contexto."
        icon={<ClockIcon />} // Ícono de aprobación/confianza
        titleAs="h4"
      />
    </main>
  );
};

export default RewritePage;
