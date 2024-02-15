const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5433,
    user: "postgres",
    password: "123456",
    database: "postgres",
  },
});

module.exports = {
  db,
};

// console.log(db);

// db("products")
//   .select("id", "name", "price")
//   //   .from("products")
//   .then((rows) => {
//     console.log(rows);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db.raw("insert into products (name,price) values ('Samsung S26', 5000)")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// db("products")
//   //   .insert([
//   //     { name: "Sansung S29", price: 5555 },
//   //     { name: "Sansung S30", price: 8888 },
//   //   ],['id'])
// //   .update({ name: "Samsung S32" },['*'])
// .del(['*'])
// .where({ id: 2 })
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err);
// });
