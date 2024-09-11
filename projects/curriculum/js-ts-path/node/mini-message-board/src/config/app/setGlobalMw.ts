import path from "path";
import { extendLogger } from "../logger.js";
import rateLimit from "express-rate-limit";
import type { App, e } from "../types.js";

const log = extendLogger("config:setGlobalMw");

const limiter = rateLimit({
  windowMs: 45 * 60 * 1000, // 45 minutes
  limit: 50, // 50 requests per window
});

export default (app: App, express: e): App => {
  app.use(express.json());
  log(`e.json`);
  app.use(express.urlencoded({ extended: true }));
  log(`e.urlencoded`);
  app.use(express.static(path.join(import.meta.dirname, "../../../public")));
  log(`e.static`);

  app.use(limiter);
  log(`Limiter`);
  return app;
};
