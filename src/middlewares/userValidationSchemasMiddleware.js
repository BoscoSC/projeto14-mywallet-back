import { sessionsCollection, usersCollection } from "../db.js";
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

export async function tokenValidationMiddleware(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    return res.sendStatus(401);
  }

  try {
    const session = await sessionsCollection.findOne({ token });
    if (!session) {
      return res.sendStatus(401);
    }

    const user = await usersCollection.findOne({ _id: session?.userId });

    if (!user) {
      return res.sendStatus(401);
    }

    res.locals.user = user;
  } catch (err) {
    return res.status(500).send(err.message);
  }

  next();
}
