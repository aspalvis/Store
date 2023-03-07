import "express-async-errors";
import "winston-mongodb";
import express from "express";
import config from "config";

import { startup } from "./Startup/app";
import { errorHandler } from "./Startup/errorHandler";

const app: express.Express = express();
const port = config.get("app.port") as number;
errorHandler();
startup(app);

export const server = app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
