import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const TopNavbar = () => {

    const navLinkStyle = {
        color: "#f1f5f9",
        fontSize: "13px",
        fontWeight: "700",
        margin: "0 14px",
        letterSpacing: "0.8px",
        textTransform: "uppercase",
        paddingBottom: "6px",
        transition: "all 0.25s ease"
    };

    return (
        <>
            {/* ===== MAIN NAVBAR ===== */}
            <Navbar
                expand="lg"
                style={{
                    background: "linear-gradient(90deg, #020617, #0f172a, #020617)",
                    padding: "16px 0",
                    boxShadow: "0 12px 35px rgba(0,0,0,0.55)",
                    position: "sticky",
                    top: "0",
                    zIndex: "1000"
                }}
            >
                <Container>
                    {/* Brand */}
                    <Navbar.Brand
                        as={Link}
                        to="home"
                        style={{
                            fontSize: "2rem",
                            fontWeight: "900",
                            color: "#facc15",
                            letterSpacing: "2px",
                            textTransform: "uppercase"
                        }}
                    >
                        ToolHub
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse>

                        {/* Search Bar */}
                        <Form
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginLeft: "30px",
                                marginRight: "30px",
                                flexGrow: 1,
                                maxWidth: "500px"
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Search tools, machines, safety gear..."
                                style={{
                                    width: "100%",
                                    padding: "12px 16px",
                                    border: "2px solid #facc15",
                                    backgroundColor: "#f8fafc",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    outline: "none"
                                }}
                            />
                        </Form>

                        {/* Right Menu */}
                        <Nav className="ms-auto" style={{ alignItems: "center" }}>
                            <Nav.Link
                                as={Link}
                                to="mycart"
                                style={{
                                    ...navLinkStyle,
                                    position: "relative"
                                }}
                            >
                                Cart
                                <span
                                    style={{
                                        position: "absolute",
                                        top: "-6px",
                                        right: "-12px",
                                        backgroundColor: "#ef4444",
                                        color: "#fff",
                                        fontSize: "11px",
                                        fontWeight: "700",
                                        padding: "2px 6px",
                                        borderRadius: "50%"
                                    }}
                                >
                                    3
                                </span>
                            </Nav.Link>

                            <Nav.Link
                                as={Link}
                                to="login"
                                style={{
                                    marginLeft: "20px",
                                    backgroundColor: "#facc15",
                                    color: "#020617",
                                    padding: "8px 18px",
                                    fontWeight: "800",
                                    textTransform: "uppercase",
                                    fontSize: "13px"
                                }}
                            >
                                Login
                            </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* ===== CATEGORY BAR ===== */}
            <div
                style={{
                    backgroundColor: "#020617",
                    borderTop: "2px solid #facc15",
                    boxShadow: "0 6px 20px rgba(0,0,0,0.4)"
                }}
            >
                <Container
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "10px 0",
                        flexWrap: "wrap"
                    }}
                >
                    {[
                        "Power Tools",
                        "Hand Tools",
                        "Electrical",
                        "Plumbing",
                        "Safety Gear",
                        "Construction",
                        "Accessories"
                    ].map((cat, index) => (
                        <Link
                            key={index}
                            to={cat.toLowerCase().replace(" ", "")}
                            style={{
                                color: "#e5e7eb",
                                fontSize: "13px",
                                fontWeight: "600",
                                textDecoration: "none",
                                letterSpacing: "0.6px",
                                margin: "6px 10px"
                            }}
                            onMouseEnter={(e) => e.target.style.color = "#facc15"}
                            onMouseLeave={(e) => e.target.style.color = "#e5e7eb"}
                        >
                            {cat}
                        </Link>
                    ))}
                </Container>
            </div>
        </>
    );
};

export default TopNavbar;
