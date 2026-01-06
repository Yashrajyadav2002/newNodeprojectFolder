import { Route, Routes } from "react-router-dom";
import Layout2 from "./Layout2";
import Layout1 from "./Layout1";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AdminDashboard from "./admin/AdminDashBoard";
import CategoryPage from "./pages/CategoryPage";
import AddProduct from "./admin/AddProduct";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Signup from "./pages/Signup";
import OrderConfirmation from "./pages/OrderConfirmation";
import AdminOrders from "./admin/AdminOrder";
import AdminProducts from "./admin/AdminProduct";

function App() {
  return (
    <Routes>
      {/* MAIN WEBSITE + ADMIN */}
      <Route path="/" element={<Layout1 />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="order-confirmation" element={<OrderConfirmation />} />
        <Route path="orders" element={<Orders />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        </Route>

        {/* ADMIN */}
        <Route path="admin-dashboard" element={<AdminDashboard />}>
          <Route path="add-product" element={<AddProduct />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="products" element={<AdminProducts />} />
          
      </Route>

      {/* AUTH (NO HEADER/FOOTER) */}
      <Route path="/login" element={<Layout2 />}>
        <Route index element={<Login />} />
      </Route>

      <Route path="/signup" element={<Layout2 />}>
        <Route index element={<Signup />} />
      </Route>
    </Routes>
  );
}

export default App;
