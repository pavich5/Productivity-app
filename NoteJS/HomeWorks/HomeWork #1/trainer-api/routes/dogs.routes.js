import { Router } from "express";
import { DogController } from "../controllers/dogs.controller.js";
import { adminValidator } from "../middlewares/admin-validator.middleware.js";



export const dogsRouter = Router();

dogsRouter.get("/", DogController.getAllDogs);
dogsRouter.get("/:id",DogController.getDogByID);


dogsRouter.post("/register",DogController.createDog);
dogsRouter.patch("/:id",DogController.updateDogData);
dogsRouter.delete("/deleteall",DogController.deleteAllDogs);
dogsRouter.delete("/:id",DogController.deleteDog);

