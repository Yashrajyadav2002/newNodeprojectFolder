import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaSquareMinus, FaSquarePlus } from "react-icons/fa6";
import { qntyInc, qntyDec, proRemove } from "../cartSlice";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
    const myData = useSelector((state) => state.mycart.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let totAmount = 0;

    const ans = myData.map((key, index) => {
        totAmount += key.price * key.qnty;
        return (
            <tr key={index} style={{ verticalAlign: "middle" }}>
                <td>
                    <img
                        src={key.image}
                        alt={key.name}
                        style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                            borderRadius: "8px",
                            border: "2px solid #f59e0b",
                        }}
                    />
                </td>
                <td style={{ fontWeight: "700", color: "#020617" }}>{key.name}</td>
                <td>{key.category}</td>
                <td style={{ maxWidth: "200px" }}>{key.description}</td>
                <td style={{ fontWeight: "600", color: "#f59e0b" }}>
                    <FaRupeeSign /> {key.price}
                </td>
                <td style={{ fontSize: "18px", fontWeight: "700", display: "flex", alignItems: "center", gap: "8px" }}>
                    <FaSquareMinus
                        style={{ cursor: "pointer", color: "#ef4444" }}
                        onClick={() => {
                            dispatch(qntyDec({ id: key.id }));
                        }}
                    />
                    {key.qnty}
                    <FaSquarePlus
                        style={{ cursor: "pointer", color: "#16a34a" }}
                        onClick={() => {
                            dispatch(qntyInc({ id: key.id }));
                        }}
                    />
                </td>
                <td style={{ fontWeight: "700", color: "#0f172a" }}>
                    <FaRupeeSign /> {key.price * key.qnty}
                </td>
                <td>
                    <Button
                        variant="danger"
                        style={{ fontWeight: "700" }}
                        onClick={() => {
                            dispatch(proRemove({ id: key.id }));
                        }}
                    >
                        Remove
                    </Button>
                </td>
            </tr>
        );
    });

    return (
        <>
            <h1
                style={{
                    textAlign: "center",
                    margin: "30px 0 20px",
                    fontWeight: "900",
                    color: "#020617",
                    letterSpacing: "1px",
                }}
            >
                My Cart
            </h1>

            {/* Total Amount & Checkout */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "30px",
                    gap: "20px",
                }}
            >
                <h3 style={{ color: "#16a34a", fontWeight: "700" }}>
                    Total Amount: <FaRupeeSign /> {totAmount}
                </h3>
                <Button
                    variant="success"
                    style={{ fontWeight: "700", padding: "8px 20px" }}
                    onClick={() => navigate("/checkout")}
                >
                    Checkout
                </Button>
            </div>

            {/* Cart Table */}
            <Table
                striped
                bordered
                hover
                style={{
                    border: "2px solid #f59e0b",
                    borderRadius: "12px",
                    overflow: "hidden",
                    textAlign: "center",
                    margin: "0 20px 60px 20px",
                }}
            >
                <thead
                    style={{
                        backgroundColor: "#0f172a",
                        color: "#facc15",
                        fontWeight: "700",
                        textTransform: "uppercase",
                    }}
                >
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{ans}</tbody>
            </Table>
        </>
    );
};

export default MyCart;
