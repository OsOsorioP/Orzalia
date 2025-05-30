# Orzalia - Tu Asistente IA para Contenido Inteligente

[![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Mejoras-yellowgreen)](https://github.com/OsOsorioP/Orzalia)
[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Axios](https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![Cohere API](https://img.shields.io/badge/Cohere%20API-Integrada-FF4F00)](https://cohere.com/)
[![Vercel](https://img.shields.io/badge/Desplegado%20en-Vercel-black?logo=vercel&logoColor=white)](https://orzalia.vercel.app/)

Orzalia es una aplicación web interactiva construida con React, JavaScript y Vite. Se integra con la potente API de Cohere para ofrecer herramientas inteligentes que transforman tu manera de crear y procesar contenido textual. Este proyecto demuestra el consumo de APIs de IA, la creación de interfaces de usuario dinámicas y la aplicación de buenas prácticas de desarrollo frontend.

<p align="center">
  <img src="https://github.com/OsOsorioP/Orzalia/blob/main/src/assets/Logo.png?raw=true" alt="Logo de Orzalia" width="300"/>
</p>
<!-- <p align="center">
  <img src="URL_A_TU_GIF_DEMO.gif" alt="Demostración de Orzalia en acción" width="700"/>
</p> -->

---

## Demo en Vivo

Prueba Orzalia aquí: **[orzalia.vercel.app](https://orzalia.vercel.app/)**

---

## Características Principales (Key Features)

Orzalia te ofrece un conjunto de herramientas potenciadas por IA para optimizar tu flujo de trabajo con contenido:

*   **✍️ Asistente de Reescritura Inteligente:**
    *   Refina tus textos, mejora la claridad y ajusta el tono (formal, informal, simplificar, expandir, etc.).
    *   Corrige gramática y estilo para una comunicación impecable.
*   **💡 Generador de Ideas para Contenido:**
    *   Supera el bloqueo creativo con sugerencias frescas y ángulos únicos para tus artículos, videos o posts.
    *   Personaliza la cantidad de ideas y el tipo de contenido deseado.
*   **✂️ Resumidor de Texto Eficiente:**
    *   Extrae la esencia de artículos extensos y documentos en segundos.
    *   Obtén resúmenes claros y concisos en diferentes longitudes (corto, medio, largo).
*   **🎨 Interfaz Intuitiva y Responsiva:**
    *   Diseño limpio y fácil de usar para una experiencia de usuario agradable en cualquier dispositivo.
*   **⚡ Carga Rápida con Lazy Loading:**
    *   Optimización del rendimiento mediante la carga diferida de componentes de ruta.

---

## Tecnologías Utilizadas

*   **Frontend:**
    *   [React](https://reactjs.org/) (v18+) con Hooks
    *   [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) (ES6+)
    *   [Vite](https://vitejs.dev/) (Entorno de desarrollo y build)
    *   [React Router DOM](https://reactrouter.com/) (Para la navegación)
*   **Comunicación API:**
    *   [Cohere API](https://cohere.com/) (Modelos de Lenguaje Grandes)
    *   [Axios](https://axios-http.com/) (Cliente HTTP para peticiones)
*   **Estilizado:**
    *   CSS Modules (para estilos encapsulados por componente)
    *   CSS Global (para resets y estilos base)
*   **Iconos:**
    *   [Heroicons](https://heroicons.com/)
*   **Despliegue:**
    *   [Vercel](https://vercel.com/)

---

## Cómo Empezar (Instrucciones de Configuración Local)

Para ejecutar este proyecto localmente, sigue estos pasos:

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/OsOsorioP/Orzalia.git
    cd Orzalia
    ```
2.  **Instalar dependencias:**
    ```bash
    pnpm install
    ```
3.  **Configurar variables de entorno:**
    *   Crea un archivo `.env` en la raíz del proyecto.
    *   Añade tu API Key de Cohere y la URL del endpoint:
        ```env
        VITE_COHERE_API_KEY=TU_API_KEY_DE_COHERE
        VITE_COHERE_API_URL=https://example.com/
        ```
    *   **Importante:** Reemplaza `TU_API_KEY_DE_COHERE` con tu clave real.
4.  **Ejecutar el proyecto en modo desarrollo:**
    ```bash
    pnpm run dev
    ```
    Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite) en tu navegador.

---

## Hoja de Ruta del Proyecto (Estado Actual y Próximos Pasos)

Este proyecto se desarrolla siguiendo fases iterativas. Actualmente nos encontramos en [Menciona la fase actual, ej: Fase 3 - Mejoras de UI/UX].

*   [✅] **Fase 1: Funcionamiento de los Features Core**
    *   [✅] Implementación del Resumidor de Texto.
    *   [✅] Implementación del Generador de Ideas.
    *   [✅] Implementación del Asistente de Reescritura.
*   [✅] **Fase 2: Interfaz de Usuario Interactiva y Navegación**
    *   [✅] Creación de componentes de UI reutilizables (Button, Input, Textarea, Select, Card).
    *   [✅] Implementación de React Router DOM para la navegación entre herramientas.
    *   [✅] Diseño básico y layout de cada herramienta.
    *   [✅] Lazy loading para las rutas.
*   [🚧] **Fase 3: Mejoras de UI/UX y Funcionalidades Adicionales** (En progreso / Próximos pasos)
    *   [ ] Pulido de estilos y responsividad avanzada.
    *   [ ] Añadir feedback visual más elaborado (ej. toasts para "copiado").
    *   [ ] Implementar opción de "Copiar al portapapeles" para todas las herramientas.
    *   [ ] (Opcional) Almacenamiento local para preferencias o historial.
    *   [ ] (Opcional) Añadir más opciones de configuración para las llamadas a Cohere (temperatura, modelos específicos).
*   [ ] **Fase 4: Calidad y Pruebas**
    *   [ ] Refactorización de código y optimizaciones.
    *   [ ] (Opcional) Pruebas unitarias y de integración.
*   [ ] **Fase 5: Documentación Final y Despliegue**
    *   [✅] README.md inicial.
    *   [🚧] Completar y pulir README.md.
    *   [✅] Despliegue inicial en Vercel.

*(Leyenda: ✅ Completado, 🚧 En Progreso, ⬜ Pendiente)*

---

## Posibles Mejoras Futuras

*   Streaming de respuestas de Cohere para una sensación más instantánea.
*   Soporte para múltiples conversaciones o historial persistente por usuario (requeriría backend y autenticación).
*   Opción para exportar los resultados (ej. a .txt o .md).
*   Integración con otras APIs para enriquecer las capacidades (ej. búsqueda web para el generador de ideas).
*   Modo oscuro.

---

## Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar Orzalia, por favor abre un issue para discutirlo o envía un pull request.

---

## Contacto

Oscar Osorio – [@OsOsorioP (Twitter)](https://twitter.com/OsOsorioP) – [oscar.osorio1884@gmail.com](mailto:oscar.osorio1884@gmail.com)

Enlace al Proyecto: [https://github.com/OsOsorioP/Orzalia](https://github.com/OsOsorioP/Orzalia)

---

