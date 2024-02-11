const environment = process.env.NODE_ENV || "development";
const config = require("../config/knexfile")[environment];
const knex = require("knex")(config);

const getExercise = () => {
  return knex
    .select()
    .table("exercises");
};

const createExercises = (params) => {
    return knex(params.tableName)
      .where('name', params.newItem.name)
      .first()
      .then((exercise) => {
        if (exercise) {
          // An exercise with the same name already exists
          throw new Error('An exercise with this name already exists');
        } else {
          // No exercise with the same name exists, so insert the new one
          return knex(params.tableName)
            .insert(params.newItem);
        }
      });
  }

const updateExercises = (params) => {
  return knex(params.tableName)
    .where(params.column, params.value)
    .update(params.columnChange);
};

const deleteExercise = (params) => {
  return knex(params.tableName)
    .where(params.column, params.value)
    .del();
};

module.exports = {
    getExercise,
    createExercises,
    updateExercises,
    deleteExercise
}