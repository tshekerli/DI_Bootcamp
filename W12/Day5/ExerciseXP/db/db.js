//DB initialization


const fs = require('fs');

let tasks = [
    { id: 1, taskName: 'Grocery shopping', taskDetails: 'Buy milk, eggs, and bread', completed: false },
    { id: 2, taskName: 'Laundry', taskDetails: 'Wash and iron clothes', completed: true },
    { id: 3, taskName: 'Homework', taskDetails: 'Complete math assignment', completed: false },
    { id: 4, taskName: 'Gym', taskDetails: 'Do a 30-minute cardio workout', completed: true },
    { id: 5, taskName: 'Cook dinner', taskDetails: 'Prepare pasta for dinner', completed: false }
];

let jsonData = JSON.stringify(tasks)

fs.writeFile('db.json', jsonData, (error) =>{
if (error) throw error;
console.log('Data written to file');
})