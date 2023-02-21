import { NextFunction, Request, Response } from "express";
import { Session } from "./Models/Session";
import { JwtPayload } from "jsonwebtoken";

export const Authentificator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.method === "POST" && req.url !== "/login") {
    try {
      if (!req.cookies.accessToken || !req.cookies.sid) {
        return res.sendStatus(401);
      }
      const { accessToken } = req.cookies;
      const decoded = Session.ValidateToken(accessToken);
      const { username, roleId } = decoded as JwtPayload;

      req.body.requestUser = username;
      req.body.requestUserRoleId = roleId;

      next();
    } catch (error) {
      const { name } = error as any;
      if (name && name === "TokenExpiredError")
        return res.send(req.cookies.sid);

      res.status(401).send(error);
    }
  } else {
    next();
  }
};
