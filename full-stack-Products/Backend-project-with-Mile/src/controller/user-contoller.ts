import { UsersEntity } from "../entites/users.entity";
import { AuthModel } from "../models/users-model";
import { Request, Response } from "express";
import { createAccessToken, createRefreshToken, verifyRefreshToken } from "../const/jwt-const";
import { log } from "console";

export class AuthController {
  static async getAllUsers(req: Request, res: Response) {
    try {
      const allUsers: UsersEntity[] = await AuthModel.getAllUsers();
      res.json(allUsers);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async getUserById(req: Request, res: Response) {
    try {
      const foundUser: UsersEntity = await AuthModel.getUserById(Number(req.params.id));
      res.json(foundUser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async createUser(req: Request, res: Response) {
    try {
      const user = await AuthModel.createUser(req.body);
      res.json(user);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      await AuthModel.updateUser(req.body, req.params.id);
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async removeUser(req: Request, res: Response) {
    try {
      await AuthModel.deleteUser(req.params.id);
      res.sendStatus(201);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async loginUser(req: Request, res: Response) {
    try {
      const user = await AuthModel.loginUser(req.body);

      const accessToken = createAccessToken(user.id);
      console.log("Access token is: ", accessToken);

      // Set the 'Access-Control-Allow-Origin' header with the appropriate value
      // res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

      res.set("access-token", accessToken);

      const refreshToken = createRefreshToken(user.id);

      await AuthModel.saveRefreshToken(user.id, refreshToken);

      res.set("refresh-token", refreshToken);

      res.set("access-control-expose-headers", "access-token, refresh-token");

      // res.sendStatus(200);
      res.json(user);
    } catch (error) {
      console.log("The error is: ", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  static async refreshAccessToken(req: Request, res: Response) {
    try {
      const refreshToken: string | undefined = req.headers["refresh-token"] as string;
      console.log(refreshToken);
      if (!refreshToken) {
        throw new Error("Refresh token is missing");
      }
      const decodedToken = verifyRefreshToken(refreshToken);
      const userId = decodedToken.userId;

      const foundUser: UsersEntity = await AuthModel.getUserById(userId);
      console.log("Found user:", foundUser);

      if (!foundUser.refreshTokens.includes(refreshToken)) {
        throw new Error("Invalid refresh token");
      }

      const accessToken: string = createAccessToken(foundUser.id);
      console.log("New access token:", accessToken);

      res.set("access-token", accessToken);
      res.set("access-control-expose-headers", "access-token, refresh-token");
      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.sendStatus(403);
    }
  }

  static async logoutUser(req: Request, res: Response) {
    try {
      const refreshToken: string | undefined = req.headers["refresh-token"] as string;

      const { userId } = verifyRefreshToken(refreshToken);

      await AuthModel.deleteRefreshToken(userId);

      return res.sendStatus(204);
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
  }
}
