import { StudentsService } from "../services/students.services.js";

export class StudentController{
    static async getAllStudents(req,res){
        try {
            const students = await StudentsService.getAllStudents(req.query)
            res.json(students);
        } catch (error) {
            console.log(error);
            res.status(500).send({ msg: error.message });
        }
    }
    static async getStudentByID(req,res){
        try {
            const foundStudent = await StudentsService.getStudentByID(req.params.id);
            res.json(foundStudent);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    }
    static async createNewStudent(req,res){
        try {
            const createStudent = await StudentsService.createStudent(req.body);
            res.json(createStudent);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    }
    static async updateStudent(req,res){
        try {
            const updateStudent = await StudentsService.updateStudent(req.params.id,req.body);
            return res.json(updateStudent);
        } catch (error) {
            console.log(error)
        }
    }
    static async deleteStudent(req,res){
        try {
            await StudentsService.deleteStudent(req.params.id);
            res.sendStatus(204);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    }
}