const { db } = require('../config/config');

// Create a table

// db.schema.createTable('posts', function(table) {
//     table.increments('id');
//     table.string('title');
//     table.text('content');
// })
// .then(() => console.log("Table created"))
// .catch((err) => console.log(err))
// .finally(() => db.destroy());

// Insert data into the table

// data = [{id: 1, title: 'First Post', content: 'This is the first post'}, {id: 2, title: 'Second Post', content: 'This is the second post'}]

// db('posts').insert(data)
// .then(() => console.log("Data inserted"))
// .catch((err) => console.log(err))  
// .finally(() => db.destroy());

//get all posts

// db.schema.createTable('posts', function(table) {
//     table.increments('id').primary();
//     table.string('title');
//     table.text('content');
// })
// .then(() => console.log("Table created"))
// .catch((err) => console.log(err))
// .finally(() => db.destroy());

const getAllPosts = () => {
    return db('posts').select('*');
}

//get post by id

const getPostById = (id) => {
    return db('posts').where({id: id}).select('*');
}

const createPost = (post) => {
    return db('posts').insert(post);
}

const updatePost = (id, post) => {
    return db('posts').where({id: id}).update(post);
}

const deletePost = (id) => {
    return db('posts').where({id: id}).del();
}

module.exports = { getAllPosts, getPostById, createPost, updatePost, deletePost };