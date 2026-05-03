import Item from "../Item";

const List = ({ productos, onDelete }) => {
  // Si no hay productos, se muestra un mensaje
  if (productos.length === 0) {
    return <p style={{ color: "#666", fontStyle: "italic" }}>La lista está vacía.</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {/* Se recorre el array y por cada producto se renderiza un <Item /> */}
      {productos.map((producto) => (
        <Item 
          key={producto.id} // key única para React (por hacer el map)
          producto={producto} 
          onDelete={onDelete} 
        />
      ))}
    </ul>
  );
};

export default List;