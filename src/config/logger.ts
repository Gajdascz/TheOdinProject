import chalk from "chalk";
import debug from "debug";
import util, { InspectOptions } from "node:util";

debug.log = (...args) => {
  return process.stdout.write(
    util.formatWithOptions(debug.inspectOpts as InspectOptions, ...args) + "\n"
  );
};

/**
 * A logger class that wraps the debug module
 */
class DebugLogger {
  private enabled: boolean;
  public readonly namespace: string;
  private readonly logger: debug.Debugger;

  constructor(namespace: string, enabled: boolean, fd: string) {
    this.namespace = namespace;
    this.enabled = enabled;
    process.env.DEBUG_FD = fd;
    if (process.env.NODE_ENV === "production") process.env.DEBUG_COLORS = "0";
    this.logger = debug(`(${this.namespace}`);
    this.toggle(this.enabled);
  }
  public toggle = (state?: boolean) => {
    this.enabled = state ?? !this.enabled;
    process.env.DEBUG_ENABLED = String(state);
    if (this.enabled) debug.enable(`*${this.namespace}*`);
    else debug.disable();
    console.log(
      chalk.greenBright(
        `(${this.namespace})-> Debug Logger: ${this.enabled ? `Enabled` : `Disabled`}`
      )
    );
  };

  public extend = (namespace?: string) => this.logger.extend(`${namespace})->`);
}

interface Logger {
  curr: undefined | DebugLogger;
  init: (namespace: string, enabled: boolean, fd: string) => void;
  extend: (namespace: string) => debug.Debugger;
  toggle: (state?: boolean) => Promise<void>;
}

/**
 * A logger singleton that wraps the DebugLogger class
 */
const logger: Logger = {
  curr: undefined,
  init(namespace: string, enabled: boolean, fd: string) {
    if (this.curr) throw new Error(`Logger already initialized`);
    this.curr = new DebugLogger(namespace, enabled, fd);
  },
  extend(namespace: string) {
    if (!this.curr) throw new Error(`Logger not initialized`);
    return this.curr.extend(namespace);
  },
  async toggle(state?: boolean) {
    if (!this.curr) throw new Error(`Logger not initialized`);
    this.curr.toggle(state);
  },
};

const initLogger = logger.init.bind(logger);
const extendLogger = logger.extend.bind(logger);
const toggleLogger = logger.toggle.bind(logger);

export { initLogger, extendLogger, toggleLogger };
