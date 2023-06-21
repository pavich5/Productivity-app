import { AuthController } from "../controller/user-contoller";
import { Router } from "express";
import { validateUser } from "../middlewears/validate.middleware";

export const authRouter = Router();

authRouter.get("/", AuthController.getAllUsers);
authRouter.get("/refreshAccessToken", AuthController.refreshAccessToken);
authRouter.get("/logout", AuthController.logoutUser);
authRouter.get("/:id", AuthController.getUserById);
authRouter.post("/register", validateUser, AuthController.createUser);
authRouter.patch("/:id", AuthController.updateUser);
authRouter.delete("/:id", AuthController.removeUser);
authRouter.post("/login", AuthController.loginUser);
