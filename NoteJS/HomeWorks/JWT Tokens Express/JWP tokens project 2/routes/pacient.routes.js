import { Router } from "express";
import { pacientController } from "../controllers/pacient.controller.js";


export const pacientRouth = Router();

pacientRouth.get("/", pacientController.getAllPacients);
pacientRouth.get("/:id", pacientController.getPacientByID);
pacientRouth.post("/register", pacientController.createPacient);
pacientRouth.patch("/:id", pacientController.updatePacient);
pacientRouth.delete("/all", pacientController.deleteAllPacients);
pacientRouth.delete("/:id", pacientController.deletePacient);




