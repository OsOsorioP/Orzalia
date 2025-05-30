/**
 * Escribe el texto proporcionado en el portapapeles del usuario.
 * @param {string} text - El texto que se va a copiar.
 * @returns {Promise<void>} - Una promesa que se resuelve si la copia es exitosa.
 * @throws {Error} - Lanza un error si la API del portapapeles no está disponible o falla la escritura.
 */

export const copyToClipboard = async (text) => {
  // Se verifica si la API del portapapeles está disponible
  if (!navigator.clipboard || !navigator.clipboard.writeText) {
    console.error(
      "La API del Portapapeles no está disponible en este navegador."
    );
    throw new Error(
      "La funcionalidad de copiar no está soportada en tu navegador."
    );
  }

  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error("Error al intentar copiar al portapapeles:", error);
    throw new Error(
      "No se pudo copiar el texto al portapapeles. Inténtalo manualmente."
    );
  }
};
