// // 🌟 Exercise 1 : List Of People
// // Instructions
// const people = ["Greg", "Mary", "Devon", "James"];


// // Part I - Review About Arrays
// // Write code to remove “Greg” from the people array.

// people.splice(0, 1);

// console.log(people);

// // Write code to replace “James” to “Jason”.

// people.splice(2, 1, "Jason");

// // Write code to add your name to the end of the people array.

// people.push("Tural");

// // Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// console.log(people.indexOf("Mary"));

// // Write code to make a copy of the people array using the slice method.

// const copyPeople = people.slice();
// // The copy should NOT include “Mary” or your name.

// people.splice(0, 1);

// people.pop();

// console.log(people);
// // Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// // Hint: Check out the documentation for the slice method

// // Write code that gives the index of “Foo”. Why does it return -1 ?

// console.log(people.indexOf("Foo"));

// // Because it does not exists inside the array.

// // Create a variable called last which value is the last element of the array.

// const last = people[people.length - 1];
// // Hint: What is the relationship between the index of the last element in the array and the length of the array?

// // Index starts at 0 but length starts at 1.


// // Part II - Loops
// // Using a loop, iterate through the people array and console.log each person.

// for (person of people) {
//     console.log(person);
// }

// // Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .

// for (person of people) {
//     console.log(person);
//     if (person === "Devon") {
//         break;
//     }
// }
// // Hint: take a look at the break statement in the lesson..

// 🌟 Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.

// const colors = ["red", "blue", "green", "yellow", "black"];
// // Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// for (color of colors) {
//     console.log(`My #${colors.indexOf(color) + 1} choice is ${color}`);
// }

// // Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// suffixes = ["st", "nd", "rd", "th", "th"];
// for (color of colors) {
//     console.log(`My ${colors.indexOf(color) + 1}${suffixes[colors.indexOf(color)]} choice is ${color}`);
// }
// Hint : create an array of suffixes to do the Bonus



// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.


// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)


// While the number is smaller than 10 continue asking the user for a new number.

// do {
//     number = parseInt(prompt("Please enter a number"));
// }
// while (number < 10) {
// //     number = prompt("Please enter a number");
// }
// Tip : Which while loop is more relevant for this situation?


// 🌟 Exercise 4 : Building Management
// Instructions:
// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent:  {
//         sarah: [3, 990],
//         dan:  [4, 1000],
//         david: [1, 500],
//     },
// }


// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// console.log(building.numberOfFloors);

// // Console.log how many apartments are on the floors 1 and 3.

// console.log("Floor 1: " + building.numberOfAptByFloor.firstFloor + " apartments" + "\n" + "Floor 3: " + building.numberOfAptByFloor.thirdFloor + " apartments");

// // Console.log the name of the second tenant and the number of rooms he has in his apartment.

// console.log(building.nameOfTenants[1] + " has " + building.numberOfRoomsAndRent.dan[0] + " rooms in his apartment");

// // Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.

// if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
//     building.numberOfRoomsAndRent.dan[1] = 1200;
// }

// console.log(building.numberOfRoomsAndRent.dan[1]);


// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.

// let family = {
//     father: "John",
//     mother: "Jane",
//     son: "Jack",
//     daughter: "Jill",
// };
// // Using a for in loop, console.log the keys of the object.

// for (key in family) {

//     console.log(key);
// }
// // Using a for in loop, console.log the values of the object.

// for (key in family) {
    
//         console.log(family[key]);
//     }

// Exercise 6 : Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// // Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

// let sentence = "";
// for (key in details) {
//     sentence += key + " " + details[key] + " ";
// }

// console.log(sentence);


// xercise 7 : Secret Group
// Instructions
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters

// Console.log the name of their secret society. The output should be “ABJKPS”

let secretName = "";
for (x of names) {
    secretName += x[0];
}

secretName = secretName.split("").sort().join("");

console.log(secretName);