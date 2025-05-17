import "./App.css";
import { useEffect } from "react";
import { postCohereChat } from "./services/cohereAPI";
import { useState } from "react";

function App() {
  const [cohere, setCohere] = useState(null)

  useEffect(() => {
    postCohereChat(setCohere);
  }, []);

  return (
    <main>
      <p>{cohere?.message?.content?.[0].text}</p>
    </main>
  );
}

export default App;
