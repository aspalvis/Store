import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { PasswordEncrypter } from "./Middleware/PasswordEncrypter";
import bodyParser from "body-parser";
import { Logger } from "./Middleware/Logger";
import helmet from "helmet";
import { Authentificator } from "./Middleware/Auth/Auth";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
dotenv.config();

const app: express.Express = express();
const port = process.env.PORT || 4002;
mongoose.set("strictQuery", true);

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

app.use(require("./Router/Router"));

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
