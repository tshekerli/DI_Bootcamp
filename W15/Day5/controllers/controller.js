import { getAllTodos, createTodo, deleteTodo } from "../models/models.js";

export const getTodos = async (req, res) => {
    try {
        const todos = await getAllTodos();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const addTodo = async (req, res) => {
    const { title } = req.body;
    try {
        const newTodo = await createTodo(title);
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const removeTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTodo = await deleteTodo(id);
        res.status(200).json(deletedTodo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


