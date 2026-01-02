import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import "./TopNavbar.css";

const categories = [
  "Power Tools",
  "Hand Tools",
  "Electrical",
  "Plumbing",
  "Safety Gear",
  "Construction",
  "Accessories",
];

const TopNavbar = () => {
  return (
    <>
      {/* ===== MAIN NAVBAR ===== */}
      <Navbar expand="lg" className="tool-navbar sticky-top">
        <Container>
          {/* Brand */}
          <Navbar.Brand as={Link} to="/" className="tool-brand">
            ToolHub
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse>
            {/* Search */}
            <Form className="tool-search">
              <input
                type="text"
                placeholder="Search tools, machines, safety gear..."
              />
            </Form>

            {/* Right Menu */}
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={Link} to="/mycart" className="nav-item-link cart-link">
                Cart
                <span className="cart-badge">3</span>
              </Nav.Link>

              <Nav.Link as={Link} to="/login" className="login-btn">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ===== CATEGORY BAR ===== */}
      <div className="category-bar">
        <Container className="category-container">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat.toLowerCase().replace(/\s/g, "-")}`}
              className="category-link"
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
