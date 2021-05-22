const { get, set } = require('./Cache');

const getLoginInfo = (key) => get(key);

const setLoginInfo = (key, loginInfo) => set(key, loginInfo);

module.exports = {
  setLoginInfo,
  getLoginInfo,
};
