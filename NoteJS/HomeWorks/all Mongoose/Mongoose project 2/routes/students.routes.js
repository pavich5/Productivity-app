import { Router } from "express";
import { StudentController } from "../controllers/student.controller.js";

export const studentRouter = Router();

studentRouter.get("/", StudentController.getAllStudents)
studentRouter.get("/:id", StudentController.getStudentByID);
studentRouter.post("/", StudentController.createNewStudent);
studentRouter.patch("/:id", StudentController.updateStudent);
studentRouter.delete("/:id", StudentController.deleteStudent);