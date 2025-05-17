🤖 Asistente de IA con Cohere y React
Un proyecto para demostrar la integración de la API de Cohere en una aplicación React para crear un asistente conversacional interactivo.
📋 Índice del Proyecto (Guía Paso a Paso)
🚀 Fase 1: Configuración Inicial y Conexión Básica
1.1. Inicializar Proyecto React con Vite + TypeScript
1.2. Configurar Variables de Entorno para API Key
1.3. Instalar Dependencias (Axios)
1.4. Crear Cliente Axios para Cohere
1.5. Primera Llamada a la API de Cohere (Chat Básico)
1.6. Mostrar Respuesta Estática en la UI
1.7. Manejo Básico de Carga y Errores
💬 Fase 2: Interfaz de Usuario Interactiva para el Chat
2.1. Crear Componente de Entrada de Mensaje (ChatInput.js)
2.2. Estado para el Mensaje del Usuario
2.3. Enviar Mensaje del Usuario a Cohere
2.4. Estado para el Historial del Chat
2.5. Crear Componente para Mostrar Mensajes (ChatMessage.js)
2.6. Renderizar Historial del Chat (ChatWindow.js)
2.7. Scroll Automático al Nuevo Mensaje
✨ Fase 3: Mejoras de UI/UX y Funcionalidades Adicionales
3.1. Estilos Visuales Atractivos (CSS / Tailwind / Component Library)
3.2. Indicadores de "Escribiendo..." para la IA
3.3. Limpiar Input Después de Enviar
3.4. Deshabilitar Botón de Envío Durante Carga
3.5. (Opcional) Configuración de Parámetros de Cohere (Preamble, Temperatura)
3.6. (Opcional) Almacenamiento Local del Historial del Chat
🧪 Fase 4: Calidad y Pruebas
4.1. Refactorización de Código y Componentización
4.2. (Opcional) Pruebas Unitarias Básicas (Jest + React Testing Library)
4.3. Pruebas Manuales de Casos de Uso
📄 Fase 5: Documentación y Despliegue
5.1. Completar README.md
5.2. Añadir GIF/Screenshots del Proyecto al README
5.3. Desplegar en Plataforma (Vercel, Netlify)
5.4. Enlazar Proyecto Desplegado en el README y Portafolio
🚀 Fase 1: Configuración Inicial y Conexión Básica
1.1. Inicializar Proyecto React con Vite + TypeScript
Comando: npm create vite@latest mi-asistente-cohere -- --template react-ts
Navegar al directorio: cd mi-asistente-cohere
Instalar dependencias iniciales: npm install
1.2. Configurar Variables de Entorno para API Key
Crear archivo .env en la raíz del proyecto.
Añadir REACT_APP_COHERE_API_KEY=TU_API_KEY_AQUI al .env.
Añadir .env al archivo .gitignore.
1.3. Instalar Dependencias (Axios)
Comando: npm install axios
1.4. Crear Cliente Axios para Cohere
Crear src/services/cohereClient.ts (o similar).
Configurar baseURL, headers (Authorization con API Key, Content-Type).
1.5. Primera Llamada a la API de Cohere (Chat Básico)
En App.tsx, usar useEffect para llamar al endpoint /v2/chat de Cohere al montar el componente.
Usar un mensaje fijo como: { role: "USER", message: "Hello, tell me a fun fact." }.
Modelo: command-r o similar.
1.6. Mostrar Respuesta Estática en la UI
Usar useState para guardar el texto de la respuesta (res.data.message.content[0].text).
Renderizar este texto en un <p> o <pre>.
1.7. Manejo Básico de Carga y Errores
Añadir estados isLoading y error.
Mostrar mensajes "Cargando..." o mensajes de error en la UI.
💬 Fase 2: Interfaz de Usuario Interactiva para el Chat
2.1. Crear Componente de Entrada de Mensaje (ChatInput.tsx)
Un <form> con un <input type="text"> y un <button type="submit">.
Props: una función onSendMessage que se llama con el texto del input.
2.2. Estado para el Mensaje del Usuario
En App.tsx (o el componente padre del chat), un estado para el mensaje actual del input.
Actualizar este estado en el onChange del input.
2.3. Enviar Mensaje del Usuario a Cohere
Al hacer submit en ChatInput, llamar a la función que hace la petición a Cohere, usando el mensaje del usuario.
2.4. Estado para el Historial del Chat
En App.tsx, un estado que sea un array de objetos, ej: interface ChatMessage { role: 'USER' | 'ASSISTANT'; message: string; id?: string; }.
Al enviar un mensaje y al recibir una respuesta, añadir los nuevos mensajes a este array.
2.5. Crear Componente para Mostrar Mensajes (ChatMessage.tsx)
Props: un objeto ChatMessage.
Renderiza el mensaje con estilos diferentes para USER y ASSISTANT.
2.6. Renderizar Historial del Chat (ChatWindow.tsx o dentro de App.tsx)
Iterar (.map()) sobre el array del historial del chat.
Usar ChatMessage.tsx para renderizar cada mensaje.
Asignar una key única a cada mensaje.
2.7. Scroll Automático al Nuevo Mensaje
Usar useRef en el contenedor de mensajes y element.scrollTo() o element.scrollIntoView() después de añadir un nuevo mensaje.
✨ Fase 3: Mejoras de UI/UX y Funcionalidades Adicionales
3.1. Estilos Visuales Atractivos (CSS / Tailwind / Component Library)
Aplicar estilos para que la interfaz de chat se vea moderna y usable.
Considerar un tema claro/oscuro (opcional).
3.2. Indicadores de "Escribiendo..." para la IA
Mostrar un indicador visual mientras se espera la respuesta de Cohere (además del isLoading general).
3.3. Limpiar Input Después de Enviar
Resetear el valor del input de mensaje después de que el usuario lo envía.
3.4. Deshabilitar Botón de Envío Durante Carga
Evitar envíos múltiples mientras se procesa una petición.
3.5. (Opcional) Configuración de Parámetros de Cohere (Preamble, Temperatura)
Añadir UI para que el usuario (o tú como desarrollador) pueda modificar el preamble (instrucciones de sistema para el bot) o la temperature.
3.6. (Opcional) Almacenamiento Local del Historial del Chat
Usar localStorage para persistir la conversación entre sesiones del navegador.
🧪 Fase 4: Calidad y Pruebas
4.1. Refactorización de Código y Componentización
Revisar el código para mejorar la legibilidad, eliminar duplicación.
Asegurar que los componentes sean pequeños y enfocados.
4.2. (Opcional) Pruebas Unitarias Básicas (Jest + React Testing Library)
Probar la renderización de componentes y la lógica simple.
Vite ya viene con configuración para Vitest (similar a Jest).
4.3. Pruebas Manuales de Casos de Uso
Probar diferentes tipos de preguntas, respuestas largas, errores de API, etc.
📄 Fase 5: Documentación y Despliegue
5.1. Completar README.md
Título del Proyecto
Descripción Corta: ¿Qué hace el proyecto? ¿Qué tecnologías usa?
Demo en Vivo (Enlace): (Una vez desplegado)
Screenshots/GIFs
Características Principales
Tecnologías Utilizadas: (React, TypeScript, Vite, Cohere API, Axios, etc.)
Configuración del Proyecto:
Clonar el repositorio.
Instalar dependencias (npm install).
Configurar variables de entorno (.env con REACT_APP_COHERE_API_KEY).
Comandos para ejecutar (npm run dev, npm run build).
Estructura del Proyecto (Opcional): Breve descripción de las carpetas importantes.
Desafíos y Aprendizajes (Opcional pero bueno):
Posibles Mejoras Futuras
Licencia (ej. MIT)
Contacto/Autor
5.2. Añadir GIF/Screenshots del Proyecto al README
Usar herramientas como ScreenToGif, Kap, o la grabadora integrada del SO.
5.3. Desplegar en Plataforma (Vercel, Netlify)
Conectar tu repositorio de GitHub a Vercel/Netlify para despliegue continuo.
Asegurarte de configurar las variables de entorno en la plataforma de despliegue.
5.4. Enlazar Proyecto Desplegado en el README y Portafolio
Añadir el enlace de la demo en vivo a tu README.md y a tu sitio web de portafolio.