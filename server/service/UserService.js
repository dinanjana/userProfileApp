const { hashPassword, login } = require('./AuthService');
const userRepo = require('../repository/UserRepository');

// User creation service
const createUser = async ({ name, email, password }) => {
  const user = await userRepo.getUserByEmail(email);
  if (user.length) {
    throw new Error('Email already present');
  }
  await userRepo.createUser({ name, email, password: hashPassword(password) });
};

const getUserByEmail = (email) => userRepo.getUserByEmail(email);

const getUsers = userRepo.getUsers();

const updateUser = (email, changeSet) => userRepo.updateUser(email, changeSet);

const loginUser = (user, password) => login(user, password);

module.exports = {
  createUser,
  getUserByEmail,
  loginUser,
  getUsers,
  updateUser,
};
