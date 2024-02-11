const express = require('express');
const dataService = require('./dataService.js');
const app = express();

app.get('/api/posts', async (req, res) => {
    try {
        const posts = await dataService.fetchPosts();
        console.log('Data successfully retrieved');
        res.json(posts);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Error retrieving data' });
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));