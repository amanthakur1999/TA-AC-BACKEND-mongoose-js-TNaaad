var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let userSchema = new Schema.mongoose(
  {
    name: [String],
    email: { type: String, lowercase: true },
    age: { type: Number, default: 0 },
    passward: { type: String, minlength: 5, maxlength: 15 },
    createAt: { type: Date, default: new Date() },
  },
  { timestamps: true }
);

let User = mongoose.model('Address', userSchema);
module.exports = User;
