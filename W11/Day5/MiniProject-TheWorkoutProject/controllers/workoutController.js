// controllers/workoutsController.js

const {
  createWorkout,
  getAllWorkouts,
  getWorkoutById,
  updateWorkout,
  deleteWorkout,
} = require('../models/workout');

const getWorkout = () => {
  return getAllWorkouts();
};

const createWorkouts = (params) => {
  return createWorkout(params.newItem);
};

const updateWorkouts = (params) => {
  return updateWorkout(params.id, params.columnChange);
};

const removeWorkout = (params) => {  // Renamed function
  return deleteWorkout(params.id);
};

module.exports = {
  getWorkout,
  createWorkouts,
  updateWorkouts,
  removeWorkout  // Updated export
}