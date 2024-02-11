

const {
  createUserWorkout,
  getAllUserWorkouts,
  getUserWorkoutById,
  updateUserWorkout,
  deleteUserWorkout,
} = require('../models/userWorkoutsModel');

const getUserWorkout = () => {
  return getAllUserWorkouts();
};

const createUserWorkouts = (params) => {
  return createUserWorkout(params.newItem);
};

const updateUserWorkouts = (params) => {
  return updateUserWorkout(params.id, params.columnChange);
};

const deleteUserWorkout = (params) => {
  return deleteUserWorkout(params.id);
};

module.exports = {
  getUserWorkout,
  createUserWorkouts,
  updateUserWorkouts,
  deleteUserWorkout
}