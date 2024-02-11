const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

let emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    
];

app.get('/api/emoji', (req, res) => {
    let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    res.json(randomEmoji);
});

app.post('/api/guess', (req, res) => {
    let guess = req.body.guess;
    let emojiName = req.body.emojiName;
    if (guess === emojiName) {
        res.json({ correct: true });
    } else {
        res.json({ correct: false });
    }
});

app.get('/api/emojiCount', (req, res) => {
    res.json({ count: emojis.length });
});




app.get('/api/emoji/:index', (req, res) => {
    let index = req.params.index;
    if (index >= 0 && index < emojis.length) {
        res.json(emojis[index]);
    } else {
        res.status(404).send('Not found');
    }
});

app.listen(5000, () => console.log('Server running on port 5000'));