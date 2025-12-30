import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const AdminLogin = () => {
    const [adminid, setAdminId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let api = `${import.meta.env.VITE_BACKENDURL}/admin/login`;
            const response = await axios.post(api, { adminid, password });
            localStorage.setItem("adminId", response.data.admin._id);
            localStorage.setItem("adminName", response.data.admin.name);
            navigate("/dashboard");
        } catch (err) {
            setError("Invalid Admin ID or Password!");
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

            {/* Admin Login Card */}
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
                <h1 style={{ marginBottom: "25px", color: "#facc15" }}>Admin Login</h1>

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
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: "600" }}>Admin ID</Form.Label>
                        <Form.Control
                            type="text"
                            value={adminid}
                            onChange={(e) => setAdminId(e.target.value)}
                            style={{
                                padding: "10px",
                                borderRadius: "6px",
                                border: "2px solid #f59e0b",
                                outline: "none",
                                marginBottom: "15px",
                            }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontWeight: "600" }}>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                padding: "10px",
                                borderRadius: "6px",
                                border: "2px solid #f59e0b",
                                outline: "none",
                                marginBottom: "20px",
                            }}
                        />
                    </Form.Group>

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
                </Form>
            </div>
        </div>
    );
};

export default AdminLogin;
