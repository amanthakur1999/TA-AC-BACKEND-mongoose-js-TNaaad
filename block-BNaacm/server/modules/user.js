let mongosose = require('mongoose');
let schema = mongosose.Schema;

let userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});
let User = mongosose.model('User', userSchema);
module.exports = User;
