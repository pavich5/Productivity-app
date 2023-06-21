import { Router } from "express";
import { farmerRouter } from "../routes/farmers.routes.js";

export const globalRouter = Router();

globalRouter.use("/farmers", farmerRouter);


