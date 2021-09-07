let mongoose = require('mongoose');

let schema = mongoose.Schema;

let userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
});
var userSchema = new Schema({
  email: { type: String, lowercase: true },
  age: { age = 0},
});
