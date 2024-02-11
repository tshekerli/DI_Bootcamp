const environment = process.env.NODE_ENV || "development";
const config = require("../config/knexfile")[environment];
const knex = require("knex")(config);

const createUser = (user) => {
  return knex('users').insert(user);
};

const getAllUsers = () => {
  return knex('users').select('*');
};

const getUserById = (id) => {
  return knex('users').where({ id }).first();
};

const updateUser = (id, updatedUser) => {
  return knex('users').where({ id }).update(updatedUser);
};

const deleteUser = (id) => {
  return knex('users').where({ id }).del();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};