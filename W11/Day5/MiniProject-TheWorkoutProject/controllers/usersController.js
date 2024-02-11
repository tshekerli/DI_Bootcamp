

const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
  } = require('../models/usersModel');
  
  const getUser = () => {
    return getAllUsers();
  };
  
  const createUsers = (params) => {
    return createUser(params.newItem);
  };
  
  const updateUsers = (params) => {
    return updateUser(params.id, params.columnChange);
  };
  
  const deleteUser = (params) => {
    return deleteUser(params.id);
  };
  
  module.exports = {
    getUser,
    createUsers,
    updateUsers,
    deleteUser
  }