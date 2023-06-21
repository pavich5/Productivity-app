import { Router } from "express";
import { TestController } from "../controller/test-controller";

export const testRouter = Router();

testRouter.get('/',TestController.test);

