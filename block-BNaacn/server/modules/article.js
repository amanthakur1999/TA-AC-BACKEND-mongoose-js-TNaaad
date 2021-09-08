var mongoose = require('mongoose');
var Schema = mongoose.Schema;
let articleSchema = new Schema.mongoose(
  {
    title: String,
    description: String,
    tags: [String],
    createAt: { type: Date, default: new Date() },
    likes: { type: Number, default: 0 },
  },
  { timestamps: true }
);

var article = mongoose.model('Article', articleSchema);
module.exports = article;
