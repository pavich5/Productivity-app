import { Router } from "express";
import { studentRouter } from "../routes/students.routes.js";
export const globalRouter = Router();
import { courseRouter } from "../routes/courser.routes.js";

globalRouter.use("/students", studentRouter);
globalRouter.use("/courses", courseRouter);
