const knex = require('./init');


// knex.schema.createTable('users', function(table) {
//   table.increments();
//   table.string('username').notNullable();
//   table.string('password').notNullable();
  
// })
// .then(() => console.log('Table created'))
// .catch((error) => console.error(error));




knex.select('*').from('users')
  .then(data => console.log(data))
  .catch(err => console.error(err));

knex('users').insert({username: 'db123', password: 'seed'})
    .then(() => console.log('User created'))
    .catch(err => console.error(err));