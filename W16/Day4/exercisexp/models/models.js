
const knex = require('../db/init');

const register = (username, password) => {
  return knex('users').insert({ username, password });
};

const login = (username) => {
  return knex('users').where({ username }).first();
};

module.exports = { register, login };