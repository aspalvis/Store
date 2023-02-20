import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PasswordEncrypter } from "./Middleware/BodyParser";
import bodyParser from "body-parser";
import { Logger } from "./Middleware/Logger";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4000;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(Logger);
app.use(PasswordEncrypter);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.send("hello");
});
app.post("/password", async (req: Request, res: Response) => {
  res.send(req.body.password);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
