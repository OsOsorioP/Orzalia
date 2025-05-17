import axios from "axios";

const COHERE_API_KEY = import.meta.env.VITE_COHERE_API_KEY;
const COHERE_API_URL = import.meta.env.VITE_COHERE_API_URL;

export const postCohereChat = async (setCohere) => {
  try {
        const res = await axios
            .post(
                COHERE_API_URL,
                {
                    stream: false,
                    model: "command-a-03-2025",
                    messages: [{ role: "user", content: "Hablame sobre los LLMs" }],
                },
                {
                    headers: {
                        Authorization: `Bearer ${COHERE_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                }
            );
        if (!res.data) {
            throw new Error("Error");
        }
        console.log(res.data);
        return setCohere(res.data);
    } catch (err) {
        console.log(err);
    }
};
