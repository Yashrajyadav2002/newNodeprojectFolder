import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("");
  const navigate = useNavigate();

  const API_URL = import.meta.env.VITE_BACKEND_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usertype) {
      toast.error("Please select user type!");
      return;
    }

    try {
      // ================= ADMIN LOGIN =================
      if (usertype === "admin") {
        const res = await axios.post(`${API_URL}/admin/login`, {
          adminEmail: email,
          adminPassword: password,
        });

        // FIXED: only store fields that backend actually sends
        localStorage.setItem("adminemail", res.data.admin.email);
        localStorage.setItem("adminid", res.data.admin.id);
        localStorage.setItem("admintoken", res.data.token);

        toast.success(res.data.msg || "Admin login successful");
        setTimeout(() => navigate("/admin-dashboard"), 1500);
      }

      // ================= USER LOGIN =================
      if (usertype === "user") {
        const res = await axios.post(`${API_URL}/user/login`, {
          email,
          password,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        toast.success(res.data.msg || "Login successful");
        setTimeout(() => navigate("/home"), 1500);
      }
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Power Up Your Hardware World</h1>
        <p>
          Discover top-notch tools, gadgets, and accessories. Log in to explore or
          manage your products.
        </p>
        <i className="tool-icon tool1">🔧</i>
        <i className="tool-icon tool2">🪛</i>
        <i className="tool-icon tool3">⚙️</i>
        <i className="tool-icon tool4">🛠️</i>
        <i className="tool-icon tool5">🔩</i>
      </div>

      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login to Continue</h2>

          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label>Select User Type</label>
          <select
            value={usertype}
            onChange={(e) => setUserType(e.target.value)}
            required
          >
            <option value="">Select user type</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <button type="submit">Login</button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Login;
