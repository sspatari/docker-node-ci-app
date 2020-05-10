import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', function (_req, res) {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
