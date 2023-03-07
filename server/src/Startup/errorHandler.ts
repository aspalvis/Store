import { error_logger } from "../MongoDB/Logger";
import winston from "winston";
export const errorHandler = () => {
  const handler = new winston.ExceptionHandler(error_logger);
  process.on("uncaughtException", (err) => {
    error_logger.error(err.message, err);
  });
  process.on("unhandledRejection", (err) => {
    error_logger.error(err);
  });
};
