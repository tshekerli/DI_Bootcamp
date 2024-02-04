// Exercise 1 : Giphy API #2
// Instructions

//     Use the Giphy API Documentation for this exercise. Use the API KEY provided in the Exercises XP.
//     Create a program to fetch a gif. Make sure to check the status of the Response and to catch any occuring errors.
//     Once the server sends back data, append one random GIF to the page.
//     Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.


let apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
let question = 'duck'
let url = 'api.giphy.com/v1/gifs/search'

let limit = 10
let object = {
    key: apiKey,
    q: question,
    limit: limit,
}

let array = []

let url2 = `https://${url}?api_key=${object.key}&q=${object.q}&limit=${object.limit}`
fetch(url2)
    .then(response => response.json())
    .then(data => {
       data.data.forEach(element => {
           array.push(element.images.fixed_height.url); 
       });
       let random = Math.floor(Math.random() * array.length);
       let img = document.createElement('img');
       img.src = array[random];
       document.body.appendChild(img);
    })
    .catch(error => console.log(error));




// Exercise 2 : Analyze #2
// Instructions

// Analyse the code provided below - what will be the outcome?
// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let sequentialStart = async function () {
//     console.log('==SEQUENTIAL START==');
//     const slow = await resolveAfter2Seconds();
//     console.log(slow);
//     const fast = await resolveAfter1Second();
//     console.log(fast);
// }

// sequentialStart()


// Answer:
// ==SEQUENTIAL START==
// starting slow promise
// (wait for 2 seconds)
// slow promise is done
// slow
// starting fast promise
// (wait for 1 second)
// fast promise is done
// fast



// Exercise 3 : Analyze #3
// Instructions

// Analyse the code provided below - what will be the outcome?

// let resolveAfter2Seconds = function () {
//     console.log("starting slow promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("slow");
//             console.log("slow promise is done");
//         }, 2000);
//     });
// };

// let resolveAfter1Second = function () {
//     console.log("starting fast promise");
//     return new Promise(resolve => {
//         setTimeout(function () {
//             resolve("fast");
//             console.log("fast promise is done");
//         }, 1000);
//     });
// };

// let concurrentStart = async function () {
//     console.log('==CONCURRENT START with await==');
//     const slow = resolveAfter2Seconds();
//     const fast = resolveAfter1Second();
//     console.log(await slow);
//     console.log(await fast);
// }

// setTimeout(concurrentStart, 4000)
// Answer:
// (wait for 4 seconds)
// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// (wait for 1 second)
// fast promise is done
// fast
// (wait for 1 more second)
// slow promise is done
// slow


// Exercise 4 : Modify fetch with Async/Await
// Instructions

// Using this code:

// const urls = [
//         "https://jsonplaceholder.typicode.com/users",
//         "https://jsonplaceholder.typicode.com/posts",
//         "https://jsonplaceholder.typicode.com/albums"
//       ];

// const getData = async function() {
//   const [ users, posts, albums ] = await Promise.all(urls.map(url =>
//       fetch(url).then(resp => resp.json())
//   ));
//   console.log('users', users);
//   console.log('posta', posts);
//   console.log('albums', albums);
// }

// getData()

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(async url => {
            const resp = await fetch(url);
            return resp.json();
        }));
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch (error) {
        console.log('ooooooops', error);
    }
}

getData()
