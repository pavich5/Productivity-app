import { Router } from "express";
import { WorkersController } from "../controllers/workers.controller.js";

export const workersRouter = Router();

workersRouter.get("/", WorkersController.getAllWorkers);
workersRouter.get("/:id", WorkersController.getWorkerById);
workersRouter.post("/", WorkersController.createWorker);
workersRouter.patch("/:id", WorkersController.updateWoker);
workersRouter.delete("/:id", WorkersController.deleteWorker);