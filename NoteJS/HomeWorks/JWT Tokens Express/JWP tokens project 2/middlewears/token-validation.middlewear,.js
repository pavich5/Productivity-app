import { verifyAccessToken } from "../const/jwt.const.js";
import { AuthModel } from "../models/auth.models.js";

export const tokenValidator = async(req,res,next) => {
    try {
        const authorizationHeader = req.headers.authorization;// da se objasne kak s kreire auth head
        if (!authorizationHeader) throw new Error("Invalid Token");
        const token = authorizationHeader.split(" ")[1];
        if(!token) throw new Error("There is no token");
    
        const {userId} = verifyAccessToken(token); // i voa d s objasne
    
        const user = await AuthModel.getUserByID(userId);
        req.user = user; // i voa 
        next()
    } catch (error) {
        console.log(error);
        res.status(401).send({ msg: error.message });
    }

}