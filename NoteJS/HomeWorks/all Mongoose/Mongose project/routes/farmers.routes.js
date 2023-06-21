import { Router } from "express";
import { FarmerController } from "../controllers/farmers.controller.js";

export const farmerRouter = Router();

farmerRouter.get("/", FarmerController.getAllFarmers);
farmerRouter.get("/:id", FarmerController.getFarmerByID);
farmerRouter.post("/",FarmerController.createFarmer);
farmerRouter.patch("/:id",FarmerController.updateFarmer);
farmerRouter.delete("/:id",FarmerController.deleteFarmer);

