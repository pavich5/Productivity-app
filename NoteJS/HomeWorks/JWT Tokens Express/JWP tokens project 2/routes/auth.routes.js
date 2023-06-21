import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
export const authRouter = Router();

authRouter.post("/register",authController.registerUser)
authRouter.post("/login",authController.loginUser);
authRouter.get("/refresh-token",authController.refreshToken)
