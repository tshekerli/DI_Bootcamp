// // 🌟 Exercise 1 : Locat
// // Instructions

// //     Analyze the code below. What will be the output?ion

// const person = {
//     name: 'John Doe',
//     age: 25,
//     location: {
//         country: 'Canada',
//         city: 'Vancouver',
//         coordinates: [49.2827, -123.1207]
//     }
// }

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// //Answer: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)
// //Output: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


// // 🌟 Exercise 2: Display Student Info
// // Instructions

// // function displayStudentInfo(objUser){
// //     //destructuring
// // }

// displayStudentInfo({first: 'Elie', last:'Schoppik'});

//     // Using the code above, destructure the parameter inside the function and return a string as the example seen below:
//     // //output : 'Your full name is Elie Schoppik'

// function displayStudentInfo(objUser){
//     const {first, last} = objUser;
//     return `Your full name is ${first} ${last}`;
// }

// console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));


// 🌟 Exercise 3: User & id
// Instructions

// Using this object 
const users = { user1: 18273, user2: 92833, user3: 90315 }

//     Using methods taught in class, turn the users object into an array:
//     Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
//     FYI : The number is their ID number.

const usersArray = Object.entries(users);
console.log(usersArray);

//     Modify the outcome of part 1, by multipling the user’s ID by 2.
//     Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

const usersArray2 = usersArray.map(user => [user[0], user[1] * 2]);
console.log(usersArray2);

