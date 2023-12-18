// Instructions
const numbers = [5,0,9,1,7,4,2,6,3,8];

// Using the .toString() method convert the array to a string.

// numbers.toString();
// Using the .join()method convert the array to a string. Try passing different values into the join.

// numbers.join(" ");

// Eg .join(“+”), .join(” “), .join(“”)
// Bonus : To do this Bonus look up how to work with nested for loops

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[j] > numbers[j+1]) {
//             let temp = numbers[j];
//             numbers[j] = numbers[j+1];
//             numbers[j+1] = temp;
//         }
//     }
// }
// console.log(numbers);
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]

// for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//         if (numbers[j] < numbers[j+1]) {
//             let temp = numbers[j];
//             numbers[j] = numbers[j+1];
//             numbers[j+1] = temp;
//         }
//     }
// }
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).

for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] > numbers[j+1]) {
            let temp = numbers[j]; // temp = 5
            console.log("temp = " + temp);
            numbers[j] = numbers[j+1]; // numbers[j] = 0
            console.log("numbers[j] = " + numbers[j]);
            numbers[j+1] = temp; // numbers[j+1] = 5
            console.log("numbers[j+1] = " + numbers[j+1]);
        }
    }
}

console.log(numbers);
// Add comments and console.log the result for each step, this will help you understand.
// Requirement: Don’t copy paste solutions from Google