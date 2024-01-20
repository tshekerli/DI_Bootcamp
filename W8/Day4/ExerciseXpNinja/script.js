// Exercise 1 : Dog age to Human years
// Instructions

// Using the following data

const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];




    // Use a loop to find the sum of the dogs’ ages in human years.
    // Hint: 1 dog year equals 7 human years
    // Using the reduce() method, find the sum of the dogs’ ages in human years.

const sum = data.reduce((acc, cur) => {
    if (cur.type === 'dog') {
        return acc + cur.age * 7;
    }
    return acc;
}, 0);
console.log(sum);


// Exercise 2 : Email
// Instructions

//     Clean up this email to have no whitespaces. Do it in a single line (return a new string).
let userEmail3 = ' cannotfillemailformcorrectly@gmail.com '
userEmail3 = userEmail3.trim();
console.log(userEmail3);

// Exercise 3 : Employees #3
// Instructions

// Using this array

const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

    // Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
    // Example: { 'Bradley Bouley': 'Full Stack Resident' }
    // Hint: Step one, create an empty object.
newUsers = []
for (let i = 0; i < users.length; i++) {
    const user = users[i];
    const fullName = `${user.firstName} ${user.lastName}`;
    const role = user.role;
    newUsers.push({[fullName]: role});


}
console.log(newUsers);

// Exercise 4 : Array to Object
// Instructions

// Using this array 
const letters = ['x', 'y', 'z', 'z'];

    // Use a for loop to get this output { x: 1, y: 1, z: 2 };
    // Use the reduce() method to get this output { x: 1, y: 1, z: 2 };

const result = letters.reduce((acc, cur) => {
    if (acc[cur]) {
        acc[cur] += 1;
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {});

console.log(result);