const Item = ({ producto, onDelete }) => {
  return (
    <li style={{ 
      display: "flex", 
      justifyContent: "space-between", 
      alignItems: "center",
      padding: "12px",
      borderBottom: "1px solid #eee",
      backgroundColor: "#f9f9f9",
      marginBottom: "5px",
      borderRadius: "4px"
    }}>
      {/* Se muestra el nombre que viene dentro del objeto */}
      <span>{producto.nombre}</span>
      
      <button 
        onClick={() => onDelete(producto.id)}
        style={{ 
          backgroundColor: "#dc3545", 
          color: "white", 
          border: "none", 
          padding: "5px 10px", 
          cursor: "pointer", 
          borderRadius: "4px" 
        }}
      >
        Eliminar
      </button>
    </li>
  );
};

export default Item;