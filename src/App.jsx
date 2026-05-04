import { useState } from "react";
import Lista from "./components/List";
import Añadir from "./components/Add";
import { productosIniciales } from "./constants.js";

const App = () => {
  // Estado principal: array de productos
  const [productos, setProductos] = useState(productosIniciales);

  // Añade un producto nuevo si no está vacío ni repetido
  const handleAñadir = (nombre) => {
    const nombreLimpio = nombre.trim();
    if (!nombreLimpio) return;

    const yaExiste = productos.some(
      (p) => p.name.toLowerCase() === nombreLimpio.toLowerCase()
    );
    if (yaExiste) return;

    const nuevoProducto = {
      id: Date.now(), // Se usa la fecha como id único
      name: nombreLimpio,
      comprado: false,
    };
    setProductos([...productos, nuevoProducto]);
  };

  // Elimina el producto cuyo id coincida
  const handleEliminar = (id) => {
    setProductos(productos.filter((p) => p.id !== id));
  };

  // Cambia el estado comprado/no comprado de un producto
  const handleToggle = (id) => {
    setProductos(
      productos.map((p) =>
        p.id === id ? { ...p, comprado: !p.comprado } : p
      )
    );
  };

  // Vacía toda la lista
  const handleVaciar = () => {
    setProductos([]);
  };

  return (
    <div className="app">
      <h1> Lista de la Compra</h1>

      {/* Contador de productos totales y comprados */}
      <p className="contador">
        {productos.length} producto{productos.length !== 1 ? "s" : ""} en total ·{" "}
        {productos.filter((p) => p.comprado).length} comprado
        {productos.filter((p) => p.comprado).length !== 1 ? "s" : ""}
      </p>

      {/* Formulario para añadir */}
      <Añadir onAñadir={handleAñadir} />

      {/* Lista de productos */}
      <Lista
        productos={productos}
        onEliminar={handleEliminar}
        onToggle={handleToggle}
      />

      {/* Botón vaciar, solo se muestra si hay productos */}
      {productos.length > 0 && (
        <button className="btn-vaciar" onClick={handleVaciar}>
        Vaciar lista
        </button>
      )}
    </div>
  );
};

export default App;