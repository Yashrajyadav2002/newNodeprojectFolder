import React, { useEffect, useState } from "react";
import Slider from "../components/Slider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  increaseQuantity,
} from "../cartslice";
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
    const { data } = await axios.get(
      `${import.meta.env.VITE_BACKENDURL}/product/product-display`
    );
    setMydata(data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <style>{`
        /* ===== CATEGORY SECTION ===== */
        .category-section {
          padding: 60px 80px 20px;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .category-card {
          background: linear-gradient(145deg, #ffffff, #f1f3f6);
          border-radius: 22px;
          padding: 30px 20px;
          text-align: center;
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: all 0.35s ease;
        }

        .category-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 22px 45px rgba(0,0,0,0.18);
        }

        .category-icon {
          font-size: 42px;
          margin-bottom: 14px;
        }

        .category-card h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 6px;
          color: #222;
        }

        .category-card p {
          font-size: 13px;
          color: #666;
        }

        .clear-btn {
          margin: 20px 80px;
          padding: 8px 16px;
          background: #4b0082;
          color: white;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
        }

        .clear-btn:hover {
          background: #6a1bb1;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .category-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="home-page">
        <Slider />

        {/* ===== CATEGORY SECTION ===== */}
        <div className="category-section">
          <div className="section-header">
            <h2>Shop by Category</h2>
            <p>Professional tools for every job</p>
          </div>

          <div className="category-grid">
            <div
              className="category-card"
              onClick={() => setSelectedCategory("Hand Tools")}
            >
              <div className="category-icon">🔨</div>
              <h3>Hand Tools</h3>
              <p>Hammers, spanners & screwdrivers</p>
            </div>

            <div
              className="category-card"
              onClick={() => setSelectedCategory("Power Tools")}
            >
              <div className="category-icon">⚡</div>
              <h3>Power Tools</h3>
              <p>Drills, grinders & cutters</p>
            </div>

            <div
              className="category-card"
              onClick={() => setSelectedCategory("Tool Kits")}
            >
              <div className="category-icon">🧰</div>
              <h3>Tool Kits</h3>
              <p>Complete professional kits</p>
            </div>

            <div
              className="category-card"
              onClick={() => setSelectedCategory("Safety Gear")}
            >
              <div className="category-icon">🦺</div>
              <h3>Safety Gear</h3>
              <p>Helmets, gloves & shoes</p>
            </div>
          </div>

          {selectedCategory && (
            <button
              className="clear-btn"
              onClick={() => setSelectedCategory(null)}
            >
              Clear Filter
            </button>
          )}
        </div>

        {/* ================= FEATURED PRODUCTS ================= */}
        <div className="section-header">
          <h2>{selectedCategory || "Featured Products"}</h2>
          <p>{selectedCategory ? `All ${selectedCategory}` : "Top picks hand-selected for you"}</p>
        </div>

        <div className="products-container">
          {mydata
            .filter(item => !selectedCategory || item.category === selectedCategory)
            .map((item) => {
              const existingItem = cart.find(
                (cartItem) => cartItem.id === item._id
              );

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
                      <span>{item.starRating || 0} stars</span>
                    </div>

                    <div className="price-box">
                      <span className="price">₹{item.price}</span>
                      <span className="mrp">₹{item.MRP}</span>
                      <span className="offer">30% off</span>

                      <FaRegHeart
                        style={{
                          fontSize: "20px",
                          marginLeft: "30px",
                          cursor: "pointer",
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          dispatch(addToWishlist({ ...item, qnty: 1 }));
                          toast.info("Added to wishlist ❤️", {
                            autoClose: 1200,
                          });
                        }}
                      />
                    </div>

                    <button
                      className="add-cart-btn"
                      onClick={(e) => {
                        e.stopPropagation();

                        if (existingItem) {
                          dispatch(increaseQuantity(existingItem));
                          toast.info("Quantity increased", {
                            autoClose: 1200,
                          });
                        } else {
                          dispatch(
                            addToCart({
                              id: item._id,
                              name: item.name,
                              description: item.description,
                              category: item.category,
                              price: item.price,
                              image: item.defaultImage,
                              qnty: 1,
                            })
                          );

                          toast.success("Item added to cart", {
                            autoClose: 1200,
                          });
                        }
                      }}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={1500} />
    </>
  );
};

export default Home;
