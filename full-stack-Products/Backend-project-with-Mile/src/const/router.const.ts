import { Router } from "express";
import { authRouter } from "../routes/users-routes";
import { tokenValidator } from "../middlewears/token-validator";
import { testRouter } from "../routes/test-routes";
import { productsRouter } from "../routes/products.routes";
export const globalRouter = Router();

globalRouter.use("/users", authRouter);
globalRouter.use("/test", tokenValidator, testRouter);
globalRouter.use("/products", productsRouter);
