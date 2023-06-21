import { Router } from "express";
import { workersRouter } from "../routes/workers.routes.js";
import { courseRouter } from "../routes/courses.routes.js";

export const globalRouter = Router();

globalRouter.use("/workers", workersRouter)
globalRouter.use("/courses",courseRouter)