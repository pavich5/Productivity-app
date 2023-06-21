import { Router } from "express";
import { produtcRouter } from "../routes/product.routes.js";
import { ordersRouter } from "../routes/orders.routes.js";
import { userRouter } from "../routes/users.routes.js";
export const globalRouter = Router();

globalRouter.use("/products",produtcRouter);
globalRouter.use("/orders",ordersRouter);
globalRouter.use("/users",userRouter)



