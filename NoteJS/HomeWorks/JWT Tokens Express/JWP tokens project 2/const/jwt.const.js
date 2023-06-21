import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

export const createAccessToken = userId =>{
    return jwt.sign({userId}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "10s"
    })
}
export const verifyAccessToken = token =>{
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
}

export const createRefreshToken = userId =>{
    return jwt.sign({userId}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d"
    })
}
export const verifyRefreshToken = refreshtoken =>{
    return jwt.verify(refreshtoken, process.env.REFRESH_TOKEN_SECRET);
}

