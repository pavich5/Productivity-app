import { Schema, model } from "mongoose";
const productScheme = new Schema({
  title: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
    min: 2,
  },
  price: {
    type: Number,
    min: 2,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
});

export const Product = model("Product", productScheme);
