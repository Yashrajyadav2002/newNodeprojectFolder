import { Navigate, Outlet } from "react-router-dom";

const AdminProtectedRoute = () => {
  const isAdminLoggedIn = localStorage.getItem("adminToken");

  return isAdminLoggedIn ? <Outlet /> : <Navigate to="/admin/login" />;
};

export default AdminProtectedRoute;
