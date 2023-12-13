// // Exercise 1 : Age Difference
// // Instruction
// // Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// // Notes: The dates are given in the format YYYY

// let older = parseInt(prompt("Enter the year of birth of the older person"));
// let younger = parseInt(prompt("Enter the year of birth of the younger person"));

// let halfAgeYear = younger + (younger - older);

// console.log(`The younger person will be half the age of the older person in ${halfAgeYear}`);


// Exercise 2 : Zip Codes
// Instruction
// Harder exercise
// Hint : This exercise has 2 parts. First, do this exercise without Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// let zipCode = prompt("Enter your zip code");

// // Zip codes consists of 5 numbers
// // Must only contain numbers
// // Must not contain any whitespace (spaces)
// // Must not be greater than 5 digits in length
// switch (true) {
//     case zipCode.length !== 5:
//         console.log("error: Zip code must consist of 5 numbers");
//         break;
//     case isNaN(zipCode):
//         console.log("error: Zip code must only contain numbers");
//         break;
//     case zipCode.indexOf(" ") !== -1:
//         console.log("error: Zip code must not contain any whitespace");
//         break;
//     case zipCode.length > 5:
//         console.log("error: Zip code must not be greater than 5 digits in length");
//         break;
//     default:
//         console.log("success");
// }

// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.

let word = prompt("Enter a word");
// Delete all the vowels of the word and console.log the result.
let newWord = word.replace(/[aeiou]/gi, '');
console.log(newWord);
// // Bonus: Replace the vowels with another character and console.log the result
// a = 1
// e = 2
// i = 3
// o = 4
// u = 5

let newWord2 = word.replace(/[aeiou]/gi, function (x) {
    switch (x) {
        case "a":
            return "1";
        case "e":
            return "2";
        case "i":
            return "3";
        case "o":
            return "4";
        case "u":
            return "5";
    }
});

console.log(newWord2);

