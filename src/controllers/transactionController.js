import { transactionsCollection } from "../db.js";

export async function newTransaction(req, res) {
  const transaction = res.locals.transaction;

  try {
    await transactionsCollection.insertOne(transaction);
    res.sendStatus(201);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}

export async function listTransactions(req, res) {
  const userId = res.locals.user._id;

  try {
    const userTransactions = await transactionsCollection
      .find({ user: userId })
      .toArray();

    const newArr = userTransactions.slice(0).reverse();

    res.status(200).send(newArr);
  } catch (err) {
    return res.status(500).send(err.message);
  }
}
