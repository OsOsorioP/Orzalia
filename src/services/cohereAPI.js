import axios from "axios";

const COHERE_API_KEY = import.meta.env.VITE_COHERE_API_KEY;
const COHERE_API_URL = import.meta.env.VITE_COHERE_API_URL;

export const postCohereChat = async (
  systemPrompt,
  userMessage,
  setIsLoading,
  setError
) => {
  try {
    setIsLoading(true);
    const res = await axios.post(
      COHERE_API_URL,
      {
        stream: false,
        model: "command-a-03-2025",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userMessage },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.data) {
      throw new Error("Error al conectarse a la API");
    }
    return res.data.message.content?.[0].text;
  } catch (err) {
    setError(err);
  } finally {
    setIsLoading(false);
  }
};
