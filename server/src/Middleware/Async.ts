import { NextFunction, Request } from "express";

export const asyncMiddleware = (handler: any): any => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await handler(req, res);
    } catch (error) {
      next(error);
    }
  };
};
