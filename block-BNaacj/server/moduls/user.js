let mongoose = require('mongoose');

let schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String },
    passward: { type: String, minlength: 5, maxlength: 15 },
    date: {
      type: Date,
      default: date,
    },
  },
  { timestamps: true }
);
