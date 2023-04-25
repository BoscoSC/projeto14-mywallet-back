import { Router } from "express";
import {
  loginValidationMiddleware,
  registerValidationMiddleware,
} from "../middlewares/userValidationSchemasMiddleware.js";
import { Register, Login } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/register", registerValidationMiddleware, Register);
authRouter.post("/login", loginValidationMiddleware, Login);

export default authRouter;
