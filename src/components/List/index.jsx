import Producto from "../Item";

const Lista = ({ productos, onEliminar, onToggle }) => {
  // Si no hay productos, se muestra un mensaje en vez de la lista vacía
  if (productos.length === 0) {
    return <p className="lista-vacia">La lista está vacía. ¡Añade productos!</p>;
  }

  return (
    <ul className="lista">
      {/* Se recorre el array y se renderiza un Producto por cada elemento */}
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          onEliminar={onEliminar}
          onToggle={onToggle}
        />
      ))}
    </ul>
  );
};

export default Lista;