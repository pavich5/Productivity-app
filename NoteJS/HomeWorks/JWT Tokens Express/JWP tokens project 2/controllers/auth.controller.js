import { AuthModel } from "../models/auth.models.js";
import {
  createAccessToken,
  verifyRefreshToken,
  createRefreshToken,
  verifyAccessToken,
} from "../const/jwt.const.js";


export class authController {
  static async registerUser(req, res) {
    try {
      const newUser = await AuthModel.registerUser(req.body);
      return res.json(newUser);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ msg: error.message });
    }
  }
  static async loginUser(req, res) {
    try {
      const user = await AuthModel.loginUser(req.body);
      const accessToken = await createAccessToken(user.id);
      res.setHeader(`access-token`, accessToken);
      const refreshToken = await createRefreshToken(user.id);
      res.setHeader(`refresh-token`, refreshToken);
      await AuthModel.saveRefreshToken(user.id, refreshToken); // Use the method here
      return res.json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).send({ msg: error.message });
    }
  }

  static async refreshToken(req, res) {
    try {
      const refreshtoken = req.headers["refresh-token"];
      if (!refreshtoken) throw new Error("there is no refresh Token");
      const { userId } = verifyRefreshToken(refreshtoken);// da se objasne voa
      const foundUser = await AuthModel.getUserByID(userId);
      if (foundUser.refreshToken !== refreshtoken)
        throw new Error("invalid Refresh token");
      const accessToken = await createAccessToken(userId);
      res.setHeader("access-token", accessToken);
      return res.send({ msg:`Heyy` });
    } catch (error) {
      console.log(error);
      return res.sendStatus(403);
    }
  }
}
