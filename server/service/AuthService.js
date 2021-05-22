const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const { getLoginInfo, setLoginInfo } = require('../repository/AuthRepository');

const login = (user, pw) => {
  if (bcrypt.compareSync(pw, user.password)) {
    const hash = uuidv4();
    setLoginInfo(hash, { email: user.email });
    return hash;
  }
  throw new Error('User name/password incorrect');
};

// Check for authenticated user
const authentication = (req, res, next) => {
  const user = getLoginInfo(req.cookies.auth);
  if (user) {
    req.email = user.email;
    return next();
  }
  res.status(401).send('Unauthorized');
};

// Check authorization
const authorization = (req, res, next) => {
  if (req.email === req.params.userId) {
    return next();
  }
  res.status(401).send('Unauthorized access to resource');
};

// Create password hash
const hashPassword = (pw) => bcrypt.hashSync(pw, 10);

module.exports = {
  authentication,
  hashPassword,
  login,
  authorization,
};
