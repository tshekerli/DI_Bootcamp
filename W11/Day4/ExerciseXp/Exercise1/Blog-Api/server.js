const express = require('express')
const app = express()

// Middleware to parse JSON bodies
app.use(express.json());

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

// GET /posts: Return a list of all blog posts.
app.get('/posts', function (req, res) {
    res.json(dataArray)   
})

// GET /posts/:id: Return a specific blog post based on its id.
app.get('/posts/:id', function(req, res) {
    let post = dataArray.find(element => element.id == req.params.id);
    res.json(post);
});

// POST /posts: Create a new blog post.
app.post('/posts', function(req, res) {
    const { title, content } = req.body;

    const id = dataArray.length + 1;

    const newPost = {
        id,
        title,
        content
    };

    dataArray.push(newPost);

    res.json(newPost);
});

// PUT /posts/:id: Update an existing blog post.
app.put('/posts/:id', function(req, res) {
    const id = req.params.id;
    console.log('ID:', id);
    
    const index = dataArray.findIndex(post => post.id == id);
    console.log('Index:', index);

    console.log('Request body:', req.body);

    if (index !== -1) {
        dataArray[index].title = req.body.title;
        dataArray[index].content = req.body.content;
        res.json(dataArray[index]);
    } else {
        res.status(404).json({ error: 'Blog post not found' });
    }
});

// DELETE /posts/:id: Delete a blog post.
app.delete('/posts/:id', function(req, res) {
    const id = req.params.id;
    const index = dataArray.findIndex(post => post.id == id);

    if (index !== -1) {
        dataArray.splice(index, 1);
        res.json({ message: 'Blog post deleted' });
    } else {
        res.status(404).json({ error: 'Blog post not found' });
    }
});

app.listen(3000)