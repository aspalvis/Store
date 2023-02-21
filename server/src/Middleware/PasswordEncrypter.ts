import { Response, Request, NextFunction } from "express";
import ServerCrypting from "../Crypto/Crypto";

export function PasswordEncrypter(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.body.password && req.url !== "/login")
    req.body.password = ServerCrypting.Encrypt(req.body.password);
  next();
}
