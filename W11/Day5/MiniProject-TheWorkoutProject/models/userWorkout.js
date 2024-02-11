//userworkout model.js

const environment = process.env.NODE_ENV || "development";
const config = require("../config/knexfile")[environment];
const knex = require("knex")(config);

const createUserWorkout = (userWorkout) => {
  return knex('user_workouts').insert(userWorkout);
};

const getAllUserWorkouts = () => {
  return knex('user_workouts').select('*');
};

const getUserWorkoutById = (id) => {
  return knex('user_workouts').where({ id }).first();
};

const updateUserWorkout = (id, updatedUserWorkout) => {
  return knex('user_workouts').where({ id }).update(updatedUserWorkout);
};

const deleteUserWorkout = (id) => {
  return knex('user_workouts').where({ id }).del();
};

module.exports = {
  createUserWorkout,
  getAllUserWorkouts,
  getUserWorkoutById,
  updateUserWorkout,
  deleteUserWorkout,
};