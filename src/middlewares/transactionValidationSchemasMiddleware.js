import transactionSchema from "../schemas/transactionSchema.js";
import dayjs from "dayjs";

export default function transactionValidationMiddleware(req, res, next) {
  const { value, description } = req.body;
  const { type } = req.params;
  const user = res.locals.user;

  const transaction = {
    user: user._id,
    value,
    description,
    type,
    date: dayjs().format("DD/MM"),
  };

  const validation = transactionSchema.validate(transaction, {
    convert: false,
    abortEarly: false,
  });

  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  res.locals.transaction = transaction;
  next();
}
