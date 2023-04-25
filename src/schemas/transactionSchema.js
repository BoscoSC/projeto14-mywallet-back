import joi from "joi";

const transactionSchema = joi.object({
  user: joi.object().required(),
  value: joi.number().required(),
  description: joi.string().required().min(3),
  type: joi.string().required().valid("entrada", "saida"),
  date: joi.string().required(),
});

export default transactionSchema;
