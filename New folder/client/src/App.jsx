import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminLogin from "./admin/AdminLogin";
import AdminDashBoard from "./admin/AdminDashBoard";
import AddProduct from "./admin/AddProduct";
import MyCart from "./pages/MyCart";
import CheckOut from "./pages/CheckOut";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="admin/login" element={<AdminLogin />} />
          <Route path="mycart" element={<MyCart />} />
          <Route path="checkout" element={<CheckOut />} />
          <Route path="registration" element={<Registration />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* Admin Dashboard Routes */}
        <Route path="/dashboard" element={<AdminDashBoard />}>
          <Route path="addproduct" element={<AddProduct />} />
        </Route>

        {/* Catch all unmatched routes */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
