import { Router } from "express";
import { authRouter } from "../routes/auth.routes.js";
import { pacientRouth } from "../routes/pacient.routes.js"
import { tokenValidator } from "../middlewears/token-validation.middlewear,.js"


export const globalRouter = Router();
globalRouter.use("/", authRouter);
globalRouter.use("/pacients",tokenValidator,pacientRouth);
