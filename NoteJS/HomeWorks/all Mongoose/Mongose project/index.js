import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import { globalRouter } from "./const/router.const.js";


const app = express();
app.use(express.json());

app.use("/api", globalRouter);

app.listen(3000, process.env.HOST, async () => {
    try {
      await mongoose.connect(`mongodb+srv://pavich5:drvarastat123@cluster0.ddogzo9.mongodb.net/Advanced-node?retryWrites=true&w=majority`);
      console.log("Connected to MongoDB");
      console.log(`Server is up at PORT: 3000`);
    } catch (error) {}
  });