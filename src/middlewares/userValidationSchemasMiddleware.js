import loginSchema from "../schemas/loginSchema.js";
import registerSchema from "../schemas/registerSchema.js";

export function loginValidationMiddleware(req, res, next) {
  const validation = loginSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next();
}

export function registerValidationMiddleware(req, res, next) {
  const validation = registerSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const errors = validation.error.details.map((detail) => detail.message);
    return res.status(422).send(errors);
  }

  next();
}
