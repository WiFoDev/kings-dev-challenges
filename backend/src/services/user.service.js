const users = require("../../users.json");

const getUserById = (id) => {
  return [users.find((user) => user.id === id)];
};

const getAllUsers = () => {
  return users;
};

module.exports = {
  getUserById,
  getAllUsers
};
