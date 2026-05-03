import { useState } from "react";

const Add = ({ onAdd }) => {
  // Estado local para controlar el input
  const [input, setInput] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault(); // Evita que la página se recargue al pulsar el botón
    
    if (input.trim() !== "") {
      onAdd(input); // Envio del texto a la App.jsx
      setInput(""); // Limpieza del cajón para el siguiente producto
    }
  };

  return (
    <form onSubmit={manejarEnvio} style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="¿Qué necesitas comprar?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ flex: 1, padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
      />
      <button 
        type="submit" 
        style={{ padding: "8px 16px", cursor: "pointer", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px" }}
      >
        Añadir
      </button>
    </form>
  );
};

export default Add;