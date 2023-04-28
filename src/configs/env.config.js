const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  port: process.env.PORT,
  firstName: process.env.FIRST_NAME,
  lastName: process.env.LAST_NAME,
  population: process.env.POPULATION,
  DB_URL: process.env.MONGO_URL,
};
