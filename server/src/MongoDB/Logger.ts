import config from "config";
import winston from "winston";

export const error_logger = winston.createLogger({
  transports: [
    new winston.transports.MongoDB({
      level: "error",
      db: (config.get("mongodb.uri") as string) + config.get("mongodb.dbname"),
      collection: "logs",
    }),
    new winston.transports.Console(),
  ],
});
