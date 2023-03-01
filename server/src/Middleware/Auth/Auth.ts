import { NextFunction, Response, Request } from "express";
import { Session } from "./Models/Session";
import { JwtPayload, decode, sign } from "jsonwebtoken";
import { RefreshToken } from "../../MongoDB/Models/RefreshToken";

export const Authentificator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.url !== "/auth/login") {
    if (!req.cookies.accessToken) {
      return res.sendStatus(401);
    }
    const { accessToken } = req.cookies;
    try {
      const decoded = Session.ValidateToken(accessToken);
      const { _id, _roleId } = decoded as JwtPayload;

      req.body._id = _id;
      req.body._roleId = _roleId;

      next();
    } catch (error) {
      const { name } = error as any;
      if (name && name === "TokenExpiredError") {
        const decoded = decode(accessToken) as JwtPayload;
        const refreshToken = await RefreshToken.findOne({
          $and: [
            {
              userId: decoded._id,
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
        //TODO:Token should be encrypted in DB
        if (refreshToken.expires < Date.now()) {
          const sessionNew = new Session({
            _id: decoded._id,
            _roleId: decoded._roleId,
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
      } else {
        res.status(401).send(error);
      }
    }
  } else {
    next();
  }
};
