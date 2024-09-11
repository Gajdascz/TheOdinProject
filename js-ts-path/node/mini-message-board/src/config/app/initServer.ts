import http, { type Server } from "node:http";
import { serverPort, pgHost } from "../envVars.js";
import { extendLogger } from "../logger.js";
import { App } from "../types.js";

const log = extendLogger("config:initServer");

export default (app: App): Server => {
  const server = http.createServer(app);
  server.listen(serverPort);
  log("server listening on port:", serverPort);
  server.on("error", (error: any) => {
    if (error.syscall !== "listen") throw error;
    switch (error.code) {
      case "EACCES":
        log(`${serverPort}: requires elevated privileges`);
        process.exit(1);
      case "EADDRINUSE":
        log(`${pgHost}: is already in use`);
        process.exit(1);
      default:
        throw error;
    }
  });
  server.on("listening", () => {
    if (process.env.RAILWAY_PUBLIC_DOMAIN)
      log(`Listening on: https://${process.env.RAILWAY_PUBLIC_DOMAIN}`);
    else log(`Listening on: http://${pgHost}:${serverPort}`);
  });

  process.on("SIGTERM", () => {
    log("SIGTERM signal received");
    server.close(() => log("HTTP server closed"));
    app.isAwake = false;
  });

  log("server initialized");
  return server;
};
