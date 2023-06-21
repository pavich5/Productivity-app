import { students } from "../models/students.models.js";

export class StudentsService {
    static async getAllStudents(filters) {
        const student = await students.find(filters || {}).setOptions({
          sanitizeFilter: true,
        });
        return student;
    }    
  static async getStudentByID(studentID) {
    const foundStudent = await students.findById(studentID);
    if (!foundStudent) throw new Error("There is no student with this id");
    return foundStudent;
  }
  static async createStudent(studentData) {
    if (studentData._id) throw new Error("Invalid Data");
    const newStudent = new students(studentData);
    const response = await newStudent.save();
    return response;
  }
  static async updateStudent(studentID, data) {
    const student = await this.getStudentByID(studentID);
    if (data._id) throw new Error("Invalid data");
    Object.assign(student, data);
    const response = await student.save();
    return response;
  }
  static async deleteStudent(studentID){
    const response = await students.findByIdAndDelete(studentID);
    if(!response) throw new Error("there is no user with this id");
  }
}
