// models/exercisesModel.js

const environment = process.env.NODE_ENV || "development";
const config = require("../config/knexfile")[environment];
const knex = require("knex")(config);

const createExercise = (exercise) => {
  return knex('exercises').insert(exercise);
};

const getAllExercises = () => {
  return knex('exercises').select('*');
};

const getExerciseById = (id) => {
  return knex('exercises').where({ id }).first();
};

const updateExercise = (id, updatedExercise) => {
  return knex('exercises').where({ id }).update(updatedExercise);
};

const deleteExercise = (id) => {
  return knex('exercises').where({ id }).del();
};

module.exports = {
  createExercise,
  getAllExercises,
  getExerciseById,
  updateExercise,
  deleteExercise,
};