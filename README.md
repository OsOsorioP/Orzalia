<p align="center">
  <img src="https://github.com/OsOsorioP/Orzalia/blob/main/src/assets/Logo.png?raw=true" alt="Logo de Orzalia" width="300"/>
</p>
<!-- <p align="center">
  <img src="URL_A_TU_GIF_DEMO.gif" alt="Demostración de Orzalia en acción" width="700"/>
</p> -->

# Orzalia - ¡Tu Asistente IA para Contenido Inteligente!

[![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Mejoras-yellowgreen)](https://github.com/OsOsorioP/Orzalia)

Orzalia es una aplicación web interactiva construida con React, JavaScript y Vite. Se integra con la potente API de Cohere para ofrecer herramientas inteligentes que transforman tu manera de crear y procesar contenido textual. Este proyecto demuestra el consumo de APIs de IA, la creación de interfaces de usuario dinámicas y la aplicación de buenas prácticas de desarrollo frontend.


## Tech Stack
**Front-end:**
React (v18+), 
JavaScript (ES6+), 
Vite, 
React Router DOM

**Comunicación API:** 
[Cohere API](https://cohere.com/) (Modelos de Lenguaje Grandes), 
Axios

**Estilizado:** 
CSS Modules, 
CSS Global (para resets y estilos base)

**Iconos:** 
[Heroicons](https://heroicons.com/)

**Despliegue:** 
Vercel

## Demo

[Página web](https://orzalia.vercel.app/)

<p align="center">
  <img src="https://github.com/OsOsorioP/Imagenes/blob/main/Orzalia/Orzalia01.png?raw=true" alt="Logo de Orzalia" width="600"/>
</p>
<p align="center">
  <img src="https://github.com/OsOsorioP/Imagenes/blob/main/Orzalia/Orzalia02.png?raw=true" alt="Logo de Orzalia" width="600"/>
</p>
<p align="center">
  <img src="https://github.com/OsOsorioP/Imagenes/blob/main/Orzalia/Orzalia04.png?raw=true" alt="Logo de Orzalia" width="600"/>
</p>

## Features

1. **Asistente de Reescritura Inteligente**

2. **Generador de Ideas para Contenido**

3. **Resumidor de Texto Eficiente**

4. **Interfaz Intuitiva y Responsiva**

5. **Carga Rápida con Lazy Loading**


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


## Hoja de Ruta del Proyecto (Estado Actual y Próximos Pasos)

Este proyecto se desarrolla siguiendo fases iterativas. Actualmente nos encontramos en fase 3 - Mejoras de UI/UX y funcionalidades para los features.

*   [x] **Fase 1: Funcionamiento de los Features Core**
    *   [x] Implementación del Resumidor de Texto.
    *   [x] Implementación del Generador de Ideas.
    *   [x] Implementación del Asistente de Reescritura.
*   [x] **Fase 2: Interfaz de Usuario Interactiva y Navegación**
    *   [x] Creación de componentes de UI reutilizables (Button, Input, Textarea, Select, Card).
    *   [x] Implementación de React Router DOM para la navegación entre herramientas.
    *   [x] Diseño básico y layout de cada herramienta.
    *   [x] Lazy loading para las rutas.
*   [ ] **Fase 3: Mejoras de UI/UX y Funcionalidades Adicionales** (En progreso / Próximos pasos)
    *   [ ] Agregar a los componentes Props Type. 
    *   [ ] Pulido de estilos y responsividad avanzada.
    *   [ ] Añadir feedback visual más elaborado (ej. toasts para "copiado").
    *   [x] Implementar opción de "Copiar al portapapeles" para todas las herramientas.
    *   [ ] Almacenamiento local para preferencias o historial.
    *   [ ] Añadir más opciones de configuración para las llamadas a Cohere (temperatura, modelos específicos).
*   [ ] **Fase 4: Calidad y Pruebas**
    *   [ ] Refactorización de código y optimizaciones.
    *   [ ] Pruebas unitarias y de integración.
*   [ ] **Fase 5: Documentación Final y Despliegue**
    *   [x] README.md inicial.
    *   [ ] Completar y pulir README.md.
    *   [x] Despliegue inicial en Vercel.

## Posibles Mejoras Futuras

*   Streaming de respuestas de Cohere para una sensación más instantánea.
*   Soporte para múltiples conversaciones o historial persistente por usuario (requeriría backend y autenticación).
*   Opción para exportar los resultados (ej. a .txt o .md).
*   Integración con otras APIs para enriquecer las capacidades (ej. búsqueda web para el generador de ideas).
*   Modo oscuro.


## Contribuciones

Las contribuciones son bienvenidas. Si tienes ideas para mejorar Orzalia, por favor abre un issue para discutirlo o envía un pull request.


## Contacto

Oscar Osorio – [@OsOsorioP (Twitter)](https://twitter.com/OsOsorioP) – [oscar.osorio1884@gmail.com](mailto:oscar.osorio1884@gmail.com)

Enlace al Proyecto: [https://github.com/OsOsorioP/Orzalia](https://github.com/OsOsorioP/Orzalia)
