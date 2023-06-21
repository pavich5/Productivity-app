import { Router } from "express";
import { productController } from "../controllers/product-controller.js";

export const produtcRouter = Router();

produtcRouter.get("/",productController.getAllProducts)
produtcRouter.get("/:id",productController.getProductByID)
produtcRouter.post("/",productController.createProduct);
produtcRouter.patch("/:id",productController.updateProduct);
produtcRouter.delete("/:id",productController.deleteProduct);