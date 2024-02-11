// 🌟 Exercise 1: Building a RESTful API
// Instructions

// You’re tasked with building a RESTful API for a blog platform.
// Users should be able to create, read, update, and delete blog posts using different endpoints.

//     Create a directory named blog-api.

//     Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

//     Install the express package by running npm install express in the terminal.

//     Create a file named server.js.

//     In server.js, require the express package and set up an Express app.


const express = require('express')
const app = express()





//     Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

let dataArray = [
    {
      title: "Title 1",
      id: 1,
      content: "Content 1"
    },
    {
      title: "Title 2",
      id: 2,
      content: "Content 2"
    },
    {
      title: "Title 3",
      id: 3,
      content: "Content 3"
    }
  ];

//     Implement the following routes using Express:
//     GET /posts: Return a list of all blog posts.
app.get('/posts:', function (req, res) {
    res.json(dataArray)   
  })


//     GET /posts/:id: Return a specific blog post based on its id.

app.get('/posts/:id', function(req, res) {
    let post = dataArray.find(element => element.id == req.params.id);
    res.json(post);
});
//     POST /posts: Create a new blog post.
//     PUT /posts/:id: Update an existing blog post.
//     DELETE /posts/:id: Delete a blog post.

//     Implement error handling for invalid routes and server errors.
app.listen(3000) 
//     Start the Express app and listen on a specified port (e.g., 3000).
