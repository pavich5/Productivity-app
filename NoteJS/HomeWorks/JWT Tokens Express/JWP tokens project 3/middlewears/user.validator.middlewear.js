// import Joi from "joi";

// export const userScheme = Joi.object({
//     firstName: Joi.string()
//       .regex(/^[^\d]+$/)
//       .required()
//       .min(2)
//       .max(20),
//     lastName: Joi.string()
//       .regex(/^[^\d]+$/)
//       .min(2)
//       .max(20)
//       .required(),
//     email: Joi.string().email().required(),
//     password: Joi.string()
//       .min(8)
//       .max(30)
//       .required()
//       .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/)
//       .message(
//         "Password must be between 8 and 30 characters, and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
//       ),
//     role: Joi.string().required().valid("Doctor", "doctor", "pacient", "Pacient"),
//   });
  
