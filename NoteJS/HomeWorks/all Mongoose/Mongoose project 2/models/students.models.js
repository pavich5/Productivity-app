import { Schema, model } from "mongoose";
import validator from "validator";


export const studentsScheme = new Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        minLength: 2,
      },
      lastName: {
        type: String,
        required: [true, "Last name is required"],
        minLength: 2,
      },
      age: {
        type: Number,
        required: true,
        min: 16,
        max: 120,
      },
    
      email: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: value => validator.isEmail(value),
          message: error => `${error.value} is not a valid email`,
        },
      },
})

export const students = model("students", studentsScheme);