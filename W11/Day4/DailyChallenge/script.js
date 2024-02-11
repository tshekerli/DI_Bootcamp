let score = 0;
let currentEmojiName = '';
let questionCount = 0;
let maxQuestions;

fetch('http://127.0.0.1:5000/api/emojiCount')
    .then(response => response.json())
    .then(data => {
        maxQuestions = data.count;
        getNewQuestion();
    });

    function getNewQuestion() {
        if (questionCount >= maxQuestions) {
            document.getElementById('feedback').textContent = 'Game over! Your final score is ' + score;
            return;
        }
        fetch(`http://127.0.0.1:5000/api/emoji/${questionCount}`)
            .then(response => response.json())
            .then(emoji => {
                document.getElementById('emoji').textContent = emoji.emoji;
                currentEmojiName = emoji.name;
                questionCount++;
            });
    }
    

document.getElementById('guessForm').addEventListener('submit', event => {
    event.preventDefault();
    let guess = document.getElementById('guess').value;
    fetch('http://127.0.0.1:5000/api/guess', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guess: guess.toLowerCase(), emojiName: currentEmojiName.toLowerCase() }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.correct) {
                score++;
                document.getElementById('feedback').textContent = 'Correct!';
            } else {
                document.getElementById('feedback').textContent = 'Incorrect, try again.';
            }
            document.getElementById('score').textContent = 'Score: ' + score;
            getNewQuestion();
        });
});