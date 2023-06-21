import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();


export const createAccessToken = (userId,userRole) => {
    return jwt.sign({userId,userRole}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "5m",
    });
};

export const verifyAccessToken = token => {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
};

export const createRefreshToken = (userId,userRole) => {
    return jwt.sign({userId,userRole}, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "7d",
    });
};

export const verifyRefreshToken = refreshToken => {
    return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
};
