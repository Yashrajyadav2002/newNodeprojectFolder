import { useState } from "react";
import axios from "axios";
import { FaHammer, FaBolt, FaScrewdriver, FaWrench, FaTools } from "react-icons/fa";
import "./AddProduct.css";

const categoryIcons = {
  Drills: <FaBolt size={30} color="#5b21b6" />,
  Hammers: <FaHammer size={30} color="#d97706" />,
  Screwdrivers: <FaScrewdriver size={30} color="#16a34a" />,
  Wrenches: <FaWrench size={30} color="#0ea5e9" />,
  Pliers: <FaTools size={30} color="#f43f5e" />,
};

const AddProduct = () => {
  const [input, setInput] = useState({});
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleInput = (e) => {
    setInput((values) => ({ ...values, [e.target.name]: e.target.value }));
    if (e.target.name === "category") setSelectedCategory(e.target.value);
  };

  const handleImage = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let key in input) formData.append(key, input[key]);
    for (let i = 0; i < images.length; i++) formData.append("images", images[i]);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKENDURL}/admin/add-product`,
        formData
      );
      console.log(response);
      alert("Product added successfully ✅");
    } catch (err) {
      console.error(err);
      alert("Failed to add product ❌");
    }
  };

  return (
    <div className="add-product-page">
      <style>{`
        .add-product-page {
          background: #f6f7fb;
          min-height: 100vh;
          padding: 30px 20px;
          display: flex;
          justify-content: center;
          align-items: flex-start;
        }

        .product-form {
          background: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 12px 25px rgba(0,0,0,0.1);
          width: 100%;
          max-width: 800px;
        }

        .product-form h1.page-title {
          text-align: center;
          color: #0f172a;
          margin-bottom: 25px;
          font-size: 28px;
          font-weight: 700;
        }

        .form-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 6px;
          font-weight: 600;
          color: #111827;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 10px 12px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          outline: none;
          font-size: 14px;
          transition: border 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #f97316;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .submit-btn {
          margin-top: 20px;
          width: 100%;
          padding: 12px;
          font-size: 16px;
          font-weight: 600;
          background: #f97316;
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .submit-btn:hover {
          background: #ea580c;
        }

        .category-icon {
          margin-top: 8px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <form className="product-form" onSubmit={handleSubmit}>
        <h1 className="page-title">Add New Hardware Tool</h1>

        <div className="form-grid">
          <div className="form-group">
            <label>Product Name</label>
            <input type="text" name="name" placeholder="Enter product name" onChange={handleInput} required />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select name="category" onChange={handleInput} required>
              <option value="">Select category</option>
              <option>Drills</option>
              <option>Hammers</option>
              <option>Screwdrivers</option>
              <option>Wrenches</option>
              <option>Pliers</option>
            </select>
            {selectedCategory && (
              <div className="category-icon">{categoryIcons[selectedCategory]}</div>
            )}
          </div>

          <div className="form-group">
            <label>MRP (₹)</label>
            <input type="number" name="MRP" placeholder="Enter MRP" onChange={handleInput} required />
          </div>

          <div className="form-group">
            <label>Price (₹)</label>
            <input type="number" name="price" placeholder="Enter price" onChange={handleInput} required />
          </div>

          <div className="form-group">
            <label>Quantity</label>
            <input type="number" name="quantity" placeholder="Enter quantity" onChange={handleInput} required />
          </div>

          <div className="form-group">
            <label>Initial Star Rating</label>
            <select name="starRating" onChange={handleInput} required>
              <option value="">Select rating</option>
              <option>0</option>
              <option>0.5</option>
              <option>1</option>
              <option>1.5</option>
              <option>2</option>
              <option>2.5</option>
              <option>3</option>
              <option>3.5</option>
              <option>4</option>
              <option>4.5</option>
              <option>5</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label>Description</label>
            <textarea name="description" placeholder="Enter product description" rows="3" onChange={handleInput}></textarea>
          </div>

          <div className="form-group full-width">
            <label>Product Images</label>
            <input type="file" name="images" accept="image/*" multiple onChange={handleImage} />
          </div>
        </div>

        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
