const express = require('express');
const router = express.Router();

let blogPosts = [
    {
        id: 1,
        title: "Title 1",
        content: "Content 1",
        timestamp: new Date('2012-06-14T07:00:00Z')
    },
    {
        id: 2,
        title: "Title 2",
        content: "Content 2",
        timestamp: new Date('2015-11-25T12:00:00Z')
    },
    {
        id: 3,
        title: "Title 3",
        content: "Content 3",
        timestamp: new Date('2020-01-20T18:00:00Z')
    }
];


router.get('/posts', (req, res) => {
    res.json(blogPosts);
});

router.get('/posts/:id', (req, res) => {
    const id = req.params.id;
    const post = blogPosts.find(post => post.id === Number(id));
    if (!post) {
        return res.status(404).json({ message: 'Post not found' });
    }
    res.json(post);
});

router.post('/posts', (req, res) => {
    const newPost = req.body;
    blogPosts.push(newPost);
    res.status(201).json(newPost);
});

router.put('/posts/:id', (req, res) => {
    const id = req.params.id;
    const index = blogPosts.findIndex(post => post.id === Number(id));
    if (index === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }
    blogPosts[index] = req.body;
    res.json(blogPosts[index]);
});

router.delete('/posts/:id', (req, res) => {
    const id = req.params.id;
    const index = blogPosts.findIndex(post => post.id === Number(id));
    if (index === -1) {
        return res.status(404).json({ message: 'Post not found' });
    }
    const deletedPost = blogPosts.splice(index, 1);
    res.json(deletedPost);
});

module.exports = router;