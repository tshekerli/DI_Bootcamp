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






