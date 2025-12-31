import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import CheckOut from "./pages/CheckOut";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

// Admin Components
import AdminLogin from "./admin/AdminLogin";
import AdminDashBoard from "./admin/AdminDashBoard";
import AddProduct from "./admin/AddProduct";
import ProductList from "./admin/ProductList";
// import OrdersList from "./admin/OrdersList";
// import UsersList from "./admin/UsersList";
import AdminProtectedRoute from "./admin/AdminProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* USER ROUTES */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="mycart" element={<MyCart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* PROTECTED ADMIN ROUTES */}
        <Route path="/admin" element={<AdminProtectedRoute />}>
          <Route path="dashboard" element={<AdminDashBoard />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="productlist" element={<ProductList />} />
          {/* <Route path="orders" element={<OrdersList />} /> */}
          {/* <Route path="users" element={<UsersList />} /> */}
        </Route>

        {/* FALLBACK */}
        <Route path="*" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
