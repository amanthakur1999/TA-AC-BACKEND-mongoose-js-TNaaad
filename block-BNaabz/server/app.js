var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/server', (err) => {
  console.log(err ? err : 'Connected to database');
});
app.listen(3000, () => {
  console.log('server listening on port 3k');
});
