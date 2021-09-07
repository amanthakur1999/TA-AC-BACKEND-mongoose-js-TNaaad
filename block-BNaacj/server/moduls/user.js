let mongoose = require('mongoose');

let schema = mongoose.Schema;

let userSchema = new Schema(
  {
    name: { type: String },
    passward: { type: String, minlength: 5, maxlength: 15 },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);
