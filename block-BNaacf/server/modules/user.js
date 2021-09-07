let mongoose = require('mongoose');

let schema = mongoose.Schema;

let userSchema = new Schema({
  favorites: [String],
  marks: [Number],
  village: String,
  city: String,
  state: String,
  pin: Number,
  user: { type: Schema.Types.ObjectId },
});

let User = mongoose.model('User', userSchema);
module.exports = User;
