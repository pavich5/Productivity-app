import Joi from "joi";

export const updateInfoValidator = async (req, res, next) => {
  const updateData = req.body;
  const updateInfoValidator = Joi.object({
    firstName: Joi.string()
      .regex(/^[^\d]+$/)
      .min(2)
      .max(20),
    lastName: Joi.string()
      .regex(/^[^\d]+$/)
      .min(2)
      .max(20),
    email: Joi.string().email(),
    password: Joi.string()
      .min(8)
      .max(30)
      .pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/)
      .message(
        "Password must be between 8 and 30 characters, and contain at least one uppercase letter, one lowercase letter, one digit, and one special character"
      ),
    primaryCareDoctor: Joi.string().min(2),
    dateOfBirth: Joi.date(),
    gender: Joi.string().valid("Male", "Female", "Other"),
    phoneNumber: Joi.string()
      .length(10)
      .pattern(/^[0-9]+$/),
  });
  const validation = updateInfoValidator.validate(updateData);
  if (validation?.error) {
    const errorMessage = validation.error.details[0].message;
    return res.status(400).json({ error: errorMessage });
  }

  next();
};
