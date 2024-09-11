import messageRouter from "../../routers/message.js";
import { messageController } from "../../controllers/message.js";
import { extendLogger, toggleLogger } from "../logger.js";
import initDb from "../../db/utils/init.js";
import asyncHandler from "express-async-handler";
import db from "../../db/db.js";
import { App } from "../types.js";

const log = extendLogger("config:setRouters");

export default (app: App): App => {
  app.get("/favicon.ico", (req, res) => {
    log("favicon.ico requested");
    res.sendStatus(204);
  });
  app.get("/logger", (req, res, next) => {
    res.render("toggleLogger");
  });
  app.get("/initdb", (req, res, next) => {
    res.render("initDb");
  });
  app.get("/health", async (req, res, next) => {
    log(`Railway health check requested.`);
    try {
      const result = await db.checkDb();
      if (!result) throw new Error(`Database connection error`);
      res.sendStatus(200);
    } catch (error: Error | any) {
      res.status(500).json({
        ok: false,
        message: "Failed to wake application.",
        error: error,
      });
    }
  });
  app.post(
    "/logger",
    asyncHandler(async (req, res) => {
      log(`Logger toggle requested.`);
      let status = 200;
      if (req.body.adminPw === process.env.ADMIN_PW) await toggleLogger(req.body.state);
      else status = 400;
      res.status(status).redirect("/");
    })
  );
  app.post(
    "/initdb",
    asyncHandler(async (req, res) => {
      log(`initdb toggle requested.`);
      let status = 200;
      if (req.body.adminPw === process.env.ADMIN_PW) await initDb();
      else status = 400;
      res.status(status).redirect("/");
    })
  );

  app.get("/", messageController.getAllMessages);
  app.use("/messages?", messageRouter);
  log(`App routes set`);
  return app;
};
