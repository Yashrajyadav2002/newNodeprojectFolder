import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { qntyInc, qntyDec, proRemove } from "../cartSlice";
import { FaRupeeSign, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
    const myData = useSelector((state) => state.mycart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let totAmount = 0;

    const rows = myData.map((item, index) => {
        totAmount += item.price * item.qnty;
        return (
            <tr key={index} style={{ verticalAlign: "middle" }}>
                <td>{index + 1}</td>

                <td>
                    <img
                        src={item.image}
                        alt={item.name}
                        style={{
                            width: "90px",
                            height: "90px",
                            objectFit: "cover",
                            borderRadius: "10px",
                            border: "2px solid #e5e7eb",
                        }}
                    />
                </td>

                <td style={{ fontWeight: "700" }}>{item.name}</td>
                <td>{item.category}</td>

                <td style={{ fontWeight: "600", color: "#2563eb" }}>
                    <FaRupeeSign /> {item.price}
                </td>

                <td>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: "10px",
                            fontSize: "18px",
                        }}
                    >
                        <FaSquareMinus
                            style={{ cursor: "pointer", color: "#dc2626" }}
                            onClick={() => dispatch(qntyDec({ id: item.id }))}
                        />
                        <span style={{ fontWeight: "700" }}>{item.qnty}</span>
                        <FaSquarePlus
                            style={{ cursor: "pointer", color: "#16a34a" }}
                            onClick={() => dispatch(qntyInc({ id: item.id }))}
                        />
                    </div>
                </td>

                <td style={{ fontWeight: "700" }}>
                    <FaRupeeSign /> {item.price * item.qnty}
                </td>

                <td>
                    <Button
                        variant="outline-danger"
                        onClick={() => dispatch(proRemove({ id: item.id }))}
                    >
                        <FaTrash />
                    </Button>
                </td>
            </tr>
        );
    });

    return (
        <div style={{ padding: "30px 40px", background: "#f8fafc" }}>
            {/* Page Title */}
            <h2
                style={{
                    fontWeight: "900",
                    marginBottom: "30px",
                    color: "#020617",
                }}
            >
                🛒 My Cart ({myData.length} Items)
            </h2>

            <div style={{ display: "grid", gridTemplateColumns: "3fr 1fr", gap: "30px" }}>
                {/* Cart Table */}
                <div
                    style={{
                        background: "#fff",
                        borderRadius: "14px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                        padding: "20px",
                    }}
                >
                    <Table hover responsive>
                        <thead style={{ background: "#020617", color: "#facc15" }}>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>{rows}</tbody>
                    </Table>
                </div>

                {/* Order Summary */}
                <div
                    style={{
                        background: "#fff",
                        borderRadius: "14px",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                        padding: "25px",
                        height: "fit-content",
                    }}
                >
                    <h4 style={{ fontWeight: "800", marginBottom: "20px" }}>
                        Order Summary
                    </h4>

                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                        <span>Subtotal</span>
                        <span>
                            <FaRupeeSign /> {totAmount}
                        </span>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
                        <span>Delivery</span>
                        <span>₹99</span>
                    </div>

                    <hr />

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontWeight: "800",
                            fontSize: "18px",
                            marginBottom: "20px",
                        }}
                    >
                        <span>Total</span>
                        <span>
                            <FaRupeeSign /> {totAmount + 99}
                        </span>
                    </div>

                    <Button
                        variant="success"
                        size="lg"
                        style={{ width: "100%", fontWeight: "700" }}
                        onClick={() => navigate("/checkout")}
                    >
                        Proceed to Checkout
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
