import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist, increaseQuantity } from "../cartslice";
import { FaRegHeart } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [mydata, setMydata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.mycart.cart);

  const loadData = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKENDURL}/product/product-display`
      );
      if (Array.isArray(data)) setMydata(data);
      else if (Array.isArray(data.products)) setMydata(data.products);
      else setMydata([]);
    } catch {
      setMydata([]);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredData = mydata.filter(
    (item) => !selectedCategory || item.category === selectedCategory
  );

  return (
    <>
      <style>{`
        .section-header{padding:30px 80px 10px}
        .section-header h2{font-size:28px;font-weight:800}
        .section-header p{color:#666}

        .category-section{padding:60px 80px 20px}
        .category-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px}
        .category-card{
          background:linear-gradient(145deg,#fff,#f1f3f6);
          border-radius:24px;padding:35px 25px;text-align:center;
          box-shadow:0 15px 35px rgba(0,0,0,.08);
          transition:.3s;cursor:pointer
        }
        .category-card:hover{transform:translateY(-10px);box-shadow:0 25px 55px rgba(0,0,0,.18)}
        .category-icon{font-size:45px;margin-bottom:15px}
        .category-card h3{font-size:18px;font-weight:700}
        .category-card p{font-size:13px;color:#666}
        .clear-btn{
          margin:20px 80px;padding:10px 20px;border-radius:14px;
          background:#4b0082;color:#fff;border:none;font-weight:600;cursor:pointer
        }

        .products-container{
          padding:20px 80px 60px;
          display:grid;grid-template-columns:repeat(4,1fr);gap:30px
        }
        .product-card{
          background:linear-gradient(180deg,#fff,#f7f7f7);
          border-radius:26px;overflow:hidden;
          box-shadow:0 20px 45px rgba(0,0,0,.08);
          cursor:pointer;transition:.3s
        }
        .product-card:hover{transform:translateY(-10px);box-shadow:0 30px 65px rgba(0,0,0,.18)}
        .product-image{
          height:230px;background:#f1f1f1;
          display:flex;align-items:center;justify-content:center
        }
        .product-image img{
          height:85%;object-fit:contain;
          filter:drop-shadow(0 8px 12px rgba(0,0,0,.2))
        }
        .product-info{padding:20px}
        .product-info h4{font-size:16px;font-weight:800}
        .rating{color:#f4b400;font-size:14px;margin:6px 0}
        .rating span{color:#555;font-size:12px;margin-left:6px}
        .price-box{display:flex;align-items:center;margin-bottom:12px}
        .price{color:#5F23C6;font-weight:800}
        .mrp{margin-left:8px;text-decoration:line-through;color:#888}
        .offer{margin-left:8px;color:#1a7f37;font-weight:700}
        .add-cart-btn{
          width:100%;padding:10px;border-radius:14px;
          background:linear-gradient(90deg,#5F23C6,#7b3fe4);
          color:#fff;border:none;font-weight:700;cursor:pointer
        }
        @media(max-width:1000px){.products-container{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:600px){.products-container{grid-template-columns:1fr;padding:20px}}
      `}</style>

      <Slider />

      {/* CATEGORY */}
      <div className="category-section">
        <div className="section-header">
          <h2>Shop by Category</h2>
          <p>Professional tools for every job</p>
        </div>

        <div className="category-grid">
          {[
            { name: "Hand Tools", icon: "🔨", desc: "Hammers & spanners" },
            { name: "Power Tools", icon: "⚡", desc: "Drills & cutters" },
            { name: "Tool Kits", icon: "🧰", desc: "Complete kits" },
            { name: "Safety Gear", icon: "🦺", desc: "Helmets & gloves" },
          ].map((cat) => (
            <div
              key={cat.name}
              className="category-card"
              onClick={() => setSelectedCategory(cat.name)}
            >
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
            </div>
          ))}
        </div>

        {selectedCategory && (
          <button className="clear-btn" onClick={() => setSelectedCategory(null)}>
            Clear Filter
          </button>
        )}
      </div>

      {/* PRODUCTS */}
      <div className="section-header">
        <h2>{selectedCategory || "Featured Products"}</h2>
        <p>{selectedCategory ? `All ${selectedCategory}` : "Top picks for you"}</p>
      </div>

      <div className="products-container">
        {filteredData.map((item) => {
          const existingItem = cart.find((c) => c.id === item._id);
          return (
            <div
              className="product-card"
              key={item._id}
              onClick={() => navigate(`/product/${item._id}`)}
            >
              <div className="product-image">
                <img src={item.defaultImage} alt={item.name} />
              </div>

              <div className="product-info">
                <h4>{item.name}</h4>

                <div className="rating">
                  {"★".repeat(Math.floor(item.starRating || 0))}
                  {"☆".repeat(5 - Math.floor(item.starRating || 0))}
                  <span>{item.starRating || 0}</span>
                </div>

                <div className="price-box">
                  <span className="price">₹{item.price}</span>
                  <span className="mrp">₹{item.MRP}</span>
                  <span className="offer">30% off</span>

                  <FaRegHeart
                    style={{ marginLeft: "auto", cursor: "pointer" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToWishlist({ ...item, qnty: 1 }));
                      toast.info("Added to wishlist ❤️");
                    }}
                  />
                </div>

                <button
                  className="add-cart-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (existingItem) dispatch(increaseQuantity(existingItem));
                    else
                      dispatch(
                        addToCart({
                          id: item._id,
                          name: item.name,
                          price: item.price,
                          image: item.defaultImage,
                          qnty: 1,
                        })
                      );
                    toast.success("Added to cart");
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
};

export default Home;
