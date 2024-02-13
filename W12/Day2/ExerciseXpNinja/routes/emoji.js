const express = require('express');
const router = express.Router();

const emojis = ["😀", "🎉", "🌟", "🎈", "👋"];

router.get('/', (req, res) => {
    res.json({ message: 'Enter your name and choose an emoji', emojis: emojis });
});

router.post('/greet', (req, res) => {
    const { name, emoji } = req.body;
    if (!name || !emoji) {
        res.status(400).json({ error: 'Name and emoji are required' });
    } else if (!emojis.includes(emoji)) {
        res.status(400).json({ error: 'Invalid emoji' });
    } else {
        res.json({ message: `Hello, ${name} ${emoji}` });
    }
});

module.exports = router;