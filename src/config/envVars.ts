import { config } from "dotenv";
import path from "path";
import { initLogger, extendLogger } from "./logger.js";

config({ path: path.resolve(import.meta.dirname, "../../", ".env") });

type ServerPort = number;
type PgPort = number;
type PgHost = string;
type PgUser = string;
type PgPassword = string;
type PgDatabase = string;
type PgDatabaseUrl = string;

type DebugEnabled = boolean;
type DebugNamespace = string;
type DebugFd = "1" | "2";

const getErr = (variable: string) =>
  new Error(`Cannot load configuration without a defined ${variable} environment variable`);

const getEnvVar = (
  varName: string,
  defaultValue?: string,
  toNum: boolean = false
): string | number => {
  const value = process.env[varName];
  if (value) return toNum ? +value : value;
  else if (!value && defaultValue) return toNum ? +defaultValue : defaultValue;
  else throw getErr(varName);
};

const debugEnabled: DebugEnabled = !!(getEnvVar("DEBUG_ENABLED") === "true");
const debugNamespace: DebugNamespace = getEnvVar("DEBUG_NAMESPACE", "app") as DebugNamespace;
const debugFd: DebugFd = getEnvVar("DEBUG_FD", "1", true) as DebugFd;
initLogger(debugNamespace, debugEnabled, debugFd);
const log = extendLogger("config:envVars");
log(`logger initialized`);

const serverPort: ServerPort = getEnvVar("PORT", "3000", true) as ServerPort;
log(`loaded server port: ${serverPort}`);

const pgPort: PgPort = getEnvVar("PGPORT", "5432", true) as PgPort;
log(`loaded pg port: ${pgPort}`);

const pgHost: PgHost = getEnvVar("PGHOST") as PgHost;
log(`pgHost: ${pgHost}`);

const pgUser: PgUser = getEnvVar("PGUSER") as PgUser;
log(`pgUser: ${pgUser}`);

const pgPassword: PgPassword = getEnvVar("PGPASSWORD") as PgPassword;
log(`pgPassword: ${pgPassword}`);

const pgDatabase: PgDatabase = getEnvVar("PGDATABASE") as PgDatabase;
log(`pgDatabase: ${pgDatabase}`);

const pgDatabaseUrl: PgDatabaseUrl = getEnvVar("DATABASE_URL") as PgDatabaseUrl;
log(`pgDatabaseUrl: ${pgDatabaseUrl}`);

export { serverPort, pgPort, pgHost, pgUser, pgPassword, pgDatabase, pgDatabaseUrl };
