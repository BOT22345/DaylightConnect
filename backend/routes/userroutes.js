import express from "express";
import protectRoute from "../middleware/protectRouter.js";
import { getUserForSidebar } from "../controller/usercontroller.js";

const router=express.Router();

router.get('/',protectRoute,getUserForSidebar)

export default router; 