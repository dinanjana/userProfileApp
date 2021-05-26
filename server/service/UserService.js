const { hashPassword, login } = require('./AuthService');
const userRepo = require('../repository/UserRepository');
const { upload } = require('../repository/AWS');

// User creation service
const createUser = async ({ name, email, password }) => {
  const user = await userRepo.getUserByEmail(email);
  if (user.length) {
    throw new Error('Email already present');
  }
  await userRepo.createUser({ name, email, password: hashPassword(password) });
};

const getUserByEmail = (email) => userRepo.getUserByEmail(email);

const getUsers = () => userRepo.getUsers();

const updateUser = async (email, changeSet) => {
  const { name, profilePic } = changeSet;
  if (profilePic && profilePic.buffer) {
    const url = await upload(email + profilePic.originalname, profilePic.buffer);
    return userRepo.updateUser(email, { name, profilePic: url });
  }
  return userRepo.updateUser(email, { name });
};

const loginUser = (user, password) => login(user, password);

module.exports = {
  createUser,
  getUserByEmail,
  loginUser,
  getUsers,
  updateUser,
};
