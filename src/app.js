import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import joi from "joi";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

let db;
const mongoClient = new MongoClient(process.env.DATABASE_URL);

try {
  await mongoClient.connect();
  db = mongoClient.db();
} catch (err) {
  console.log(err);
}

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});
