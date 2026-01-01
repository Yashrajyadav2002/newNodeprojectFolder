import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <h2>ToolHub</h2>
          <p>
            ToolHub is your trusted destination for professional power tools,
            hand tools, construction equipment, and safety gear.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Power Tools</li>
            <li>Hand Tools</li>
            <li>Electrical</li>
            <li>Safety Gear</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li>Contact Us</li>
            <li>Shipping Policy</li>
            <li>Returns</li>
            <li>Warranty</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>📍 Indore, India</p>
          <p>📞 +91 98765 43210</p>
          <p>✉ support@toolhub.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} ToolHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
