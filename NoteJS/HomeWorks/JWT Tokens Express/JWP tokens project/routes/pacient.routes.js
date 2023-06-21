import { Router } from "express";
import { pacientController } from "../controller/pacient.controller.js";
import { adminValidator } from "../middlewears/admin-validator.middlewear.js";
import { updateInfoValidator } from "../middlewears/update-validator.middlewear.js";


export const pacientRouth = Router();

pacientRouth.get("/", pacientController.getAllPacients);
pacientRouth.get("/:id", pacientController.getPacientByID);
pacientRouth.use(adminValidator)
pacientRouth.post("/register",pacientController.createPacient);
pacientRouth.patch("/:id",updateInfoValidator,pacientController.updatePacient);
pacientRouth.delete("/all",pacientController.deleteAllPacients);
pacientRouth.delete("/:id", pacientController.deletePacient);




