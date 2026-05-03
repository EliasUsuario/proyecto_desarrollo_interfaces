import { useState } from "react";
import List from "./components/List";
import Add from "./components/Add";

const App = () => {
  // array vacío para la lista
  const [productos, setProductos] = useState([]);

  //Función para añadir productos
  const agregarProducto = (nombreProducto) => {
    // Limpieza espacios en blanco al principio y al final
    const productoLimpio = nombreProducto.trim();
    
  const existe = productos.some((p) => p.nombre.toLowerCase() === productoLimpio.toLowerCase());
    if (existe) {
      alert("¡Ese producto ya está en la lista!");
      return;
    }

    // Creamos el objeto del producto
    const nuevoProducto = {
      id: Date.now(), // Usamos la fecha exacta en milisegundos como ID único
      nombre: productoLimpio,
      comprado: false
    };

    // Actualización del estado
    setProductos([...productos, nuevoProducto]);
  };

  //Función para eliminar un producto concreto
  const eliminarProducto = (id) => {
    const nuevaLista = productos.filter((producto) => producto.id !== id);
    setProductos(nuevaLista);
  };

  return (
    <section style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h2>Lista de la Compra</h2>
      
      {/*función añadir al componente Add */}
      <Add onAdd={agregarProducto} />
      
      {/*array de productos y función de borrar componente en List */}
      <List productos={productos} onDelete={eliminarProducto} />

    </section>
  );
};

export default App;