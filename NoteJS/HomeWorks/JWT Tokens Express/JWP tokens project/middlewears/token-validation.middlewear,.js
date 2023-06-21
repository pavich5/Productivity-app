import { verifyAccessToken } from "../const/jwt.const.js";
import { AuthModel } from "../modells/auth.models.js";

export const tokenValidator = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader) throw new Error("Invalid Token");

    const token = authorizationHeader.split(" ")[1];
    if (!token) throw new Error();

    const { userId } = verifyAccessToken(token);

    const user = await AuthModel.getUserByID(userId);

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).send({ msg: error.message });
  }
};
