import "dotenv/config";
import express from "express";
import { globalRouter } from "./const/router.const.js";

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();
app.use(express());

app.use("/api", globalRouter);
app.listen(PORT,HOST, ()=>{
    console.log(`Port is up at ${PORT}`);
})