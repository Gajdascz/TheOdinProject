import type { Application } from "express";
import path from "node:path";
import { serverPort } from "../envVars.js";
import { extendLogger } from "../logger.js";
import { App } from "../types.js";

const log = extendLogger("config:setSettings");

type Setting = { name: string; value: string | number };
const settings: Setting[] = [
  { name: "views", value: path.join(import.meta.dirname, "../../../views") },
  { name: "view engine", value: "ejs" },
  { name: "port", value: serverPort },
];

export default (app: Application): App => {
  settings.forEach((setting) => {
    app.set(setting.name, setting.value);
    log(`${setting.name}: ${setting.value}`);
  });
  (app as App).isAwake = false;
  log(`[property] isAwake added. Set to false.`);
  return app as App;
};
