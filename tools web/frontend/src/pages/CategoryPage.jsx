import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "../cartslice";
import { FaRegHeart, FaRupeeSign } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CategoryPage = () => {
  const { category } = useParams(); // url: /category/drills
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.mycart.cart);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_BACKENDURL}/product/product-display`);
        // filter by category
        const filtered = data.filter(p => p.category.toLowerCase() === category.toLowerCase());
        setProducts(filtered);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, [category]);

  if (!products.length) return <p style={{textAlign:"center", marginTop:"80px"}}>No products found in {category}</p>;

  return (
    <div className="category-page">
      <h2 style={{textAlign:"center", margin:"20px 0"}}>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>

      <div className="products-grid" style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:"20px", padding:"0 5%"}}>
        {products.map(item => {
          const existingItem = cart.find(ci => ci.id === item._id);

          return (
            <div className="product-card" key={item._id} style={{border:"1px solid #ddd", borderRadius:"10px", padding:"12px", textAlign:"center", cursor:"pointer"}} onClick={() => navigate(`/product/${item._id}`)}>
              <img src={item.defaultImage} alt={item.name} style={{width:"100%", height:"150px", objectFit:"contain"}}/>
              <h4>{item.name}</h4>
              <p><FaRupeeSign /> {item.price}</p>

              <div style={{display:"flex", justifyContent:"center", gap:"10px", marginTop:"8px"}}>
                <button
                  style={{padding:"6px 10px", background:"#f97316", color:"#fff", border:"none", borderRadius:"6px", cursor:"pointer"}}
                  onClick={(e)=>{
                    e.stopPropagation();
                    if(existingItem){
                      toast.info("Item already in cart");
                    } else {
                      dispatch(addToCart({id:item._id,name:item.name,category:item.category,price:item.price,image:item.defaultImage,qnty:1}));
                      toast.success("Added to cart");
                    }
                  }}
                >Add to Cart</button>

                <FaRegHeart
                  style={{fontSize:"20px", cursor:"pointer", color:"#ef4444"}}
                  onClick={(e)=>{
                    e.stopPropagation();
                    dispatch(addToWishlist({...item, qnty:1}));
                    toast.info("Added to wishlist");
                  }}
                />
              </div>
            </div>
          )
        })}
      </div>

      <ToastContainer position="top-right" autoClose={1200} />
    </div>
  )
};

export default CategoryPage;
