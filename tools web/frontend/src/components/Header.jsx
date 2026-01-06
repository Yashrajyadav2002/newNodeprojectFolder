import { Link, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cartData = useSelector((state) => state.mycart.cart);
  const wishlistData = useSelector((state) => state.mycart.wishlist);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          font-family: Inter, sans-serif;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
        }

        /* TOP BAR */
        .top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 6%;
          gap: 20px;
        }

        .logo {
          font-size: 22px;
          font-weight: 800;
          color: #0f172a;
          white-space: nowrap;
        }

        .nav {
          display: flex;
          gap: 32px; /* 👈 proper gap between categories */
        }

        .nav a {
          text-decoration: none;
          color: #111827;
          font-size: 14px;
          font-weight: 600;
        }

        .nav a:hover {
          color: #f97316;
        }

        .right {
          display: flex;
          align-items: center;
          gap: 22px;
        }

        .icon-box {
          position: relative;
          cursor: pointer;
        }

        .icon-box span {
          position: absolute;
          top: -6px;
          right: -8px;
          background: #ef4444;
          color: white;
          font-size: 11px;
          padding: 2px 6px;
          border-radius: 50%;
        }

        .icon-box svg {
          font-size: 22px;
          color: #0f172a;
        }

        .login {
          padding: 6px 14px;
          border: 1px solid #f97316;
          border-radius: 6px;
          color: #f97316;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        .login:hover {
          background: #f97316;
          color: #fff;
        }

        /* BOTTOM BAR */
        .bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px 6%;
          background: #0f172a;
        }

        .search {
          width: 100%;
          max-width: 700px;
          background: white;
          display: flex;
          align-items: center;
          border-radius: 6px;
          overflow: hidden;
        }

        .search input {
          flex: 1;
          border: none;
          padding: 10px 12px;
          outline: none;
        }

        .search-btn {
          background: #f97316;
          color: white;
          padding: 0 20px;
          height: 100%;
          display: flex;
          align-items: center;
          font-weight: 600;
          cursor: pointer;
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .top {
            flex-wrap: wrap;
          }

          .nav {
            flex-wrap: wrap;
            gap: 18px;
          }

          .right {
            margin-left: auto;
          }
        }
      `}</style>

      <header className="header">
        {/* TOP */}
        <div className="top">
          <div className="logo">⚙️ HardwareHub</div>

           <div className="nav">
               <Link to="/home">Home</Link>
                <Link to="/category/drills">Drills</Link>
                <Link to="/category/hammers">Hammers</Link>
                <Link to="/category/screwdrivers">Screwdrivers</Link>
                <Link to="/category/wrenches">Wrenches</Link>
              </div>


          <div className="right">
            <div className="icon-box">
              <span>{wishlistData.length}</span>
              <FaRegHeart />
            </div>

            <div
              className="icon-box"
              onClick={() => navigate("/cart")}
            >
              <span>{cartData.length}</span>
              <FiShoppingCart />
            </div>

            {/* ✅ Login RIGHT SIDE */}
            <Link to="/login" className="login">
              Login
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="bottom">
          <div className="search">
            <IoSearchOutline style={{ marginLeft: "10px" }} />
            <input placeholder="Search hardware tools, machines..." />
            <div className="search-btn">Search</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
