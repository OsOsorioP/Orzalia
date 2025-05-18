import { useState } from "react";


const IdeaGeneratorTool=()=>{
    const [topic, setTopic] = useState(null);
    const [ideas, setIdeas] = useState([]);

    return(
        <section>
            <h2>Generador de Ideas para Contenido</h2>
            <label htmlFor="">tema o palabra clave principal</label>
            <input type="text" />
            <label htmlFor="">cantidad de ideas</label>
            <input type="text" />
            <label htmlFor="">tipo de contenido</label>
            <input type="text" name="" id="" />
            <button>
                Generar Ideas
            </button>
            <ul>
                <li>idea 1</li>
            </ul>

        </section>
    )
}

export default IdeaGeneratorTool;