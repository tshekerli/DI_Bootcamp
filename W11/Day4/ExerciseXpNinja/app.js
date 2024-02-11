const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('public'));

let questions = [
    { question: 'What is the capital of France?', options: ['Paris', 'London', 'Berlin', 'Madrid'], answer: 'Paris' },
    { question: 'What is the square root of 81?', options: ['7', '8', '9', '10'], answer: '9' },
    { question: 'Who wrote "To Kill a Mockingbird"?', options: ['Ernest Hemingway', 'Harper Lee', 'Mark Twain', 'F. Scott Fitzgerald'], answer: 'Harper Lee' },
    { question: 'What is the chemical symbol for Hydrogen?', options: ['H', 'He', 'Hy', 'Ha'], answer: 'H' },
    { question: 'What is the largest planet in our solar system?', options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], answer: 'Jupiter' },
    { question: 'What is the currency of Japan?', options: ['Yen', 'Dollar', 'Euro', 'Pound'], answer: 'Yen' },
    { question: 'Who painted the Mona Lisa?', options: ['Vincent Van Gogh', 'Pablo Picasso', 'Leonardo Da Vinci', 'Claude Monet'], answer: 'Leonardo Da Vinci' },
    { question: 'What is the highest mountain in the world?', options: ['K2', 'Mount Everest', 'Kilimanjaro', 'Mount Fuji'], answer: 'Mount Everest' },
    { question: 'Who is the author of "Harry Potter"?', options: ['J.K. Rowling', 'Stephen King', 'George R.R. Martin', 'J.R.R. Tolkien'], answer: 'J.K. Rowling' },
    { question: 'What is the capital of Australia?', options: ['Sydney', 'Melbourne', 'Perth', 'Canberra'], answer: 'Canberra' },
];
app.get('/api/questions', (req, res) => {
    res.json(questions);
});

app.listen(5000, () => console.log('Server running on port 5000'));