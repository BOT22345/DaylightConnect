import express from "express"
import {sendMessage} from "../controller/messagecontroller.js"
import protectRoute from "../middleware/protectRouter.js";

const router=express.Router();

router.post("/send/:id",protectRoute,sendMessage)

export default router;