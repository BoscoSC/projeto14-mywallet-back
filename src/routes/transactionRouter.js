import { Router } from "express";
import { tokenValidationMiddleware } from "../middlewares/userValidationSchemasMiddleware.js";
import transactionValidationMiddleware from "../middlewares/transactionValidationSchemasMiddleware.js";
import {
  listTransactions,
  newTransaction,
} from "../controllers/transactionController.js";

const transactionRouter = Router();

transactionRouter.post(
  "/transactions/:type",
  tokenValidationMiddleware,
  transactionValidationMiddleware,
  newTransaction
);
transactionRouter.get(
  "/transactions",
  tokenValidationMiddleware,
  listTransactions
);

export default transactionRouter;
