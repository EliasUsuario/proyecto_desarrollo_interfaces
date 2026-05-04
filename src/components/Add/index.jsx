import { useState } from "react";

const Añadir = ({ onAñadir }) => {
  // Estado local para controlar el texto del input
  const [texto, setTexto] = useState("");

  // Llama a la función del padre y limpia el input
  const handleAñadir = () => {
    onAñadir(texto);
    setTexto("");
  };

  // Permite añadir pulsando Enter en vez del botón
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAñadir();
  };

  return (
    <div className="add-section">
      <input
        type="text"
        placeholder="Ej: Tomates..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="btn-add" onClick={handleAñadir}>
        Añadir
      </button>
    </div>
  );
};

export default Añadir;