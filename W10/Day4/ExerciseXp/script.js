// 🌟 Exercise 1 : Giphy API


// Create a program to retrieve the data from the API URL provided above.
// Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
// Make sure to check the status of the Response and to catch any occuring errors.


// let url = ' https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key='
// let apiKey ='hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })

// 🌟 Exercise 2 : Giphy API
// Instructions

//     Read carefully the documention to understand all the possible queries that the URL accept.
//     Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
//     Make sure to check the status of the Response and to catch any occuring errors.
//     Console.log the Javascript Object that you receive.

// let object = {
//     key: apiKey,
//     q: 'sun',
//     limit: 10,
// }

// let url2 = `https://api.giphy.com/v1/gifs/search?api_key=${object.key}&q=${object.q}&limit=${object.limit}`

// fetch(url2)
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//     })

    

// 🌟 Exercise 3 : Async function
// Instructions

// Improve the program below :

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

//     Create an async function, that will await for the above GET request.
//     The program shouldn’t contain any then() method.
//     Make sure to check the status of the Response and to catch any occuring errors.

// const getStarWars = async () => {
//     try {
//         const response = await fetch("https://www.swapi.tech/api/starships/9/")
//         const data = await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log(error)
//     }
// }

// getStarWars()


// 🌟 Exercise 4: Analyze
// Instructions

// Analyse the code provided below - what will be the outcome?

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

// answer: outcome will be "calling" and then "resolved" after 2 seconds


asyncCall();
