const mongoose = require('mongoose');

const connect = () => {
  return mongoose.connect(
    // 'mongodb+srv://sagarbhuva43:121196@cluster0.s2aqm6u.mongodb.net/tutorials'
    "mongodb://localhost:27017/tutorials"
  );
};
module.exports = connect;