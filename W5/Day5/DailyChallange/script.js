// Recreate the todo list above:

// Create an HTML, CSS and a JS file.

// In the HTML file
// create a form with one input type="text", and a “Submit” button.
// add an empty div below the form
// <div class="listTasks"></div>

// In the js file, you must add the following functionalities:
// Create an empty array : const tasks = [];

// Create a function called addTask(). As soon as the user clicks on the button:
// check that the input is not empty,
// then add it to the array (ie. add the text of the task)
// then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
// Each new task added should have (starting from left to right - check out the image at the top of the page)
// a “X” button. Use font awesome for the “X” button.
// an input type="checkbox". The label of the input is the task added by the user.

// BONUS I (not mandatory):
// Change the variable tasks to an array of task objects.
// Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
// Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
// Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

// BONUS II (not mandatory):
// Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.

let tasks = [];
let taskId = 0;

document.getElementById('taskForm').addEventListener('submit', function(event) {
    event.preventDefault();
    addTask();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    if (taskInput.value !== '') {
        const task = {
            task_id: taskId++,
            text: taskInput.value,
            done: false
        };
        tasks.push(task);
        displayTask(task);
        taskInput.value = '';
    }
}

function displayTask(task) {
    const listTasks = document.querySelector('.listTasks');
    const taskElement = document.createElement('div');
    taskElement.innerHTML = `
        <button onclick="deleteTask(${task.task_id})">X</button>
        <input type="checkbox" id="task-${task.task_id}" onchange="doneTask(${task.task_id})">
        <label for="task-${task.task_id}">${task.text}</label>
    `;
    listTasks.appendChild(taskElement);
}

function doneTask(id) {
    const task = tasks.find(task => task.task_id === id);
    task.done = !task.done;
    const label = document.querySelector(`label[for="task-${id}"]`);
    label.classList.toggle('completed');
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.task_id !== id);
    const listTasks = document.querySelector('.listTasks');
    listTasks.innerHTML = '';
    tasks.forEach(task => displayTask(task));
}

document.getElementById('clearButton').addEventListener('click', clearTasks);

function clearTasks() {
    tasks = [];
    const listTasks = document.querySelector('.listTasks');
    listTasks.innerHTML = '';
}