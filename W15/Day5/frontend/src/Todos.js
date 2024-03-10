import React, { useState, useEffect } from "react";
import axios from "axios";
import "./todos.css";

const Todos = () => {
    const [todos, setTodos] = useState([]);

    const deleteTodo = async (title) => {
        try {
            await axios.delete(`http://localhost:3000/todos`, { data: { title } });
            
            fetchTodos();
        } catch (error) {
            console.error(error);
        }
    };

    const fetchTodos = async () => {
        try {
            const response = await axios.get("http://localhost:3000/todos");
            setTodos(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            {todos.length === 0 ? (
                <p>You have no todos left, yay!</p>
            ) : (
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id} onClick={() => deleteTodo(todo.title)}>
                            {todo.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Todos;