import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area, RadarChart,
  Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Treemap,
} from "recharts";
import { FaBox, FaHammer, FaShoppingCart, FaPlusSquare } from "react-icons/fa";

/* ================= CONSTANTS ================= */
const COLORS = ["#f97316", "#ffb347", "#555555", "#777777"];
const CATEGORY_ORDER = ["drills", "hammers", "screwdrivers", "wrenches"];

/* ================= COMPONENT ================= */
const AdminDashboard = () => {
  const location = useLocation();
  const showDashboard = location.pathname === "/admin-dashboard";

  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:8000/admin/dashboard-stats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data.stats);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  // Chart Data
  const productCategoryData = CATEGORY_ORDER.map(cat => {
    const found = stats?.productCategories?.find(i => i._id === cat);
    return { name: cat.charAt(0).toUpperCase() + cat.slice(1), value: found ? found.count : 0 };
  });

  const weekMap = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  const weeklyOrdersData = stats?.weeklyOrders?.map(d => ({ day: weekMap[d._id-1], orders: d.orders })) || [];
  const revenueData = stats?.monthlyRevenue?.map(m => ({ month: new Date(2024,m._id-1).toLocaleString("default",{month:"short"}), revenue: m.revenue })) || [];
  const categoryPerformanceData = productCategoryData.map(c => ({ category: c.name, score: c.value*10 }));
  const revenueTreeData = CATEGORY_ORDER.map(cat => {
    const found = stats?.revenueByCategory?.find(i=>i._id===cat);
    return { name: cat.charAt(0).toUpperCase()+cat.slice(1), size: found?found.size:1 };
  });

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box;font-family:Inter,sans-serif;}
        body{background:#f6f7fb;}
        .admin-layout{display:flex;min-height:100vh;}

        /* SIDEBAR */
        .admin-sidebar{
          width:260px;
          background:#020617;
          color:#e5e7eb;
          padding:24px;
          flex-shrink:0;
          display:flex;
          flex-direction:column;
          gap:20px;
        }
        .brand{
          font-size:24px;
          font-weight:700;
          margin-bottom:40px;
          text-align:center;
          color:#f97316;
        }
        .admin-sidebar nav a{
          display:flex;
          align-items:center;
          gap:12px;
          padding:12px 16px;
          border-radius:8px;
          color:#cbd5f5;
          text-decoration:none;
          font-weight:600;
          transition:0.3s;
        }
        .admin-sidebar nav a:hover, .admin-sidebar nav .active{
          background:#f97316;
          color:#fff;
        }

        /* MAIN */
        .admin-main{
          flex:1;
          padding:30px;
        }
        .admin-header{
          text-align:center;
          margin-bottom:30px;
          font-size:24px;
          font-weight:700;
        }

        .charts-grid{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
        }

        .card{
          background:#fff;
          padding:20px;
          border-radius:14px;
          box-shadow:0 12px 30px rgba(0,0,0,0.06);
        }
        .card h3{font-size:16px;margin-bottom:12px;}

        /* RESPONSIVE */
        @media(max-width:1024px){.charts-grid{grid-template-columns:repeat(2,1fr);}}
        @media(max-width:768px){
          .charts-grid{grid-template-columns:1fr;}
          .admin-layout{flex-direction:column;}
          .admin-sidebar{width:100%;flex-direction:row;overflow-x:auto;}
          .admin-sidebar nav a{white-space:nowrap;}
        }
      `}</style>

      <div className="admin-layout">
        {/* Sidebar */}
        <aside className="admin-sidebar">
          <h2 className="brand">HardwareHub</h2>
          <nav>
            <NavLink to="products"><FaBox /> Products</NavLink>
            <NavLink to="/admin-dashboard" end><FaShoppingCart /> Dashboard</NavLink>
            <NavLink to="add-product"><FaPlusSquare /> Add Product</NavLink>
            <NavLink to="orders"><FaHammer /> Orders</NavLink>
          </nav>
        </aside>

        {/* Main */}
        <main className="admin-main">
          {showDashboard && <div className="admin-header">Hardware Tools Dashboard</div>}

          {showDashboard && (
            <div className="charts-grid">
              {/* Products Pie */}
              <div className="card">
                <h3>Products by Category</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <PieChart>
                    <Pie data={productCategoryData} dataKey="value" innerRadius={60} outerRadius={90}>
                      {productCategoryData.map((_,i)=><Cell key={i} fill={COLORS[i]} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Weekly Orders */}
              <div className="card">
                <h3>Weekly Orders</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <BarChart data={weeklyOrdersData}><XAxis dataKey="day" /><YAxis /><Tooltip /><Bar dataKey="orders" fill="#f97316" /></BarChart>
                </ResponsiveContainer>
              </div>

              {/* Revenue Overview */}
              <div className="card">
                <h3>Revenue Overview</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <LineChart data={revenueData}><XAxis dataKey="month" /><YAxis /><Tooltip /><Line dataKey="revenue" stroke="#f97316" strokeWidth={3} /></LineChart>
                </ResponsiveContainer>
              </div>

              {/* Order Trend */}
              <div className="card">
                <h3>Order Trend</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <AreaChart data={weeklyOrdersData}><XAxis dataKey="day" /><YAxis /><Tooltip /><Area dataKey="orders" stroke="#ffa500" fill="#fff2e6" /></AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Category Performance */}
              <div className="card">
                <h3>Category Performance</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <RadarChart data={categoryPerformanceData}><PolarGrid /><PolarAngleAxis dataKey="category" /><PolarRadiusAxis /><Radar dataKey="score" stroke="#f97316" fill="#ffa500" fillOpacity={0.6} /></RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Revenue by Category */}
              <div className="card">
                <h3>Revenue by Category</h3>
                <ResponsiveContainer width="100%" height={240}>
                  <Treemap data={revenueTreeData} dataKey="size" stroke="#fff" fill="#f97316" />
                </ResponsiveContainer>
              </div>
            </div>
          )}

          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
