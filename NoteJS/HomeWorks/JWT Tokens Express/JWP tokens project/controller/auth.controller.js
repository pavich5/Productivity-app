import { AuthModel } from "../modells/auth.models.js"
import {
    createAccessToken,
    createRefreshToken,
    verifyRefreshToken,
    verifyAccessToken
  } from "../const/jwt.const.js";
  
  export class AuthController {
    static async registerUser(req,res){
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
          const accessToken = await createAccessToken(user.id,user.role);
          res.setHeader(`access-token`, accessToken);
          const refreshToken = await createRefreshToken(user.id,user.role);
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
          const refreshToken = req.headers["refresh-token"];
          if (!refreshToken) throw new Error("there is no refresh Token");
          const { userId } = verifyRefreshToken(refreshToken);
          const foundUser = await AuthModel.getUserByID(userId);
          if (foundUser.refreshToken !== refreshToken)
            throw new Error("invalid Refresh token");
          const accessToken = await createAccessToken(userId,user.role);
          res.setHeader("access-token", accessToken);
        } catch (error) {
          console.log(error);
          return res.sendStatus(403);
        }
      }
    
    
  }