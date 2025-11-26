import express from "express";
const router = express.Router();
import StuController from "../controllers/stuController";

router.get("/getsessioninfo",StuController.getsessioninfo);

export default router;