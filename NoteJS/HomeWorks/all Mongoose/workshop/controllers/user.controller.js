import { UserService } from "../services/users.service.js";
export class UserController {
    static async getAllUsers(req, res) {
        try {
          const allUsers = await UserService.getAllUsers(req.query);
          res.json(allUsers);
        } catch (error) {
          console.log(error);
          res.status(500).send({ msg: error.message });
        }
      }
    static async getUserByID(req,res){
        try {
            const foundUser = await UserService.getUserByID(req.params.id);
            res.json(foundUser);
        } catch (error) {
            console.log(error);
            res.status(403).send({ msg: error.message });
        }
    }
    static async createUser(req,res){
        try {
            const newUser = await UserService.createUser(req.body);
            res.json(newUser);
        } catch (error) {
            console.log(error);
            res.status(403).send({ msg: error.message });
        }
    }
    static async updateUser(req,res){
        try {
            const updateProduct = await UserService.updateUser(req.params.id,req.body);
            res.json(updateProduct);
        } catch (error) {
            console.log(error);
            res.status(404).send({ msg: error.message });
        }
    } 
    static async deleteUser(req, res) {
        try {
          await UserService.deleteUser(req.params.id);
          res.sendStatus(204);
        } catch (error) {
          console.log(error);
          res.status(404).send({ msg: error.message });
        }
      }
}