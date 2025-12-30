import Carousel from "react-bootstrap/Carousel";
import ban1 from "../images/ban1.jpeg";
import ban2 from "../images/ban2.webp";
import ban3 from "../images/ban3.jpeg";

const Home = () => {
    return (
        <>
            {/* ===== HERO CAROUSEL ===== */}
            <Carousel>
                {[ban1, ban2, ban3].map((img, index) => (
                    <Carousel.Item key={index}>
                        <img
                            src={img}
                            alt={`slide-${index}`}
                            style={{
                                width: "100%",
                                height: "500px",
                                objectFit: "cover",
                                filter: "brightness(65%)"
                            }}
                        />
                        <Carousel.Caption
                            style={{
                                background: "rgba(0,0,0,0.5)",
                                padding: "20px 30px",
                                borderRadius: "10px"
                            }}
                        >
                            <h2
                                style={{
                                    fontSize: "2.5rem",
                                    fontWeight: "800",
                                    color: "#facc15",
                                    letterSpacing: "1px",
                                    textTransform: "uppercase"
                                }}
                            >
                                Professional Tools
                            </h2>
                            <p
                                style={{
                                    fontSize: "1.1rem",
                                    color: "#f1f5f9"
                                }}
                            >
                                Power Tools, Hand Tools & Industrial Equipment
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>

            {/* ===== TOP BRANDS ===== */}
            <div
                style={{
                    textAlign: "center",
                    margin: "60px 0 30px",
                    fontSize: "2rem",
                    fontWeight: "800",
                    color: "#0f172a"
                }}
            >
                Top Brands
                <div
                    style={{
                        width: "120px",
                        height: "4px",
                        background: "linear-gradient(90deg,#facc15,#f59e0b)",
                        margin: "10px auto",
                        borderRadius: "6px"
                    }}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "30px",
                    padding: "0 20px"
                }}
            >
                {["Bosch", "Makita", "Dewalt", "Stanley", "Hitachi"].map((brand, index) => (
                    <div
                        key={index}
                        style={{
                            width: "140px",
                            height: "80px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "2px solid #facc15",
                            borderRadius: "10px",
                            fontWeight: "700",
                            fontSize: "1rem",
                            color: "#020617",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#facc15";
                            e.target.style.color = "#020617";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#020617";
                        }}
                    >
                        {brand}
                    </div>
                ))}
            </div>

            {/* ===== CATEGORIES ===== */}
            <div
                style={{
                    textAlign: "center",
                    margin: "60px 0 30px",
                    fontSize: "2rem",
                    fontWeight: "800",
                    color: "#0f172a"
                }}
            >
                Categories
                <div
                    style={{
                        width: "120px",
                        height: "4px",
                        background: "linear-gradient(90deg,#facc15,#f59e0b)",
                        margin: "10px auto",
                        borderRadius: "6px"
                    }}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: "25px",
                    padding: "0 20px"
                }}
            >
                {[
                    "Power Tools",
                    "Hand Tools",
                    "Electrical",
                    "Safety Gear",
                    "Construction"
                ].map((cat, index) => (
                    <div
                        key={index}
                        style={{
                            width: "180px",
                            height: "120px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "2px solid #f59e0b",
                            borderRadius: "10px",
                            fontWeight: "700",
                            fontSize: "1rem",
                            color: "#020617",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "#facc15";
                            e.target.style.color = "#020617";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "transparent";
                            e.target.style.color = "#020617";
                        }}
                    >
                        {cat}
                    </div>
                ))}
            </div>

            {/* ===== CALL TO ACTION ===== */}
            <div
                style={{
                    margin: "80px 0",
                    textAlign: "center",
                    padding: "50px 20px",
                    background: "linear-gradient(90deg,#facc15,#f59e0b)",
                    color: "#020617",
                    borderRadius: "12px",
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    letterSpacing: "1px"
                }}
            >
                Shop Industrial Tools Now & Get Fast Delivery Across India!
            </div>
        </>
    );
};

export default Home;
