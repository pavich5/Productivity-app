import { Schema, model } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    min: 19
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email!`
    }
  },
  country: {
    type: String,
    required: true
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }]
});

export const User = model('User', userSchema);
