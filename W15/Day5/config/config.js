import knex from "knex";

const config = {
    client: "pg",
    connection: {
        host: "localhost",
        port: 5432,
        user:  "postgres",
        password: "12345",
        database: "miniproject"
    }
};

export const db = knex(config);

// db.schema.createTableIfNotExists("todo", (table) => {
//     table.increments("id").primary();
//     table.string("title");
//     table.boolean("completed");
// }).then(() => {
//     console.log("table created");
// }).catch((err) => {
//     console.log(err);
// });