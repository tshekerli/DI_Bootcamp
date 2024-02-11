const express = require('express');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(express.json());

let todos = [];

app.post('/api/todos', (req, res) => {
    const todo = {
        id: uuidv4(),
        title: req.body.title,
        completed: false
    };
    todos.push(todo);
    res.status(201).json(todo);
});

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.get('/api/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === req.params.id);
    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    res.json(todo);
});

app.put('/api/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === req.params.id);
    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    todo.title = req.body.title;
    todo.completed = req.body.completed;
    res.json(todo);
});

app.delete('/api/todos/:id', (req, res) => {
    const todo = todos.find(t => t.id === req.params.id);
    if (!todo) return res.status(404).send('The todo with the given ID was not found.');
    const index = todos.indexOf(todo);
    todos.splice(index, 1);
    res.json(todo);
});

app.listen(5000, () => console.log('Server running on port 5000'));