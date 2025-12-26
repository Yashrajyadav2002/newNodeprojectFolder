const express = require("express");
const route = express.Router();
const ProductController = require("../controllers/productController");
route.get("/branddisplay", ProductController.brandDisplay);
route.post("/registration", ProductController.userRegistration);
route.post("/login", ProductController.userLogin);



module.exports= route;