import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

const Login = () => {
    const [input, setInput] = useState({});
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let api = `${import.meta.env.VITE_BACKENDURL}/product/login`;
            const response = await axios.post(api, input);
            localStorage.setItem("user", response.data.user.name);
            localStorage.setItem("email", response.data.user.email);
            localStorage.setItem("userid", response.data.user._id);
            localStorage.setItem("address", response.data.user.shippingadd);
            navigate("/home");
        } catch (err) {
            setError("Invalid email or password!");
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "url('/images/tools-bg.jpg') center/cover no-repeat",
                position: "relative",
                padding: "20px",
            }}
        >
            {/* Overlay */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(2,6,23,0.7)",
                    zIndex: 1,
                }}
            ></div>

            {/* Login Card */}
            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    width: "400px",
                    padding: "40px",
                    borderRadius: "12px",
                    backgroundColor: "#020617",
                    color: "#f1f5f9",
                    textAlign: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                    transition: "transform 0.3s, box-shadow 0.3s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-6px)";
                    e.currentTarget.style.boxShadow = "0 15px 35px rgba(0,0,0,0.7)";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.6)";
                }}
            >
                <h1 style={{ marginBottom: "25px", color: "#facc15" }}>User Login</h1>

                {error && (
                    <div
                        style={{
                            backgroundColor: "#ef4444",
                            color: "#fff",
                            padding: "8px 12px",
                            borderRadius: "6px",
                            marginBottom: "15px",
                        }}
                    >
                        {error}
                    </div>
                )}

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ fontWeight: "600" }}>Email</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            onChange={handleInput}
                            style={{
                                padding: "10px",
                                borderRadius: "6px",
                                border: "2px solid #f59e0b",
                                outline: "none",
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{ fontWeight: "600" }}>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={handleInput}
                            style={{
                                padding: "10px",
                                borderRadius: "6px",
                                border: "2px solid #f59e0b",
                                outline: "none",
                            }}
                        />
                    </Form.Group>

                    {/* Remember Me + Forgot */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "20px",
                            fontSize: "14px",
                        }}
                    >
                        <label>
                            <input type="checkbox" style={{ marginRight: "6px" }} /> Remember Me
                        </label>
                        <span
                            style={{
                                color: "#facc15",
                                cursor: "pointer",
                                fontWeight: "600",
                            }}
                        >
                            Forgot Password?
                        </span>
                    </div>

                    <Button
                        variant="warning"
                        type="submit"
                        onClick={handleSubmit}
                        style={{
                            width: "100%",
                            fontWeight: "700",
                            padding: "10px",
                            color: "#020617",
                            borderRadius: "6px",
                            border: "none",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f59e0b")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#facc15")}
                    >
                        Login
                    </Button>

                    {/* OR separator */}
                    <div
                        style={{
                            margin: "20px 0",
                            fontSize: "14px",
                            color: "#6b7280",
                            fontWeight: "600",
                        }}
                    >
                        OR
                    </div>

                    {/* Social Login Buttons */}
                    <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                        <Button
                            style={{
                                flex: 1,
                                backgroundColor: "#db4437",
                                border: "none",
                                fontWeight: "700",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "6px",
                            }}
                        >
                            <FaGoogle /> Google
                        </Button>
                        <Button
                            style={{
                                flex: 1,
                                backgroundColor: "#4267B2",
                                border: "none",
                                fontWeight: "700",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "6px",
                            }}
                        >
                            <FaFacebookF /> Facebook
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;
