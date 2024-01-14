// Exercise 1 : Menu
// Instructions
// Using the array below:

// let menu = [
//   {
//     type : "starter",
//     name : "Houmous with Pita"
//   },
//   {
//     type : "starter",
//     name : "Vegetable Soup with Houmous peas"
//   },
//   {
//     type : "dessert",
//     name : "Chocolate Cake"
//   }
// ]
// // Using an array method and ternary operator, check if at least one element in the menu array is a dessert.
// const dessert = menu.some((item) => item.type === "dessert")
// console.log(dessert);

// // Using an array method, check if all the elements in the array are starters.

// const starter = menu.every((item) => item.type === "starter")
// console.log(starter);
// // Using an array method, check if there is at least one element in the array that is a main course. If not, add a main course of your choice to the array.

// const mainCourse = menu.some((item) => item.type === "main course")
// console.log(mainCourse);
// // Using this array :

// const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes" ]
// // Using an array method, add a key “vegetarian” (a boolean) to the menu array. The value of the key should be true if the name of the course contains at least one element from the vegetarian array.

// for (let i = 0; i < menu.length; i++) {
//     if (vegetarian.some((item) => menu[i].name.toLocaleLowerCase().includes(item))) {
//       menu[i].vegetarian = true;
//     } else {
//       menu[i].vegetarian = false;
//     }
//   }
//   console.log(menu);

// Exercise 2 : Chop Into Chunks
// Instructions
// Write a JavaScript function that takes 2 parameters: a string and a number.
// The function should chop the string into chunks of your chosen length (the second parameter), and the outcome should be represented in an array.
// Example:



// console.log(string_chop('developers',2)); 
// ["de", "ve", "lo", "pe", "rs"] 

// const string_chop = (str, num) => {
//     let newArray = [];
//     for (let i = 0; i < str.length; i += num) {
//         newArray.push(str.slice(i, i + num))
//     }
//     return newArray
// }
// console.log(string_chop('developers', 2));




// Exercise 3 : You Said String ?
// Instructions
// Write a JavaScript function to find a word within a string.
// console.log(search_word('The quick brown fox', 'fox')); 
// "'fox' was found 1 times." 

// const search_word = (str, word) => {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str.slice(i, i + word.length) === word) {
//             count++
//         }
//     }
//     return `${word} was found ${count} times.`
// }
// console.log(search_word('The quick brown fox', 'fox'));


// Exercise 4 : Reverse Array
// Instructions
// Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!
// Examples:

//    reverseArray([1,2,3,4,5]) // [5,4,3,2,1]
//    reverseArray([1,2]) // [2,1]
//    reverseArray([]) // []
//    reverseArray([1,2,3,4,5,6,7,8,9,10]) // [10,9,8,7,6,5,4,3,2,1]

const reverseArray = (arr) => {
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - i -1];
        arr[arr.length - i - 1] = temp;
    }
    return arr
}

console.log(reverseArray([1,2,3,4,5,6,7,8,9,10]));