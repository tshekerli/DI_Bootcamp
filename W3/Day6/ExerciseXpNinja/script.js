// // Exercise 1 : Checking The BMI
// // Instructions
// // Hint:
// // - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// // Create two objects, each object should hold a person’s details. Here are the details:
// // FullName
// // Mass
// // Height

// let person1 = {
//     fullName: "John Doe",
//     mass: 80,
//     height: 1.80,
//     bmi: function() {
//         return this.mass / (this.height * this.height);
//     }
// }
// // Each object should also have a key which value is a function (ie. A method), that calculates the Body Mass Index (BMI) of each person

// // Outside of the objects, create a JS function that compares the BMI of both objects.

// let person2 = {
//     fullName: "Jane Doe",
//     mass: 60,
//     height: 1.70,
//     bmi: function() {
//         return this.mass / (this.height * this.height);
//     }
// }

// function compareBMI(person1, person2) {
//     if (person1.bmi() > person2.bmi()) {
//         console.log(person1.fullName + " has the highest BMI.");
//     }
//     else if (person1.bmi() < person2.bmi()) {
//         console.log(person2.fullName + " has the highest BMI.");
//     }
//     else {
//         console.log("Both have the same BMI.");
//     }
// }

// // Display the name of the person who has the largest BMI.

// compareBMI(person1, person2);



// Exercise 2 : Grade Average
// Instructions
// Hint:
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument and will console.log the average.
// Create a function called findAvg(gradesList) that takes an argument called gradesList.

let gradesList = [80, 77, 88, 95, 68];

function findAvg(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    return sum / gradesList.length;
}

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed


if (findAvg(gradesList) > 65) {
    console.log("You passed!");
}
// If the average is below 65 let the user know they failed and must repeat the course.
else {
    console.log("You failed and must repeat the course.");
}
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other