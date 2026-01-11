import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart } from "../cartslice";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.mycart.cart);

  const isLoggedIn = localStorage.getItem("user") || localStorage.getItem("token");

  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qnty, 0);
  const totalQty = cart.reduce((sum, i) => sum + i.qnty, 0);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      toast.warning("Please login to continue checkout", { autoClose: 2000 });
      setTimeout(() => navigate("/login"), 2000);
      return;
    }
    navigate("/checkout");
  };

  return (
    <>
      <style>{`
        body { background:#f4f6f8; font-family:Inter,sans-serif; }
        .cart-page{max-width:1000px;margin:auto;padding:40px 20px}
        .cart-title{text-align:center;font-size:28px;margin-bottom:30px}
        .empty-cart{text-align:center;margin-top:120px;color:#555}
        .cart-item{background:#fff;border-radius:16px;padding:24px 40px;
          display:flex;align-items:center;gap:20px;margin-bottom:20px;
          box-shadow:0 6px 18px rgba(0,0,0,.08)}
        .cart-item img{width:90px;height:90px;object-fit:contain}
        .cart-info{flex:1}
        .cart-info h4{margin:0 0 6px;font-size:16px}
        .cart-info p{margin:0 0 6px;font-size:13px;color:#777}
        .price{font-weight:600}
        .quantity{display:flex;align-items:center;gap:10px}
        .quantity button{width:34px;height:34px;border-radius:50%;
          border:none;background:#eee;cursor:pointer}
        .item-total{font-weight:700;min-width:90px;text-align:right}
        .remove-btn{border:none;background:transparent;color:#c00;font-size:18px}
        .cart-summary{background:#fff;border-radius:18px;padding:28px;
          margin-top:35px;box-shadow:0 8px 24px rgba(0,0,0,.1)}
        .summary-row{display:flex;justify-content:space-between;margin-bottom:14px}
        .total{font-weight:700;font-size:17px}
        .checkout-btn{margin:25px auto 0;display:block;width:40%;height:50px;
          border-radius:12px;border:none;background:#0c0243;color:#fff;font-weight:600}
      `}</style>

      <div className="cart-page">
        <h2 className="cart-title">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty 🛒</p>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.name} />

                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <p className="price">₹{item.price}</p>
                </div>

                <div className="quantity">
                  <button disabled={item.qnty === 1} onClick={() => dispatch(decreaseQuantity(item))}>
                    <FiMinus />
                  </button>
                  <span>{item.qnty}</span>
                  <button onClick={() => dispatch(increaseQuantity(item))}>
                    <FiPlus />
                  </button>
                </div>

                <div className="item-total">₹{item.price * item.qnty}</div>

                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item))}>
                  <FiTrash2 />
                </button>
              </div>
            ))}

            <div className="cart-summary">
              <h3>Order Summary</h3>
              <div className="summary-row"><span>Total Qty</span><span>{totalQty}</span></div>
              <div className="summary-row"><span>Subtotal</span><span>₹{subtotal}</span></div>
              <div className="summary-row"><span>Handling</span><span>₹59</span></div>
              <div className="summary-row"><span>Shipping</span><span>Free</span></div>
              <div className="summary-row total"><span>Total</span><span>₹{subtotal}</span></div>

              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>

      <ToastContainer />
    </>
  );
};

export default Cart;
