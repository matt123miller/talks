import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.get('/grades', (req, res, next) => {
  // scores are out of 100
  // Each letter grade has a corresponding score band
  const grades = {
    A: 95,
    B: 80,
    C: 65,
    D: 50,
    E: 35,
    F: 20,
  };
  res.send(grades);
});

export default app;
