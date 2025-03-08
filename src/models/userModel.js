// models are mainly used for DB interactions.
// write the model related spcs .---> we need the lib.
// have we installed the lib? ---> No.
// 1 prerequisite : db connection ===> configure the Database.

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Schema : structure of the document.
// schema : will help us to define the structure of the collection/table .
// this will help u to create collection / table structure

const userSchema = new mongoose.Schema({
  // name, email, password
  name: {
    type: String,
    required: [true, "Please provide your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide your password"],
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
