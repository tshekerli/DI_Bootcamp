
// In the JS file, create a function called playTheGame() that takes no parameter.
// In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).

// If the answer is false, alert “No problem, Goodbye”.

// If his answer is true, follow these steps:
// Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :

// If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
// If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
// Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.


// Second Part
// Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber

// The point of this function is to check if the userNumber is the same as the computerNumber:
// If userNumber is equal to computerNumber, alert “WINNER” and stop the game.

// If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).

// If the user guessed more than 3 times, alert “out of chances” and exit the function.


// Bonus
// In the First Part, instead of stopping the process if the user didn’t enter a valid number. Continue asking for a number until the user enters a valid number.


function compareNumbers(userNumber, computerNumber){
    let chances = 2;
    while (chances > 0) {
        if (userNumber == computerNumber){
            alert("WINNER");
            return;
        } else if (userNumber > computerNumber){
            alert("Your number is bigger than the computer's number, guess again!");
        } else {
            alert("Your number is smaller than the computer's number, guess again!");
        }
        userNumber = prompt("Please enter a number between 0 and 10");
        chances--;
    }
    alert("Your guess is wrong. Out of chances");
}

function playTheGame() {
    let userNumber, computerNumber;
    let validNumber = false;
    
    while (!validNumber) {
        userNumber = prompt("Please enter a number between 0 and 10");
        
        if (isNaN(userNumber)) {
            alert("Sorry Not a number, Try again");
        } else if (userNumber < 0 || userNumber > 10) {
            alert("Sorry it’s not a good number, Try again");
        } else {
            validNumber = true;
        }
    }
    
    computerNumber = Math.floor(Math.random() * 11);
    console.log(computerNumber);
    compareNumbers(userNumber, computerNumber);
}
