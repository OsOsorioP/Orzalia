import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const COHERE_API_KEY = import.meta.env.COHERE_API_KEY;
  const COHERE_API_URL = "https://api.cohere.com/v2/chat";
  const [cohere, setCohere] = useState(null);

  useEffect(() => {
    axios
      .post(
        COHERE_API_URL,
        {
          stream: false,
          model: "command-a-03-2025",
          messages: [{ role: "user", content: "Tell me about LLMs" }],
        },
        {
          headers: {
            Authorization: `Bearer ${COHERE_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (!res.data) {
          throw new Error("Error");
        }
        console.log(res.data);
        setCohere(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [COHERE_API_KEY]);

  return (
    <main>
      <p>{cohere?.message?.content?.[0].text}</p>
    </main>
  );
}

export default App;
