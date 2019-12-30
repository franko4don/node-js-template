const dotenv = require('dotenv');

dotenv.config();

const secrets = {
  port: process.env.PORT,
  mongo: process.env.MONGO_URI,
};

module.exports = secrets;