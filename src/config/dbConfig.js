// i have imported mongoose lib

const mongoose = require("mongoose");

const connectDB = async () => {
  // this function is responsible for connecting to the database.

  const mongoose = require("mongoose");
  const config = require("config");

  const connectDB = async () => {
    try {
      // mongo_URI : connection string --> have we declared it? --> No.
      // where do we declare it? --> .env file.
      // do we have .env file? --> No.
      await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB Connected...");
    } catch (err) {
      console.error(err.message);
      process.exit(1); // terminate the process /application.
    }
  };

  module.exports = connectDB;
};
// async :
// () => {} : arrow function ==> executable blocks of code ==> for a specific task / operation we will write a block of code.
// async ==> asynchronous () & await :
