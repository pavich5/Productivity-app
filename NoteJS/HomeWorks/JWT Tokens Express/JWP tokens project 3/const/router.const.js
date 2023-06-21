import { Router } from "express";
import { authRouter } from "../routes/auth.routes.js";


export const globalRouter = Router();
globalRouter.use("/", authRouter);


