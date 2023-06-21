import { verifyAccessToken } from "../const/jwt.const.js";
import { AuthModel } from "../models/auth.model.js";

// 6. After creating the tokens, we come to these middlewear to
// see if the token is valid and will it pass all test so the user 
// can continie to use the accound and to make sure its not fake

export const tokenValidator = async (req, res, next) => {
  try {
    // When we login we add req.headers.authorization, and 
    // here we check if this is exzisting so we can continue
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader) throw new Error();

    // Here we take the value of the token itself and
    // putting it in variable called token
    const token = authorizationHeader.split(" ")[1];

    // Here we extract the payload or data from the token
    // and also verify is the token valid by the fucntion
    // witch checks with that secret key to validate if its real
    const { userId } = verifyAccessToken(token);

    
    // Searching for user in database  ( if it finds it will not throw error but if it doesn't it will throw error)
    await AuthModel.getUserById(userId);

    // If all checks above do not fail then we simply go to the next function in the chain
    return next();
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};
