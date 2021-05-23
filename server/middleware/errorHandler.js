/* eslint-disable no-unused-vars */
const errorHandler = (err, req, res, next) => {
  res.send({ msg: err.message });
};

module.exports = {
  errorHandler,
};
