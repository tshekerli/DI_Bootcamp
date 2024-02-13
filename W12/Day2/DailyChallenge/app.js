const express = require('express');
const triviaRouter = require('./routes/trivia');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'trivia game secret',
  resave: false,
  saveUninitialized: true
}));

app.use('/quiz', triviaRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;