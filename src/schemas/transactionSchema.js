import joi from "joi";

const transactionSchema = joi.object({
  value: joi.number().required(),
  description: joi.string().required().min(3),
  type: joi.string().required().valid("entrada", "saida"),
  user: joi.object().required(),
  date: joi.string().required(),
});

export default transactionSchema;
