const knex = require('knex')(require('../config/knexfile').development);

module.exports = knex;

//  I want to use knex to look inside the tables in the database.

//I want to look at the tables in the database to see what is in them.


knex('users')
    .select()
    .then(rows => {
        console.log(rows);
    })
    .catch(err => {
        console.error(err);
    });