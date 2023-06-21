import { Course } from "../models/course.moddels.js";

export class CourseService {
  static async getAllCourses() {
    return Course.find({});
  }

  static async getCourseById(courseId) {
    // Populate takes a property and if it finds a reference to another collection it fetches the data and populates the documents
    const course = Course.findById(courseId).populate("workers").populate("students");
    if (!course) throw new Error("Course not found");
    return course;
  }

  static async createCourse(courseData) {
    if (courseData._id) throw new Error("Invalid data");
    const newCourse = new Course(courseData);
    const createdCourse = await newCourse.save();
    return createdCourse;
  }
}
