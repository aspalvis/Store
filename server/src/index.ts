import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { PasswordEncrypter } from "./Middleware/PasswordEncrypter";
import { Logger } from "./Middleware/Logger";
import { Authentificator } from "./Middleware/Auth/Auth";

import config from "config";
import db from "./MongoDB/Connection";
const app: express.Express = express();

const port = config.get("app.port");

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
