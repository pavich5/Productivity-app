import * as Joi from "joi";

export const userSchema = Joi.object({
  firstName: Joi.string().min(2).required(),
  lastName: Joi.string().min(2).required(),
  age: Joi.number().min(18).required(),
  email: Joi.string().email().required(),
  //   role: Joi.string().valid("business", "user").required(),
  password: Joi.string().min(2).required(),
});
