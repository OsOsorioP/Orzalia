# Asistente de IA con React y Cohere API

[![Estado del Proyecto](https://img.shields.io/badge/estado-en%20desarrollo-yellowgreen)](https://github.com/TU_USUARIO/TU_REPOSITORIO)
[![React](https://img.shields.io/badge/React-^18.0.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/JavaScript-^5.0.0-blue?logo=javascript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-^5.0.0-current?logo=vite)](https://vitejs.dev/)
[![Cohere API](https://img.shields.io/badge/Cohere%20API-Integrada-orange)](https://cohere.com/)

<!-- Reemplaza TU_USUARIO/TU_REPOSITORIO con tu información -->
<!-- Puedes añadir más badges según las tecnologías que uses -->

Una aplicación web interactiva construida con React, JavaScript y Vite que se integra con la API de Cohere para proporcionar respuestas inteligentes y conversacionales. Este proyecto demuestra el consumo de APIs de IA y la creación de interfaces de chat dinámicas.

<!-- 🖼️ **[ESPACIO PARA UN GIF O SCREENSHOT PRINCIPAL DEL PROYECTO]** -->
<!-- Ejemplo: <p align="center"><img src="./docs/demo.gif" alt="Demo del Asistente IA" width="700"/></p> -->

## Demo en Vivo

<!-- 🔗 **[ENLACE A TU PROYECTO DESPLEGADO AQUÍ CUANDO ESTÉ LISTO]** -->
<!-- Ejemplo: [https://mi-asistente-cohere.vercel.app/](https://mi-asistente-cohere.vercel.app/) -->

## Ruta del Proyecto

Este proyecto se desarrolla siguiendo las siguientes fases:

1.  🚀 Fase 1: Configuración Inicial y Conexión Básica
2.  💬 Fase 2: Interfaz de Usuario Interactiva para el Chat
3.  ✨ Fase 3: Mejoras de UI/UX y Funcionalidades Adicionales
4.  🧪 Fase 4: Calidad y Pruebas
5.  📄 Fase 5: Documentación Final y Despliegue

---

## Tecnologías Utilizadas

*   **Frontend:**
    *   [React](https://reactjs.org/) (con Hooks)
    *   [JavaScript]([https://www.typescriptlang.org/](https://developer.mozilla.org/es/docs/Web/JavaScript))
    *   [Vite](https://vitejs.dev/) (Entorno de desarrollo y build)
*   **Comunicación API:**
    *   [Cohere API](https://cohere.com/) (para la inteligencia artificial conversacional)
    *   [Axios](https://axios-http.com/) (para las peticiones HTTP)
*   **Estilizado:**
    *   CSS 
*   **Pruebas (En desarrollo):**
    

---

## Fase 1: Configuración Inicial y Conexión Básica

El objetivo de esta fase es tener un proyecto React funcional que pueda hacer una llamada básica a la API de Cohere y mostrar una respuesta.

*   [ ] **1.1. Inicializar Proyecto React con Vite + TypeScript**
    *   Ejecutar: `npm create vite@latest mi-asistente-cohere -- --template react-ts`
    *   Navegar al directorio: `cd mi-asistente-cohere`
    *   Instalar dependencias: `npm install`
*   [ ] **1.2. Configurar Variables de Entorno para API Key**
    *   Crear archivo `.env` en la raíz del proyecto.
    *   Añadir `REACT_APP_COHERE_API_KEY=TU_API_KEY_AQUI` al `.env`.
    *   Asegurar que `.env` esté en `.gitignore`.
*   [ ] **1.3. Instalar Dependencias Adicionales**
    *   Instalar Axios: `npm install axios`
*   [ ] **1.4. Crear Cliente Axios para Cohere**
    *   Crear `src/services/cohereClient.ts` (o similar).
    *   Configurar `baseURL` y `headers` (Authorization con API Key, Content-Type).
*   [ ] **1.5. Primera Llamada a la API de Cohere (Chat Básico)**
    *   En `App.tsx`, usar `useEffect` para llamar al endpoint `/v2/chat` de Cohere al montar.
    *   Payload de ejemplo: `{ model: "command-r", messages: [{ role: "USER", message: "Hello, tell me a fun fact." }] }`.
*   [ ] **1.6. Mostrar Respuesta Estática en la UI**
    *   Usar `useState` para guardar el texto de la respuesta (ej. `res.data.message.content[0].text`).
    *   Renderizar este texto en un `<p>` o `<pre>`.
*   [ ] **1.7. Manejo Básico de Carga y Errores**
    *   Implementar estados `isLoading` y `error`.
    *   Mostrar mensajes condicionales en la UI ("Cargando...", "Error: [mensaje de error]").

---

## Fase 2: Interfaz de Usuario Interactiva para el Chat

Construir la interfaz que permita al usuario interactuar con el asistente de IA.

*   [ ] **2.1. Crear Componente de Entrada de Mensaje (`ChatInput.tsx`)**
    *   Debe contener un `<form>` con un `<input type="text">` y un `<button type="submit">`.
    *   Debe aceptar una prop `onSendMessage: (message: string) => void`.
*   [ ] **2.2. Estado para el Mensaje del Usuario en `App.tsx`**
    *   Manejar el valor del input del usuario.
*   [ ] **2.3. Enviar Mensaje del Usuario a Cohere**
    *   Al enviar el formulario de `ChatInput`, tomar el mensaje del estado y pasarlo a la función que llama a la API de Cohere.
*   [ ] **2.4. Estado para el Historial del Chat en `App.tsx`**
    *   Definir un tipo/interfaz: `interface ChatTurn { id: string; role: 'USER' | 'ASSISTANT'; message: string; }`.
    *   Usar `useState<ChatTurn[]>([])` para almacenar la conversación.
    *   Actualizar el historial con el mensaje del usuario y la respuesta del asistente.
*   [ ] **2.5. Crear Componente para Mostrar Mensajes (`ChatMessage.tsx`)**
    *   Debe aceptar una prop `turn: ChatTurn`.
    *   Renderizar el mensaje con estilos distintos para `USER` y `ASSISTANT`.
*   [ ] **2.6. Renderizar Historial del Chat (`ChatWindow.tsx` o dentro de `App.tsx`)**
    *   Iterar sobre el estado del historial del chat usando `.map()`.
    *   Renderizar cada turno usando el componente `ChatMessage.tsx`.
    *   Usar `turn.id` (o un ID generado) como `key`.
*   [ ] **2.7. Scroll Automático al Nuevo Mensaje**
    *   Usar `useRef` en el contenedor de mensajes.
    *   Implementar una función que haga scroll hacia abajo (`element.scrollTo()` o `element.scrollIntoView({ behavior: 'smooth', block: 'end' })`) cada vez que se añada un nuevo mensaje al historial.

---

## Fase 3: Mejoras de UI/UX y Funcionalidades Adicionales

Pulir la experiencia del usuario y añadir características extra.

*   [ ] **3.1. Estilos Visuales Atractivos**
    *   Aplicar CSS (CSS Modules, Tailwind CSS, Material UI, Chakra UI, etc.) para una interfaz de chat agradable y responsiva.
    *   Considerar un tema claro/oscuro (opcional).
*   [ ] **3.2. Indicador de "IA está escribiendo..."**
    *   Mostrar un indicador visual (ej. puntos animados) mientras se espera la respuesta de Cohere, además del `isLoading` general.
*   [ ] **3.3. Limpiar Input Después de Enviar**
    *   Resetear el campo de entrada de texto después de que el usuario envíe un mensaje.
*   [ ] **3.4. Deshabilitar Botón de Envío Durante Carga**
    *   Prevenir envíos múltiples mientras se está procesando una petición a la API.
*   [ ] **3.5. (Opcional) Configuración de Parámetros de Cohere**
    *   Permitir al usuario (o configurar internamente) parámetros como `preamble` (para definir la personalidad del bot) o `temperature` (para la creatividad de la respuesta).
*   [ ] **3.6. (Opcional) Almacenamiento Local del Historial del Chat**
    *   Usar `localStorage` para que la conversación persista si el usuario recarga la página.

---

## Fase 4: Calidad y Pruebas

Asegurar la robustez y mantenibilidad del código.

*   [ ] **4.1. Refactorización de Código y Componentización**
    *   Revisar el código para mejorar la legibilidad, eliminar duplicación y asegurar que los componentes sean cohesivos y reutilizables.
    *   Considerar la creación de custom hooks para lógica reutilizable.
*   [ ] **4.2. (Opcional) Pruebas Unitarias Básicas**
    *   Escribir pruebas para componentes clave y funciones de utilidad usando Vitest/Jest y React Testing Library.
*   [ ] **4.3. Pruebas Manuales Exhaustivas**
    *   Probar diferentes tipos de interacciones, respuestas largas, posibles errores de API, y la responsividad en diferentes tamaños de pantalla.

---

## 📄 Fase 5: Documentación Final y Despliegue

Preparar el proyecto para ser compartido y exhibido.

*   [ ] **5.1. Completar y Pulir este `README.md`**
    *   Asegurar que todas las secciones estén completas y actualizadas.
    *   Revisar la gramática y la claridad.
*   [ ] **5.2. Añadir GIF/Screenshots del Proyecto**
    *   Incluir una demostración visual atractiva del asistente en acción.
    *   Herramientas: ScreenToGif, Kap, LICEcap, o la grabadora integrada del SO.
*   [ ] **5.3. Desplegar en una Plataforma Gratuita**
    *   Conectar el repositorio de GitHub a [Vercel](https://vercel.com/) o [Netlify](https://www.netlify.com/) para despliegue continuo.
    *   Configurar las variables de entorno (ej. `REACT_APP_COHERE_API_KEY`) en la plataforma de despliegue.
*   [ ] **5.4. Enlazar Proyecto Desplegado**
    *   Añadir el enlace de la demo en vivo a la sección "Demo en Vivo" de este README.
    *   Incluir el proyecto en tu portafolio personal.

---

## Cómo Empezar (Instrucciones de Configuración Local)

1.  **Clonar el repositorio:**
    ```bash
    git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
    cd TU_REPOSITORIO
    ```
2.  **Instalar dependencias:**
    ```bash
    npm install
    ```
3.  **Configurar variables de entorno:**
    *   Crea un archivo `.env` en la raíz del proyecto.
    *   Añade tu API Key de Cohere:
        ```env
        REACT_APP_COHERE_API_KEY=TU_API_KEY_DE_COHERE
        ```
4.  **Ejecutar el proyecto en modo desarrollo:**
    ```bash
    npm run dev
    ```
    Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique Vite) en tu navegador.

---

## Posibles Mejoras Futuras

*   Streaming de respuestas de Cohere para una sensación más instantánea.
*   Soporte para múltiples conversaciones o "hilos".
*   Opción para exportar la conversación.
*   Integración con otras APIs para enriquecer las capacidades del asistente.

---

## Contacto

Tu Nombre – [@TuTwitter (Opcional)](https://twitter.com/TuTwitter) – tuemail@ejemplo.com

Enlace al Proyecto: [https://github.com/TU_USUARIO/TU_REPOSITORIO](https://github.com/TU_USUARIO/TU_REPOSITORIO)

---
