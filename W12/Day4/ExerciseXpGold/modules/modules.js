const db = require('../config/config').db;


// create table

// db.schema.createTable('todos', (table) => {
//     table.increments('id');
//     table.string('title');
//     table.boolean('completed');
// }).then(() => {
//     console.log('table created');
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     db.destroy();
// });

//Add data

// data = [{title: 'Learn Node.js', completed: false}, {title: 'Learn React.js', completed: false}, {title: 'Learn Vue.js', completed: false}];

// db('todos').insert(data).then(() => {
//     console.log('data inserted');
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     db.destroy();
// });

const getAllTodos = () => {
    return db('todos').select();
};

const getTodo = (id) => {
    return db('todos').where({id}).select();
};

const addTodo = (todo) => {
    return db('todos').insert(todo);
};

const updateTodo = (id, todo) => {
    return db('todos').where({id}).update(todo);
};

const deleteTodo = (id) => {
    return db('todos').where({id}).del();
};

module.exports = { getAllTodos, getTodo, addTodo, updateTodo, deleteTodo };