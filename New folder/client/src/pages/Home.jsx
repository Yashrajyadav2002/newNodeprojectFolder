import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import ToolCard from "../components/ToolCard";

import banner1 from "../assets/baner img2.avif";
import banner2 from "../assets/baner ing3.avif";
import banner3 from "../assets/banner img1.jpg";

const Home = () => {
  const [products, setProducts] = useState([]);

  // 🔥 FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKENDURL}/products`
        );
        setProducts(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      {/* ===== HERO CAROUSEL ===== */}
      <Carousel>
        {[banner1, banner2, banner3].map((img, index) => (
          <Carousel.Item key={index}>
            <img
              src={img}
              alt={`slide-${index}`}
              style={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
                filter: "brightness(65%)"
              }}
            />
            <Carousel.Caption
              style={{
                background: "rgba(0,0,0,0.5)",
                padding: "20px 30px",
                borderRadius: "10px"
              }}
            >
              <h2
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  color: "#facc15"
                }}
              >
                Professional Tools
              </h2>
              <p style={{ color: "#f1f5f9" }}>
                Power Tools, Hand Tools & Industrial Equipment
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* ===== TOP BRANDS ===== */}
      <div style={{ textAlign: "center", margin: "60px 0 30px", fontSize: "2rem", fontWeight: "800" }}>
        Top Brands
        <div style={{ width: "120px", height: "4px", background: "linear-gradient(90deg,#facc15,#f59e0b)", margin: "10px auto" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px" }}>
        {["Bosch", "Makita", "Dewalt", "Stanley", "Hitachi"].map((brand, index) => (
          <div key={index} style={{ width: "140px", height: "80px", border: "2px solid #facc15", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "700" }}>
            {brand}
          </div>
        ))}
      </div>

      {/* ===== CATEGORIES ===== */}
      <div style={{ textAlign: "center", margin: "60px 0 30px", fontSize: "2rem", fontWeight: "800" }}>
        Categories
        <div style={{ width: "120px", height: "4px", background: "linear-gradient(90deg,#facc15,#f59e0b)", margin: "10px auto" }} />
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "25px" }}>
        {["Power Tools", "Hand Tools", "Electrical", "Safety Gear", "Construction"].map((cat, index) => (
          <div key={index} style={{ width: "180px", height: "120px", border: "2px solid #f59e0b", borderRadius: "10px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "700" }}>
            {cat}
          </div>
        ))}
      </div>

      {/* ===== PRODUCTS SECTION (NEW) ===== */}
      <div style={{ textAlign: "center", margin: "70px 0 30px", fontSize: "2rem", fontWeight: "800" }}>
        Featured Products
      </div>

      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "30px", padding: "0 20px" }}>
        {products.map((product) => (
          <ToolCard key={product._id} product={product} />
        ))}
      </div>

      {/* ===== CALL TO ACTION ===== */}
      <div style={{ margin: "80px 0", textAlign: "center", padding: "50px", background: "linear-gradient(90deg,#facc15,#f59e0b)", fontWeight: "700" }}>
        Shop Industrial Tools Now & Get Fast Delivery Across India!
      </div>
    </>
  );
};

export default Home;
