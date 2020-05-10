import express from 'express';

const PORT = 8081;
const app = express();

app.get('/', function (_req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log(`App listening on http://localhost:${PORT}`);
});
