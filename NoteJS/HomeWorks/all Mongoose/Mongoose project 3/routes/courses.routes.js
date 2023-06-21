import { Router } from "express";
import { CourseController } from "../controllers/course.controller.js";

export const courseRouter = Router();


courseRouter.get("/", CourseController.getAllCourses);
courseRouter.get("/:id", CourseController.getCourseById);
courseRouter.post("/", CourseController.createCourse);
