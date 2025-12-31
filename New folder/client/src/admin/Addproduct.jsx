import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);

    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    await axios.post(
      `${import.meta.env.VITE_BACKENDURL}/admin/addproduct`,
      formData
    );

    alert("Product Added");
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Add Product</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" onChange={e => setName(e.target.value)} /><br /><br />
        <input placeholder="Category" onChange={e => setCategory(e.target.value)} /><br /><br />
        <input placeholder="Price" onChange={e => setPrice(e.target.value)} /><br /><br />
        <textarea placeholder="Description" onChange={e => setDescription(e.target.value)} /><br /><br />
        <input type="file" multiple onChange={e => setImages(e.target.files)} /><br /><br />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
