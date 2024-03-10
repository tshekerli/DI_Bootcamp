import { db } from "../config/config.js";

export const getAllTodos = async () => {
    return await db("todo").select("*");
};

export const createTodo = async (title) => {
    return await db("todo").insert({ title, completed: false });
};

export const deleteTodo = async (id) => {
    return await db("todo").where({ id }).del();
}

