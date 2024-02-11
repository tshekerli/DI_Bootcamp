// models/workoutsModel.js

const environment = process.env.NODE_ENV || "development";
const config = require("../config/knexfile")[environment];
const knex = require("knex")(config);

const createWorkout = (workout) => {
  return knex('workouts').insert(workout);
};

const getAllWorkouts = () => {
  return knex('workouts').select('*');
};

const getWorkoutById = (id) => {
  return knex('workouts').where({ id }).first();
};

const updateWorkout = (id, updatedWorkout) => {
  return knex('workouts').where({ id }).update(updatedWorkout);
};

const deleteWorkout = (id) => {
  return knex('workouts').where({ id }).del();
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
};