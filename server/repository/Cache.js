const store = {};

const get = (key) => store[key];

const set = (key, value) => { store[key] = value; };

module.exports = {
  get,
  set,
};
