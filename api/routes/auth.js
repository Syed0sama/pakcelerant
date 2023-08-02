import express from "express";
import { register, login, logout, write } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/write", write);
export default router;
