const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect(
    '/tutorials'
  );
};

module.exports = connect;