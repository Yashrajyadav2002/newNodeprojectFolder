const express = require("express");
const route = express.Router();
const CookieController = require("../controllers/cookieController");


route.post("/register",CookieController.cookieRegistration);
route.post("/login",CookieController.cookieLogin);
route.get("/profile",CookieController.cookieProfile);
route.post("/logout",CookieController.cookieLogout);

module.exports=route;
