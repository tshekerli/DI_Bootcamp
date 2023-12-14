//Chrome Debugger-> Adding breakpoints

// let fruit = "Papayas";

// switch (fruit) {
//   case "Oranges":
//     console.log("Oranges are $0.59 a pound.");
//     break;
//   case "Mangoes":
//   case "Papayas":
//     console.log("Mangoes and papayas are $2.79 a pound.");
//     break;
//   default:
//     console.log("Sorry, we are out of " + fruit + ".");
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 4) {
//     throw new Error("ERROR");
//   }
// }

//For Loops !

// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

//Looping Through an Array

// let colors = ["red", "yellow", "black", "pink", "white"];
// console.log(colors[0]);
// console.log(colors.length);
// console.log(colors[1]);
// console.log(colors[2]);
// console.log(colors[3]);

// for (let i = 2; i < colors.length; i++) {
//   console.log(colors[i]);
// }

//Exercise 1

// for (let i = 0; i <= 15; i++) {
//   if (i % 2 === 0) {
//     console.log(i % 2);
//     console.log(i + " is an even number");
//   } else {
//     console.log(i % 2);
//     console.log(i + " is an odd number");
//   }
// }

//For In -> Looping through OBJECTS

// let person = {
//   fname: "John",
//   lname: "Doe",
//   age: 25,
//     kidInfo: {
//       fname: "John JR",
//       lname: "Doe JR",
//       age: 2,
//     },
// };

// for (let key in person) {
//   console.log("The value of the key " + key + " is: " + person[key]);
// }

// console.log(person.lname);
// console.log(person["lname"]);

// for (let key in person.kidInfo) {
//   console.log(person.kidInfo[key]);
// }

//For/Of Looping through an array:

// let colors = ["blue", "yellow", "red"];
// let str = "Hello my name is Daniel";

//through strings:
// for (let element of str) {
//   console.log(element);
// }
//through array:
// for (let element of colors) {
//   console.log(element);
// }

// let myArr = [
//   {
//     fname: "John JR",
//     lname: "Doe JR",
//     age: 1,
//   },
//   {
//     fname: "John J",
//     lname: "Doe JR",
//     age: 2,
//   },
//   {
//     fname: "John ",
//     lname: "Doe JR",
//     age: 3,
//   },
//   {
//     fname: "John",
//     lname: "Doe JR",
//     age: 4,
//   },
// ];

// for (let element of myArr) {
//   for (let key in element) {
//     if (key === "fname") {
//       console.log(element[key]);
//     }
//   }
// }

//While Loops
// let n = 0;
// while (n < 3) {
//   n++;
//   console.log(n);
// }

// let username = "admin";

// while (username !== "admin") {
//   username = prompt("Please enter the correct username");
// }

// console.log("Welcome admin");

// Do While
// let username = "admin";

// do {
//   username = prompt("please enter the correct username");
// } while (username !== "admin");

//Break statement

// for (let i = 0; i < 10; i++) {
//   console.log("before if statement");
//   console.log(i);
//   if (i === 3) {
//     break;
//   }
//   console.log("after if statement");
// };

//Continue
// for (let i = 0; i < 10; i++) {
//   if (i === 3 || i === 7 || i === 8) {
//     //continue skips the current iteration
//     continue;
//   }
//   console.log("The number is " + i); // 0 1 2 4 5 6 7 8 9
// }

//Exercise 2

//1
let names = ["john", "sarah", 23, "Rudolf", 34];

// for (let name of names) {
//   if (typeof name === "string") {
//     if (name[0] !== name[0].toUpperCase()) {
//       name = name[0].toUpperCase() + name.slice(1);
//     }
//     console.log(name);
//   }
// }

//2
for (let name of names) {
  if (typeof name !== "string") {
    break;
  }
  console.log(name);
}
