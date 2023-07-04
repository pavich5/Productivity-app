import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../state/slices/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
