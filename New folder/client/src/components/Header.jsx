import { FaShoppingCart, FaTools, FaShippingFast } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <div
                id="header"
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "14px 20px",
                    backgroundColor: "#f8fafc",
                    borderBottom: "1px solid #e5e7eb"
                }}
            >
                {/* Feature 1 */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}
                >
                    <FaShippingFast size={22} color="#f59e0b" />
                    <div>
                        <div style={{ fontSize: "13px", fontWeight: "700" }}>
                            Fast Delivery
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280" }}>
                            Across India
                        </div>
                    </div>
                </div>

                {/* Feature 2 */}
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                    }}
                >
                    <FaTools size={22} color="#f59e0b" />
                    <div>
                        <div style={{ fontSize: "13px", fontWeight: "700" }}>
                            Genuine Tools
                        </div>
                        <div style={{ fontSize: "12px", color: "#6b7280" }}>
                            Trusted Brands
                        </div>
                    </div>
                </div>

                {/* Cart */}
                <div
                    style={{
                        position: "relative",
                        cursor: "pointer"
                    }}
                >
                    <FaShoppingCart size={22} color="#020617" />
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
                        3
                    </span>
                </div>

                {/* Admin Login Button */}
                <button
                    onClick={() => navigate("/admin/login")}
                    style={{
                        backgroundColor: "#facc15",
                        color: "#020617",
                        fontWeight: "700",
                        padding: "6px 14px",
                        borderRadius: "6px",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.3s"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f59e0b")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#facc15")}
                >
                    Admin Login
                </button>
            </div>
        </>
    );
};

export default Header;
