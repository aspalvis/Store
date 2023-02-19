import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { Connection } from "./MongoDB/Database";
import { MongoClient, MongoClientOptions } from "mongodb";

dotenv.config();

const app: Express = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
const port = 4000;

app.get("/", async (req: Request, res: Response) => {
  // const connection = new Connection("spalvis_store");
  // await connection.connect();
  // res.send("connected to db");
  const uri = process.env.MONGODB_URI;
  // const client = new MongoClient("mongodb://localhost:27017/");
  const client = new MongoClient(
    "mongodb+srv://andris:andris1033@aspalvis.zhmzont.mongodb.net/?retryWrites=true&w=majority",
    { useUnifiedTopology: true } as MongoClientOptions
  );
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("spalvis_store");
    // await db.collection("tests").insertOne({
    //   test: "aaaa",
    // });
    const result = await db.collections();
    res.send(result);
    // Perform database operations here
  } catch (err) {
    console.error(err);
  }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
