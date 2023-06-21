import { Schema, model } from "mongoose";

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    minLength: 3,
  },
  numberOfClasses: {
    type: Number,
    required: true,
    min: 0,
  },
  trainer: {
    type: String,
    required: true,
    minLength: 3,
  },
  assisstant: {
    type: String,
    required: true,
    minLength: 3,
  },
  workers: [
    {
      type: Schema.Types.ObjectId,
      ref: "workers",
    },
  ],students: [
    {
      type: Schema.Types.ObjectId,
      ref: "students",
    },
  ],
});

export const Course = model("Course", courseSchema);
