const Order = require("../models/orderModel");

// ========== CREATE ORDER ==========
const createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, subtotal, shippingFee = 0, totalAmount, paymentMethod } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ success: false, message: "No items in order" });
    }

    // ✅ CATEGORY CHECK
    for (const item of items) {
      if (!item.category) {
        return res.status(400).json({ success: false, message: "Item category missing" });
      }
    }

    const order = await Order.create({
      user: req.user.id,
      items,
      shippingAddress,
      subtotal,
      shippingFee,
      totalAmount,
      payment: {
        status: "pending",
        method: paymentMethod || "cod",
      },
      orderStatus: "placed",
    });

    res.status(201).json({ success: true, orderId: order._id });

  } catch (err) {
    console.error("Order create error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ========== GET USER ORDERS ==========
const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, orders });
  } catch (err) {
    console.error("Get orders error:", err);
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
};

module.exports = {
  createOrder,
  getMyOrders,
};
