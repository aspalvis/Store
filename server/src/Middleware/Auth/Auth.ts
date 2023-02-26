import { NextFunction, Request, Response } from "express";
import { Session } from "./Models/Session";
import { JwtPayload, decode, sign } from "jsonwebtoken";
import { RefreshToken } from "../../MongoDB/Models/RefreshToken";
import { db } from "../../MongoDB/Connection";

export const Authentificator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.url !== "/auth/login") {
    console.log("url  = " + req.url);

    if (!req.cookies.accessToken) {
      return res.sendStatus(401);
    }
    const { accessToken } = req.cookies;
    try {
      const decoded = Session.ValidateToken(accessToken);
      const { email, roleId } = decoded as JwtPayload;

      req.body.requestUser = email;
      req.body.requestUserRoleId = roleId;

      next();
    } catch (error) {
      const { name } = error as any;
      if (name && name === "TokenExpiredError") {
        const decoded = decode(accessToken) as JwtPayload;
        await db.Connect();

        const refreshToken = await RefreshToken.findOne({
          $and: [
            {
              userId: decoded.email,
            },
            {
              $or: [
                {
                  prevTokens: accessToken,
                },
                {
                  accessToken: accessToken,
                },
              ],
            },
          ],
        });

        if (!refreshToken) {
          return res.sendStatus(401);
        }

        if (refreshToken.expires < Date.now()) {
          const sessionNew = new Session({
            email: decoded.email,
            roleId: decoded.roleId,
          });
          refreshToken.accessToken = sessionNew.accessToken;
          refreshToken.prevTokens.unshift(sessionNew.accessToken);
          refreshToken.expires = sessionNew.refreshExp as number;
          await refreshToken.save();
          res.cookie("accessToken", sessionNew.accessToken);
        } else {
          res.cookie("accessToken", refreshToken.accessToken);
        }
        next();
      }
      res.status(401).send(error);
    }
  } else {
    next();
  }
};
