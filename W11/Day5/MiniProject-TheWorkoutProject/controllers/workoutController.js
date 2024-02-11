// controllers/workoutsController.js

const {
    createWorkout,
    getAllWorkouts,
    getWorkoutById,
    updateWorkout,
    deleteWorkout,
  } = require('../models/workoutsModel');
  
  const getWorkout = () => {
    return getAllWorkouts();
  };
  
  const createWorkouts = (params) => {
    return createWorkout(params.newItem);
  };
  
  const updateWorkouts = (params) => {
    return updateWorkout(params.id, params.columnChange);
  };
  
  const deleteWorkout = (params) => {
    return deleteWorkout(params.id);
  };
  
  module.exports = {
    getWorkout,
    createWorkouts,
    updateWorkouts,
    deleteWorkout
  }