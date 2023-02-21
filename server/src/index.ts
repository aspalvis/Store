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
dotenv.config();

const app: Express = express();

const Users = [
  {
    username: "andris",
    password: "U2FsdGVkX18Zv27nefiuKPt3kzlSi6nYI5gZWztxdmU=",
    roleId: "admin",
  },
];

const port = process.env.PORT || 4002;
app.use(helmet());
app.use(express.static("public"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(Logger);
app.use(PasswordEncrypter);
app.use(Authentificator);

app.get("/", async (req: Request, res: Response, next: NextFunction) => {
  res.send("Welcome to the main route");
});

app.post("/login", async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const user = Users.find((details) => {
    const decryptedPassword = ServerCrypting.Decrypt(details.password);
    return decryptedPassword === password && details.username === username;
  });
  if (!user) {
    return res.status(401).send("Password or username is not correct");
  }
  const sessinon = new Session({ username, roleId: user.roleId });

  res.cookie("accessToken", sessinon.accessToken, {
    httpOnly: true,
  });
  res.cookie("sid", sessinon.SID, { httpOnly: true });
  res.json(sessinon);
});
app.post("/password", async (req: Request, res: Response) => {
  console.log("ssss");

  res.json(req.body.password);
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
