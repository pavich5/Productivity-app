import { Router } from "express";
import { dogsRouter } from "../routes/dogs.routes.js";
import { trainersRouter } from "../routes/trainers.routes.js";
import { gymRouter } from "../routes/gymUsers.routes.js";
import { sessionValidator } from "../middlewares/session-validator.middlewares.js";
import { authRouter } from "../routes/auth.routes.js";

export const globalRouter = Router();

globalRouter.use("/", authRouter);
globalRouter.use("/dogs", dogsRouter);
globalRouter.use("/trainers", trainersRouter);
globalRouter.use("/gymMembers", gymRouter);
