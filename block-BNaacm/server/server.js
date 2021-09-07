let app = express();

mongoose.connect(
  'mongodb://localhost:27017/server',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : 'Connected to Database');
  }
);

app.get('/', (req, res) => {
  res.send('Welcome');
});

app.listen(4000, () => {
  console.log('server is running on port 4k');
});
