const { User } = require('./models/User');

const createUser = (params) => User.create(params);

const getUserByEmail = (email) => User.find({ email });

const getUsers = () => User.find({});

const updateUser = (email, changeSet) => User.updateOne({ email }, changeSet);

module.exports = {
  createUser,
  getUserByEmail,
  getUsers,
  updateUser,
};
