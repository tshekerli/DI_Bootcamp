
import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

export const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const create = db.createSchema = async () => {
  const hasSchema = await db.schema.hasTable("users");
  if (!hasSchema) {
    await db.schema.createTable("users", (table) => {
      table.increments("id").primary();
      table.string("name");
      table.string("email");
      table.string("password");
    });
  }
};

create();