import express from 'express';
import {loginUser,signupUser,logoutUser} from "../controller/authcontroller.js"
const router =express.Router();

router.post("/login",loginUser)
router.post("/signup",signupUser)
router.post("/logout",logoutUser)


export default router;