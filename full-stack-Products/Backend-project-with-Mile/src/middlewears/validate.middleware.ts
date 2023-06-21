// import { NextFunction, Request, Response } from "express"
// import { UsersEntity } from "../entites/users.entity"

// export const validatorMiddleware = (schema: any) => {

//     return (req: Request, res: Response, next: NextFunction) => {
//         // Joi validation logic here

//         if(req.method === "GET" || req.method === "DELETE") next()

//     }

// }

// // validatorMiddleware(userSchema)

// export const roleValidator = (role:string) => {
//     return (req:Request, res: Response)
// }

// roleValidator("admin")

// roleValidator("user")

// roleValidator()

import { Request, Response, NextFunction } from "express";
import { userSchema } from "../const/validaton.schemas";

// export const validateUser = () => {
//   return (req: Request, res: Response, next: NextFunction) => {
//     const data = req.body;
//     const validUser = userSchema.validate(data);
//     if (validUser?.error) throw new Error(validUser.error.details[0].message);
//     return next();
//   };
// };

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;
  const validUser = userSchema.validate(data);
  if (validUser?.error) throw new Error(validUser.error.details[0].message);
  next();
};
