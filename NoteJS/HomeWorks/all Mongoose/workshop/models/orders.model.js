import { Schema, model } from "mongoose";


const orderSchema = new Schema({
    date: {
      type: Date,
      required: true,
      default: Date.now
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    }]
  });

export const Order = model('Order', orderSchema);
  