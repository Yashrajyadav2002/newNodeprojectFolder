const AdminModel = require("../models/AdminModel");
const ProductModel = require("../models/ProductModel");
const Order = require("../models/OrderModel");
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinary");
const jwt = require("jsonwebtoken");

// ================= MULTER + CLOUDINARY =================
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "product_images",
    resource_type: "image",
    format: "jpg",
    public_id: (req, file) =>
      Date.now() + "-" + file.originalname.replace(/\s+/g, "_"),
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
}).array("images", 10);

// ================= ADMIN LOGIN =================
const adminLogin = async (req, res) => {
  try {
    const { adminEmail, adminPassword } = req.body;
    const admin = await AdminModel.findOne({ adminEmail });
    if (!admin) return res.status(401).json({ msg: "Invalid Admin Email" });
    if (admin.adminPassword !== adminPassword)
      return res.status(401).json({ msg: "Invalid Password" });

    const token = jwt.sign(
      { userId: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      msg: "Admin login successful",
      token,
      admin: { id: admin._id, email: admin.adminEmail, role: "admin" },
    });
  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

// ================= ADD PRODUCT =================
const addProduct = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error("Upload error:", err);
      return res.status(500).json({ msg: "Image upload failed", error: err.message });
    }

    try {
      const imageUrls = req.files ? req.files.map((file) => file.path) : [];

      const product = await ProductModel.create({
        name: req.body.name,
        category: req.body.category, // must match: Hand Tools, Power Tools, Tool Kits, Safety Gear
        MRP: req.body.MRP,
        price: req.body.price,
        quantity: req.body.quantity,
        starRating: Number(req.body.starRating),
        description: req.body.description,
        defaultImage: imageUrls[0] || "",
        images: imageUrls,
      });

      res.status(200).json({ success: true, product });
    } catch (error) {
      console.error("Save product error:", error);
      res.status(500).json({ msg: "Product save failed", error: error.message });
    }
  });
};

// ================= DASHBOARD STATS =================
const getDashboardStats = async (req, res) => {
  try {
    // Products by hardware category
    const productCategories = await ProductModel.aggregate([
      {
        $project: {
          category: {
            $switch: {
              branches: [
                { case: { $in: ["$category", ["Hand Tools"]] }, then: "Hand Tools" },
                { case: { $in: ["$category", ["Power Tools"]] }, then: "Power Tools" },
                { case: { $in: ["$category", ["Tool Kits"]] }, then: "Tool Kits" },
                { case: { $in: ["$category", ["Safety Gear"]] }, then: "Safety Gear" },
              ],
              default: "Other",
            },
          },
        },
      },
      { $group: { _id: "$category", count: { $sum: 1 } } },
    ]);

    // Monthly revenue
    const monthlyRevenue = await Order.aggregate([
      { $group: { _id: { $month: "$createdAt" }, revenue: { $sum: "$totalAmount" } } },
      { $sort: { _id: 1 } },
    ]);

    // Revenue by category
    const revenueByCategory = await Order.aggregate([
      { $unwind: "$items" },
      {
        $project: {
          category: "$items.category",
          amount: { $multiply: ["$items.price", "$items.quantity"] },
        },
      },
      { $group: { _id: "$category", total: { $sum: "$amount" } } },
    ]);

    // Weekly orders
    const weeklyOrders = await Order.aggregate([
      { $group: { _id: { $dayOfWeek: "$createdAt" }, orders: { $sum: 1 } } },
    ]);

    res.status(200).json({
      success: true,
      stats: { productCategories, revenueByCategory, monthlyRevenue, weeklyOrders },
    });
  } catch (err) {
    console.error("Dashboard stats error:", err);
    res.status(500).json({ success: false });
  }
};

// ================= GET ALL ORDERS =================
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, orders });
  } catch (err) {
    console.error("Admin get orders error:", err);
    res.status(500).json({ success: false });
  }
};

// ================= FRONTEND – GET PRODUCTS =================
const getProductsWithStock = async (req, res) => {
  try {
    const products = await ProductModel.find().select(
      "_id name category price MRP description defaultImage starRating"
    );
    res.status(200).json(products); // return array for frontend filtering
  } catch (error) {
    console.error("Fetch products error:", error);
    res.status(500).json([]);
  }
};

// ================= EXPORT =================
module.exports = {
  adminLogin,
  addProduct,
  getDashboardStats,
  getAllOrders,
  getProductsWithStock,
};
