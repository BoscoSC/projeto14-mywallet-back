import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { usersCollection, sessionsCollection } from "../db.js";

export async function Register(req, res) {
  const { name, email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });

    if (user) {
      return res.status(409).send("E-mail já cadastrado");
    }

    const hash = bcrypt.hashSync(password, 10);

    await usersCollection.insertOne({ name, email, password: hash });
    res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export async function Login(req, res) {
  const { email, password } = req.body;

  try {
    const user = await usersCollection.findOne({ email });

    if (!user) {
      return res.status(404).send("E-mail não encontrado");
    }

    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).send("Senha incorreta");
    }

    const token = uuid();

    await sessionsCollection.insertOne({ userId: user._id, token });
    res.status(200).send({ token, name: user.name });
  } catch (err) {
    return res.status(500).send(err.message);
  }
}
