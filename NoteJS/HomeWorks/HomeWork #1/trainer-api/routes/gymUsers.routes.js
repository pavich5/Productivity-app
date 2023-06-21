import { Router } from "express";
import { gymController } from "../controllers/gymUsers.controller.js";
import { adminValidator } from "../middlewares/admin-validator.middleware.js";
import { isGod } from "../middlewares/GOD-validator.middlewere.js";


export const gymRouter = Router();

gymRouter.get("/", gymController.getAllGymMembers);
gymRouter.get("/:id",gymController.getGymMemberByID);


gymRouter.post("/register",gymController.createMember);
gymRouter.patch("/:id",gymController.updateMembers);
gymRouter.delete("/deleteall",isGod,gymController.deleteAll);
gymRouter.delete("/:id",gymController.deleteMember);

