const mongoose = require('mongoose');

const initBDConnection = () => mongoose
  .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.q7zmd.mongodb.net/user?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
  initBDConnection,
};
