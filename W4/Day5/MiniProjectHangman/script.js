// Create A Hangman Game:
// Instructions:
// Create the “Hangman” game. Your game will run in the console.
// You need to guess a hidden word. Each letter you guess will appear in the console. You have 10 chances before you lose the game.

// Check it out here

// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).

const player1Word = prompt("Please enter a word with at least 8 letters").toLowerCase()
let stars = "*".repeat(player1Word.length)
console.log(stars)

function guessTheWord(player1Word){
    let lives = 10
    while(lives > 0){
        const userTwoGuess = prompt("Please enter your guess").toLowerCase()

        let updatedStars = ""
        for(let i = 0; i < player1Word.length; i++){
            if(userTwoGuess.includes(player1Word[i])){
                updatedStars += player1Word[i]
            } else {
                updatedStars += stars[i]
            }
        }

        stars = updatedStars
        console.log(stars)

        if(userTwoGuess === player1Word){
            console.log("You win!")
            return
        } else {
            lives -= 1
        }

        if(lives === 0){
            console.log("YOU LOSE, PLAYER 1 WINS")
            return
        }
    }
}

guessTheWord(player1Word)

// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.