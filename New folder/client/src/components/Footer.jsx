const Footer = () => {
    return (
        <>
            <div
                id="footer"
                style={{
                    backgroundColor: "#020617",
                    color: "#e5e7eb",
                    marginTop: "80px",
                    boxShadow: "0 -10px 30px rgba(0,0,0,0.6)"
                }}
            >
                {/* Top Footer */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        padding: "50px 80px",
                        borderBottom: "2px solid #facc15"
                    }}
                >
                    {/* Brand */}
                    <div style={{ maxWidth: "300px" }}>
                        <h2
                            style={{
                                color: "#facc15",
                                fontSize: "1.8rem",
                                fontWeight: "900",
                                letterSpacing: "2px",
                                marginBottom: "15px"
                            }}
                        >
                            ToolHub
                        </h2>
                        <p style={{ fontSize: "14px", lineHeight: "1.8" }}>
                            ToolHub is your trusted destination for professional
                            power tools, hand tools, construction equipment,
                            and safety gear. Built for professionals.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            style={{
                                color: "#facc15",
                                fontSize: "16px",
                                fontWeight: "700",
                                marginBottom: "15px"
                            }}
                        >
                            Quick Links
                        </h4>
                        {["Home", "Power Tools", "Hand Tools", "Electrical", "Safety Gear"].map(
                            (item, index) => (
                                <p
                                    key={index}
                                    style={{
                                        fontSize: "14px",
                                        marginBottom: "10px",
                                        cursor: "pointer"
                                    }}
                                >
                                    {item}
                                </p>
                            )
                        )}
                    </div>

                    {/* Support */}
                    <div>
                        <h4
                            style={{
                                color: "#facc15",
                                fontSize: "16px",
                                fontWeight: "700",
                                marginBottom: "15px"
                            }}
                        >
                            Support
                        </h4>
                        {["Contact Us", "Shipping Policy", "Returns", "Warranty", "FAQ"].map(
                            (item, index) => (
                                <p
                                    key={index}
                                    style={{
                                        fontSize: "14px",
                                        marginBottom: "10px",
                                        cursor: "pointer"
                                    }}
                                >
                                    {item}
                                </p>
                            )
                        )}
                    </div>

                    {/* Contact */}
                    <div>
                        <h4
                            style={{
                                color: "#facc15",
                                fontSize: "16px",
                                fontWeight: "700",
                                marginBottom: "15px"
                            }}
                        >
                            Contact
                        </h4>
                        <p style={{ fontSize: "14px", marginBottom: "8px" }}>
                            📍 Indore, India
                        </p>
                        <p style={{ fontSize: "14px", marginBottom: "8px" }}>
                            📞 +91 98765 43210
                        </p>
                        <p style={{ fontSize: "14px" }}>
                            ✉ support@toolhub.com
                        </p>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div
                    style={{
                        textAlign: "center",
                        padding: "15px",
                        fontSize: "13px",
                        backgroundColor: "#020617"
                    }}
                >
                    © {new Date().getFullYear()} ToolHub. All Rights Reserved.
                </div>
            </div>
        </>
    );
};

export default Footer;
