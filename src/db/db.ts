import pg from "pg";
import { pgDatabaseUrl } from "../config/envVars.js";
import {
  INSERT_MESSAGE,
  SELECT_BY_USERNAME,
  SELECT_ALL_MESSAGES,
  SELECT_BY_ID,
  SELECT_ALL,
} from "./utils/queryGenerators.js";
import { extendLogger } from "../config/logger.js";
import { type QueryResult } from "pg";
import { Message } from "../config/types.js";

const { Pool } = pg;

const pool = new Pool({ connectionString: pgDatabaseUrl, connectionTimeoutMillis: 3 * 60 * 1000 });

const logger = extendLogger("db");

const log = (fn: string, query: string, result: any) => {
  logger(
    `%s
  -> query: %s
  -> result: %O
  `,
    fn,
    query,
    result
  );
};

const insertMessage = async (username: string, body: string, sent: Date) => {
  const query = INSERT_MESSAGE(username, body, sent);
  const { rows: result } = (await pool.query(query)) as QueryResult;
  log("insertMessage", query, result);
  return result;
};
const selectByUsername = async (username: string) => {
  const query = SELECT_BY_USERNAME(username);
  const { rows: result } = (await pool.query(query)) as QueryResult<Message>;
  log("selectByUsername", query, result);
  return result;
};
const selectAllMessages = async () => {
  const query = SELECT_ALL_MESSAGES();
  const { rows: result } = (await pool.query(query)) as QueryResult<Message>;
  log("selectAllMessages", query, result);
  return result;
};
const selectById = async (id: number | string) => {
  const query = SELECT_BY_ID(id);
  const { rows: result } = (await pool.query(query)) as QueryResult<Message>;
  log("selectById", query, result);
  return result;
};

const checkDb = async () => {
  const query = SELECT_ALL();
  const { rows: result } = (await pool.query(query)) as QueryResult;
  log("checkDb", query, result);
  return !!result;
};

export default { insertMessage, selectByUsername, selectAllMessages, selectById, checkDb };
