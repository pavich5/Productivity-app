import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

export const userRouter = Router();

userRouter.get("/",UserController.getAllUsers)
userRouter.get("/:id",UserController.getUserByID)
userRouter.post("/",UserController.createUser);
userRouter.patch("/:id",UserController.updateUser);
userRouter.delete("/:id",UserController.deleteUser);