import express from "express";
const router = express.Router();
import StudentController from "../controllers/stuController.js";

router.get("/getsessiononfo",StudentController.getSessioninfo);
router.get("/deletesession",StudentController.delete_session);
router.get("/resession",StudentController.regn_session);
router.get("/exmsession",StudentController.session_example);
router.get("/getsessiondata",StudentController.get_session_data);

export default router;