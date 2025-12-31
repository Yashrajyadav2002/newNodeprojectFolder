const jwt = require("jsonwebtoken");

const adminAuth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Admin token missing" });
  }

  try {
    const decoded = jwt.verify(
      token.split(" ")[1],
      process.env.JWT_SECRET
    );

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Not authorized" });
    }

    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = adminAuth;
