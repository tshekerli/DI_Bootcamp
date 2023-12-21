// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

book1 = {
    title: "Harry Potter",
    author: "JK Rowlling",
    image: "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
    alreadyRead: true
}

book2 = {
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://m.media-amazon.com/images/I/81FPzmB5fgL._AC_UY218_.jpg",
    alreadyRead: false
}

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

let allBooks = [book1, book2];
// Requirements : All the instructions below need to be coded in the js file:


// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.


// If the book is already read. Set the color of the book’s details to red.

let table = document.createElement("table");
let tr = document.createElement("tr");
tr.innerHTML = "<th>Title</th><th>Author</th><th>Image</th><th>Read</th>";
table.appendChild(tr);

for (let i = 0; i < allBooks.length; i++) {
    let book = allBooks[i];
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${book.title}</td><td>${book.author}</td><td><img src="${book.image}" width="100px"></td><td>${book.alreadyRead}</td>`;
    
    table.appendChild(tr);

    if (book.alreadyRead === true) {
        tr.style.color = "red";
        
    }
}
table.style.border = "2px solid black";
table.style.width = "100%";
table.style.textAlign = "center";
table.style.fontSize = "20px";
table.style.fontWeight = "bold";

let myDiv = document.querySelector(".listBooks");
myDiv.appendChild(table);