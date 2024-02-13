const express = require('express');
const router = express.Router();

const triviaQuestions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    answer: "Mars",
  },
  {
    question: "What is the largest mammal in the world?",
    answer: "Blue whale",
  },
];

router.get('/', (req, res) => {
  req.session.score = 0;
  req.session.currentQuestionIndex = 0;
  res.json(triviaQuestions[req.session.currentQuestionIndex]);
});

router.post('/', (req, res) => {
  if (req.body.answer === triviaQuestions[req.session.currentQuestionIndex].answer) {
    req.session.score++;
  }
  req.session.currentQuestionIndex++;
  if (req.session.currentQuestionIndex < triviaQuestions.length) {
    res.json(triviaQuestions[req.session.currentQuestionIndex]);
  } else {
    res.json({ message: 'Quiz ended' });
  }
});

router.get('/score', (req, res) => {
  res.json({ score: req.session.score });
});

