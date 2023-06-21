import { Request, Response, NextFunction } from "express";
import { AuthModel } from "../models/users-model";
import { verifyAccessToken } from "../const/jwt-const";


export const tokenValidator = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) throw new Error("Invalid Token");

    const token = authorizationHeader.split(" ")[1];
    if (!token) throw new Error();

    const { userId } = verifyAccessToken(token) as { userId: string };

    await AuthModel.getUserById(userId);

    next();
  } catch (error) {
    console.log(error);
    res.status(403).send({ msg: error.message });
  }
};
