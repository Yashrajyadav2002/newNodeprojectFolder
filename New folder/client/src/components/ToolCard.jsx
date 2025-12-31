const ToolCard = ({ product }) => {
  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={`${import.meta.env.VITE_BACKENDURL}${product.images[0]}`}
        alt={product.name}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />

      <div style={{ padding: "12px" }}>
        <h4>{product.name}</h4>
        <p style={{ color: "gray" }}>{product.category}</p>
        <h3 style={{ color: "green" }}>₹ {product.price}</h3>

        <button
          style={{
            width: "100%",
            padding: "8px",
            background: "#facc15",
            border: "none",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ToolCard;
