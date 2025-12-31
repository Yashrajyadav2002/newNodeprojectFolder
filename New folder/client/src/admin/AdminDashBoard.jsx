import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const AdminDashBoard = () => {
  const navigate = useNavigate();

  // ✅ JWT check
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) navigate("/adminlogin");
  }, [navigate]);

  // ✅ Logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/adminlogin");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#f1f5f9" }}>
      
      {/* Header */}
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        backgroundColor: "#020617",
        color: "#facc15",
        boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
      }}>
        <h1>Welcome to Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "#ef4444",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "0.3s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#dc2626"}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#ef4444"}
        >
          Logout
        </button>
      </header>

      {/* Main */}
      <div style={{ display: "flex", flex: 1, minHeight: "calc(100vh - 80px)" }}>

        {/* Left Menu */}
        <nav style={{
          width: "220px",
          backgroundColor: "#020617",
          color: "#f1f5f9",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px"
        }}>
          <Link to="addproduct" style={{ color: "#f1f5f9", textDecoration: "none", fontWeight: 600 }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#facc15"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#f1f5f9"}>
            Add Product
          </Link>
          <Link to="productlist" style={{ color: "#f1f5f9", textDecoration: "none", fontWeight: 600 }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#facc15"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#f1f5f9"}>
            Product List
          </Link>
          <Link to="orders" style={{ color: "#f1f5f9", textDecoration: "none", fontWeight: 600 }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#facc15"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#f1f5f9"}>
            Orders
          </Link>
          <Link to="users" style={{ color: "#f1f5f9", textDecoration: "none", fontWeight: 600 }}
            onMouseEnter={(e) => e.currentTarget.style.color = "#facc15"}
            onMouseLeave={(e) => e.currentTarget.style.color = "#f1f5f9"}>
            Users
          </Link>
        </nav>

        {/* Right Content */}
        <div style={{
          flex: 1,
          padding: "30px",
          backgroundColor: "#f9fafb",
          overflowY: "auto"
        }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
