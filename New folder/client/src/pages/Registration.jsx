import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const myData = useSelector((state) => state.mycart.cart);
    const navigate = useNavigate();
    const [shipping, setShipping] = useState({
        name: localStorage.getItem("user") || "",
        email: localStorage.getItem("email") || "",
        address: localStorage.getItem("address") || "",
        city: "",
        pincode: "",
        contact: "",
    });

    let totAmount = myData.reduce((acc, item) => acc + item.price * item.qnty, 0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShipping((prev) => ({ ...prev, [name]: value }));
    };

    const handleOrder = (e) => {
        e.preventDefault();
        alert("Order Placed Successfully!");
        navigate("/home");
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                background: "url('/images/tools-bg.jpg') center/cover no-repeat",
                padding: "40px 20px",
                position: "relative",
                color: "#f1f5f9",
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
                    backgroundColor: "rgba(2,6,23,0.8)",
                    zIndex: 1,
                }}
            ></div>

            <div
                style={{
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "1000px",
                    margin: "auto",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "40px",
                }}
            >
                {/* Cart Summary */}
                <div
                    style={{
                        flex: 1,
                        minWidth: "300px",
                        backgroundColor: "#020617",
                        padding: "20px",
                        borderRadius: "12px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                    }}
                >
                    <h2 style={{ color: "#facc15", marginBottom: "20px" }}>Cart Summary</h2>
                    {myData.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "15px",
                                borderBottom: "1px solid #f59e0b",
                                paddingBottom: "10px",
                            }}
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                style={{ width: "80px", height: "80px", objectFit: "cover", borderRadius: "6px" }}
                            />
                            <div style={{ marginLeft: "12px", flex: 1 }}>
                                <h4 style={{ margin: "0 0 5px", color: "#f1f5f9" }}>{item.name}</h4>
                                <p style={{ margin: 0, fontSize: "14px", color: "#facc15" }}>
                                    <FaRupeeSign /> {item.price} x {item.qnty} = {item.price * item.qnty}
                                </p>
                            </div>
                        </div>
                    ))}
                    <h3 style={{ marginTop: "20px", color: "#16a34a" }}>
                        Total: <FaRupeeSign /> {totAmount}
                    </h3>
                </div>

                {/* Shipping / Billing Form */}
                <div
                    style={{
                        flex: 1,
                        minWidth: "300px",
                        backgroundColor: "#020617",
                        padding: "20px",
                        borderRadius: "12px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                    }}
                >
                    <h2 style={{ color: "#facc15", marginBottom: "20px" }}>Shipping Details</h2>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontWeight: "600" }}>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={shipping.name}
                                onChange={handleChange}
                                style={{
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "2px solid #f59e0b",
                                    outline: "none",
                                    marginBottom: "10px",
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontWeight: "600" }}>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={shipping.email}
                                onChange={handleChange}
                                style={{
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "2px solid #f59e0b",
                                    outline: "none",
                                    marginBottom: "10px",
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontWeight: "600" }}>Contact No.</Form.Label>
                            <Form.Control
                                type="text"
                                name="contact"
                                value={shipping.contact}
                                onChange={handleChange}
                                style={{
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "2px solid #f59e0b",
                                    outline: "none",
                                    marginBottom: "10px",
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontWeight: "600" }}>Address</Form.Label>
                            <Form.Control
                                type="text"
                                name="address"
                                value={shipping.address}
                                onChange={handleChange}
                                style={{
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "2px solid #f59e0b",
                                    outline: "none",
                                    marginBottom: "10px",
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontWeight: "600" }}>City</Form.Label>
                            <Form.Control
                                type="text"
                                name="city"
                                value={shipping.city}
                                onChange={handleChange}
                                style={{
                                    padding: "10px",
                                    borderRadius: "6px",
                                    border: "2px solid #f59e0b",
                                    outline: "none",
                                    marginBottom: "10px",
                                }}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label style={{ fontWeight: "600" }}>Pin Code</Form.Label>
                            <Form.Control
                                type="text"
                                name="pincode"
                                value={shipping.pincode}
                                onChange={handleChange}
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
                            onClick={handleOrder}
                            style={{
                                width: "100%",
                                fontWeight: "700",
                                padding: "12px",
                                color: "#020617",
                                borderRadius: "6px",
                                border: "none",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f59e0b")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#facc15")}
                        >
                            Place Order
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
