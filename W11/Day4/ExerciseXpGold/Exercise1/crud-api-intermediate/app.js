const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/api/posts', async (req, res) => {
    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data' });
    }
});

app.get('/api/posts/:id', async (req, res) => {
    try {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving data' });
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error creating data' });
    }
});

app.put('/api/posts/:id', async (req, res) => {
    try {
        const { data } = await axios.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, req.body);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Error updating data' });
    }
});

app.delete('/api/posts/:id', async (req, res) => {
    try {
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
        res.json({ message: 'Post deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting data' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));