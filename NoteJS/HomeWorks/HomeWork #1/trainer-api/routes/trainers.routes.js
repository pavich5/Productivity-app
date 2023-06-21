import { Router } from "express";
import { TrainerController } from "../controllers/trainers.controller.js";
import { adminValidator } from "../middlewares/admin-validator.middleware.js";
import { isGod } from "../middlewares/GOD-validator.middlewere.js";

export const trainersRouter = Router();

trainersRouter.get("/", TrainerController.getAllTrainers);
trainersRouter.get("/:id",TrainerController.getTrainerByID);

trainersRouter.post("/register",TrainerController.createTrainer);
trainersRouter.patch("/:id",TrainerController.updateTrainerData);
trainersRouter.delete("/deleteall",isGod,TrainerController.deleteAllTrainers);
trainersRouter.delete("/:id",TrainerController.deleteTrainer);

