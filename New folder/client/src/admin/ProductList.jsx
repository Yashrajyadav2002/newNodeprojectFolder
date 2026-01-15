import { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  // ✅ Fetch products
  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const api = `${import.meta.env.VITE_BACKENDURL}/product/all`;
      const res = await axios.get(api, {
        headers: { Authorization: token },
      });
      setProducts(res.data.products || []);
    } catch (err) {
      console.log(err);
      setMessage("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Delete product
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const token = localStorage.getItem("adminToken");
      const api = `${import.meta.env.VITE_BACKENDURL}/admin/deleteproduct/${id}`;
      await axios.delete(api, { headers: { Authorization: token } });
      setMessage("Product deleted successfully");
      fetchProducts();
    } catch (err) {
      console.log(err);
      setMessage("Failed to delete product");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#facc15", marginBottom: "20px" }}>Product List</h2>

      {message && (
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            color: message.includes("success") ? "#22c55e" : "#ef4444",
            fontWeight: "600",
          }}
        >
          {message}
        </div>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              backgroundColor: "#090c1a",
              color: "#f1f5f9",
              padding: "15px",
              borderRadius: "12px",
              boxShadow: "0 5px 20px rgba(0,0,0,0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <img
              src={`${import.meta.env.VITE_BACKENDURL}/${product.defaultImage}`}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "8px", marginBottom: "10px" }}
            />
            <h3 style={{ margin: "5px 0" }}>{product.name}</h3>
            <p style={{ margin: "5px 0" }}>Category: {product.category}</p>
            <p style={{ margin: "5px 0" }}>Price: ₹{product.price}</p>

            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
              <button
                style={{
                  backgroundColor: "#554b21",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  cursor: "pointer",
                  color: "#102480",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f59e0b")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#facc15")}
                onClick={() => alert("Edit feature coming soon!")}
              >
                Edit
              </button>
              <button
                style={{
                  backgroundColor: "#ef4444",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontWeight: "600",
                  cursor: "pointer",
                  color: "#fff",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#dc2626")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ef4444")}
                onClick={() => handleDelete(product._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
