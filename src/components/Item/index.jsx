const Producto = ({ producto, onEliminar, onToggle }) => {
  return (
    // Si está comprado, añadimos la clase CSS "comprado" para tacharlo
    <li className={`item ${producto.comprado ? "comprado" : ""}`}>

      {/* Al hacer clic en el nombre se marca/desmarca como comprado */}
      <span className="item-nombre" onClick={() => onToggle(producto.id)}>
        {producto.comprado ? "✅" : "⬜"} {producto.name}
      </span>

      {/* Botón para eliminar este producto */}
      <button className="btn-eliminar" onClick={() => onEliminar(producto.id)}>
        ✕
      </button>
    </li>
  );
};

export default Producto;