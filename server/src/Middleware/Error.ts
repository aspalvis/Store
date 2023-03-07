import { Response, Request, NextFunction } from "express";
import { error_logger } from "../MongoDB/Logger";

export const error = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  error_logger.error(err.message, err);
  res.status(500).send("Internal server error");
};
