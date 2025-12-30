import { FaCartPlus, FaStar } from "react-icons/fa";

const ToolCard = ({ product }) => {
    return (
        <>
            <div
                style={{
                    width: "220px",
                    backgroundColor: "#f8fafc",
                    border: "2px solid #f59e0b",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    textAlign: "center"
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.45)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.3)";
                }}
            >
                {/* Product Image */}
                <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        width: "100%",
                        height: "180px",
                        objectFit: "cover",
                        backgroundColor: "#e5e7eb"
                    }}
                />

                {/* Product Info */}
                <div style={{ padding: "12px" }}>
                    <h3
                        style={{
                            fontSize: "1rem",
                            fontWeight: "700",
                            color: "#020617",
                            marginBottom: "8px",
                            height: "38px",
                            overflow: "hidden"
                        }}
                    >
                        {product.name}
                    </h3>

                    <div style={{ display: "flex", justifyContent: "center", gap: "3px", marginBottom: "8px" }}>
                        {[...Array(product.rating)].map((_, i) => (
                            <FaStar key={i} color="#facc15" size={12} />
                        ))}
                        {[...Array(5 - product.rating)].map((_, i) => (
                            <FaStar key={i} color="#d1d5db" size={12} />
                        ))}
                    </div>

                    <p style={{ fontSize: "1rem", fontWeight: "700", color: "#f59e0b", marginBottom: "12px" }}>
                        ₹{product.price}
                    </p>

                    {/* Add to Cart Button */}
                    <button
                        style={{
                            backgroundColor: "#f59e0b",
                            border: "none",
                            padding: "8px 14px",
                            borderRadius: "6px",
                            color: "#020617",
                            fontWeight: "700",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#facc15";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#f59e0b";
                        }}
                    >
                        <FaCartPlus style={{ marginRight: "6px" }} />
                        Add to Cart
                    </button>
                </div>
            </div>
        </>
    );
};

export default ToolCard;
