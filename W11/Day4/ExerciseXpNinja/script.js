let currentQuestion = 0;
let score = 0;
let selectedOption = null;

fetch('http://127.0.0.1:5000/api/questions')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(questions => {
        displayQuestion(questions[currentQuestion]);

        document.getElementById('submit').addEventListener('click', () => {
            checkAnswer(questions[currentQuestion]);
            currentQuestion++;
            if (currentQuestion < questions.length) {
                displayQuestion(questions[currentQuestion]);
            } else {
                alert('Quiz finished! Your score is ' + score);
            }
        });
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

function displayQuestion(question) {
    document.getElementById('question').textContent = question.question;
    const options = document.getElementById('options');
    options.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', selectOption);
        options.appendChild(button);
    });
    selectedOption = null;
}

function selectOption(event) {
    const options = document.getElementById('options').children;
    for (let i = 0; i < options.length; i++) {
        options[i].style.backgroundColor = '';
        options[i].disabled = false;
    }
    selectedOption = event.target;
    selectedOption.style.backgroundColor = 'green';
}

function checkAnswer(question) {
    if (selectedOption && selectedOption.textContent === question.answer) {
        score++;
    }
}