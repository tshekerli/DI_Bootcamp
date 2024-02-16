const modules = require('../modules/modules');

const getAllTodos = (req, res) => {
    modules.getAllTodos().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}

const getTodo = (req, res) => {
    modules.getTodo(req.params.id).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}

const addTodo = (req, res) => {
    modules.addTodo(req.body).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}

const updateTodo = (req, res) => {
    modules.updateTodo(req.params.id, req.body).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}

const deleteTodo = (req, res) => {
    modules.deleteTodo(req.params.id).then((data) => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
}

module.exports = { getAllTodos, getTodo, addTodo, updateTodo, deleteTodo };