import { FaShoppingCart, FaTools, FaShippingFast } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const cartCount = 3;

    return (
        <header
            style={{
                backgroundColor: "#020617",
                color: "#e5e7eb",
                borderBottom: "1px solid #1e293b"
            }}
        >
            <div
                style={{
                    maxWidth: "1200px",
                    margin: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "14px 20px"
                }}
            >
                {/* LEFT: TRUST FEATURES */}
                <div style={{ display: "flex", gap: "30px" }}>
                    <Feature
                        icon={<FaShippingFast size={22} color="#facc15" />}
                        title="Fast Delivery"
                        subtitle="All Over India"
                    />
                    <Feature
                        icon={<FaTools size={22} color="#facc15" />}
                        title="Original Tools"
                        subtitle="Authorized Brands"
                    />
                </div>

                {/* RIGHT: ACTIONS */}
                <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                    {/* Cart */}
                    <div
                        style={{ position: "relative", cursor: "pointer" }}
                        onClick={() => navigate("/cart")}
                    >
                        <FaShoppingCart size={22} color="#f8fafc" />
                        {cartCount > 0 && (
                            <span
                                style={{
                                    position: "absolute",
                                    top: "-6px",
                                    right: "-10px",
                                    backgroundColor: "#ef4444",
                                    color: "#fff",
                                    fontSize: "11px",
                                    fontWeight: "700",
                                    padding: "2px 6px",
                                    borderRadius: "50%"
                                }}
                            >
                                {cartCount}
                            </span>
                        )}
                    </div>

                    {/* Admin Login */}
                    <button
                        onClick={() => navigate("/admin/login")}
                        style={{
                            backgroundColor: "#facc15",
                            color: "#020617",
                            fontWeight: "800",
                            padding: "8px 20px",
                            borderRadius: "8px",
                            border: "none",
                            cursor: "pointer",
                            letterSpacing: "0.5px",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#fde047";
                            e.currentTarget.style.transform = "translateY(-1px)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#facc15";
                            e.currentTarget.style.transform = "translateY(0)";
                        }}
                    >
                        ADMIN
                    </button>
                </div>
            </div>
        </header>
    );
};

const Feature = ({ icon, title, subtitle }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {icon}
        <div>
            <div style={{ fontSize: "13px", fontWeight: "700" }}>{title}</div>
            <div style={{ fontSize: "12px", color: "#9ca3af" }}>{subtitle}</div>
        </div>
    </div>
);

export default Header;
