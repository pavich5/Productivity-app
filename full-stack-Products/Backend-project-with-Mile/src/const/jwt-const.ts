import * as jwt from "jsonwebtoken";

export const createAccessToken = (userId: number): string => {
  return jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET as string, {
    expiresIn: "5s",
  });
};

export const verifyAccessToken = (token: string): any => {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET as string);
};

export const createRefreshToken = (userId: number): string => {
  return jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET as string, {
    expiresIn: "7d",
  });
};

export const verifyRefreshToken = (refreshToken: string): any => {
  return jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET as string);
};
