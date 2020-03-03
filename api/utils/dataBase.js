 
const connectionString = require('../../config').dbConnectionString;
const mongoose = require('mongoose');

function setUpConnection() {
  mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  return mongoose.connection;
}

module.exports = {
  setUpConnection
};
