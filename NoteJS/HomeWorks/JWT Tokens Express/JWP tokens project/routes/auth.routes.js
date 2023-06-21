import { Router } from "express";
import { AuthController } from "../controller/auth.controller.js";

export const authRouter = Router();

authRouter.post("/register",AuthController.registerUser);
authRouter.post("/login", AuthController.loginUser);
authRouter.get("/refresh-token", AuthController.refreshToken);
