import { AuthModel } from "../models/auth.models.js";

export class AuthController {
  // 1. Register user
  static async registerUser(req, res) {
    try {
      const newUser = await AuthModel.registerUser(req.body);
      return res.status(201).json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ msg: error.message });
    }
  }
  //   2. Login user
  static async loginUser(req, res) {
    try {
      const user = await AuthModel.loginUser(req.body);
      console.log(req.session);

      req.session.isLoggedIn = true;
      req.session.isAdmin = user.role;
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      return res.status(401).send({ msg: error.message });
    }
  }
  // Logout user
  static async logoutUser(req, res) {
    try {
      req.session.destroy();
      return res.sendStatus(204);
    } catch (error) {
      res.status(400).send({ msg: error.message });
    }
  }
}
