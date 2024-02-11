// userWorkoutsController.js

const {
    createUserWorkout,
    getAllUserWorkouts,
    getUserWorkoutById,
    updateUserWorkout,
    deleteUserWorkout, // renamed to avoid conflict
  } = require('../models/userWorkout');
  
  const getUserWorkout = () => {
    return getAllUserWorkouts();
  };
  
  const createUserWorkouts = (params) => {
    return createUserWorkout(params.newItem);
  };
  
  const updateUserWorkouts = (params) => {
    return updateUserWorkout(params.id, params.columnChange);
  };
  
  const removeUserWorkout = (params) => {
    return deleteUserWorkout(params.id); // use renamed function here
  };
  
  module.exports = {
    getUserWorkout,
    createUserWorkouts,
    updateUserWorkouts,
    removeUserWorkout
  }