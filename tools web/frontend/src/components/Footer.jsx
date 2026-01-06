import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        color: "#e5e7eb",
        padding: "70px 20px 20px",
        fontFamily: "Inter, sans-serif"
      }}
    >
      {/* Main Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px"
        }}
      >
        {/* Brand */}
        <div>
          <h2 style={{ fontSize: "26px", marginBottom: "14px", color: "#fff" }}>
            ⚙️ HardwareHub
          </h2>
          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.7",
              color: "#cbd5f5"
            }}
          >
            Professional-grade hardware tools trusted by engineers, builders,
            and technicians across India.
          </p>
        </div>

        {/* Support */}
        <div>
          <h3 style={{ color: "#f97316", marginBottom: "16px" }}>
            Support
          </h3>
          {[
            "Help Center",
            "Order Tracking",
            "Warranty & Service",
            "Returns & Refunds",
            "Contact Support"
          ].map((item) => (
            <p
              key={item}
              style={{
                fontSize: "14px",
                marginBottom: "10px",
                cursor: "pointer"
              }}
            >
              {item}
            </p>
          ))}
        </div>

        {/* Categories */}
        <div>
          <h3 style={{ color: "#f97316", marginBottom: "16px" }}>
            Tool Categories
          </h3>
          {[
            "Hand Tools",
            "Power Tools",
            "Safety Equipment",
            "Measuring Tools",
            "Construction Gear"
          ].map((item) => (
            <p
              key={item}
              style={{
                fontSize: "14px",
                marginBottom: "10px",
                cursor: "pointer"
              }}
            >
              {item}
            </p>
          ))}
        </div>

        {/* App & Social */}
        <div>
          <h3 style={{ color: "#f97316", marginBottom: "10px" }}>
            Download App
          </h3>
          <p style={{ fontSize: "13px", color: "#cbd5f5", marginBottom: "14px" }}>
            Fast delivery • Secure payments
          </p>

          <div style={{ display: "flex", gap: "10px", marginBottom: "16px" }}>
            <img src="/play-store.png" alt="Play" height="40" />
            <img src="/app-store.png" alt="App" height="40" />
          </div>

          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {["Facebook", "Instagram", "Twitter", "YouTube"].map((s) => (
              <span
                key={s}
                style={{
                  fontSize: "13px",
                  padding: "6px 12px",
                  border: "1px solid #334155",
                  borderRadius: "20px",
                  cursor: "pointer"
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div
        style={{
          marginTop: "50px",
          paddingTop: "20px",
          textAlign: "center",
          fontSize: "13px",
          borderTop: "1px solid #334155",
          color: "#94a3b8"
        }}
      >
        © 2026 HardwareHub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
