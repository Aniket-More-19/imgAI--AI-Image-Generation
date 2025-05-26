import { client } from "../config/db";

let dbInstance: any;

export const getDB = async () => {
  if (!dbInstance) {
    await client.connect();
    dbInstance = client.db("ai-img-db"); // Change DB name, if needed
  }

  return dbInstance;
};
