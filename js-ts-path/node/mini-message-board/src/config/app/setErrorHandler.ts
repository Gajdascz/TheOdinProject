import type { NextFunction, Request, Response } from "express";
import { extendLogger } from "../logger.js";
import chalk from "chalk";
import type { App } from "../types.js";

type ErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => void;

const log = extendLogger("config:errorHandler");

const errorHandler: ErrorHandler = (err, req, res, next) => {
  const msg = err.message || "Internal Server Error";
  const error = req.app.get("env") === "development" ? err : {};
  const status = err.status || 500;
  res.locals.message = msg;
  res.locals.error = error;
  res.status(status);
  log(chalk.redBright(`ERROR(${status}): ${msg}\n ${error.stack}`));
  res.render("error");
};

export default (app: App): App => {
  app.use(errorHandler);
  log("errorHandler set");
  return app;
};
