const express = require('express');
const router = express.Router();
router.use(express.json())

let todos = [
    { id: 1, title: 'Learn Node.js', completed: false },
    { id: 2, title: 'Learn Express.js', completed: false },
    { id: 3, title: 'Build a REST API', completed: false }
];

// GET http://localhost:3000/todos
router.get('/todos', (req, res) => {
    res.json(todos);
});

// POST http://localhost:3000/todos
router.post('/todos', (req, res) => {
    const todo = {
        id: todos.length + 1,
        title: req.body.title,
        completed: req.body.completed || false
    };
    todos.push(todo);
    res.status(201).json(todo);
});

// PUT http://localhost:3000/todos/:id
router.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    todos[index] = { id, title: req.body.title, completed: req.body.completed };
    res.json(todos[index]);
});

// DELETE http://localhost:3000/todos/:id
router.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(todo => todo.id === id);
    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }
    todos.splice(index, 1);
    res.status(204).end();
});

module.exports = router;