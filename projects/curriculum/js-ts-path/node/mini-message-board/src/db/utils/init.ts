import pg from "pg";
import { argv } from "process";

const { Client } = pg;

const CREATE_MESSAGE_TABLE = `--sql 
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR ( 255 ),
    body TEXT,
    sent TIMESTAMP(0)
  );
`;

const client = new Client({
  connectionString: argv[2],
});

const verifyTable = async () => {
  try {
    await client.query("SELECT * FROM messages");
    return true;
  } catch (error) {
    return false;
  }
};

export default async () => {
  try {
    await client.connect();
    console.log("connected to database");
    if (await verifyTable()) {
      console.log(`Messages table detected`);
      client.end();
      console.log("client disconnected from db.");
    } else {
      console.log("initializing database...");
      await client.query(CREATE_MESSAGE_TABLE);
      await verifyTable();
      console.log("messages table created");
      await client.end();
      console.log("client disconnected from db.");
      console.log("init successful");
    }
  } catch (error) {
    console.error("error during db initialization", error);
  }
};
