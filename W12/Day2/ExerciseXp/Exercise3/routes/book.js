const express = require('express');
const router = express.Router();
router.use(express.json())

let books = [
    { id: 1, title: 'Book 1', author: 'Author 1' },
    { id: 2, title: 'Book 2', author: 'Author 2' },
    { id: 3, title: 'Book 3', author: 'Author 3' },
    { id: 4, title: 'Book 4', author: 'Author 4' },
    { id: 5, title: 'Book 5', author: 'Author 5' }
  ];

// GET http://localhost:3000/books
router.get('/books', (req, res) => {
    res.json(books);
});

// POST http://localhost:3000/books
router.post('/books', (req, res) => {
    const todo = {
        id: books.length + 1,
        title: req.body.title,
        completed: req.body.completed || false
    };
    books.push(todo);
    res.status(201).json(todo);
});

// PUT http://localhost:3000/books/:id
router.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(todo => todo.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    books[index] = { id, title: req.body.title, completed: req.body.completed };
    res.json(books[index]);
});

// DELETE http://localhost:3000/books/:id
router.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = books.findIndex(todo => todo.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    books.splice(index, 1);
    res.status(204).end();
});

module.exports = router;