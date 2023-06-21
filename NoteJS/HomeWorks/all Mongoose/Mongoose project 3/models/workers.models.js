import { Schema, model } from "mongoose";
import validator from "validator";

const workersScheme = new Schema({
  firstName: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(v);
      },
      message: 'First name must contain only letters and spaces',
    },
  },
  lastName: {
    type: String,
    required: true,
    validate: {
      validator: function(v) {
        return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(v);
      },
      message: 'Last name must contain only letters and spaces',
    },
  },
  age: {
    type: Number,
    required: true,
    min: [16, 'Age must be at least 16 years'],
    max: [120, 'Age must be less than or equal to 120 years'],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: 'Email must be a valid email address',
    },
  },
});


export const worker = model("workers", workersScheme);

