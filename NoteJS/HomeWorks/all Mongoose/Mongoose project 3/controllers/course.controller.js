import { Course } from "../models/course.moddels.js";
import { CourseService } from "../services/course.service.js";

export class CourseController {
  static async getAllCourses(req, res) {
    try {
      const courses = await CourseService.getAllCourses();

      res.json(courses);
    } catch (error) {
      console.log(error);
      res.status(500).send({ msg: error.message });
    }
  }
  static async getCourseById(req, res) {
    try {
      const course = await CourseService.getCourseById(req.params.id);

      res.json(course);
    } catch (error) {
      console.log(error);
      res.status(404).send({ msg: error.message });
    }
  }
  static async createCourse(req, res) {
    try {
      const course = await CourseService.createCourse(req.body);
      res.status(201).json(course);
    } catch (error) {
      console.log(error);
      res.status(400).send({ msg: error.message });
    }
  }
}
