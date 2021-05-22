const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: 'string', password: 'string', email: 'string', profilePic: 'string',
});

module.exports = {
  User,
};
