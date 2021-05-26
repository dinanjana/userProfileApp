/* eslint-disable no-unused-vars */

/**
 * Common error handler
*/
const errorHandler = (err, req, res, next) => {
  res.send({ msg: err.message });
};

module.exports = {
  errorHandler,
};
