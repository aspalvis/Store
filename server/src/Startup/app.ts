import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Express } from "express";
import helmet from "helmet";
import { Logger } from "../Middleware/Logger";
import { PasswordEncrypter } from "../Middleware/PasswordEncrypter";
import { Authentificator } from "../Middleware/Auth/Auth";
import { error } from "../Middleware/Error";

export const startup = (app: Express) => {
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

  app.use(error);
};
