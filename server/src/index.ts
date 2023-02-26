import express, { Express, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PasswordEncrypter } from "./Middleware/PasswordEncrypter";
import bodyParser from "body-parser";
import { Logger } from "./Middleware/Logger";
import helmet from "helmet";
import { Authentificator } from "./Middleware/Auth/Auth";
import cookieParser from "cookie-parser";
import { Session } from "./Middleware/Auth/Models/Session";
import ServerCrypting from "./Crypto/Crypto";
import User, { IUser } from "./MongoDB/Models/User";
import mongoose, { Connection } from "mongoose";
import { db } from "./MongoDB/Connection";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 4002;

app.use(helmet());
app.use(express.static("public"));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(Logger);
app.use(PasswordEncrypter);
app.use(Authentificator);

mongoose.set("strictQuery", true);
app.use(require("./Router/Router"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
