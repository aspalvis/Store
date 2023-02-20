import { NextFunction, Request, Response } from "express";
import fs from "fs";
import path from "path";

export const Logger = (req: Request, res: Response, next: NextFunction) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1; // Adding 1 since getMonth returns 0-based index
  const dateString = `${month.toString().padStart(2, "0")}_${year.toString()}`;

  const rootPath = path.resolve(__dirname, "../Logs");
  const filePath = path.join(rootPath, `${dateString}.json`);

  const entry = `{
    "route":"${req.url}",
    "data":${JSON.stringify(req.body)},
    "method":"${req.method}",
    "cookies":"${req.cookies}",
    "dateCreated":"${new Date().toISOString()}"\n},`;

  fs.appendFile(filePath, entry, (err) => {
    if (err) {
      console.error(err);
    }
  });
  next();
};
