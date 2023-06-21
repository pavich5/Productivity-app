import { Router } from "express";
import { OrderController } from "../controllers/order.models.js";

export const ordersRouter = Router();

ordersRouter.get("/",OrderController.getAllOrder)
ordersRouter.get("/:id",OrderController.getOrderByID)
ordersRouter.post("/",OrderController.createOrder);
ordersRouter.patch("/:id",OrderController.updateOrder);
ordersRouter.delete("/:id",OrderController.deleteOrder);